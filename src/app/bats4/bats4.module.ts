import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bats4PageRoutingModule } from './bats4-routing.module';

import { Bats4Page } from './bats4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bats4PageRoutingModule
  ],
  declarations: [Bats4Page]
})
export class Bats4PageModule {}
