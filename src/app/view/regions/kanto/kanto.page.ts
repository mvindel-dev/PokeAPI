import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.page.html',
  styleUrls: ['./kanto.page.scss'],
})
export class KantoPage {

  public _pokemons: any;

  constructor(private _pokemonService: PokemonService) {
    this.retrievePokemons();
  }

  retrievePokemons() {
    this._pokemonService.retrievePokemons('kanto').subscribe(pokemons => {
      this._pokemons = pokemons;
    });
  }

}
