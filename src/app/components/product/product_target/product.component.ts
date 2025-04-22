import { Component,  input } from '@angular/core';

import {StrutureProduct } from '../../../util/struturesApi';


@Component({
  selector: 'home-product-target',
  imports: [],
  templateUrl: './product.component.html',
  
})

export class ProductComponent {
  
  //? esto declara la propiedad como opcional
  //! le dice a TS que la propiedad se asignará antes de usarse
  struture  = input<StrutureProduct>({} as StrutureProduct)   

}
