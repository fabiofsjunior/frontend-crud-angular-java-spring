import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecargasRoutingModule } from './recargas-routing.module';
import { RecargasComponent } from './recargas/recargas.component';


@NgModule({
  declarations: [
    RecargasComponent
  ],
  imports: [
    CommonModule,
    RecargasRoutingModule
  ]
})
export class RecargasModule { }
