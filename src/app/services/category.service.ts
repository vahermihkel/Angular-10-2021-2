import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesInService = ['tablets','vitamins','oils','herbs'];

  constructor() { }
}
