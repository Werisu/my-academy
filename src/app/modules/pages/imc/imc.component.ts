import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {

  peso = 0;
  altura = 0;
  resultado = '';
  classificacao = '';
  corClassificacao = '';

  // calcular IMC
  calcularIMC() {
    const imc = this.peso / (this.altura * this.altura);
    this.resultado = "Seu IMC é: " + imc.toFixed(2);

    if (isNaN(imc)) {
      this.classificacao = '';
      this.corClassificacao = '';
    } else {
      if (imc < 18.5) {
        this.classificacao = 'Você está abaixo do peso.';
        this.corClassificacao = 'text-blue-500';
      } else if (imc >= 18.5 && imc < 24.9) {
        this.classificacao = 'Seu peso está normal.';
        this.corClassificacao = 'text-green-500';
      } else if (imc >= 25 && imc < 29.9) {
        this.classificacao = 'Você está acima do peso.';
        this.corClassificacao = 'text-yellow-500';
      } else if (imc >= 30 && imc < 34.9) {
        this.classificacao = 'Você tem Obesidade grau I.';
        this.corClassificacao = 'text-orange-500';
      } else if (imc >= 35 && imc < 39.9) {
        this.classificacao = 'Você tem Obesidade grau II.';
        this.corClassificacao = 'text-red-500';
      } else {
        this.classificacao = 'Você tem Obesidade grau III.';
        this.corClassificacao = 'text-red-800';
      }
    }
  }
}
