import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Feed } from '../models/feed.model';

@Injectable()
export class FeedsService {

  private feeds: Observable<Feed[]>;

  public constructor(private http: HttpClient) { 
    this.getJSON().subscribe(data => {
      console.log("Feeds", data);
    })
  }

  public getJSON(): Observable<any> {
    return this.http.get<Feed>('./assets/json/products.json');
  }

}
