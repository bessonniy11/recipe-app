import { Component, computed, signal } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { RecipeListComponent } from '../../components/recipe-list/recipe-list.component';
import { RECIPES } from '../../data/recipes';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchFormComponent, RecipeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly allRecipes = RECIPES;
  private readonly searchTerm = signal('');

  readonly filteredRecipes = computed<Recipe[]>(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.allRecipes;
    return this.allRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(term)
    );
  });

  onSearch(term: string) {
    this.searchTerm.set(term);
  }
}
