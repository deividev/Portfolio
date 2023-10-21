import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeSubject = new BehaviorSubject<string>('light'); // Valor predeterminado: light
  theme$ = this.themeSubject.asObservable();

  constructor() {
    // Recuperar el tema del almacenamiento local o de una preferencia del usuario si es necesario.
  }

  setTheme(theme: string) {
    this.themeSubject.next(theme);
    // Aquí podrías guardar el tema en el almacenamiento local o en las preferencias del usuario.
  }
}
