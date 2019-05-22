import { Component, OnInit } from '@angular/core';
import { ICategory,ISection,ITrainers } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';
import { Location } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.scss']
})
export class TrainerDetailComponent implements OnInit {
  public trainer : any={}
  public id: number ;
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
      this.provider.getTrainerDetail(this.id).then(res => {

        this.trainer = res;
        console.log(this.trainer);
      })
      
     
    }
  }
  }

  navigateBack(){
    this.location.back()
  }

}
