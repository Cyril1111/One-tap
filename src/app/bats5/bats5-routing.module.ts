import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bats5Page } from './bats5.page';

const routes: Routes = [
  {
    path: '',
    component: Bats5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bats5PageRoutingModule {}
