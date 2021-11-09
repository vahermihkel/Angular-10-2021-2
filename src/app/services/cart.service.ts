import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
              // [{hind: 251, pealkiri: "anwjdn1"}]
  cartItemsInService: Item[] = [];

  constructor() { }
}
