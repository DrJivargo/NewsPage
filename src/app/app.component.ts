import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {StickyHeaderComponent} from '../page-components/sticky-header/sticky-header.component';
import {HeaderComponent} from '../page-components/header/header.component';
import {NavHeaderComponent} from '../page-components/nav-header/nav-header.component';
import {MainContentComponent} from '../page-components/main-content/main-content.component';
import {NewContentComponent} from '../page-components/new-content/new-content.component';
import {SimilarContentComponent} from '../page-components/similar-content/similar-content.component';
import {UnwatchedContentComponent} from '../page-components/unwatched-content/unwatched-content.component';
import {FooterComponent} from '../page-components/footer/footer.component';
import {SidebarComponent} from '../page-components/sidebar/sidebar.component';
import {SvgIconComponent} from '../helpers/svg-icon.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StickyHeaderComponent, HeaderComponent, NavHeaderComponent, MainContentComponent, NewContentComponent, SimilarContentComponent, UnwatchedContentComponent, FooterComponent, RouterLinkActive, RouterLink, SidebarComponent, SvgIconComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NewsPage';

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
