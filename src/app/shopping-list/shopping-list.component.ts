import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient( 'Tomatoes', 4 ),
    new Ingredient( 'Apples', 5 ),
    new Ingredient( 'Lime', 3 )
  ];
  constructor() { }

  addCreatedIngredient( newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

  ngOnInit() {
  }

}
