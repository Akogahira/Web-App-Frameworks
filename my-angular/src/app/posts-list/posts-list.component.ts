/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  posts = [
    { title: 'Ejemplo de publicación 1' },
    { title: 'Ejemplo de publicación 2' },
    { title: 'Ejemplo de publicación 3' }
  ];
}
*/

import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  posts = [
    { title: 'Ejemplo de publicación 1' },
    { title: 'Ejemplo de publicación 2' },
    { title: 'Ejemplo de publicación 3' }
  ];
  isDarkTheme: boolean = false;

  constructor(private themeService: ThemeService) {
    // Suscripción al tema activo
    this.themeService.isDarkTheme.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
}

