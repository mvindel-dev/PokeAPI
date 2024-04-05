import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'kanto',
    loadChildren: () => import('./view/regions/kanto/kanto.module').then( m => m.KantoPageModule)
  },
  {
    path: 'johto',
    loadChildren: () => import('./view/regions/johto/johto.module').then( m => m.JohtoPageModule)
  },
  {
    path: 'hoenn',
    loadChildren: () => import('./view/regions/hoenn/hoenn.module').then( m => m.HoennPageModule)
  },
  {
    path: 'sinnoh',
    loadChildren: () => import('./view/regions/sinnoh/sinnoh.module').then( m => m.SinnohPageModule)
  },
  {
    path: 'teselia',
    loadChildren: () => import('./view/regions/teselia/teselia.module').then( m => m.TeseliaPageModule)
  },
  {
    path: 'kalos',
    loadChildren: () => import('./view/regions/kalos/kalos.module').then( m => m.KalosPageModule)
  },
  {
    path: 'alola',
    loadChildren: () => import('./view/regions/alola/alola.module').then( m => m.AlolaPageModule)
  },
  {
    path: 'pokemon/:name',
    loadChildren: () => import('./view/pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./view/team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: '',
    redirectTo: 'kanto',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
