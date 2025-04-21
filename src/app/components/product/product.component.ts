import { Component,  input } from '@angular/core';

import {StrutureProduct } from '../../services/ApiContract';


@Component({
  selector: 'home-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  products  = input<StrutureProduct []>();
}
