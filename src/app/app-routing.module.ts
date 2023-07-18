import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'inicio', loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'receitas', loadChildren: () => import('./modules/pages/receitas/receitas.module').then(m => m.ReceitasModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
