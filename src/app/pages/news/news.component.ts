import { Component } from '@angular/core';
import { NEWS } from '../../data/mock';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
})
export class NewsComponent {
  readonly news = NEWS;
}
