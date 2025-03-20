import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkMode: boolean = false;

  constructor() {
    const savedMode = localStorage.getItem('darkMode');
    this.darkMode = savedMode === 'true';
    this.applyDarkMode();
  }

  toggleDarkMode() { 
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
    this.applyDarkMode();
  }

  isDarkMode() {
    return this.darkMode;
  }

  private applyDarkMode() {
    if (this.darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
