import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './Components/site-header/site-header.component';
import { HomeComponent } from './Components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports: [RouterOutlet, SiteHeaderComponent]
})
export class AppComponent {
  title: string = '';
}
