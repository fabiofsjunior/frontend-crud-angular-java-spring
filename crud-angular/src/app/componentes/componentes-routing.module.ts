import { CadastrarCartaoComponent } from './cadastrar-cartao/cadastrar-cartao.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';

const routes: Routes = [
  // {path:"", component: AutenticacaoComponent},
  // {path:"autenticacao?email=&password=&submit=Continue", pathMatch: "full", redirectTo: 'cartoes'},
  // {path:"cartoes", component: CartoesComponent},
  { path: 'solicitacoes', pathMatch: 'full', component: SolicitacoesComponent },
  { path: 'cadastrar/cartao', pathMatch: 'full', component: CadastrarCartaoComponent },
  { path: 'cadastrar/usuario', pathMatch: 'full', component: CadastrarUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesRoutingModule {}
