import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<div>
    <section>
      <router-outlet />
    </section>
  </div>`,

})
export class AppComponent {}
