import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'recipes', component: RecipesComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', component: PageNotFoundComponent}
];
