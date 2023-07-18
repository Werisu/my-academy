import { Component, Input } from '@angular/core';
import { slideUpAnimation } from 'src/app/animations/animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [slideUpAnimation]
})
export class CardComponent {

  @Input() alimentos: any[] = [];

}
