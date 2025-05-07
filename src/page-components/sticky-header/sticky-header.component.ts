import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sticky-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sticky-header.component.html',
  styleUrl: './sticky-header.component.scss'
})
export class StickyHeaderComponent {

}
