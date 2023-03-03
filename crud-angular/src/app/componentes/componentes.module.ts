import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { AutenticacaoComponent } from '../shared/components/autenticacao/autenticacao.component';
import { CadastrarCartaoComponent } from './cartoes/cadastrar-cartao/cadastrar-cartao.component';
import { CadastrarUsuarioComponent } from './usuarios/cadastrar-usuario/cadastrar-usuario.component';
import { CartoesComponent } from './cartoes/cartoes.component';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { HomeComponent } from '../shared/components/home/home.component';
import { MenuComponent } from '../shared/components/menu/menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    CartoesComponent,
    AutenticacaoComponent,
    HomeComponent,
    CadastrarUsuarioComponent,
    CadastrarCartaoComponent,
    UsuariosComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ComponentesModule {}
