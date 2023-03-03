import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario-dialog',
  templateUrl: './editar-usuario-dialog.component.html',
  styleUrls: ['./editar-usuario-dialog.component.scss']
})
export class EditarUsuarioDialogComponent {
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

  altersUsuario(): void{
    console.log(this.service.altersUsuario(this.form.value))
    if (this.form.value != null){
      this.service.altersUsuario(this.form.value)
      .subscribe(result => this.onSucess(), error => this.onError())
    }else{
      this.altersUsuario()
    }


  }
  private onSucess(){
    return this.snackBar.open("USUÁRIO CADASTRADO COM SUCESSO!", '', {duration: 5000})

  }

  private onError(){
    return this.snackBar.open("ERROR AO CADASTRAR USUÁRIO", '', {duration: 5000})

  }
}
