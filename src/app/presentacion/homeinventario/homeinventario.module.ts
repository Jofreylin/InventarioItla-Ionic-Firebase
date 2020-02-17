import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeinventarioPageRoutingModule } from './homeinventario-routing.module';

import { HomeinventarioPage } from './homeinventario.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeinventarioPageRoutingModule
  ],
  declarations: [HomeinventarioPage]
})
export class HomeinventarioPageModule {}
