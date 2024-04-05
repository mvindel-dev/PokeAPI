import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeseliaPage } from './teselia.page';

const routes: Routes = [
  {
    path: '',
    component: TeseliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeseliaPageRoutingModule {}
