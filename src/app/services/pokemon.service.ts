import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PokemonRegion } from '../model/pokemon-region';
import { PokemonSpecies } from '../model/pokemon-species';
import { Pokemon } from '../model/pokemon';
import { Berry } from '../model/berry';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private pokemons: PokemonRegion[] = [];

  constructor(private _http: HttpClient) { }

  retrievePokemons(region: string): Observable<PokemonRegion[]> {
    const url = "https://pokeapi.co/api/v2/pokedex/" + region;
    return this._http.get<any>(url).pipe(
      map((data: any) => {
        return data.pokemon_entries.map((entry: any) => {
          const pokemonName = entry.pokemon_species.name.charAt(0).toUpperCase() + entry.pokemon_species.name.slice(1);
          const urlImgNumberArr = entry.pokemon_species.url.split("/");
          const urlImgNumber = urlImgNumberArr[urlImgNumberArr.length - 2];
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${urlImgNumber}.png`;
          return new PokemonRegion(pokemonName, imageUrl);
        });
      }),
      tap((pokemons: PokemonRegion[]) => {
        this.pokemons = pokemons;
      })
    );
  }

  retrieveBerries(): Observable<any>{
    const url = "https://pokeapi.co/api/v2/berry?offset=0&limit=64";

    return this._http.get(url).pipe(
      map((data: any) => {
        return data.results.map((entry: any) => {
          return new Berry(entry.name);
        })
      })
    )
  }
  
  getPokemons(): PokemonRegion[] {
    return this.pokemons;
  }

  fetchPokemons(region: string) {
    this.retrievePokemons(region).subscribe((pokemons: PokemonRegion[]) => {
      this.pokemons = pokemons;
    });
  }

  getPokemon(pokemonName: string|null): Observable<Pokemon> {
    const url = "https://pokeapi.co/api/v2/pokemon/"+pokemonName?.toLocaleLowerCase();
    
    return this._http.get(url).pipe(
      map((value:any) => new Pokemon(value))
    );
  }

  getPokemonSpecies(url: string){
    return this._http.get(url).pipe(
      map((value:any) => new PokemonSpecies(value))
    );
  }

  getPokemonByUrl(url: string){
    return this._http.get(url).pipe(
      map((value:any) => new Pokemon(value))
    );
  }

  getSpanishAbilities(url: string){
    return this._http.get(url).subscribe({
      next: (value: any) => {
        return value;
      }
    })
  }
  
}
