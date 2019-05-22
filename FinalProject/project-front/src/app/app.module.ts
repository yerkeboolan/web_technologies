import { BrowserModule } from '@angular/platform-browser';
import { ClassProvider, NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './AuthInterceptor';
import { HttpClientModule } from '@angular/common/http';
import { ProviderService } from './shared/services/provider.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { SectionDetailComponent } from './section-detail/section-detail.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { CommentListComponent } from './comment-list/comment-list.component';
//import { TrainerCommentListComponent } from './trainer-comment-list/trainer-comment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    SectionDetailComponent,
    LoginComponent,
    RegisterComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    SectionDetailComponent,
    TrainerDetailComponent,
    CommentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProviderService,
    <ClassProvider> {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
