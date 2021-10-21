import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // esemed = [150,251,124,15];

  // pealkirjad = ["anwjdn1", "weqw2", "csdas3"];

  // objekt = {price: 150, title: "sdasds1"};

  objektiMassiiv = [
    {price: 150, title: "sdasds1"},
    {price: 251, title: "anwjdn1"},
    {price: 124, title: "weqw2"},
    {price: 421, title: "asdasf"},
    {price: 15, title: "csdas3"}
  ]

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("home componendis");
  }

  lisaOstukorvi(item: any) {
    console.log(item);
    console.log("töötab");
    console.log(this.objektiMassiiv);
    // siin lisame Service-sse kus 
    // hoitakse ostukorvi esemeid
    this.cartService.cartItemsInService.push(item);
  }

}
