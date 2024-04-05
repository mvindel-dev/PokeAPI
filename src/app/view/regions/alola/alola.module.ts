import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlolaPageRoutingModule } from './alola-routing.module';

import { AlolaPage } from './alola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlolaPageRoutingModule
  ],
  declarations: [AlolaPage]
})
export class AlolaPageModule {}
