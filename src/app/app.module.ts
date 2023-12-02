import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarModule } from './components/topbar/topbar.module';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, TopbarModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
