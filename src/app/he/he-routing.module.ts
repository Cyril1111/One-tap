import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HePage } from './he.page';

const routes: Routes = [
  {
    path: '',
    component: HePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HePageRoutingModule {}
