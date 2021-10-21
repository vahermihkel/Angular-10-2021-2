import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
              // [{hind: 251, pealkiri: "anwjdn1"}]
  cartItemsInService: any[] = [];

  constructor() { }
}
