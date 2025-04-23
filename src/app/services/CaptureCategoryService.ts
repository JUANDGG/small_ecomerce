import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CaptureCategoryService {

  private _nowCategory = signal<string | null>(null);


  setNowCategory (category :string){
        this._nowCategory.set(category)
    }

    getNowCategory (){
        return this._nowCategory.asReadonly
    }

}
