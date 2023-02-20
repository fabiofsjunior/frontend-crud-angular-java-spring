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

  dadosCartao: Cartoes[] = [
    {
      _id: '1',
      numeroCartao: '90.6.00123456-1',
      nomeCartao: 'João da Silva',
      statusCartao: true,
      tipoCartao: ['Estudante'],
    },
    {
      _id: '2',
      numeroCartao: '90.6.00567890-2',
      nomeCartao: 'Maria Oliveira',
      statusCartao: true,
      tipoCartao: ['Trabalhador'],
    },
    {
      _id: '3',
      numeroCartao: '90.6.00234567-4',
      nomeCartao: 'Pedro Santos',
      statusCartao: false,
      tipoCartao: ['Comum'],
    },
    {
      _id: '4',
      numeroCartao: '90.6.00765432-5',
      nomeCartao: 'Ana Souza',
      statusCartao: true,
      tipoCartao: ['Estudante'],
    },
    {
      _id: '5',
      numeroCartao: '90.6.00876543-6',
      nomeCartao: 'Lucas Rodrigues',
      statusCartao: true,
      tipoCartao: ['Estudante'],
    },
    {
      _id: '6',
      numeroCartao: '90.6.00432198-7',
      nomeCartao: 'Juliana Lima',
      statusCartao: false,
      tipoCartao: ['Comum'],
    },
    {
      _id: '7',
      numeroCartao: '90.6.00678901-8',
      nomeCartao: 'Fernanda Silva',
      statusCartao: true,
      tipoCartao: ['Estudante'],
    },
    {
      _id: '8',
      numeroCartao: '90.6.00345678-9',
      nomeCartao: 'Ricardo Oliveira',
      statusCartao: true,
      tipoCartao: ['Trabalhador'],
    },
    {
      _id: '9',
      numeroCartao: '90.6.00987654-0',
      nomeCartao: 'Gabriela Almeida',
      statusCartao: false,
      tipoCartao: ['Comum'],
    },
    {
      _id: '10',
      numeroCartao: '87.51.40611708-7',
      nomeCartao: 'Eduardo Santos',
      statusCartao: true,
      tipoCartao: ['Estudante'],
    },
  ];

  displayedColumns: string[] = [
    'select',
    'numeroCartao',
    'nomeCartao',
    'statusCartao',
    'tipoCartao',
  ];
}
