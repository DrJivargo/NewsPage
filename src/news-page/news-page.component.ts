import { Component } from '@angular/core';
import {FooterComponent} from '../page-components/footer/footer.component';
import {MainContentComponent} from '../page-components/main-content/main-content.component';
import {NavHeaderComponent} from '../page-components/nav-header/nav-header.component';
import {NewContentComponent} from '../page-components/new-content/new-content.component';
import {SimilarContentComponent} from '../page-components/similar-content/similar-content.component';
import {UnwatchedContentComponent} from '../page-components/unwatched-content/unwatched-content.component';
import {StickyHeaderComponent} from '../page-components/sticky-header/sticky-header.component';
import {HeaderComponent} from '../page-components/header/header.component';

@Component({
  selector: 'app-news-page',
  imports: [
    FooterComponent,
    MainContentComponent,
    NavHeaderComponent,
    NewContentComponent,
    SimilarContentComponent,
    UnwatchedContentComponent,
    StickyHeaderComponent,
    HeaderComponent
  ],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {
}
