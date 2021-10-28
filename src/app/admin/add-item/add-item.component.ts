import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log(form);
      console.log(form.value);
      this.itemService.itemsInService.push(form.value);
    }
    console.log("nuppu vajutati");
  }

}
