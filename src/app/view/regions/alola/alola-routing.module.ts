import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlolaPage } from './alola.page';

const routes: Routes = [
  {
    path: '',
    component: AlolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlolaPageRoutingModule {}
