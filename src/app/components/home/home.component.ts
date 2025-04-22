import { Component, signal ,effect} from '@angular/core';
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
   _categorySelected = signal<string>('');
   _isCategorySelected  = signal<boolean>(false);
   _isTitleSelected =false
   
  
  constructor(public _router : Router ,private  fetchinService: FetchinService){


    //load categories 
    this.fetchinService.getDataObservable<string[]>('/products/categories').subscribe(data => {
      this._categories.set(data);
    });



    effect(() => {
      const category = this._categorySelected();
      if (category) {
        const c: string[] = this._categories();

        const search = c.filter(e => e ==  this._categorySelected())

        if(search.length>0){
          this._isCategorySelected.set(true)
        }else {
          this._isCategorySelected.set(false)
        }
      }

      

      
    });


    //load products    
    effect(()=>{
      if(!this._isCategorySelected()){
        this.fetchinService.getDataObservable<StrutureProduct[]>('/products').subscribe(data => {
          this._products.set(data); 
        });
      }else {
        this.fetchinService.getDataObservable<StrutureProduct[]>('/products/category/' +this._categorySelected()).subscribe(data => {
          this._products.set(data); 
        });
      }
  
    })
  }



  handlerCategorySelected (categorie :string){
    this._categorySelected.set(categorie) 
  }

  handlerTitleSelected (isSelect :boolean){
    this._isTitleSelected =isSelect

  }

  

  
}
