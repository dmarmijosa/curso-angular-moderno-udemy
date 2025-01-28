import { Injectable } from '@angular/core';
import { CartStore } from './cart-state.service';
import { log } from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

@Injectable({
  providedIn: 'root'
})
export class CartStorageService {
  private readonly STORAGE_KEY!: 'Cart_Storage';

  loadState():CartStore | null{
    try{
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) :null;
    }catch (err){
      console.error('Error loading Cart state', err);
      return null;
    }
  }
  saveState(state:CartStore):void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
    }catch(err){
      console.log('Error while saving cart', err);
    }
  }
}
