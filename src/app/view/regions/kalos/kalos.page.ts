import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-kalos',
  templateUrl: './kalos.page.html',
  styleUrls: ['./kalos.page.scss'],
})
export class KalosPage {

  public _pokemons: any;

  constructor(private _pokemonService: PokemonService) {
    this.retrievePokemons();
    
  }

  retrievePokemons() {
    this._pokemonService.retrievePokemons('kalos-central').subscribe(pokemons => {
      this._pokemons = pokemons;
    });
  }

}
