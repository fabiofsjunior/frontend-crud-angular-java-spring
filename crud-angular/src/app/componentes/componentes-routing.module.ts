import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartoesComponent } from './cartoes/cartoes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  // {path:"", component: AutenticacaoComponent},
  // {path:"autenticacao?email=&password=&submit=Continue", pathMatch: "full", redirectTo: 'cartoes'},
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'cartoes', component: CartoesComponent },
  // { path: 'solicitacoes', pathMatch: 'full', component: SolicitacoesComponent },
  // { path: 'cartoes/cartoes', pathMatch: 'full', component: CadastrarCartaoComponent },
  // { path: 'usuario/usuarios', pathMatch: 'full', component: CadastrarUsuarioComponent },

  {
    path: 'usuarios',
    loadChildren: () =>
      import('./componentes.module').then((m) => m.ComponentesModule),
  },
  {
    path: 'cartoes',
    loadChildren: () =>
      import('./componentes.module').then((m) => m.ComponentesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesRoutingModule {}
