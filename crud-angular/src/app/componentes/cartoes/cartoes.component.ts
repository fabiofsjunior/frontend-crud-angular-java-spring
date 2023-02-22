import { CartoesService } from './../services/cartoes.service';
import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { Cartoes } from '../model/cartoes';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.scss'],
})
export class CartoesComponent {
  cartoes$: Observable<Cartoes[]>;

  displayedColumns: string[] = [
    'numeroCartao',
    'nomeCartao',
    'statusCartao',
    'tipoCartao',
  ];

  constructor(private cartoesService: CartoesService) {
    this.cartoes$ = this.cartoesService.list();
  }


}
