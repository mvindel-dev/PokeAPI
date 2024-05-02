import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, ToastController } from '@ionic/angular';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';


@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];
  pokemons: Pokemon[] = [];
  count=0;

  constructor(
    private alertController: AlertController,
    private _pokemonService:PokemonService,
    public _toastController:ToastController
  ) {}

  async ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });

    const contents = await Filesystem.readFile({
      path: 'pokemons.txt',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });

    if(contents){
      let pokemonsNames = contents.data.toString().split('//');
      this.getPokemonsByName(pokemonsNames);
    }
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }

    const { available } = await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
    
    if(!available){
      await BarcodeScanner.installGoogleBarcodeScannerModule();
      const { barcodes } = await BarcodeScanner.scan();
      this.barcodes.push(...barcodes);
    }

    const { barcodes } = await BarcodeScanner.scan();
    if (barcodes.some(code => this.barcodes.some(existingCode => existingCode.rawValue === code.rawValue))) {
      this.showToast('No agreguis dos pokemons iguals! Recorda que un bon equip porta pokemons de diferents tipus')
    }else{
      this.barcodes.push(...barcodes);
      this.getPokemons();
    }
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  getPokemons(){
    for(let i=this.pokemons.length; i<this.barcodes.length;i++){
      this._pokemonService.getPokemonByUrl(this.barcodes[i].rawValue).subscribe((pokemon: Pokemon) => {
        this.pokemons.push(pokemon);
        this.count++;
      });
    }    
  }

  getPokemonsByName(pokemonsNames: string[]){
    for(let i=0; i<pokemonsNames.length-1; i++){
      this._pokemonService.getPokemon(pokemonsNames[i]).subscribe((pokemon: Pokemon) => {
        this.pokemons.push(pokemon);
        this.count++;
      })
    }
  }

  async showToast(text: string){
    const toast = await this._toastController.create({
      message: text,
      color: 'danger',
      duration: 5000
    });
    toast.present();
  }



  async saveInfo(){
    let names = "";
    this.pokemons.forEach(pokemon => names += pokemon.name + "//");

      await Filesystem.writeFile({
        path: 'pokemons.txt',
        data: names,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });    
  }


  delete(pokemonName: string){
    for(let i=0; i<this.pokemons.length; i++){
      if(this.pokemons[i].name === pokemonName ){
        this.pokemons.splice(i,1);
        this.count--;
      }
    }
  }
}
