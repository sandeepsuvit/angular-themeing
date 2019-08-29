import { EventEmitter, Injectable } from '@angular/core';
import { Theme } from '../enums/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public themeChangeEvent = new EventEmitter<Theme>();
  private _theme = Theme.LIGHT;

  constructor() { }

  /**
   * For setting the theme
   *
   * @param {Theme} theme
   * @memberof ThemeService
   */
  setTheme(theme: Theme) {
    this._theme = theme;
    this.themeChangeEvent.emit(this._theme);
    // Can have a service call here to save the theme settings to the profile
  }

  /**
   * Get the theme that is set
   *
   * @returns
   * @memberof ThemeService
   */
  getTheme() {
    return this._theme;
  }
}
