import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarrasComponent } from './graficas/barras/barras.component';
import { DonaComponent } from './graficas/dona/dona.component';
import { LineComponent } from './graficas/line/line.component';
import { BarrasDoblesComponent } from './graficas/barras-dobles/barras-dobles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarrasComponent,
    DonaComponent,
    LineComponent,
    BarrasDoblesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
