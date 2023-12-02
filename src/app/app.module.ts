import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { TopbarModule } from './components/topbar/topbar.module';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, TopbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
