import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("esemeId");
    console.log(id);
    this.item = this.itemService.itemsInService.find(toode => toode.id == id);
    console.log(this.item);
  }

}
