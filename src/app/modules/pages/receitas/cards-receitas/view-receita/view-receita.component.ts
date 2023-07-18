import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Subject, filter } from 'rxjs';

@Component({
  selector: 'app-view-receita',
  templateUrl: './view-receita.component.html',
  styleUrls: ['./view-receita.component.css']
})
export class ViewReceitaComponent implements OnInit {

  id!: number;
  receita: any;
  receitas: any[] = JSON.parse(`${localStorage.getItem('receitas')}`);

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.receita = this.receitas[this.id];
    });
  }

}
