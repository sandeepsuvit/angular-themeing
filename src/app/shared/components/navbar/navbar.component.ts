import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/core/enums/theme.enum';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Current selected theme
  private _currentTheme: Theme;

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this._currentTheme = this.themeService.getTheme();
  }

  /**
   * Handle toggling of theme
   *
   * @memberof NavbarComponent
   */
  onToggleTheme() {
    this._currentTheme = this._currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    this.themeService.setTheme(this._currentTheme);
  }

}
