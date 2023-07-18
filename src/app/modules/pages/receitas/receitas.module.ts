import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitasRoutingModule } from './receitas-routing.module';
import { ReceitasComponent } from './receitas.component';
import { CardsReceitasComponent } from './cards-receitas/cards-receitas.component';


@NgModule({
  declarations: [
    ReceitasComponent,
    CardsReceitasComponent
  ],
  imports: [
    CommonModule,
    ReceitasRoutingModule
  ],
  exports: []
})
export class ReceitasModule { }
