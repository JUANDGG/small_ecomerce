import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { ProductComponent } from '../components/product/product.component';


@Injectable({
    providedIn: 'root'
  })

export class ProductService {
    constructor(private http: HttpClient) {}
  
    getproducts(): Observable<ProductComponent[]> {
      return this.http.get<ProductComponent[]>('https://api.ejemplo.com/productos');
    }
  }