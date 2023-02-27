import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UsuarioService } from './../services/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent {

  form: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: UsuarioService){
    this.form = this.formBuilder.group( {

      nome: [null],
      email: [null],
      senha: [null],

    });


  }

  onSubmit(): void{
    this.service.save(this.form.value)
    .subscribe(result => this.onSucess(), error => this.onError())

  }
  private onSucess(){
    return this.snackBar.open("USUÁRIO CADASTRADO COM SUCESSO!", '', {duration: 5000})
  }

  private onError(){
    return this.snackBar.open("ERROR AO CADASTRAR USUÁRIO", '', {duration: 5000})
  }
}
