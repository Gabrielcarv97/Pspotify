
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importando componentes gerados no angular

import { HomeComponent } from './home/home.component'; // rota da home
import { FAQComponent } from './faq/faq.component';  // rota do faq

import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { LogarComponent } from './logar/logar.component';
import { NovaPlaylistComponent } from './nova-playlist/nova-playlist.component';


// criando as rotas

const routes: Routes = [
  {  path: '', redirectTo: 'HOME', pathMatch:"full"},
  {  path: 'HOME', component:HomeComponent},
  {  path: 'FAQ', component:FAQComponent},
  {  path: 'PLAYLIST', component:NovaPlaylistComponent},
  {  path: 'playlist-detail/:id', component: PlaylistDetailComponent},
  {  path: 'logar', component: LogarComponent}
  ,
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
