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

  // calcular IMC
  calcularIMC(){
    let imc = this.peso / (this.altura * this.altura);
    this.resultado = "Seu IMC é: " + imc.toFixed(2);
  }

}
