import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.swiggy.com%2Fwp-content%2Fuploads%2F2017%2F12%2Fhomechef_Oktoberfest_Chicken_Schnitzel__2_of_3_-e02a1523fb71deb361624a9c88a42996-e02a1523fb71deb361624a9c88a42996.jpg&f=1',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fassets.epicurious.com%2Fphotos%2F556cd06a5fa91f011a459ef7%2Fmaster%2Fpass%2Fep-05272015-pasta-spaghetti-with-crab-%2B-tomatoes_6x4.jpg&f=1',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
  ];
  constructor() {

  }
  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }
}
