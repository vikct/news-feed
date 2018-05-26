import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Feed } from '../models/feed.model';

import { FeedsService } from '../services/feeds.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public feeds: Observable<Feed[]>;

  constructor(private feedsService: FeedsService) { }

  ngOnInit() {
    this.getFeeds();
  }

  getFeeds(): void {
    this.feedsService
      .getJSON()
      .subscribe(data => this.feeds = data);
      
  }

}
