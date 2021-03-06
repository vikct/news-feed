import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss']
  providers: [NewsService]
})
export class HomeComponent implements OnInit {
  news: any = {articles: []};

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getTopHeadLines()
      .subscribe(
        response => this.news = response
    );
  }

}
