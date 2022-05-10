import { ResultadoCreateComponent } from './components/views/resultado/resultado-create/resultado-create.component';
import { ResultadoReadComponent } from './components/views/resultado/resultado-read/resultado-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'resultados',
    component: ResultadoReadComponent
  },
  {
    path: 'resultados/create',
    component: ResultadoCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
