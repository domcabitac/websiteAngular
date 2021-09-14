import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeroComponent } from './hero/hero.component';
import { BackgroundComponent } from './hero/background/background.component';
import { TypeWritterComponent } from './hero/type-writter/type-writter.component';
import { ServicesComponent } from './services/services.component';
import { CardsComponent } from './services/cards/cards.component';
import { CodeComponent } from './code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeroComponent,
    BackgroundComponent,
    TypeWritterComponent,
    ServicesComponent,
    CardsComponent,
    CodeComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
