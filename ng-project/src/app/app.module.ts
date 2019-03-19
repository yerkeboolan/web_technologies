import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';
<<<<<<< HEAD
import { CarouselComponent } from './carousel/carousel.component';
=======
import { CommentComponent } from './comment/comment.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> 01bb5172a72f411ba234de846a1464bf0b886e09

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    CatalogComponent,
    ContactComponent,
<<<<<<< HEAD
    CarouselComponent
=======
    CommentComponent,
    FooterComponent
>>>>>>> 01bb5172a72f411ba234de846a1464bf0b886e09
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
