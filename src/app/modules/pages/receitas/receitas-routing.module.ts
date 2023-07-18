import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasComponent } from './receitas.component';
import { ViewReceitaComponent } from './cards-receitas/view-receita/view-receita.component';

const routes: Routes = [
  { path: '', component: ReceitasComponent },
  { path: ':id', component: ViewReceitaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitasRoutingModule { }
