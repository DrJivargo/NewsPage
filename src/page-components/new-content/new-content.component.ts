import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-new-content',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './new-content.component.html',
  styleUrl: './new-content.component.scss'
})
export class NewContentComponent {

}
