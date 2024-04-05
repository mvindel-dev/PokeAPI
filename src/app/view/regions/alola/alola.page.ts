import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-alola',
  templateUrl: './alola.page.html',
  styleUrls: ['./alola.page.scss'],
})
export class AlolaPage{

  public _pokemons: any;

  constructor(private _pokemonService: PokemonService) {
    this.retrievePokemons();
  }

  retrievePokemons() {
    this._pokemonService.retrievePokemons('original-alola').subscribe(pokemons => {
      this._pokemons = pokemons;
    });
  }

}
