import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KalosPageRoutingModule } from './kalos-routing.module';

import { KalosPage } from './kalos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KalosPageRoutingModule
  ],
  declarations: [KalosPage]
})
export class KalosPageModule {}
