import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { publicModule } from '../public.module';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { log } from 'console';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ConexionService } from '../conexion.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('tabAnimation', [
      state('void', style({ transform: 'translateX(100%)' })),
      state('*', style({ transform: 'translateX(0%)' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],

})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private fb:FormBuilder, private conexion:ConexionService) {

    var captchaResponseV2 = ""
  }

  ngOnInit(): void {
  }

  Formulario: FormGroup = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    // captcha: this.captchaResponseV2,
    // existencias: [0, [Validators.required, Validators.min(1)]]
  });


  reenviar(direccion:string){
    this.router.navigate([direccion])
  }

  redireccionar(){
    this.router.navigate(['login']);
  }



  captchaResponseV2 = ""

  resolved(captchaResponse: string) {
   this.captchaResponseV2 =  captchaResponse;
  }


  crear(){
    if(this.captchaResponseV2 == ""){
      console.log("Aqui algo malo paso no firmaron el captcha")
    }
    if(this.Formulario.invalid){
      console.log(this.Formulario.value);

      console.log("El formulario falloo por ser el formulario xd");

      this.Formulario.markAllAsTouched();
      return
    }

    console.log(this.Formulario.value);
    console.log("Salio todo bien en el login!");

  }



  Enviar(){
    if(this.Formulario.invalid){
      console.log("es invalido");
      this.Formulario.markAllAsTouched()
    }


    console.log("Es valido");


    this.conexion.Post('login', 'Login', this.Formulario.value).subscribe((dato:any) => {
      console.log("Se consigio la entrada del form de la base de datos" + dato);

      console.log(dato);
      if(dato.status){
        // localStorage.setItem('token', dato._kmd.authtoken);
        localStorage.setItem('dataUser', JSON.stringify(dato));
        // localStorage.setItem('dataUser',dato);
        //   this.router.navigate(['producto']);
      }
    })


  }

  links = ['landing', 'habitaciones', 'landing', 'landing', 'Login'];
  titles = ['Home a', 'Habitaciones B', 'Servicios C', 'Contacto', 'Login'];
  activeLink = this.links[0];
  myColor = 'primary';


  scrollPosition = 0;





}
