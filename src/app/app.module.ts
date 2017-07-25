import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// web API
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroComponent } from './hero.component';
import { HeroService } from './shared/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [ HeroService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
