import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bats3Page } from './bats3.page';

const routes: Routes = [
  {
    path: '',
    component: Bats3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bats3PageRoutingModule {}
