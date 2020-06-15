import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsService } from './news.service';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [NewsComponent, PostsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  providers:[
    NewsService
  ]
})
export class NewsModule { }
