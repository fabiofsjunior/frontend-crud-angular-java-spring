import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario-dialog',
  templateUrl: './cadastrar-usuario-dialog.component.html',
  styleUrls: ['./cadastrar-usuario-dialog.component.scss']
})
export class CadastrarUsuarioDialogComponent {

  form: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: UsuarioService){
    this.form = this.formBuilder.group( {

      nomeUsuario: [null],
      emailUsuario: [null],
      senhaUsuario: [null],

    });


  }

  onSubmit(): void{
    console.log(this.service.save(this.form.value))
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
