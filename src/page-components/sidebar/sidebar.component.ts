import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SvgIconComponent} from '../../helpers/svg-icon.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLinkActive,
    RouterLink,
    SvgIconComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
}
