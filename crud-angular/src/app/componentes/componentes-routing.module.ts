import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';

const routes: Routes = [
  // {path:"", component: AutenticacaoComponent},
  // {path:"autenticacao?email=&password=&submit=Continue", pathMatch: "full", redirectTo: 'cartoes'},
  // {path:"cartoes", component: CartoesComponent},
  { path: 'solicitacoes', pathMatch: 'full', component: SolicitacoesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesRoutingModule {}
