import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { LogarComponent } from './logar/logar.component';
import { HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { NovaPlaylistComponent } from './nova-playlist/nova-playlist.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FAQComponent,
    NavbarComponent,
    FooterComponent,
    PlaylistDetailComponent,
    LogarComponent,
    NovaPlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
