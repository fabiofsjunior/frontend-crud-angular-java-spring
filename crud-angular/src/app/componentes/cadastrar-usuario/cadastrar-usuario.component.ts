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
  formularioValido = false;



  constructor(private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: UsuarioService,){
    this.form = this.formBuilder.group( {

      nomeUsuario: [null],
      emailUsuario: [null],
      senhaUsuario: [null],

    });


  }
  validarFormulario() {
    this.formularioValido = true; // ou false
  }

  onSubmit(): void{
    console.log(this.service.save(this.form.value))
    if (this.form.value != null){
      this.service.save(this.form.value)
      .subscribe(result => this.onSucess(), error => this.onError())
    }else{
      this.onSubmit()
    }


  }
  private onSucess(){
    return this.snackBar.open("USUÁRIO CADASTRADO COM SUCESSO!", '', {duration: 5000})

  }

  private onError(){
    return this.snackBar.open("ERROR AO CADASTRAR USUÁRIO", '', {duration: 5000})

  }
}
