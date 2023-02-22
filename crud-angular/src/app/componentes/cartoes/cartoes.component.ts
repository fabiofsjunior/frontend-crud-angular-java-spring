import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';


import { Cartoes } from '../model/cartoes';
import { CartoesService } from './../services/cartoes.service';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.scss'],
})
export class CartoesComponent {
  cartoes$: Observable<Cartoes[]>;

  cards: Cartoes[]=[];


  displayedColumns: string[] = [
    '_id',
    'numeroCartao',
    'nomeCartao',
    'statusCartao',
    'tipoCartao',
  ];

  constructor(
    private cartoesService: CartoesService,
    public dialog: MatDialog
  ) {
    this.cartoes$ = this.cartoesService.list().pipe(
      catchError((error) => {
        this.openDialogError('Erro ao carregar cartões');

        return of([]);
      })
    );
  }

  openDialogError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
  getCards(): void{
    this.cartoesService.getAll().subscribe((cards) => (this.cards = cards));
  }


}
