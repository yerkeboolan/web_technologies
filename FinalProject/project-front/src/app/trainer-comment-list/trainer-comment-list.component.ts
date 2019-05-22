import { Component, OnInit } from '@angular/core';
import { ICategoryList,ITrainerComment, ISection } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';

export class TrainerCommentListComponent implements OnInit {


  @Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
  })

  
    public comments: ITrainerComment[] = [];
  
    public id:number; 
  
    constructor(
      private provider: ProviderService,
     
      private router: ActivatedRoute,
      private auth: AuthService
      ) { }
  
    ngOnInit() {
      if(this.auth.isAuthenticated){
        this.id = parseInt(this.router.snapshot.paramMap.get('id'))
      if(this.auth.isAuthenticated){
      this.provider.getTrainerComments(this.id).then(res => {
        this.comments = res;
      })
    }
    }
  }
  }
  
  
  