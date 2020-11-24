import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('Ćevapi',
  //   'Tasty Bosnian traditional food !',
  //   'https://cdn.tasteatlas.com/images/dishrestaurants/80a628552d9248929d6ace4826a3eb4c.jpg?mw=1300',
  //    [
  //      new Ingredient ('Meat', 10),
  //      new Ingredient ('Onion', 2),
  //      new Ingredient ('Ajvar', 1)
  //    ]),
  //   new Recipe('Baklava',
  //   'Tasty Bosnian sweets !',
  //   'https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png',
  //   [
  //     new Ingredient ('Pistachio', 15),
  //     new Ingredient ('Walnut', 10)
  //   ]),
  //   new Recipe('Pita',
  //   'Tasty Bosnian Pita !',
  //   'https://c8.alamy.com/comp/DC9XE9/pita-burek-is-one-of-bosnias-most-popular-traditional-specialty-DC9XE9.jpg',
  //   [
  //     new Ingredient ('Potato', 5),
  //     new Ingredient ('Jufka', 1)
  //   ])
  // ];
  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService){}

  setRecipes(recipes: Recipe[])
  {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  moveToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.AddToShoppingList(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
