import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrazilPage } from './brazil.page';

const routes: Routes = [
  {
    path: '',
    component: BrazilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrazilPageRoutingModule {}
