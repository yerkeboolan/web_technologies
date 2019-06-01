import { Injectable, EventEmitter } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { IProduct, IUser } from '../models/models';

@Injectable({
  providedIn: 'root'
})

export class ProviderService extends MainService{
  constructor(http: HttpClient) { 
    super(http);
  }

  getProductsList(): Promise<IProduct[]> {
    return this.get('http://localhost:8000/api/products/', {});
  }

  createProduct(user: IUser, product:IProduct, count: any,): Promise<any>{
    return this.post('http://localhost:8000/api/user_products/', {
    
    });
  }

  filterTitle(name: string): Promise<any> {
    return this.get(`http://localhost:8000/api/products/`, {
      search: name
    })
  }
}
