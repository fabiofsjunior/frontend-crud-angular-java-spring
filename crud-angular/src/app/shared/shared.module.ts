import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { CadastrarCartaoDialogComponent } from '../componentes/cartoes/cadastrar-cartao-dialog/cadastrar-cartao-dialog.component';

import { EditarCartaoDialogComponent } from '../componentes/cartoes/editar-cartao-dialog/editar-cartao-dialog.component';

import { EditarUsuarioDialogComponent } from '../componentes/usuarios/editar-usuario-dialog/editar-usuario-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ExcluirCartaoDialogComponent } from '../componentes/cartoes/excluir-cartao-dialog/excluir-cartao-dialog.component';
import { ExcluirUsuarioDialogComponent } from '../componentes/usuarios/excluir-usuario-dialog/excluir-usuario-dialog.component';
import { ExibirCartoesUsuarioComponent } from '../componentes/usuarios/exibir-cartoes-usuario/exibir-cartoes-usuario.component';
import { CategoryPipe } from './pipes/category.pipe';
import { CartaoPipe } from './pipes/status/cartao.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    CartaoPipe,
    ExcluirCartaoDialogComponent,
    EditarCartaoDialogComponent,
    ExibirCartoesUsuarioComponent,
    CadastrarCartaoDialogComponent,
    ExcluirUsuarioDialogComponent,
    EditarUsuarioDialogComponent,
  ],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogComponent, CartaoPipe, ExcluirCartaoDialogComponent, EditarCartaoDialogComponent, CadastrarCartaoDialogComponent,ExcluirUsuarioDialogComponent]
})
export class SharedModule {}
