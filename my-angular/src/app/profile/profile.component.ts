/*

import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name: string;
  email: string;

  constructor(private profileService: ProfileService) {
    this.name = this.profileService.getName();
    this.email = this.profileService.getEmail();
  }
}

*/

import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name: string;
  email: string;
  isDarkTheme: boolean = false;
  ImagenVisible: boolean = true;

  constructor(private profileService: ProfileService, private themeService: ThemeService) {
    this.name = this.profileService.getName();
    this.email = this.profileService.getEmail();

    // Suscripción al tema activo
    this.themeService.isDarkTheme.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
  //Cambia el texto del botón cuando se pulsa
  get textoBoton(): string {
    return this.ImagenVisible ? 'Ocultar foto de perfil' : 'Mostrar foto de perfil';
  }

  //Muestra-oculta la foto de perfil
  ToggleImage() {
    this.ImagenVisible = !this.ImagenVisible;
  }
}
