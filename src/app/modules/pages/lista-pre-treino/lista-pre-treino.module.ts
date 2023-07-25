import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPreTreinoRoutingModule } from './lista-pre-treino-routing.module';
import { ListaPreTreinoComponent } from './lista-pre-treino.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaPreTreinoComponent
  ],
  imports: [
    CommonModule,
    ListaPreTreinoRoutingModule,
    FormsModule
  ],
  exports: [
    ListaPreTreinoComponent
  ]
})
export class ListaPreTreinoModule { }
