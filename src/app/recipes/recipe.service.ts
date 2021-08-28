import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
}
)
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Cơm chiên dương châu', "Ngon tuyệt cú mèo", 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg', [ new Ingredient('Meat', 1), new Ingredient('Fries', 30) ]),
        new Recipe('Cơm chiên hải sản', "Ăn ngon không chán :))", 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg', [ new Ingredient('Hot Dog', 30), new Ingredient('Buns', 30) ])
      ];

      constructor(private slService: ShoppingListService){

      }

      getRecipes() {
        return this.recipes;
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
      }
}
