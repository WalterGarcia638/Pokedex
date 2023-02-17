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

  async getPokemonById(){
      
  let pokemonData;

  this.pokemonService.getAllPokemon().subscribe((data:any)=>{      
    this.pokemons.push(...data.results)
    this.numero = this.pokemons.length
    console.log(this.numero)   
  })


  for(let i = 1; i <= 1118; i++){
    //console.log(this.numero)
    

   await this.pokemonService.getPokemonById(i).subscribe((data:any)=>{
      
      let backgroundCardColor;
      switch(data.types[0].type.name){
        case "bug":
          backgroundCardColor = '#3C9950';
          break;
        case "dark":
          backgroundCardColor = '#595978';
          break;
        case "dragon":
          backgroundCardColor = '#62CAD9';
          break;
        case "electric":
          backgroundCardColor = '#FBFA72';
          break;
        case "fairy":
          backgroundCardColor = '#EA1368';
          break;
        case "fighting":
          backgroundCardColor = '#F06239';
          break;
        case "fire":
          backgroundCardColor = '#FD4B5A';
          break;
        case "flying":
          backgroundCardColor = '#94B2C7';
          break;
        case "ghost":
          backgroundCardColor = '#906791';
          break;
        case "grass":
          backgroundCardColor = '#27CB50';
          break;
        case "ground":
          backgroundCardColor = '#6E491F';
          break;
        case "ice":
          backgroundCardColor = '#D8F0FA';
          break;
        case "normal":
          backgroundCardColor = '#CA98A6';
          break;
        case "poison":
          backgroundCardColor = '#9B69DA';
          break;
        case "psychic":
          backgroundCardColor = '#F71D92';
          break;
        case "rock":
          backgroundCardColor = '#8B3E22';
          break;
        case "steel":
          backgroundCardColor = '#43BD94';
          break;
        case "water":
          backgroundCardColor = '#85A8FB';
          break;      

      }
    
      pokemonData ={
        number: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        height: data.height,
        weight: data.weight,
        slot1: data.types[0].type.name,
        slot2: data.types[1].type.name,
        color: backgroundCardColor,
      }
  
      console.table( data)
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
