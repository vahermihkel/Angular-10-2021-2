import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { CategoryService } from 'src/app/services/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  categories: string[] = [];

  constructor(private itemService: ItemService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.categoriesInService;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form);
      console.log(form.value);
      this.itemService.itemsInService.push(form.value);
    }
    console.log("nuppu vajutati");
  }

}
