import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SvgIconComponent} from '../../helpers/svg-icon.component';

@Component({
  selector: 'app-unwatched-content',
  imports: [
    RouterLinkActive,
    RouterLink,
    SvgIconComponent
  ],
  templateUrl: './unwatched-content.component.html',
  styleUrl: './unwatched-content.component.scss'
})
export class UnwatchedContentComponent {

}
