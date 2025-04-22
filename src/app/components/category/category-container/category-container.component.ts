import { Component, signal } from '@angular/core';
import { FetchinService } from '../../../services/FetchinService';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { StrutureCategory } from '../../../util/struturesApi';

@Component({
  selector: 'home-category-container',
  imports: [CategoryItemComponent],
  templateUrl: './category-container.component.html',

})
export class CategoryContainerComponent {
  _categories = signal<StrutureCategory[]>([]);

  constructor(private fetchinService: FetchinService) {
    this.fetchinService.getDataObservable<string[]>('/products/categories').subscribe(data => {
      const structuredData = data.map(category => ({ name: category }));
      this._categories.set(structuredData);
    });
  }

}
