import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BarrasComponent } from './graficas/barras/barras.component';
import { BarrasDoblesComponent } from './graficas/barras-dobles/barras-dobles.component';
import { DonaComponent } from './graficas/dona/dona.component';
import { LineComponent } from './graficas/line/line.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'barras', component: BarrasComponent },
  { path: 'barras-dobles', component: BarrasDoblesComponent },
  { path: 'dona', component: DonaComponent },
  { path: 'line', component: LineComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
