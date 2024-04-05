import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeseliaPageRoutingModule } from './teselia-routing.module';

import { TeseliaPage } from './teselia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeseliaPageRoutingModule
  ],
  declarations: [TeseliaPage]
})
export class TeseliaPageModule {}
