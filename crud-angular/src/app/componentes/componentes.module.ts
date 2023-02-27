import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { CartoesComponent } from './cartoes/cartoes.component';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { HomeComponent } from './home/home.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { ComponentesFormComponent } from './componentes-form/componentes-form.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    CartoesComponent,
    SolicitacoesComponent,
    AutenticacaoComponent,
    HomeComponent,
    ComponentesFormComponent,
    CadastrarUsuarioComponent,
    UsuariosComponent,

  ],
  imports: [CommonModule, ComponentesRoutingModule, AppMaterialModule, SharedModule,    ReactiveFormsModule,
  ],
})
export class ComponentesModule {}
