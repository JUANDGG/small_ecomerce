import { Component, signal} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { FetchinService } from '../../services/FetchinService';
import { StrutureProduct } from '../../services/ApiContract';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent ,ProductComponent , RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   _title = "Drubby"
   _products  =signal<StrutureProduct[]>([]) 
   _categories =signal<string[]>([]) 
  
  constructor(public _router : Router ,private  fetchinService: FetchinService){


    //load products
    this.fetchinService.getDataObservable<StrutureProduct[]>('/products').subscribe(data => {
      this._products.set(data); 
    });
    
    //load categories 
    this.fetchinService.getDataObservable<string[]>('/products/categories').subscribe(data => {
      this._categories.set(data);
    });

    //this.products = toSignal(this._productService.getproducts("/products"), { initialValue: [] });
  }

  

  

  
}
