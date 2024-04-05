import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-sinnoh',
  templateUrl: './sinnoh.page.html',
  styleUrls: ['./sinnoh.page.scss'],
})
export class SinnohPage {

  public _pokemons: any;

  constructor(private _pokemonService: PokemonService) {
    this.retrievePokemons();
  }

  retrievePokemons() {
    this._pokemonService.retrievePokemons('original-sinnoh').subscribe(pokemons => {
      this._pokemons = pokemons;
    });
  }

}
