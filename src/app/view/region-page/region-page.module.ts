import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionPagePageRoutingModule } from './region-page-routing.module';

import { RegionPagePage } from './region-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionPagePageRoutingModule
  ],
  declarations: [RegionPagePage]
})
export class RegionPagePageModule {}
