import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ViewItemsComponent } from './admin/view-items/view-items.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewComponent } from './home/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AddItemComponent,
    EditItemComponent,
    AdminHomeComponent,
    ViewItemsComponent,
    NavbarComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
