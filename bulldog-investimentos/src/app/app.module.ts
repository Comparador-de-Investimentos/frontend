import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import { MdbFormsModule} from 'mdb-angular-ui-kit/forms'
import { MdbRippleModule} from 'mdb-angular-ui-kit/ripple'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NgbModule,
    MdbCarouselModule,
    MdbRippleModule,
    MdbFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
