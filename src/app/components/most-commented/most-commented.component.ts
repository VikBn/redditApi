import { Component, OnInit } from '@angular/core';
import {FeedNewsService} from "../../services/feed-news.service";

@Component({
  selector: 'app-most-commented',
  templateUrl: './most-commented.component.html',
  styleUrls: ['./most-commented.component.css']
})
export class MostCommentedComponent implements OnInit {

  public mostCommentedPosts: Array<any>;
  constructor(public feedNewsService: FeedNewsService) { }

  ngOnInit() {
    this.feedNewsService.getMostCommentedPosts()
      .subscribe(resp => {
        this.mostCommentedPosts = resp
      });
  }



}
