import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: string[] = [];

  // ühendus CategoryService-ga
  constructor(private categoryService: CategoryService) { }

  // võtke CategoryService muutujast categoriesInService väärtused
  // ja pange ülesse muutujasse
  ngOnInit(): void {
    this.categories = this.categoryService.categoriesInService;
  }

  onDeleteCategory(category: string) {
    let j2rjekorraNumber = this.categoryService.categoriesInService.indexOf(category);
    this.categoryService.categoriesInService.splice(j2rjekorraNumber,1);
  }
  // kokkuarvutust pole vaja: leia indeks ja splice abil kustuta

  onSubmit(form: NgForm) {
    console.log("NUPPU VAJUTATI");
    console.log(form);
    if (form.valid){
      console.log("MIDAGI SISESTATI");
      this.categoryService.categoriesInService.push(form.value.category)
    }
  }
}
