import { Component, OnInit } from '@angular/core';
import { ICategoryList } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public CategoryLists: ICategoryList[] = [];

  public CategoryListName: string = ""

  constructor(
    private provider: ProviderService,
    //private location: Location,
    private auth: AuthService
    ) { }

  ngOnInit() {
    
    this.provider.getCategoryLists().then(res => {
      this.CategoryLists = res;
      console.log(res);
    })
  }
  


}
