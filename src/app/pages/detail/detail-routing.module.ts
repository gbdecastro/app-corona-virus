import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPage } from './detail.page';

const routes: Routes = [
  {
    path: 'brazil',
    loadChildren: () => import('./brazil/brazil.module').then( m => m.BrazilPageModule)
  },
  {
    path: 'world',
    loadChildren: () => import('./world/world.module').then( m => m.WorldPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPageRoutingModule {}
