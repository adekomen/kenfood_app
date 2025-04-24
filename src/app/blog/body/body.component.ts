import { Component, Input, OnInit } from '@angular/core';
import { BodyItemRecipeComponent } from '../body-item-recipe/body-item-recipe.component';
import { CommonModule } from '@angular/common';
import { BodyItemArticleComponent } from '../body-item-article/body-item-article.component';
import { IBlogArticle } from '../../models/blogArticle.interface';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, BodyItemArticleComponent, BodyItemRecipeComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  articles: IBlogArticle[] = [
    {
      id: 1,
      title: 'Crochet Projects for Noodle Lovers',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit,lias corrupti dignissimos ipsam hic.',
      cover:
        'https://images.slurrp.com/prod/recipe_images/transcribe/dinner/Canh-bun.webp?impolicy=slurrp-20210601&width=1200&height=675',
      author: 'Wade Warren',
    },
    {
      id: 2,
      title: 'Crochet Projects for Noodle Lovers',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit,lias corrupti dignissimos ipsam hic.',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKClV_6mC-wl4BckgWhnKvKDGUKc0CQWQOttUc9GFGAz_EYx09I2qLiTepXf3Rd8ilR74&usqp=CAU',
      author: 'Konstantin Ruskov',
    },
    {
      id: 3,
      title: 'Crochet Projects for Noodle Lovers',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit,lias corrupti dignissimos ipsam hic.',
      cover:
        'https://5.imimg.com/data5/SELLER/Default/2024/6/425376684/VP/MB/RQ/148640419/kitchen-staff-services-500x500.jpg',
      author: 'Magengo Gutemberg',
    },
    {
      id: 4,
      title: 'Crochet Projects for Noodle Lovers',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit,lias corrupti dignissimos ipsam hic.',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-glyTTATPcNM4WgVAvL1_-6iBrUJpucGH6ooA7nNTrXPyVYvdHLYemtHpqwouHe3e8-w&usqp=CAU',
      author: 'Leslie Alexander',
    },
    {
      id: 5,
      title: 'Crochet Projects for Noodle Lovers',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit,lias corrupti dignissimos ipsam hic.',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqyM5QapeQt9e2iTBoU2cUHqsz_e08vTBscTtamIE_L687VyfHsKgLAy_WTGuwzxTNpQ&usqp=CAU',
      author: 'Courtney Henry',
    },
    {
      id: 6,
      title: 'Crochet Projects for Noodle Lovers',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit,lias corrupti dignissimos ipsam hic.',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVO0R5A91fi6if-boD7SGO32-AaGqWLZ20NjGIe1madhVbmgz7txvXM_MwS0bMIn3rMQ&usqp=CAU',
      author: 'Albert Flores',
    },
  ];
}
