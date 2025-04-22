import { Component, signal ,effect} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent , RouterOutlet],
  templateUrl: './home.component.html',
  
})
export class HomeComponent {
   _title = "Drubby"
   
  
  constructor(public _router : Router ){}

}
