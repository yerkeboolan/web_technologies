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
import { CommentComponent } from './comment/comment.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WinterComponent } from './winter/winter.component';
import { SummerComponent } from './summer/summer.component';
import { ArtComponent } from './art/art.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    CatalogComponent,
    ContactComponent,
    CommentComponent,
    FooterComponent,
    CarouselComponent,
    WinterComponent,
    SummerComponent,
    ArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    OwlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }