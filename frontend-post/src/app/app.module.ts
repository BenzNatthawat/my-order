import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostersComponent } from './views/posters/posters.component';
import { PosterComponent } from './views/poster/poster.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ImagesComponent } from './component/images/images.component';
import { NgOptimizedImage } from '@angular/common';
import { ToastsComponent } from './component/toasts/toasts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostersComponent,
    PosterComponent,
    NavbarComponent,
    FooterComponent,
    ImagesComponent,
    ToastsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
