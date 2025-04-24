import { Component } from '@angular/core';
import { IsimpleRecipe } from '../../models/simpleRecipe.interface';
import { CommonModule } from '@angular/common';
import { SimpleRecipeItemComponent } from '../simple-recipe-item/simple-recipe-item.component';

@Component({
  selector: 'app-simple-recipe',
  standalone: true,
  imports: [CommonModule, SimpleRecipeItemComponent],
  templateUrl: './simple-recipe.component.html',
  styleUrl: './simple-recipe.component.scss',
})
export class SimpleRecipeComponent {
  recipes: IsimpleRecipe[] = [
    {
      id: 1,
      title: 'Snack',
      description: 'Big and Juicy Wagyu Beef Cheeseburger',
      cover:
        'https://journalmetro.com/wp-content/uploads/2022/10/Sans-titre-16.png?resize=1051%2C591',
    },
    {
      id: 2,
      title: 'Fish',
      description: 'Fresh Lime Roasted Salmon with Ginger Sauce',
      cover:
        'https://s3-media0.fl.yelpcdn.com/bphoto/wYQi7ilHqqE7rQELoTprtA/348s.jpg',
    },
    {
      id: 3,
      title: 'Breakfast',
      description: 'Strawberry Oatmeal Pancake with Honey Syrup',
      cover:
        'https://cdn.shopify.com/s/files/1/1569/1929/files/One_Hungry_Asian_Curry_Goat_Noodles_Tropical_Sun_Curry_Goat_Seasoning_LQ.jpg?v=1625659118',
    },
    {
      id: 4,
      title: 'Healthy',
      description: 'Fresh and Healthy Mixed Mayonnaise Salad',
      cover:
        'https://www.lalibre.be/resizer/v2/XU5FICYVXJGGLAOKIB727WT7XI.jpg?auth=a988816da800c6f1befd55ac129dd77f939bcd18669efe6de1c44a5da8b8cb4a&width=1200&height=800&quality=85&focal=1875%2C1302',
    },
    {
      id: 5,
      title: 'Meat',
      description: 'Chicken Meatbails with Cream Cheese',
      cover:
        'https://huilerie-richard.com/wp-content/uploads/2021/01/Boulettes.png',
    },
    {
      id: 6,
      title: 'Salad',
      description: "Don't forget to eat healthy food",
      cover:
        'https://equipenutrition.ca/sites/default/files/articles/D9%20Image%20en-te%CC%82te%20articles%20%28te%CC%81le%CC%81charger%20a%CC%80%2090%25%20jpeg%29%20%281%29_8.jpg',
    },
    {
      id: 7,
      title: 'Sweet',
      description: 'Fruity Pancake with Orange & Blueberry',
      cover:
        'https://cuisinerigbas.com/wp-content/uploads/2019/09/joseph-gonzalez-hTR1XPtTo_k-unsplash-scaled.jpg',
    },
    {
      id: 8,
      title: 'Snack',
      description: 'The Best Easy One Pot Chicken and Rice',
      cover:
        'https://images.deliveryhero.io/image/fd-my/Products/1500159885.jpg?width=%s',
    },
    {
      id: 9,
      title: 'Noodies',
      description: 'The Creamiest Creamy Chicken and Bacon Pasta',
      cover: 'https://cdn-media-1.freecodecamp.org/images/0*OnSu8IZp3yv85Qe_.',
    },
  ];
}
