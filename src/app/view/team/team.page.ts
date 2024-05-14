import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, ToastController } from '@ionic/angular';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FileSystemService } from 'src/app/services/file-system.service';
import { BarcodeService } from 'src/app/services/barcode.service';


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
    public _toastController:ToastController,
    private _fileSystem: FileSystemService,
    private _scanner: BarcodeService
  ) {}

  async ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });

    this._fileSystem.readFile();
  }

  async scan(): Promise<void> {
    this._scanner.scan();
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

  async saveInfo(){
    this._fileSystem.saveInfo();
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
