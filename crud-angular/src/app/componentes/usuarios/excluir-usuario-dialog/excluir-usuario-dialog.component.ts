import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir-usuario-dialog',
  templateUrl: './excluir-usuario-dialog.component.html',
  styleUrls: ['./excluir-usuario-dialog.component.scss']
})
export class ExcluirUsuarioDialogComponent {

  constructor(
    private usuarioService: UsuarioService,
    @Inject(MAT_DIALOG_DATA) public dataId: number
  ) {}

  deletarUsuarioByid(id: any): void {
    this.usuarioService.onExcluirUsuarioById(id);
  }

}
