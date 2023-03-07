import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartoesService } from 'src/app/services/cartoes.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-cadastrar-cartao-dialog',
  templateUrl: './cadastrar-cartao-dialog.component.html',
  styleUrls: ['./cadastrar-cartao-dialog.component.scss'],
})
export class CadastrarCartaoDialogComponent {
  numeroCartao: string = '';
  nomeCartao: string = '';
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: CartoesService,
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dadosUsuario: any
  ) {
    this.form = this.formBuilder.group({
      nomeCartao: dadosUsuario.nome,
      fkUsuario: dadosUsuario.id,
      statusCartao: true,
      tipoCartao: [null],
    });
  }

  onSubmitById(): void {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSucess(),
      (error) => this.onError()
    );
    this.onCloseClick();
  }
  private onSucess() {
    return this.snackBar.open('CARTÃO CADASTRADO COM SUCESSO!', '', {
      duration: 5000,
    });
    this.refresh();
  }

  private onError() {
    return this.snackBar.open('ERROR AO CADASTRAR CARTÃO', '', {
      duration: 5000,
    });
  }

  refresh() {
    window.location.reload();
  }
  onCloseClick(): void {
    this.dialogRef.close();
  }
}
