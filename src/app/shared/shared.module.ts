import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [NavbarComponent]
})
export class SharedModule { }
