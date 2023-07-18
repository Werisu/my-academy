import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-receitas',
  templateUrl: './cards-receitas.component.html',
  styleUrls: ['./cards-receitas.component.css']
})
export class CardsReceitasComponent {

  @Input() receitas: any[] = [];

}
