import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-teselia',
  templateUrl: './teselia.page.html',
  styleUrls: ['./teselia.page.scss'],
})
export class TeseliaPage {

  public _pokemons: any;

  constructor(private _pokemonService: PokemonService) {
    this.retrievePokemons();
    
  }

  retrievePokemons() {
    this._pokemonService.retrievePokemons('original-unova').subscribe(pokemons => {
      this._pokemons = pokemons;
    });
  }

}
