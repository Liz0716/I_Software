import { CommonModule, NgClass } from '@angular/common';
import { publicModule } from './../public.module';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { log } from 'console';
import { BehaviorSubject } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('tabAnimation', [
      state('void', style({ transform: 'translateX(100%)' })),
      state('*', style({ transform: 'translateX(0%)' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class LandingPageComponent implements OnInit {

  perro: boolean = true;

  mapValue(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Uso de la función mapValue







  ngOnInit(): void {
  }

  constructor(private router: Router){
    const habitaciones = {nombre: "Si", descripcion: 'tambien', Precio:100}
  }

  veo(){
    console.log(JSON.parse(localStorage.getItem('dataUser') || ''));

  }

  instagram = 1;

  // accessData = JSON.parse(localStorage.getItem('dataUser') ?? '')?.nombre ?? "";
  accessData: any =JSON.parse(localStorage.getItem('dataUser') ?? '{}')?.nombre ?? ''

  // var dataUser:any = localStorage.getItem('dataUser');
  // dataUser = JSON.parse(dataUser);
  // console.log(dataUser);
  // this.perro = dataUser.rol;
  // console.log(`Perro es ${this.perro}` );


habitaciones = {nombre: "Habitacion super duper wuhu", descripcion: 'Aqui va la info de los servicios y tenemos muchisimo  git ipsum atque, asperiores obcaecati deleniti, placeat possimus, dolorem cumque', Precio:101111110}

  scrollPosition: number = 0;

  // Método decorado con HostListener para detectar el evento de scroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Obtén la posición actual del scroll
    this.scrollPosition = window.scrollY;
    // Puedes hacer lo que desees con this.scrollPosition
    // Por ejemplo, imprimirlo en la consola
    console.log('Posición de scroll:', this.scrollPosition);
    console.log(this.instagram);

    this.instagram = this.scrollPosition
    console.log(this.instagram);


  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }


  redireccionar(){
    this.router.navigate(['login']);
  }




  links = ['landing', 'habitaciones', 'landing', 'landing', 'Login'];
  titles = ['Home a', 'Habitaciones B', 'Servicios C', 'Contacto', 'Login'];
  activeLink = this.links[0];
  myColor = 'primary';


  



}

