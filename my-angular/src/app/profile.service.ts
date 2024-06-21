// profile.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private name: string = 'Usuario'; // Nombre predeterminado
  private email: string = 'usuario@example.com'; // Correo predeterminado

  constructor() { }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  setName(newName: string): void {
    this.name = newName;
  }

  setEmail(newEmail: string): void {
    this.email = newEmail;
  }
}
