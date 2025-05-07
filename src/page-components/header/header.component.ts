import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SvgIconComponent} from '../../helpers/svg-icon.component';
import {SidebarComponent} from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLinkActive,
    RouterLink,
    SvgIconComponent,
    SidebarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSidebarOpen = false;

  openSidebar() {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  activeDropdown: string | null = null;

  openDropdown(menu: string) {
    this.activeDropdown = menu;
  }

  closeDropdown() {
    this.activeDropdown = null;
  }

}
