import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bats2PageRoutingModule } from './bats2-routing.module';

import { Bats2Page } from './bats2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bats2PageRoutingModule
  ],
  declarations: [Bats2Page]
})
export class Bats2PageModule {}
