import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuiPageRoutingModule } from './gui-routing.module';

import { GuiPage } from './gui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuiPageRoutingModule
  ],
  declarations: [GuiPage]
})
export class GuiPageModule {}
