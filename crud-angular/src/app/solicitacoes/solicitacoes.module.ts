import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitacoesRoutingModule } from './solicitacoes-routing.module';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';


@NgModule({
  declarations: [
    SolicitacoesComponent
  ],
  imports: [
    CommonModule,
    SolicitacoesRoutingModule
  ]
})
export class SolicitacoesModule { }
