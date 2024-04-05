import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-johto',
  templateUrl: './johto.page.html',
  styleUrls: ['./johto.page.scss'],
})
export class JohtoPage{

  public _pokemons: any;

  constructor(private _pokemonService: PokemonService) {
    this.retrievePokemons();
    
  }

  retrievePokemons() {
    this._pokemonService.retrievePokemons('original-johto').subscribe(pokemons => {
      this._pokemons = pokemons;
    });
  }

}
