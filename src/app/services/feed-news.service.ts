import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class FeedNewsService {

  constructor(private _http: HttpClient) { }

  getNewestPosts() {
    return this._http.get('https://www.reddit.com/new.json', {
      params: {"limit": "10"}
    }).map((resp: any) => {
      return resp.data.children.map(child => {
        return child.data;
      })
    });
  };

  getMostCommentedPosts() {
    return this._http.get('https://www.reddit.com/hot.json', {
      params: {"limit": "10"}
    }).map((resp: any) => {
      return (resp.data.children as Array<any>)
        .map(child => {
          return child.data
        })
        .sort((childA, childB) => {
          return childA.num_comments - childB.num_comments
        })
    });
  };

}
