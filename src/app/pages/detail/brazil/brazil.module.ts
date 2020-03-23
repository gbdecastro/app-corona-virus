import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrazilPageRoutingModule } from './brazil-routing.module';

import { BrazilPage } from './brazil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrazilPageRoutingModule
  ],
  declarations: [BrazilPage]
})
export class BrazilPageModule {}
