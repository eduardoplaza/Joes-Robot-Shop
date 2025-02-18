import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  standalone:true,
  imports:[CommonModule, RouterLink, RouterLinkActive],
})
export class SiteHeaderComponent {

  constructor() { }

}
