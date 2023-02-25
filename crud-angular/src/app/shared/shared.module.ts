import { AppMaterialModule } from './app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ExcluirDialogComponent } from './components/excluir-dialog/excluir-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import { CartaoPipe } from './pipes/status/cartao.pipe';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    CartaoPipe,
    ExcluirDialogComponent,
    EditarDialogComponent,
  ],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogComponent, CartaoPipe, ExcluirDialogComponent, EditarDialogComponent],
})
export class SharedModule {}
