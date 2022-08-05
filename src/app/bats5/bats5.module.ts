import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bats5PageRoutingModule } from './bats5-routing.module';

import { Bats5Page } from './bats5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bats5PageRoutingModule
  ],
  declarations: [Bats5Page]
})
export class Bats5PageModule {}
