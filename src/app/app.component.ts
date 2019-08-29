import { Component, OnInit } from '@angular/core';
import { Theme } from './core/enums/theme.enum';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {
    "[class.light-theme]": `( theme === '${Theme.LIGHT}' )`,
    "[class.dark-theme]": `( theme === '${Theme.DARK}' )`
  },
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-themeing';

  // For setting the global theme
  theme: string;

  constructor(
    private themeService: ThemeService,
  ) {
    this.theme = this.themeService.getTheme();
  }

  ngOnInit() {
    this.themeService.themeChangeEvent.subscribe((res: Theme) => this.theme = res);
  }
}
