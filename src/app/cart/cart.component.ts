import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // kooloniga annan tüübi, võrdusmärgiga annan väärtuse
  // tüübiks ükskõik milline massiiv ja väärtuseks tühi massiiv
  // ilma tüübita ma ei saa talle algväärtust anda, sest ta peab teadma
  // mille massiiv ta on
  cartItems: any[] = [];
  //[{hind: 251, pealkiri: "anwjdn1"}]

  // muutuja, millele annab väärtuseks 0
  sumOfCart = 0;

  // ühendab ära CartService klassi
  // ta otsib üles kus CartService asub ülemise impordi järgi
  constructor(private cartService: CartService) { }

  // läheb täpselt enne HTMLi käimapanemist
  ngOnInit(): void {
    // kuvab brauserisse console-i mingisuguse sõnumi
    // parem klõps -> inspect -> console
    console.log("cart componendis");

                      // [{hind: 251, pealkiri: "anwjdn1"}]
    this.cartItems = this.cartService.cartItemsInService;
 //   [{hind:251,p:"1"},{hind: 150,p:"2"},{hind:200,p:"3"}].forEach();
 // this.cartItems.forEach({hind:251,p:"1"} =>  251 = 0 + 251  )
// this.cartItems.forEach({hind: 150,p:"2"} =>  401   =  251 + 150  )
// this.cartItems.forEach({hind:200,p:"3"} =>  601   =  401 + 200  )

    // this.cartItems.forEach(toode => this.sumOfCart = this.sumOfCart + toode.hind);
    this.cartItems.forEach(cartItem => this.sumOfCart += cartItem.price);

  }

  onEmptyCart() {
    // siin teen Service-i tühjaks
    this.cartService.cartItemsInService = [];
    // kuvan välja cartItems, sellepärast vaja uuesti anda
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
  }

          //  {hind: 251, pealkiri: "anwjdn1"}
  onDeleteFromCart(item: any) {
          //0            // [{hind: 251, pealkiri: "anwjdn1"}]
    let index = this.cartService.cartItemsInService.indexOf(item);
    console.log(index);
                                        // 0,1,2,3
    this.cartService.cartItemsInService.splice(index,1);
    this.sumOfCart = 0;
    this.cartItems.forEach(cartItem => this.sumOfCart += cartItem.price);
  }
}

// ostukorvi kogusumma arvutuse
// JavaScripti forEach() funktsiooni
