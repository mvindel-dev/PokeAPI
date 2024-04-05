import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-hoenn',
  templateUrl: './hoenn.page.html',
  styleUrls: ['./hoenn.page.scss'],
})
export class HoennPage{

  public _pokemons: any;

  constructor(private _pokemonService: PokemonService) {
    this.retrievePokemons();
    
  }

  retrievePokemons() {
    this._pokemonService.retrievePokemons('hoenn').subscribe(pokemons => {
      this._pokemons = pokemons;
    });
  }

}
