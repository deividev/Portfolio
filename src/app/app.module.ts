import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { IconModule } from './shared/components/icon/icon.module';
import { ToggleButtonModule } from './shared/components/toggle-button/toggle-button.module';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from '@shared/components/button/button.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IconModule,
    ToggleButtonModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
