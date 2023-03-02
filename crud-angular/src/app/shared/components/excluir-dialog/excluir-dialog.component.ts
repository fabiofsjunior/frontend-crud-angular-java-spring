import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartoesService } from 'src/app/componentes/services/cartoes.service';

@Component({
  selector: 'app-excluir-dialog',
  templateUrl: './excluir-dialog.component.html',
  styleUrls: ['./excluir-dialog.component.scss'],
})
export class ExcluirDialogComponent {
  constructor(
    private cartoesService: CartoesService,
    @Inject(MAT_DIALOG_DATA) public dataId: number
  ) {}

  deletarByid(id: number): void {
    this.cartoesService.deletarCartaoByid(id);
    console.log(id);
  }

}
