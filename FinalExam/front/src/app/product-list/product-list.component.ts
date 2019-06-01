import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';
import { AuthService } from '../shared/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public posts: IProduct[] = [];

  public productName: any = '';
  public productNameSearch: any;
  public productPrice: any;
  public productQuantity: any;
  public productCreatedBy: any;

  constructor(
    private provider: ProviderService,
    private location: Location,
    private auth: AuthService
  ) { }

  ngOnInit() {
    if(this.auth.isAuthenticated){
      this.provider.getProductsList().then(res => {
        this.posts = res;
      })
    }
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  navigateBack(){
    this.location.back()
  }

  createProduct(){
    if(this.productName !== '' && this.productPrice!=='' && this.productQuantity!==0){
      this.provider.createProduct(this.productName, this.productPrice, this.productQuantity).then(res => {
        this.posts.push(res)
      })
    }
  }
  searchProduct(){
    if(this.productNameSearch !== ''){
      this.provider.filterTitle(this.productNameSearch).then(res => {
        this.posts = res
      })
    }
  }

  

}
