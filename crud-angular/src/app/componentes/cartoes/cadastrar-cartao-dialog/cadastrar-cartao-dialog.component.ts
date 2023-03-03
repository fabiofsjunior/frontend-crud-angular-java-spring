import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartoesService } from 'src/app/services/cartoes.service';

@Component({
  selector: 'app-cadastrar-cartao-dialog',
  templateUrl: './cadastrar-cartao-dialog.component.html',
  styleUrls: ['./cadastrar-cartao-dialog.component.scss'],
})
export class CadastrarCartaoDialogComponent {
  numeroCartao: string = '';
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: CartoesService
  ) {
    this.form = this.formBuilder.group({
      nomeCartao: [null],
      emailCartao: [null],
      numeroCartao: [null],
      tipoCartao: [null],
    });
  }

  gerarNumeroCartao(): string {
    const parteAleatoria = Math.floor(Math.random() * 100000000)
      .toString()
      .padStart(8, '0');

    // Concatenar a parte aleatória com o prefixo e sufixo do template
    const numeroGerado = `90.0.${parteAleatoria}-0`;

    // Retornar o número gerado
    this.numeroCartao = numeroGerado;
    return this.numeroCartao;
  }

  onSubmit(): void {
    console.log(this.service.save(this.form.value));
    this.service.save(this.form.value).subscribe(
      (result) => this.onSucess(),
      (error) => this.onError()
    );
  }
  private onSucess() {
    return this.snackBar.open('CARTÃO CADASTRADO COM SUCESSO!', '', {
      duration: 5000,
    });
  }

  private onError() {
    return this.snackBar.open('ERROR AO CADASTRAR CARTÃO', '', {
      duration: 5000,
    });
  }
}
