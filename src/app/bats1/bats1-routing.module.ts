import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bats1Page } from './bats1.page';

const routes: Routes = [
  {
    path: '',
    component: Bats1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bats1PageRoutingModule {}
