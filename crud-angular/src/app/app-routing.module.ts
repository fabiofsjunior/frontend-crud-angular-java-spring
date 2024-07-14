import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoComponent } from './shared/components/autenticacao/autenticacao.component';
import { CartoesComponent } from './componentes/cartoes/cartoes.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'cartoes', component: CartoesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'autenticacao', component: AutenticacaoComponent },

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
      import('../app/componentes/usuarios/usuarios.component').then(
        (m) => m.UsuariosComponent
      ),
  },
  {
    path: 'cartoes',
    loadChildren: () =>
      import('../app/componentes/cartoes/cartoes.component').then(
        (m) => m.CartoesComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
