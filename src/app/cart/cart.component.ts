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
  //[{hind: 251, pealkiri: "anwjdn1"}]

  sumOfCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // ostukorvi minek - pannakse käima kui minnakse
    // selle component htmli peale
    // ! see funktsioon läheb enne HTMLi käima

    // võtame kõik esemed mis on ostukorvi lisatud
    console.log("cart componendis");

                      // [{hind: 251, pealkiri: "anwjdn1"}]
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
 //   [{hind:251,p:"1"},{hind: 150,p:"2"},{hind:200,p:"3"}].forEach();
 // this.cartItems.forEach({hind:251,p:"1"} =>  251 = 0 + 251  )
// this.cartItems.forEach({hind: 150,p:"2"} =>  401   =  251 + 150  )
// this.cartItems.forEach({hind:200,p:"3"} =>  601   =  401 + 200  )

    // this.cartItems.forEach(toode => this.sumOfCart = this.sumOfCart + toode.hind);
    this.cartItems.forEach(toode => this.sumOfCart += toode.hind);

  }

  onEmptyCart() {
    this.cartService.cartItemsInService = [];
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
  }

  onDeleteFromCart(ese: any) {
          //0            // [{hind: 251, pealkiri: "anwjdn1"}]
    let j2rjekorraNumber = this.cartService.cartItemsInService.indexOf(ese);
    this.cartService.cartItemsInService.splice(j2rjekorraNumber,1);
    this.sumOfCart = 0;
    this.cartItems.forEach(toode => this.sumOfCart += toode.hind);
  }
}

// ostukorvi kogusumma arvutuse
// JavaScripti forEach() funktsiooni
