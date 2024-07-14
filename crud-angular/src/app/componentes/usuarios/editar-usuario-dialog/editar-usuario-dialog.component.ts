import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario-dialog',
  templateUrl: './editar-usuario-dialog.component.html',
  styleUrls: ['./editar-usuario-dialog.component.scss'],
})
export class EditarUsuarioDialogComponent {
  formularioValido = false;
  nome: String = '';
  email: String = '';
  senha: String = '';
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: UsuarioService,
    @Inject(MAT_DIALOG_DATA) public dadosUsuario: any
  ) {
    this.form = this.formBuilder.group({
      id: dadosUsuario.id,
      nome: dadosUsuario.nome,
      email: dadosUsuario.email,
      senha: dadosUsuario.senha,
    });
  }
  validarFormulario() {
    this.formularioValido = true; // ou false
  }

  alteraUsuario(): void {
    console.log(this.form.value)
    if (this.form.value != null) {
      this.service.alteraUsuario(this.form.value, this.dadosUsuario.id);
    }
  }
  private onSucess() {
    return this.snackBar.open('USUÁRIO CADASTRADO COM SUCESSO!', '', {
      duration: 5000,
    }),
    this.refresh();
  }

  private onError() {
    return this.snackBar.open('ERROR AO CADASTRAR USUÁRIO', '', {
      duration: 5000,
    });
  }
  refresh() {
    window.location.reload();
  }
}
