import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoComponent } from './shared/components/autenticacao/autenticacao.component';
import { CartoesComponent } from './componentes/cartoes/cartoes.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'cartoes', pathMatch: 'full', component: CartoesComponent },
  { path: 'usuarios', pathMatch: 'full', component: UsuariosComponent },
  { path: 'autenticacao', pathMatch: 'full', component: AutenticacaoComponent },

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
