import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JohtoPageRoutingModule } from './johto-routing.module';

import { JohtoPage } from './johto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JohtoPageRoutingModule
  ],
  declarations: [JohtoPage]
})
export class JohtoPageModule {}
