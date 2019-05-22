import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {CategoryListComponent} from './category-list/category-list.component'
import {CategoryDetailComponent} from './category-detail/category-detail.component'

import { SectionDetailComponent } from './section-detail/section-detail.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { TrainerCommentListComponent } from './trainer-comment-list/trainer-comment-list.component';



const routes: Routes = [
  {path: '', component: CategoryListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: CategoryListComponent},
  {path: 'category-detail/:id', component: CategoryDetailComponent},
  {path: 'section/:id', component: SectionDetailComponent},
  {path: 'trainer/:id', component: TrainerDetailComponent},
  {path: 'section/:id/comments', component: CommentListComponent},
  {path: 'trainer/:id/comments', component: TrainerCommentListComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
