import { AppMaterialModule } from './app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ExcluirDialogComponent } from './components/excluir-dialog/excluir-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import { CartaoPipe } from './pipes/status/cartao.pipe';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';
import { ExibirCartoesUsuarioComponent } from './components/exibir-cartoes-usuario/exibir-cartoes-usuario.component';
import { CadastrarCartaoDialogComponent } from './components/cadastrar-cartao-dialog/cadastrar-cartao-dialog.component';
import { CadastrarUsuarioDialogComponent } from './components/cadastrar-usuario-dialog/cadastrar-usuario-dialog.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    CartaoPipe,
    ExcluirDialogComponent,
    EditarDialogComponent,
    ExibirCartoesUsuarioComponent,
    CadastrarCartaoDialogComponent,
    CadastrarUsuarioDialogComponent,
  ],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogComponent, CartaoPipe, ExcluirDialogComponent, EditarDialogComponent, CadastrarCartaoDialogComponent, CadastrarUsuarioDialogComponent,]
})
export class SharedModule {}
