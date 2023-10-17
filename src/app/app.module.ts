import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { HabitacionComponent } from './private/habitacion/habitacion.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    HabitacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
