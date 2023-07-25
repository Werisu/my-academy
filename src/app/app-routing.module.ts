import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImcComponent } from './modules/pages/imc/imc.component';

const routes: Routes = [
  { path: 'inicio', loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'receitas', loadChildren: () => import('./modules/pages/receitas/receitas.module').then(m => m.ReceitasModule) },
  { path: 'imc', loadChildren: () => import('./modules/pages/imc/imc.module').then(m => m.ImcModule) },
  { path: 'lista-pre-treino', loadChildren: () => import('./modules/pages/lista-pre-treino/lista-pre-treino.module').then(m => m.ListaPreTreinoModule) },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
