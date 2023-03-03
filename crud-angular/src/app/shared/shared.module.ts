import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { CadastrarCartaoDialogComponent } from './components/cadastrar-cartao-dialog/cadastrar-cartao-dialog.component';
import { CadastrarUsuarioDialogComponent } from './components/cadastrar-usuario-dialog/cadastrar-usuario-dialog.component';
import { EditarCartaoDialogComponent } from './components/editar-cartao-dialog/editar-cartao-dialog.component';

import { EditarUsuarioDialogComponent } from './components/editar-usuario-dialog/editar-usuario-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ExcluirDialogComponent } from './components/excluir-dialog/excluir-dialog.component';
import { ExcluirUsuarioDialogComponent } from './components/excluir-usuario-dialog/excluir-usuario-dialog.component';
import { ExibirCartoesUsuarioComponent } from './components/exibir-cartoes-usuario/exibir-cartoes-usuario.component';
import { CategoryPipe } from './pipes/category.pipe';
import { CartaoPipe } from './pipes/status/cartao.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    CartaoPipe,
    ExcluirDialogComponent,
    EditarCartaoDialogComponent,
    ExibirCartoesUsuarioComponent,
    CadastrarCartaoDialogComponent,
    CadastrarUsuarioDialogComponent,
    ExcluirUsuarioDialogComponent,
    EditarUsuarioDialogComponent,
  ],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogComponent, CartaoPipe, ExcluirDialogComponent, EditarCartaoDialogComponent, CadastrarCartaoDialogComponent, CadastrarUsuarioDialogComponent,ExcluirUsuarioDialogComponent]
})
export class SharedModule {}
