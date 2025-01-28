import { AsyncPipe  } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '@features/categories/categories.service';
import { categorybuttonComponent } from '@features/categories/category-button/category-button.component';
import { ProductsService } from '@features/products/products.service';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [AsyncPipe, categorybuttonComponent],
  styleUrl: './category-filter.component.scss',
  template: `
    <h2 class="heading">
      <span class="highlight">Popular</span>
      categories
    </h2>
    <ul class="list-container">
      <!-- TODO: Can be an  component -->
      <!--      <li>-->
      <!--        <button type="button" (click)="onClick('all')" class="btn btn-hover">-->
      <!--          {{ 'ALL' }}-->
      <!--        </button>-->
      <!--      </li>-->
      <app-category-button category="ALL" [(filterCategory)]="selectedCategory"/>
      <!-- TODO: Can be an  component -->
      @for (category of categories(); track $index) {
      <li>
        <app-category-button [category]="category" [(filterCategory)]="selectedCategory"></app-category-button>
      </li>
      }
    </ul>
  `,
})
export class CategoryFilterComponent {
  readonly categories = inject(CategoryService).categories;
  private readonly productoService = inject(ProductsService);
  private readonly _router = inject(Router);

  selectedCategory = signal<string>('all');

  constructor() {
    effect(() => this.productoService.filterProductsByCategory(this.selectedCategory()),{allowSignalWrites:true});
  }

  onClick(category: string): void {
    this._router.navigate([], {
      queryParams: { category: category === 'all' ? null : category },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  trackById(index: number, category: string): string {
    return category;
  }
}
