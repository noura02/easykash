import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard.module';
import { AuthentictionModule } from './authentiction.module';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    // NavbarComponent,
    // SidebarComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AuthentictionModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
