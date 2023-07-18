import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { slideUpAnimation } from 'src/app/animations/animation';

@Component({
  selector: 'app-cards-receitas',
  templateUrl: './cards-receitas.component.html',
  styleUrls: ['./cards-receitas.component.css'],
  animations: [slideUpAnimation]
})
export class CardsReceitasComponent implements OnDestroy {

  @Input() receitas: any[] = [];
  constructor(private router: Router) {}

  ngOnDestroy(): void {
    // localStorage.removeItem('receitas');
  }

  navigateToDetails(id: number) {
    this.router.navigate(['/receitas', id], { state: { data: 'some data' } });
  }

}
