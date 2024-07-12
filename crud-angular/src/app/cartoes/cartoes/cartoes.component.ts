import { Component } from '@angular/core';
import { Cartoes } from '../model/cartoes';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.scss']
})
export class CartoesComponent {
  
  cartoes: Cartoes[] = [];

}
