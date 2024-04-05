import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KalosPage } from './kalos.page';

const routes: Routes = [
  {
    path: '',
    component: KalosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KalosPageRoutingModule {}
