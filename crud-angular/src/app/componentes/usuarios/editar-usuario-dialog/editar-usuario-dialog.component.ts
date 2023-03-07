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
  nomeUsuario: String = '';
  emailUsuario: String = '';
  senhaUsuario: String = '';
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: UsuarioService,
    @Inject(MAT_DIALOG_DATA) public dadosUsuario: any
  ) {
    this.form = this.formBuilder.group({
      idUsuario: dadosUsuario.id,
      nomeUsuario: dadosUsuario.nome,
      emailUsuario: dadosUsuario.email,
      senhaUsuario: dadosUsuario.senha,
    });
  }
  validarFormulario() {
    this.formularioValido = true; // ou false
  }

  alteraUsuario(): void {
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
