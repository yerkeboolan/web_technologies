import { Component, OnInit } from '@angular/core';
import { ICategory,ISection } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';
import { Location } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  public id: number = 0;
  public images: any = []
  public sections : ISection[]=[]
  
  public categoryList: any = {}

  constructor(
    private provider: ProviderService,
    private router: ActivatedRoute,
    private location: Location,
    private auth: AuthService
  ) { }

  ngOnInit() {

    if(this.auth.isAuthenticated){
    this.id = parseInt(this.router.snapshot.paramMap.get('id'))
      
    if(this.id){
      this.provider.getCategoryListDetail(this.id).then(res => {
        this.categoryList = res
      })
      this.provider.getCategoryImages(this.id).then(res=>{
        this.images = res

      })
      this.provider.getCategorySections(this.id).then(res=>{
        this.sections=res
      })
    }
  }
  }

  navigateBack(){
    this.location.back()
  }

}
