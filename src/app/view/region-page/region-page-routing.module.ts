import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionPagePage } from './region-page.page';

const routes: Routes = [
  {
    path: '',
    component: RegionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionPagePageRoutingModule {}
