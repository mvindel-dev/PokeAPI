export class Pokemon {

    private _abilities:{ability:{name:string, url:string}, is_hidden:boolean, slot:number};
    private _cries: {latest:string, legacy:string};
    private _forms:{name:string, url:string};
    private _game_indices:{game_index:number, version:{name:string, url:string}};
    private _height:number;
    private _moves:{move:{name:string,url:string}, version_group_details:{level_learned_at:number, move_learn_method:{name:string, url:string}, version_group:{name:string, url:string}}};
    private _name:string;
    private _species:{name:string, url:string};
    private _sprites:{back_default:string|null, back_female:string|null, back_shiny:string|null, back_shiny_female:string|null, front_default:string|null, front_female:string|null, front_shiny:string|null, front_shiny_female:string|null};
    private _stats:[{base_stat: number, effort:number, stat:{name:string, url:string}}];
    private _types:[{slot:number, type:{name:string, url:string}}];
    private _weight:number;

    constructor(data:any){
        this._abilities=data.abilities;
        this._cries=data.cries;
        this._forms=data.forms;
        this._game_indices=data.game_indices;
        this._height=data.height/10;
        this._moves=data.moves;
        this._name=data.name;
        this._species=data.species;
        this._sprites=data.sprites;
        this._stats=data.stats;
        this._types=data.types;
        this._weight=data.weight/10;
    }

    get abilities(): { ability: { name: string, url: string }, is_hidden: boolean, slot: number } { return this._abilities; }
    get cries(): { latest: string, legacy: string } { return this._cries; }
    get forms(): { name: string, url: string } { return this._forms; }
    get game_indices(): { game_index: number, version: { name: string, url: string } } { return this._game_indices; }
    get height(): number { return this._height; }
    get moves(): { move: { name: string, url: string }, version_group_details: { level_learned_at: number, move_learn_method: { name: string, url: string }, version_group: { name: string, url: string } } } { return this._moves; }
    get name(): string { return this._name; }
    get species(): { name: string, url: string } { return this._species; }
    get sprites(): { back_default: string | null, back_female: string | null, back_shiny: string | null, back_shiny_female: string | null, front_default: string | null, front_female: string | null, front_shiny: string | null, front_shiny_female: string | null } { return this._sprites; }
    get stats(): [{ base_stat: number, effort: number, stat: { name: string, url: string } }] { return this._stats; }
    get types(): [{ slot: number, type: { name: string, url: string } }] { return this._types; }
    get weight(): number { return this._weight; }
}
