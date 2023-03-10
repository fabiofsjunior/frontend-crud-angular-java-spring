import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartoesComponent } from './cartoes/cartoes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'cartoes', component: CartoesComponent },

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
