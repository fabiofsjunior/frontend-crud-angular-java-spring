import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';

import { Cartoes } from '../../model/cartoes';
import { CartoesService } from '../../services/cartoes.service';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { EditarCartaoDialogComponent } from './editar-cartao-dialog/editar-cartao-dialog.component';
import { ExcluirCartaoDialogComponent } from './excluir-cartao-dialog/excluir-cartao-dialog.component';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.scss'],
})
export class CartoesComponent {
  cartoes$: Observable<Cartoes[]>;

  loading = false;

  displayedColumns: string[] = [
    '_id',
    'numeroCartao',
    'nomeCartao',
    'statusCartao',
    'tipoCartao',
    'editar',
    'excluir',
  ];

  constructor(
    private cartoesService: CartoesService,
    public dialog: MatDialog,
    public route: ActivatedRoute
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

  onEditar(dadosCartao: number): void {
    console.log("Cartoes.onEditar() "+JSON.stringify(dadosCartao))
    const dialogRef = this.dialog.open(EditarCartaoDialogComponent, {
      data: { id: dadosCartao},
    } );

    dialogRef.afterClosed().subscribe((result) => {});
  }
  onExcluir(id: number): void {
    const dialogRef = this.dialog.open(ExcluirCartaoDialogComponent, {
      data: { id: id },
    });
  }
}
