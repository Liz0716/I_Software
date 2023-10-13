import { Component, OnInit } from '@angular/core';
import { publicModule } from '../public.module';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('tabAnimation', [
      state('void', style({ transform: 'translateX(100%)' })),
      state('*', style({ transform: 'translateX(0%)' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  links = ['Login', 'landing', 'signup'];
  titles = ['Login', 'Landing', 'Signup'];
  activeLink = this.links[2];
  myColor = 'primary';


  scrollPosition = 0;



}
