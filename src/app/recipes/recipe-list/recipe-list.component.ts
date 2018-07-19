import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is simply a test.', 'http://doingstuffoutdoors.com/wp-content/uploads/2018/04/' +
      'fun-christmas-cake-recipe-image-url-http-keyassets-p2-timeincuk-net-wp-prod-content-uploads-sites-50-2016-07-jamaican-jpg-q-82.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
