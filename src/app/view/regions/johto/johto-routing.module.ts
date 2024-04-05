import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JohtoPage } from './johto.page';

const routes: Routes = [
  {
    path: '',
    component: JohtoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JohtoPageRoutingModule {}
