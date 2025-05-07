import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../../page-components/header/header.component';
import {StickyHeaderComponent} from '../../page-components/sticky-header/sticky-header.component';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterOutlet,
    HeaderComponent,
    StickyHeaderComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
