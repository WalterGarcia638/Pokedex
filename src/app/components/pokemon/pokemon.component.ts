import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

artWork: any[] = []
pokemons: any[] = []
pokemonFoto: any[] = [];
pokemonType: any[] = [];
i: number = 0;

prueba: any[] = [];

numero: number = 0;




  constructor( private pokemonService: PokemonService) { 
    
  }

  ngOnInit(): void {
    /*this.pokemonService.getPokemon().subscribe((data:any) =>{
      console.log(data)
    })*/
  this.getPokemonDetailByNumber();
  //this.getAllPokemon();

  this.getPokemonById();
   
  }

  getPokemonDetailByNumber(){
    this.pokemonService.getPokemon().subscribe((data:any)=>{
      //console.log(data.sprites.other["official-artwork"].front_default)
      this.artWork = data.sprites.other["official-artwork"].front_default
    })
  }

  async  getPokemonById(){
      
  let pokemonData;

  this.pokemonService.getAllPokemon().subscribe((data:any)=>{      
    this.pokemons.push(...data.results)
    this.numero = this.pokemons.length
    console.log(this.numero)   
  })


  for(let i = 1; i <= 1118; i++){
    //console.log(this.numero)
    

    this.pokemonService.getPokemonById(i).subscribe((data:any)=>{

    
    
      pokemonData ={
        number: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default
      }
  
      //console.log("Datos Pokemon", data)
      this.prueba.push(pokemonData)
    })
    
    }

 

  }

  getAllPokemon(){
  
   
    this.pokemonService.getAllPokemon().subscribe((data:any)=>{
      //console.log(...data.results)
    //this.asignarPokemon(data)
    
      
      this.pokemons.push(...data.results)
      //console.log("Datos de los pokemon", this.pokemons)      
      //console.log("Datos de los pokemon", this.pokemons.length)
      this.numero = this.pokemons.length
      console.log(this.numero)

      /*this.pokemons.forEach(x =>{
        //console.log(data.results[this.i++].name)
        //console.log(x.name)

        this.pokemonService.getPokemonFoto(x.url).subscribe((data: any) =>{
          this.pokemonFoto.push(data.sprites.other["official-artwork"].front_default)
        })
      })*/
     //this.asignarPokemon(this.pokemons)
     
    })
    
    for(let i = 1; i <= this.pokemons.length; i++){
    //this.getPokemonById(i);
    }

   

    

    /*this.pokemons.forEach( pk =>{
      this.pokemonObjeto.name = pk.name;
      this.pokemonObjeto.url = pk.url

      console.log("kemones", this.pokemonObjeto)
    })*/
  }

  asignarPokemon(pokemons:any[]){

   for(let i = 0; i < pokemons.length; i++){
    //console.log(pokemons[i].url)

    var data = `https://pokeapi.co/api/v2/pokemon/${i+1}/`
    //console.log(data)

    
   /* this.pokemonService.getPokemonFoto(pokemons[1].url).subscribe((data:any)=>{
     

      this.pokemonFoto.push(data.sprites.other["official-artwork"].front_default)

      console.log(this.pokemonFoto)
    })*/
   }

   



  }

}
