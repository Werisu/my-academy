import { Component } from '@angular/core';
import { slideUpAnimation } from 'src/app/animations/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  alimentos: any[] = [
    {
      grupo: 'Proteínas',
      itens: [
        'Carne vermelha magra (como filé mignon e patinho)',
        'Frango e peru (sem pele)',
        'Peixes (salmão, atum, tilápia)',
        'Ovos (consumir a clara e a gema)',
        'Queijos brancos (cottage, ricota)'
      ]
    },
    {
      grupo: 'Carboidratos complexos',
      itens: [
        'Batata doce',
        'Arroz integral',
        'Aveia',
        'Pão integral',
        'Massas integrais'
      ]
    },
    {
      grupo: 'Gorduras saudáveis',
      itens: [
        'Abacate',
        'Oleaginosas (castanhas, amêndoas, nozes)',
        'Azeite de oliva extra virgem',
        'Peixes gordurosos (salmão, sardinha)',
        'Manteiga de amendoim natural'
      ]
    },
    {
      grupo: 'Vegetais e frutas',
      itens: [
        'Brócolis',
        'Espinafre',
        'Couve',
        'Banana',
        'Morango'
      ]
    },
    {
      grupo: 'Suplementos',
      itens: [
        'Whey protein',
        'Caseína',
        'BCAA',
        'Creatina',
        'Glutamina'
      ]
    }
  ];

}
