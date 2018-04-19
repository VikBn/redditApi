import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewestComponent } from './components/newest/newest.component';
import { MostCommentedComponent } from './components/most-commented/most-commented.component';
import { ListComponent } from './components/list/list.component';
import {HttpClientModule} from "@angular/common/http";
import {FeedNewsService} from "./services/feed-news.service";


@NgModule({
  declarations: [
    AppComponent,
    NewestComponent,
    MostCommentedComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FeedNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
