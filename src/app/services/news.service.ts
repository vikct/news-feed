import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  key = '1c7f7bb5bd424176b277498f6662d0aa';

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + this.key);
  }

  getNewBySource(source){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey=' + this.key);
  }

  getSources(){
    return this.http.get('https://newsapi.org/v2/sources?apiKey=' + this.key);
  }
}
