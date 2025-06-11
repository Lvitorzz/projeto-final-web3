import { Component } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { RouterModule }    from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SearchComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
