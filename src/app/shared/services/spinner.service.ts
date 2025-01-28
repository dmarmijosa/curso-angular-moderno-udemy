import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class SpinnerService {
  //private isLoadingSubject = new BehaviorSubject<boolean>(false);
  readonly isLoading = signal<boolean>(false);
  //isLoading$= toObservable(this.isLoading);

  show(): void {
    this.isLoading.set(true);
    //this.isLoadingSubject.next(true);
  }

  hide(): void {
    this.isLoading.set(false);
  }
}
