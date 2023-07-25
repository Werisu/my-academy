import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPreTreinoComponent } from './lista-pre-treino.component';

const routes: Routes = [
  { path: '', component: ListaPreTreinoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaPreTreinoRoutingModule { }
