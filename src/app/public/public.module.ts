
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { HeaderComponent } from './header/header.component';
import { CardsHabitacionesComponent } from './cards-habitaciones/cards-habitaciones.component';
import { MaterialModule } from '../material/material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PublicRoutingModule } from './public_routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecaptchaModule } from "ng-recaptcha";
import { HabitacionesComponent } from './habitaciones/habitaciones.component';


@NgModule({
  declarations: [
    // HeaderComponent,
    CardsHabitacionesComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    HabitacionesComponent
  ],
  imports: [
    MaterialModule,
    PublicRoutingModule,
    CommonModule,
    RecaptchaModule

    // HeaderComponent

  ],

})
export class publicModule { }
