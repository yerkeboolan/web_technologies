import { Component, OnInit } from '@angular/core';
import { ICategory,ISection,ITrainers } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';

import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.scss']
})
export class SectionDetailComponent implements OnInit {

  public id: number = 0;
 
  public trainers : ITrainers[]=[]
  
  public section: any = {}

  constructor(
    private provider: ProviderService,
    private router: ActivatedRoute,
    
    private auth: AuthService
  ) { }

  ngOnInit() {
    if(this.auth.isAuthenticated){
    this.id = parseInt(this.router.snapshot.paramMap.get('id'))
      
    if(this.id){
      this.provider.getSectionDetail(this.id).then(res => {
        this.section = res
      })
      this.provider.getSectionTrainers(this.id).then(res=>{
        this.trainers = res

      })
      }
    }
  }

}
