import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status_cartao'
})
export class CartaoPipe implements PipeTransform {

  transform(value: boolean): string {
    switch(value){
      case true: return 'Ativo';
      case false: return 'Inativo';

    }
    return 'code';
  }

}
