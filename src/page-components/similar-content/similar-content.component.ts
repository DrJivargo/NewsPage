import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-similar-content',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './similar-content.component.html',
  styleUrl: './similar-content.component.scss'
})
export class SimilarContentComponent {

}
