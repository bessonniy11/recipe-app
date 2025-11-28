import { Component, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgIf, NgFor, Location } from '@angular/common';
import { RECIPES } from '../../data/recipes';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent implements OnInit {
  recipe = signal<Recipe | null>(null);
  currentIndex = signal(0);

  gallery = computed(() => {
    const item = this.recipe();
    if (!item) return [];
    return item.images && item.images.length > 0 ? item.images : [item.image];
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const found = RECIPES.find((r) => r.id === id);
    if (!found) {
      this.router.navigateByUrl('/');
      return;
    }
    this.recipe.set(found);
    this.currentIndex.set(0);
  }

  goPrev() {
    const gallery = this.gallery();
    if (!gallery.length) return;
    this.currentIndex.update((prev) => (prev - 1 + gallery.length) % gallery.length);
  }

  goNext() {
    const gallery = this.gallery();
    if (!gallery.length) return;
    this.currentIndex.update((prev) => (prev + 1) % gallery.length);
  }

  goBack() {
    this.location.back();
  }
}
