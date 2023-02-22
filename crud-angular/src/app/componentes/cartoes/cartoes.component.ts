import { CartoesService } from './../services/cartoes.service';
import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

import { Cartoes } from '../model/cartoes';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.scss'],
})
export class CartoesComponent {

  cartoes!: Observable<Cartoes[]>;

  displayedColumns: string[] = ['numeroCartao','nomeCartao','statusCartao','tipoCartao'];

  constructor(private cartoesService: CartoesService) {
    this.getCartoes()
  }

  getCartoes(){
    this.cartoesService.list().subscribe(() => {this.cartoes = this.cartoes;});
  }

  // selection = new SelectionModel<Cartoes>(true, []);
  // /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;

  // }
  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // toggleAllRows() {
  //   if (this.isAllSelected()) {
  //     this.selection.clear();
  //     return;
  //   }

  //   this.selection.select(...this.cartoes);
  // }

  // /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: Cartoes): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
  //     row.numeroCartao + 1
  //   }`;
  // }


}
