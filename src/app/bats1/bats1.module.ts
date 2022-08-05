import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bats1PageRoutingModule } from './bats1-routing.module';

import { Bats1Page } from './bats1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bats1PageRoutingModule
  ],
  declarations: [Bats1Page]
})
export class Bats1PageModule {}
