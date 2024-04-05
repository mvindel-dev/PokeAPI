import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoennPageRoutingModule } from './hoenn-routing.module';

import { HoennPage } from './hoenn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoennPageRoutingModule
  ],
  declarations: [HoennPage]
})
export class HoennPageModule {}
