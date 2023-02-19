import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { CartoesComponent } from './cartoes/cartoes.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    CartoesComponent,
    SolicitacoesComponent,
    AutenticacaoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule,
    MatCardModule
  ]
})
export class ComponentesModule { }
