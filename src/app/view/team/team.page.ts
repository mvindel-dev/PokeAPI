import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];
  pokemons: Pokemon[] = [];

  constructor(private alertController: AlertController, private _pokemonService:PokemonService) { }

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
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
    this.barcodes.push(...barcodes);
    this.getPokemons();
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
      });
    }
  }
}
