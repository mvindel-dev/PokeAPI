export class PokemonSpecies {
    private _name: string;
    private _eggGroups: {name:string, url:string};
    private _evolutionChain: string;
    private _genera: [{genus: string, language:{name:string, url:string}}];
    private _generation: {name:string, url:string};
    private _is_legendary: boolean;
    private _is_mythical:boolean;  
    private _id:number;  
    private _flavor_text_entries: [{flavor_text:string, language:{name:string, url:string}, version:{name:string, url:string}}];
    
    constructor(data: any){
       this._name=data.name;
       this._eggGroups=data.egg_groups;
       this._evolutionChain=data.evolution_chain;
       this._genera=data.genera;
       this._generation=data.generation;
       this._is_legendary=data.is_legendary;
       this._is_mythical=data.is_mythical;
       this._id=data.id;
       this._flavor_text_entries=data.flavor_text_entries;
    }

    get name(): string { return this._name; }
    get eggGroups(): {name:string, url:string} { return this._eggGroups; }
    get evolutionChain(): string { return this._evolutionChain; }
    get genera(): [{genus: string, language:{name:string, url:string}}] { return this._genera; }
    get generation(): {name:string, url:string} { return this._generation; }
    get is_legendary(): boolean { return this._is_legendary; }
    get is_mythical(): boolean { return this._is_mythical; }
    get id(): number { return this._id; }
    get flavor_text_entries(): [{flavor_text:string, language:{name:string, url:string}, version:{name:string, url:string}}] { return this._flavor_text_entries; }

}
