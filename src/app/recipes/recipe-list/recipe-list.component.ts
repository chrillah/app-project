import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

    recipes: Recipe[] = [
        new Recipe("Kebabpizza", "Fett god pizza", "https://img.koket.se/standard-mega/stellas-kebabpizza.png.jpg"),
        new Recipe("Vegetarisk pizza", "Också fett god pizza,", "https://receptfavoriter.se/sites/default/files/styles/recipe_16x9/public/vegetarisk_pizza_i_langpanna_85_1060.jpg"),
    ];

}
