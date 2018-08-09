import { Ingredient } from "../shared/ingredients.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes', 10)
      ];
      
    getIngredients() {
        return this.ingredients.slice();
    }

    adIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
    //   for (let ingredient of ingredients) {
    //     this.adIngredient(ingredient);
    //   }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
    }
}