import { Component } from '@angular/core';
import {SvgIconComponent} from "../../helpers/svg-icon.component";
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    SvgIconComponent,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
