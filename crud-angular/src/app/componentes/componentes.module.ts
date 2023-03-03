import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { CadastrarCartaoComponent } from './cadastrar-cartao/cadastrar-cartao.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { CartoesComponent } from './cartoes/cartoes.component';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    CartoesComponent,
    SolicitacoesComponent,
    AutenticacaoComponent,
    HomeComponent,
    CadastrarUsuarioComponent,
    CadastrarCartaoComponent,
    UsuariosComponent,
    MenuComponent,

  ],
  imports: [CommonModule, ComponentesRoutingModule, AppMaterialModule, SharedModule,    ReactiveFormsModule,
  ],
})
export class ComponentesModule {}
