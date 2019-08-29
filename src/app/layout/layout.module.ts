import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class LayoutModule { }
