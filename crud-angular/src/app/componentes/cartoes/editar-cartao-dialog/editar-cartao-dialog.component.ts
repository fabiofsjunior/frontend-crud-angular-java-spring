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
  idCartao: number = 0;
  numero: String = "";
  nomeCartao: String = "";
  fkUsuario: String = "";
  statusCartao: String = "";
  tipoCartao: String = "";


  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: CartoesService,
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dadosCartao: any
  ) {
    this.form = this.formBuilder.group({
      nome: dadosCartao.nome,
      numero: dadosCartao.numero,
      statusCartao: dadosCartao.statusCartao,
      tipoCartao: dadosCartao.tipoCartao,
      fkUsuario: dadosCartao.fkUsuario,
      id: dadosCartao.id,
    });

    console.log(
      ' Id Cartão =' +
        dadosCartao.id +
        ' Numero Cartão =' +
        dadosCartao.numero +
        ' nomeCartao =' +
        dadosCartao.nome +
        ' FkCartao =' +
        dadosCartao.fkUsuario +
        ' Status Cartao =' +
        dadosCartao.statusCartao +
        ' Tipo Cartao =' +
        dadosCartao.tipoCartao
    );
  }
  alterarStatusCartao(): void {
    if (this.form.value != null) {
      this.service.alterarStatusCartao(this.form.value, this.dadosCartao.id);
    }
  }
}
