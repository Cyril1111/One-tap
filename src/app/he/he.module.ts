import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HePageRoutingModule } from './he-routing.module';

import { HePage } from './he.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HePageRoutingModule
  ],
  declarations: [HePage]
})
export class HePageModule {}
