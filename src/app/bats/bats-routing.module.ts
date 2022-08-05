import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatsPage } from './bats.page';

const routes: Routes = [
  {
    path: '',
    component: BatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatsPageRoutingModule {}
