import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonSpecies } from 'src/app/model/pokemon-species';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage {
  public clicksPokemon;
  public clicksQR;
  public pokemonName: string | null;
  public pokemon: Pokemon | null | undefined;
  public pokemonSpecies: PokemonSpecies | null | undefined;

  constructor(private _route: ActivatedRoute, private _pokemonService: PokemonService) {
    this.pokemonName = this._route.snapshot.paramMap.get('name');

    if (this.pokemonName) {
      this._pokemonService.getPokemon(this.pokemonName).subscribe((pokemon: Pokemon) => {
        this.pokemon = pokemon;

        if(this.pokemon){
          this._pokemonService.getPokemonSpecies(this.pokemon.species.url).subscribe((pokemonSpecies:PokemonSpecies) => {
            this.pokemonSpecies=pokemonSpecies;
          })
        }
      });
    }

    this.clicksPokemon = 1;
    this.clicksQR = 0;
  }

  rotate(target: string) {
    const [type, namePokemon] = target.split('-');
    const imgId = `img-${namePokemon}`;
    if (type === 'pokemon') {
      const img = document.getElementById(imgId) as HTMLImageElement;
      if (this.pokemon?.sprites.back_default) {
        img.src = this.clicksPokemon % 2 !== 0 ? this.pokemon?.sprites.back_default! : this.pokemon?.sprites.front_default!;
      }
      this.clicksPokemon++;
    } else if (type === 'qr') {
      const imgQR = document.getElementById(`imgQR-${namePokemon}`) as HTMLImageElement;
      const imgPokemon = document.getElementById(imgId) as HTMLImageElement;
    
      const tempSrc = imgPokemon.src;
      imgPokemon.src = imgQR.src;
      imgQR.src = tempSrc;
    
      this.clicksQR++;
    }
  }
  
  toggleOtherImage(namePokemon: string|undefined) {
    this.rotate('qr-' + namePokemon);
  }
  
  
}
