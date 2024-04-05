export class PokemonRegion {
    name: string;
    imageUrl: string;

    pokemon_species:{name:string, url:string} = {name:'', url:''};
  
    constructor(name: string, imageUrl: string) {
      this.name = name;
      this.imageUrl = imageUrl;
    }
  }
  