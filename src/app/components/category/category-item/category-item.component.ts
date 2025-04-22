import { Component, input, output } from '@angular/core';
import { StrutureCategory } from '../../../util/struturesApi';

@Component({
  selector: 'home-category-target',
  imports: [],
  templateUrl: './category-item.component.html',
})
export class CategoryItemComponent {
  struture  = input<StrutureCategory>({} as StrutureCategory)   
  nameCategory = output<string>();

  handleClick(event :Event){
    const name = event.target as HTMLElement
    this.nameCategory.emit(name.innerText)
  }

}
