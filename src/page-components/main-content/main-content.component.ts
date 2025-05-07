import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SvgIconComponent} from '../../helpers/svg-icon.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-main-content',
  imports: [
    RouterLinkActive,
    RouterLink,
    SvgIconComponent,
    DatePipe,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  publishDate = new Date('2023-04-15');// здесь дата выпуска статьи

  isIconOpen = true;

  openIcon() {
    this.isIconOpen = true;
  }

  closeIcon() {
    this.isIconOpen = false;
  }
}
