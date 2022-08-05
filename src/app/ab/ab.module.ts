import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbPageRoutingModule } from './ab-routing.module';

import { AbPage } from './ab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbPageRoutingModule
  ],
  declarations: [AbPage]
})
export class AbPageModule {}
