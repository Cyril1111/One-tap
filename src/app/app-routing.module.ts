import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'open',
    loadChildren: () => import('./open/open.module').then( m => m.OpenPageModule)
  },
  {
    path: 'bats',
    loadChildren: () => import('./bats/bats.module').then( m => m.BatsPageModule)
  },
  {
    path: 'safe',
    loadChildren: () => import('./safe/safe.module').then( m => m.SafePageModule)
  },
  {
    path: 'he',
    loadChildren: () => import('./he/he.module').then( m => m.HePageModule)
  },
  {
    path: 'ab',
    loadChildren: () => import('./ab/ab.module').then( m => m.AbPageModule)
  },
  {
    path: 'ex',
    loadChildren: () => import('./ex/ex.module').then( m => m.ExPageModule)
  },
  {
    path: 'bats1',
    loadChildren: () => import('./bats1/bats1.module').then( m => m.Bats1PageModule)
  },
  {
    path: 'bats2',
    loadChildren: () => import('./bats2/bats2.module').then( m => m.Bats2PageModule)
  },
  {
    path: 'bats3',
    loadChildren: () => import('./bats3/bats3.module').then( m => m.Bats3PageModule)
  },
  {
    path: 'bats4',
    loadChildren: () => import('./bats4/bats4.module').then( m => m.Bats4PageModule)
  },
  {
    path: 'bats5',
    loadChildren: () => import('./bats5/bats5.module').then( m => m.Bats5PageModule)
  },
  {
    path: 'gui',
    loadChildren: () => import('./gui/gui.module').then( m => m.GuiPageModule)
  },
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
