import {FetchinService} from './FetchinService';
import {StrutureProduct} from '../util/struturesApi';
import {effect, Injectable, signal} from '@angular/core';
import {CaptureCategoryService} from './CaptureCategoryService';

@Injectable({
  providedIn: 'root'
})
export class GetProducts {
  _products = signal<StrutureProduct[]>([])

  constructor(private fetchinService :FetchinService , private captureCategoryService :CaptureCategoryService){
      this.fetchinService.getDataObservable<StrutureProduct[]>('/products').subscribe(data => {
      this._products.set(data);
    });
  }
}
