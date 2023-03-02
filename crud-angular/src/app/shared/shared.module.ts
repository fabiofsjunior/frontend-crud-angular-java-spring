import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ExcluirDialogComponent } from './components/excluir-dialog/excluir-dialog.component';
import { ExibirCartoesUsuarioComponent } from './components/exibir-cartoes-usuario/exibir-cartoes-usuario.component';
import { CategoryPipe } from './pipes/category.pipe';
import { CartaoPipe } from './pipes/status/cartao.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    CartaoPipe,
    ExcluirDialogComponent,
    EditarDialogComponent,
    ExibirCartoesUsuarioComponent,

  ],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogComponent, CartaoPipe, ExcluirDialogComponent, EditarDialogComponent, ]
})
export class SharedModule {}
