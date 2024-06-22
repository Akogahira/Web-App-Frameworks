/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
}
*/

import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isDarkTheme$: Observable<boolean> = this.themeService.isDarkTheme;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
  
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}



