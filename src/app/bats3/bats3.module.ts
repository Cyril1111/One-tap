import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bats3PageRoutingModule } from './bats3-routing.module';

import { Bats3Page } from './bats3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bats3PageRoutingModule
  ],
  declarations: [Bats3Page]
})
export class Bats3PageModule {}
