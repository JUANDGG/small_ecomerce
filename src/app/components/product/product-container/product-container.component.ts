import { Component, signal } from '@angular/core';
import { FetchinService } from '../../../services/FetchinService';
import { StrutureProduct } from '../../../util/struturesApi';
import { ProductComponent } from "../product_target/product.component";

@Component({
  selector: 'home-product-container',
  imports: [ProductComponent],
  templateUrl: './product-container.component.html',

  
})
export class ProductContainerComponent {

  //load products 
  _products = signal<StrutureProduct[]>([])

  constructor(private fetchinService :FetchinService){
    this.fetchinService.getDataObservable<StrutureProduct[]>('/products').subscribe(data => {
      this._products.set(data); 
    });
  }

}
