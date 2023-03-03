import { CadastrarCartaoComponent } from './../cadastrar-cartao/cadastrar-cartao.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';

import { Cartoes } from '../model/cartoes';
import { EditarCartaoDialogComponent } from '../../shared/components/editar-cartao-dialog/editar-cartao-dialog.component';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { ExcluirDialogComponent } from './../../shared/components/excluir-dialog/excluir-dialog.component';
import { CartoesService } from './../services/cartoes.service';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.scss'],
})
export class CartoesComponent {
  cartoes$: Observable<Cartoes[]>;

  // cartoes$: Cartoes = {
  //   _id: '',
  //   numeroCartao: '',
  //   nomeCartao: '',
  //   statusCartao: false,
  //   tipoCartao: []
  // }

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

  onEditar(): void {
    console.log('Sucesso ao chamar o método - onEditar()');
    const dialogRef = this.dialog.open(EditarCartaoDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onExcluir(id: number): void {
    console.log(
      'Sucesso ao chamar o método - onExcluir()' + JSON.stringify(id)
    );
    const dialogRef = this.dialog.open(ExcluirDialogComponent, {
      data: { id: id },
    });
  }

  onSolicitarCartao(): void {
    console.log('Sucesso ao chamar o método - onSolicitarCartao()');
    const dialogRef = this.dialog.open(CadastrarCartaoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
