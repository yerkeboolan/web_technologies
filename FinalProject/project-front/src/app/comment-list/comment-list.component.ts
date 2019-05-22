import { Component, OnInit, Input } from '@angular/core';
import { ICategoryList,IComment, ISection } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
@Input() num:string;
  public comments: IComment[] = [];
  public section:ISection;
 public content:string;
public id:number;
  constructor(
    private provider: ProviderService,
   
    private route: ActivatedRoute,
    private auth: AuthService
    ) { }

  ngOnInit() {
  
  if(this.auth.isAuthenticated){
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
    if(this.id){
      this.provider.getSectionComments(this.id).then(res => {
        this.comments= res
      })
      this.provider.getSectionDetail(this.id).then(res => {
        this.section = res
        console.log(this.section)
      })
    }
  
  }
  }


 

  createComment(){
    if(this.content != ''){
    this.provider.createComment(this.section.id,this.content).then(res => {
      this.comments.push(res)
    })
  }
  }
}
