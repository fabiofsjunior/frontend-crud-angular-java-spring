import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { CartoesComponent } from './cartoes/cartoes.component';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { HomeComponent } from './home/home.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';


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
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class ComponentesModule { }
