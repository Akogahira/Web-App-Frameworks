import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeSource = new BehaviorSubject<boolean>(false);
  isDarkTheme = this.darkThemeSource.asObservable();

  setDarkTheme(isDarkTheme: boolean) {
    this.darkThemeSource.next(isDarkTheme);
  }

  toggleTheme() {
    this.darkThemeSource.next(!this.darkThemeSource.getValue());
  }
}
