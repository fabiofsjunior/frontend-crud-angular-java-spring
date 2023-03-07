import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartoesService } from 'src/app/services/cartoes.service';

@Component({
  selector: 'app-excluir-cartao-dialog',
  templateUrl: './excluir-cartao-dialog.component.html',
  styleUrls: ['./excluir-cartao-dialog.component.scss'],
})
export class ExcluirCartaoDialogComponent {
  constructor(
    private cartoesService: CartoesService,
    @Inject(MAT_DIALOG_DATA) public dataId: number
  ) {}

  deletarByid(id: number): void {
    this.cartoesService.deletarCartaoByid(id);

  }

}
