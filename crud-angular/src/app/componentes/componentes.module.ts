import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { CartoesComponent } from './cartoes/cartoes.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';


@NgModule({
  declarations: [
    CartoesComponent,
    SolicitacoesComponent,
    AutenticacaoComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule
  ]
})
export class ComponentesModule { }
