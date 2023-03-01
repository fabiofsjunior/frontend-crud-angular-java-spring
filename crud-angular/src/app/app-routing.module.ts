import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { CadastrarCartaoComponent } from './componentes/cadastrar-cartao/cadastrar-cartao.component';
import { CadastrarUsuarioComponent } from './componentes/cadastrar-usuario/cadastrar-usuario.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoComponent } from './componentes/autenticacao/autenticacao.component';
import { CartoesComponent } from './componentes/cartoes/cartoes.component';
import { SolicitacoesComponent } from './componentes/solicitacoes/solicitacoes.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: HomeComponent},
  { path: 'cartoes', pathMatch: 'full', component: CartoesComponent },
  { path: 'usuarios', pathMatch: 'full', component: UsuariosComponent },
  { path: 'autenticacao', pathMatch: 'full', component: AutenticacaoComponent },
  { path: 'solicitacoes', pathMatch: 'full', component: SolicitacoesComponent },
  { path: 'cartoes/cartoes', pathMatch: 'full', component: CadastrarCartaoComponent },
  { path: 'cartoes/usuarios', pathMatch: 'full', component: CadastrarUsuarioComponent },
  {
    path: 'autenticacao',
    loadChildren: () =>
      import('./componentes/componentes.module').then(
        (m) => m.ComponentesModule
      ),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./componentes/componentes.module').then(
        (m) => m.ComponentesModule
      ),
  },
  {
    path: 'cartoes',
    loadChildren: () =>
      import('./componentes/componentes.module').then(
        (m) => m.ComponentesModule
      ),
  },
  {
    path: 'solicitacoes',
    loadChildren: () =>
      import('./componentes/componentes.module').then(
        (m) => m.ComponentesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
