import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoennPage } from './hoenn.page';

const routes: Routes = [
  {
    path: '',
    component: HoennPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoennPageRoutingModule {}
