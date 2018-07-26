import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is simply a test.', 'http://doingstuffoutdoors.com/wp-content/uploads/2018/04/' +
      'fun-christmas-cake-recipe-image-url-http-keyassets-p2-timeincuk-net-wp-prod-content-uploads-sites-50-2016-07-jamaican-jpg-q-82.jpg'),
    new Recipe('A Cooky recipe', 'This is delitious test.', 'http://dubai.ru.com/uploads/posts/2016-11/1478162567_eda'
      + '_sladkoe_pirozhnoe_vypechka_frukty_yagody_inzhir_smorodina_chernika_med_desert_1680x1050.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  OnRecipeSelected( recipe: Recipe ) {
    this.recipeWasSelected.emit( recipe );
  }

}
