import { Component, input, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-header',
  imports: [RouterLink ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = input<string>("");
}
