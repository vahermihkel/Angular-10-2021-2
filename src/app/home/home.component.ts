import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// TEISIPÄEV: 4 uut Componenti Admin kausta
// * Eseme lisamise jaoks
// * Eseme muutmise jaoks
// * Eseme listi jaoks kust saab ka kustutada (X nupu alusel)
// * Admin menüü paneel

// Kõigile route'd app-routingusse

// Admin menüü paneelis saab kõigile peale liikuda (lisama, vaatama, muutma)

// Uus Service, kuhu lisan need esemed mis on Home-s (enam ei hoia Home-s
// esemete listi vaid tõstan item.Service-sse)

// Esemete listi välja kuvama - 
// 1) constructoris ühendus
// 2) panna ülemisse muutujasse this. abil Service-i seest väärtused
// 3) ngForiga need välja kuvada

// 4) Tee HTMLs kustutamiseks nupp igaühele ngFor sisse (click) abil
// 5) Kustuta täpselt samamoodi nagu tegime Cartis

// NELJAPÄEV add-item
// ngForm
// <label>
// <input type="text">
// w3schools vorme vaadata

// Scripti kasutusele võtmine

  // esemed = [150,251,124,15];

  // pealkirjad = ["anwjdn1", "weqw2", "csdas3"];

  // objekt = {price: 150, title: "sdasds1"};

  objektiMassiiv = [
    {hind: 150, pealkiri: "sdasds1"},
    {hind: 251, pealkiri: "anwjdn1"},
    {hind: 124, pealkiri: "weqw2"},
    {hind: 421, pealkiri: "asdasf"},
    {hind: 15, pealkiri: "csdas3"}
  ]

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("home componendis");
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
