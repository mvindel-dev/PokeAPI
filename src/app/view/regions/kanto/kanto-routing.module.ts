import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KantoPage } from './kanto.page';

const routes: Routes = [
  {
    path: '',
    component: KantoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KantoPageRoutingModule {}
