import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // kooloniga annan tüübi, võrdusmärgiga annan väärtuse
  cartItems: any[] = [];

  // võtke ngFori abil kasutusele

  // minge home.component.htmli
  // sealt võtke ngFor osa - kopeerige kust algab div kuni selle div-ni
  // kust lõpeb ngFor

  // pange see ngFor kuvama "cartItems" muutuja sisu

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // ostukorvi minek - pannakse käima kui minnakse
    // selle component htmli peale
    // ! see funktsioon läheb enne HTMLi käima

    // võtame kõik esemed mis on ostukorvi lisatud
    console.log("cart componendis");

                  // tehke ise cartService ühendus
    this.cartItems = this.cartService.cartItemsInService;
  }

}

// SIIA TEEME OSTUKORVIST KUSTUTAMISE .splice();
// JA OSTUKORVI TÜHJENDAMISE = [];

// ostukorvi kogusumma arvutuse
// JavaScripti forEach() funktsiooni
