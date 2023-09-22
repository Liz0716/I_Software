import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PublicComponent } from './public/public.component';
import { GuiComponent } from './gui/gui.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    GuiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
