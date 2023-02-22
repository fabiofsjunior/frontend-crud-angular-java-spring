import { CartoesService } from './../services/cartoes.service';
import { Component } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';



import { Cartoes } from '../model/cartoes';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.scss'],
})
export class CartoesComponent {
  dadosCartao: Cartoes[] = [];
  cartoesService: CartoesService;

  constructor(){
    this.cartoesService= new CartoesService;
    this.dadosCartao = this.cartoesService.list();
  }


  selection = new SelectionModel<Cartoes>(true, []);
   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dadosCartao.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dadosCartao);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Cartoes): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.numeroCartao + 1}`;
  }



  displayedColumns: string[] = [
    'select',
    'numeroCartao',
    'nomeCartao',
    'statusCartao',
    'tipoCartao',
  ];
}
