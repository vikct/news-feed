import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  news = { articles: [] };
  newsSources = { sources: [] };
  filterSource = 'google-news';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getTopHeadLines()
  	  .subscribe(
  		  response => this.news = response.json()
    );
    this.getnewsSources();
  }

  filterNews(source) {
    this.news = { articles: []};
    this.newsService.getNewBySource(source)
      .subscribe(
      response => this.news = response.json()
    );
  }

  getnewsSources() {
    this.newsService.getSources()
      .subscribe(
        response => this.newsSources = response.json()
      );
  }
}
