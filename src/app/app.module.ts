import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SiteHeaderComponent } from './Components/site-header/site-header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CatalogModule } from './Modules/catalog/catalog.module';
import { SharedModule } from './Modules/shared/shared.module';
import { SquadModule } from './Modules/squad/squad.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CatalogModule,
    SharedModule,
    SquadModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
