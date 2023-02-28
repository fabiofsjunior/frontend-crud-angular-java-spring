import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-cartao',
  templateUrl: './cadastrar-cartao.component.html',
  styleUrls: ['./cadastrar-cartao.component.scss']
})
export class CadastrarCartaoComponent {

  numeroCartao: string = "";



  gerarNumeroCartao(): string {
  const parteAleatoria = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');

  // Concatenar a parte aleatória com o prefixo e sufixo do template
  const numeroGerado = `90.0.${parteAleatoria}-0`;

  // Retornar o número gerado
  this.numeroCartao = numeroGerado
  return this.numeroCartao;


}
}
