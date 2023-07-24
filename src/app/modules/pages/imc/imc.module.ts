import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImcComponent } from './imc.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ImcComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ImcComponent }
    ])
  ]
})
export class ImcModule { }
