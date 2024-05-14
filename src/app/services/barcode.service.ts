import { Injectable } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, ToastController } from '@ionic/angular';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  barcodes: Barcode[] = [];
  pokemons: Pokemon[] = [];
  count=0;


  constructor(
    private _pokemonService:PokemonService,
    private alertController: AlertController,
    public _toastController:ToastController
  ) { }

  async scan(){
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

  async showToast(text: string){
    const toast = await this._toastController.create({
      message: text,
      color: 'danger',
      duration: 5000
    });
    toast.present();
  }

  getPokemons(){
    for(let i=this.pokemons.length; i<this.barcodes.length;i++){
      this._pokemonService.getPokemonByUrl(this.barcodes[i].rawValue).subscribe((pokemon: Pokemon) => {
        this.pokemons.push(pokemon);
        this.count++;
      });
    }    
  }

  getPokemonsServiced(){
    return this.pokemons;
  }

  
}
