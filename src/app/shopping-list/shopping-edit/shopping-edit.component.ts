import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() createdIngredient = new EventEmitter<Ingredient>();
  @ViewChild( 'nameInput' ) ingredientName: ElementRef;
  @ViewChild( 'amountInput' ) ingredientAmount: ElementRef;
  ingredients = [];

  constructor() { }

  ngOnInit() {
  }

  onAddIngredientPress() {
    const ingName = this.ingredientName.nativeElement.value;
    const ingAmount = this.ingredientAmount.nativeElement.value;
    this.createdIngredient.emit(new Ingredient(ingName, ingAmount));
  }

}
