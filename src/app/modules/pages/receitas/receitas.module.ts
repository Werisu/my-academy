import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitasRoutingModule } from './receitas-routing.module';
import { ReceitasComponent } from './receitas.component';
import { CardsReceitasComponent } from './cards-receitas/cards-receitas.component';
import { ViewReceitaComponent } from './cards-receitas/view-receita/view-receita.component';


@NgModule({
  declarations: [
    ReceitasComponent,
    CardsReceitasComponent,
    ViewReceitaComponent
  ],
  imports: [
    CommonModule,
    ReceitasRoutingModule
  ],
  exports: []
})
export class ReceitasModule { }
