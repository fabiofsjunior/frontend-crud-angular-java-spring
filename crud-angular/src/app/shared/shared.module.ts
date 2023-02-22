import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import { CartaoPipe } from './pipes/status/cartao.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    CartaoPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrorDialogComponent,
    CartaoPipe
  ],
})
export class SharedModule { }
