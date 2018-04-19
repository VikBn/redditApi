import { Component, OnInit } from '@angular/core';
import {FeedNewsService} from "../../services/feed-news.service";

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {

  public newestPosts: Array<any>;

  constructor(public feedNewsService: FeedNewsService) { }

  ngOnInit() {
    this.feedNewsService.getNewestPosts().subscribe(resp => {
        this.newestPosts = resp;
      })
  }

}
