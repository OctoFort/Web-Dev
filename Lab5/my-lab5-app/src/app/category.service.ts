import { Injectable } from '@angular/core';
import {Category} from './interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  protected categories: Category[] =  [
    { id: 1, name: 'Computers' },
    { id: 2, name: 'Smartphones' },
    { id: 3, name: 'Accessories' },
    { id: 4, name: 'Gaming' }
  ];

  getCategories() {
    return this.categories;
  }
}
