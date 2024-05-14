import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.page.html',
  styleUrls: ['./region-page.page.scss'],
})
export class RegionPagePage {

  public region: string = "";
  public _pokemons: any;
  private regions = ['original-unova', 'original-sinnoh', 'kanto', 'original-johto', 'hoenn', 'kalos-central', 'original-alola'];


  constructor(private _pokemonService: PokemonService, private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params.subscribe({
      next: (params: Params) => {
        if(this.regions.includes(params['name'])){
          this.region = params['name'];
          this.retrievePokemons(this.region);
        }
      },
      error: (msg: string) => {
        console.log("Error: " + msg);
      }
    });
    
    
  }

  retrievePokemons(region: string) {
    this._pokemonService.retrievePokemons(region).subscribe(pokemons => {
      this._pokemons = pokemons;
    });
  }

}
