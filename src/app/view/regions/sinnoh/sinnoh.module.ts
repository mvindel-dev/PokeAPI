import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinnohPageRoutingModule } from './sinnoh-routing.module';

import { SinnohPage } from './sinnoh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinnohPageRoutingModule
  ],
  declarations: [SinnohPage]
})
export class SinnohPageModule {}
