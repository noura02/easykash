import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard.module';
import { AuthentictionModule } from './authentiction.module';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AuthentictionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
