import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  objektiMassiiv: any[] = [];

  constructor(private cartService: CartService,
    private itemService: ItemService) { }

  ngOnInit(): void {
    console.log("home componendis");
    this.objektiMassiiv = this.itemService.itemsInService;
  }

          // {hind: 251, pealkiri: "anwjdn1"}
  lisaOstukorvi(item: any) {
    console.log(item);
    console.log("töötab");
    console.log(this.objektiMassiiv);
    // siin lisame Service-sse kus 
    // hoitakse ostukorvi esemeid
    this.cartService.cartItemsInService.push(item);
  }

}
