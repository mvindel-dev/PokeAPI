import { Injectable } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class FileSystemService {
    pokemons: Pokemon[] = [];
    count=0;

    constructor(
      private _pokemonService:PokemonService
    ) { 
    
  }

  async readFile(){
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

  getPokemonsByName(pokemonsNames: string[]){
    for(let i=0; i<pokemonsNames.length-1; i++){
      this._pokemonService.getPokemon(pokemonsNames[i]).subscribe((pokemon: Pokemon) => {
        this.pokemons.push(pokemon);
        this.count++;
      })
    }
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
}
