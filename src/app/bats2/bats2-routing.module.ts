import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bats2Page } from './bats2.page';

const routes: Routes = [
  {
    path: '',
    component: Bats2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bats2PageRoutingModule {}
