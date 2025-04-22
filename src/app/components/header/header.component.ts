import { Component, input, Input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryContainerComponent } from '../category/category-container/category-container.component';

@Component({
  selector: 'home-header',
  imports: [RouterLink ,CategoryContainerComponent ],
  templateUrl: './header.component.html',
  
})
export class HeaderComponent {
  title = input<string>("");
  categories = input<string[]>([])
  categoryClicked = output<string>()
  titleClicked = output<boolean>()

  handlerCategoryClick (event :Event){
    const clickedElement = event.target as HTMLElement;
    const text = clickedElement.innerText;
    this.categoryClicked.emit(text)

  }


  handlerTitleClicked () {
    this.titleClicked.emit(true)

  }


}
