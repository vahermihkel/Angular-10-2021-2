import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { ViewItemsComponent } from './admin/view-items/view-items.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // URL path brauseris: "localhost:4200", HomeComponent sisu koos HTML-ga,
                                            // mida näidatakse kasutajale
                                            // CSS-ga kujundatakse
                                            // .ts failiga lisatakse dünaamilisust
  { path: "", component: HomeComponent },
  // kui on brauseris "localhost:4200/ostukorv", siis näitab cart.component.html-i ja lisasid
  { path: "ostukorv", component: CartComponent },
  { path: "admin", component: AdminHomeComponent },
  { path: "admin/lisa-ese", component: AddItemComponent },
  { path: "admin/esemed", component: ViewItemsComponent },
  { path: "admin/muuda-ese", component: EditItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
