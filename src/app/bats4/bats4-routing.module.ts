import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bats4Page } from './bats4.page';

const routes: Routes = [
  {
    path: '',
    component: Bats4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bats4PageRoutingModule {}
