import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'region-page/:name',
    loadChildren: () => import('./view/region-page/region-page.module').then( m => m.RegionPagePageModule)
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
    redirectTo: 'region-page/kanto',
    pathMatch: 'full'
  },
  {
    path: 'berries',
    loadChildren: () => import('./view/berries/berries.module').then( m => m.BerriesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
