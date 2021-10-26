import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsInService: any[] = [
    {hind: 150, pealkiri: "sdasds1"},
    {hind: 251, pealkiri: "anwjdn1"},
    {hind: 124, pealkiri: "weqw2"},
    {hind: 421, pealkiri: "asdasf"},
    {hind: 15, pealkiri: "csdas3"}
  ];

  constructor() { }
}
