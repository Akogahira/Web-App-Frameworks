
import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service'; // Importar el servicio

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-angular';
  isDarkTheme: boolean = false; // Variable para el tema

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Suscribirse al estado del tema
    this.themeService.isDarkTheme.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }

  toggleDarkTheme() {
    // Cambiar el estado del tema y actualizar el servicio
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setDarkTheme(this.isDarkTheme);
  }
}
