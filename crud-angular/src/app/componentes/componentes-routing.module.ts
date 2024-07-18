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
      import('./usuarios/usuarios.component').then((m) => m.UsuariosComponent),
  },
  {
    path: 'cartoes',
    loadChildren: () =>
      import('./cartoes/cartoes.component').then((m) => m.CartoesComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesRoutingModule {}
