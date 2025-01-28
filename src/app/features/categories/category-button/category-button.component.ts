import { ChangeDetectionStrategy, Component, input, model, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-button',
  standalone: true,
  template: `
    <li>
      <button type="button" (click)="handleClick()" class="btn btn-hover">
        {{ category()}}
      </button>
    </li>
  `,
  styles: [`
    .btn {
      @apply bg-primary-default text-base font-medium px-6 capitalize py-2 rounded-md flex items-center gap-2 text-white ease-linear duration-300;

      &-hover {
        @apply hover:bg-primary-dark;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class categorybuttonComponent {
  category =  input.required<string>();

  filterCategory=model.required<string>();
  handleClick(){
    this.filterCategory.set(this.category());
  }

}
