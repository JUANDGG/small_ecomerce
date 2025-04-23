import { Component, input, output } from '@angular/core';
import { StrutureCategory } from '../../../util/struturesApi';
import { CaptureCategoryService } from '../../../services/CaptureCategoryService';
import { GetCategoriesService } from '../../../services/GetCategoriesService';

@Component({
  selector: 'home-category-target',
  imports: [],
  templateUrl: './category-item.component.html',
})
export class CategoryItemComponent {
  struture  = input<StrutureCategory>({} as StrutureCategory)   

  constructor(private captureCategoryService : CaptureCategoryService , private getCategoriesService :GetCategoriesService){}

  handleClick(event :Event){
    const name = (event.target as HTMLElement ).innerHTML

    const categories =this.getCategoriesService.getCategories()

    //I validate that the name that is clicked is actually in the API and not that the user has entered it with the intention of breaking the page on purpose as such,
    const filterCategory = categories().filter(category => category ==name)
  
    this.captureCategoryService.setNowCategory(name)
  }

}
