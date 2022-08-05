import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatsPageRoutingModule } from './bats-routing.module';

import { BatsPage } from './bats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatsPageRoutingModule
  ],
  declarations: [BatsPage]
})
export class BatsPageModule {}
