import { CartoesComponent } from './cartoes/cartoes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CadastrarCartaoComponent } from './cadastrar-cartao/cadastrar-cartao.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';

const routes: Routes = [
  // {path:"", component: AutenticacaoComponent},
  // {path:"autenticacao?email=&password=&submit=Continue", pathMatch: "full", redirectTo: 'cartoes'},
  { path:'cartoes', pathMatch: 'full', component: CartoesComponent},
  { path: 'usuarios', pathMatch: 'full', component: UsuariosComponent },
  { path: 'solicitacoes', pathMatch: 'full', component: SolicitacoesComponent },
  { path: 'cartoes/cartoes', pathMatch: 'full', component: CadastrarCartaoComponent },
  { path: 'cartoes/usuarios', pathMatch: 'full', component: CadastrarUsuarioComponent },

  {
    path: 'usuarios',
    loadChildren: () =>
      import('./componentes.module').then(
        (m) => m.ComponentesModule
      ),
  },
  {
    path: 'cartoes',
    loadChildren: () =>
      import('./componentes.module').then(
        (m) => m.ComponentesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesRoutingModule {}
