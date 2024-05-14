import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.page.html',
  styleUrls: ['./berries.page.scss'],
})
export class BerriesPage{

  public _berries:any;

  constructor(private _pokemonService: PokemonService) { 
    this.getBerries();
  }

  getBerries(){
    this._pokemonService.retrieveBerries().subscribe((berries: any) => {
      this._berries = berries;
    });
  }

}
