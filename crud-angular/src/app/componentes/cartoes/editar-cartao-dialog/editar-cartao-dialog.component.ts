import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartoesService } from 'src/app/services/cartoes.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-editar-cartao-dialog',
  templateUrl: './editar-cartao-dialog.component.html',
  styleUrls: ['./editar-cartao-dialog.component.scss'],
})
export class EditarCartaoDialogComponent {
  form: FormGroup;
  idCartao: any;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: CartoesService,
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dadosCartao: any
  ) {
    this.form = this.formBuilder.group({
      idCartao: dadosCartao.id,
      nomeCartao: [null],
      fkUsuario: [null],
      statusCartao: true,
      tipoCartao: [null],
    });
  }
  alterarStatusCartao(): void {
    if (this.form.value != null) {
      this.service.alterarStatusCartao(this.form.value, this.dadosCartao.id );
    }
  }
}
