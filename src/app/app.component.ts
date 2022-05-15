import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Val Ian Enriquez");
  }

  title = 'Val Ian Enriquez';
  urls = ['home', 'news', 'contact', 'about'];
  footer = 'All rights reserved 2022';

}
