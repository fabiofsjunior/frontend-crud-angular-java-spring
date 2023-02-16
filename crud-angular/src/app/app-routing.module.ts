import { CartoesComponent } from './cartoes/cartoes/cartoes.component';
import { RecargasComponent } from './recargas/recargas/recargas.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes/solicitacoes.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cartoes', component: CartoesComponent },
  { path: 'solicitacoes', component: SolicitacoesComponent },
  { path: 'recargas', component: RecargasComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
