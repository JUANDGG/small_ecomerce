import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet],
  template: `<section>
    <router-outlet />
  </section>`,
})
export class AuthComponent {}
