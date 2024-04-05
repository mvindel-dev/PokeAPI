import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinnohPage } from './sinnoh.page';

const routes: Routes = [
  {
    path: '',
    component: SinnohPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinnohPageRoutingModule {}
