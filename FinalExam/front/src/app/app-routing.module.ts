import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserProductsComponent } from './user-products/user-products.component';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'user_products', component: UserProductsComponent},
  {path: 'user_products/id', component: UserProductsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
