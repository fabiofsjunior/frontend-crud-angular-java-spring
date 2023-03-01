import { CadastrarCartaoComponent } from './../cadastrar-cartao/cadastrar-cartao.component';
import { EditarDialogComponent } from './../../shared/components/editar-dialog/editar-dialog.component';
import { ExcluirDialogComponent } from './../../shared/components/excluir-dialog/excluir-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';

import { Cartoes } from '../model/cartoes';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CartoesService } from './../services/cartoes.service';
import { CadastrarCartaoDialogComponent } from 'src/app/shared/components/cadastrar-cartao-dialog/cadastrar-cartao-dialog.component';

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

  onEditar(): void {
    console.log('Sucesso ao chamar o método - onEditar()');
    const dialogRef = this.dialog.open(EditarDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onExcluir(): void {
    console.log('Sucesso ao chamar o método - onExcluir()');
    const dialogRef = this.dialog.open(ExcluirDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSolicitarCartao(): void {
    console.log('Sucesso ao chamar o método - onSolicitarCartao()');
    const dialogRef = this.dialog.open(ErrorDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
