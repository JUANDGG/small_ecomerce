import { Injectable, signal } from "@angular/core";
import { FetchinService } from "./FetchinService";


@Injectable({
    providedIn: 'root'
})

export class GetCategoriesService {
    
    private _categories = signal<string []>([]);

    constructor(private _fetchinService :FetchinService) {
        this._fetchinService.getDataObservable<string[]>('/products/categories').subscribe(data => {
            this._categories.set(data);
        });
    }

    getCategories () {
        return this._categories
    }

}