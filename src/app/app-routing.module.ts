import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  { path:'home',  component: HomeComponent },
  { path:'pokemon', component: PokemonComponent},
  { path:'about', component: AboutComponent},  
  { path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
