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
