import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  items: Item[] = [];

  // tehke constructorisse ühendus 
  //ItemService-ga (! import)
  constructor(private itemService: ItemService) { }

  // pange ülemisse muutujasse väärtus
  // itemService-i seest
  ngOnInit(): void {
    this.items = this.itemService.itemsInService;
  }

  // onRemoveItem 
  // cart.component.ts-s
  onRemoveItem(item: Item) {
    let index = this.itemService.itemsInService.indexOf(item);
    this.itemService.itemsInService.splice(index,1);
  }
}
