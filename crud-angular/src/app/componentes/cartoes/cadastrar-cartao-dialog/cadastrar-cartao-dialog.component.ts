import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartoesService } from 'src/app/services/cartoes.service';

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
    console.log(JSON.stringify(this.dadosUsuario.nome) + ' Após pressionar SUBMIT')
    console.log(JSON.stringify(this.dadosUsuario.id) + ' Após pressionar SUBMIT')
    // console.log(this.form.value);
    // console.log(this.service.save(this.form.value));
    this.service.save(this.form.value).subscribe(
      (result) => this.onSucess(),
      (error) => this.onError()
    );


  }
  private onSucess() {
    return this.snackBar.open('CARTÃO CADASTRADO COM SUCESSO!', '', {
      duration: 5000,
    })
    this.refresh();
  }

  private onError() {
    return this.snackBar.open('ERROR AO CADASTRAR CARTÃO', '', {
      duration: 5000,
    });
  }

  refresh(){
    window.location.reload();
  }
}
