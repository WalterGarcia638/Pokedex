import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { 
   
  }

  getAllPokemon(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118')
  }

  getPokemon(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/2/');
  }

  getPokemonFoto(url: string){
    return this.http.get(url)
  }

  getPokemonById(id:number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

}
