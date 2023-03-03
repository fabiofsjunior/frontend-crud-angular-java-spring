import { CartoesService } from '../../../services/cartoes.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar-cartao',
  templateUrl: './cadastrar-cartao.component.html',
  styleUrls: ['./cadastrar-cartao.component.scss']
})
export class CadastrarCartaoComponent {numeroCartao: string = '';
form: FormGroup;

constructor(
  private formBuilder: FormBuilder,
  private snackBar: MatSnackBar,
  private service: CartoesService
) {
  this.form = this.formBuilder.group({
    nomeCartao: [null],
    statusCartao: true,
    tipoCartao: [null],
    fkUsuario: [null],
  });
}


onSubmit(): void {
  console.log("Submit Post Cartão: "+this.service.save(this.form.value));
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
