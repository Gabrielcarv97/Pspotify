import { PlaylistNew } from './playlist.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovaplaylistService {

  API = "http://localhost:3001/";

  constructor( private http: HttpClient) { }

  PLAYLISTnova: PlaylistNew[]

  getplaylist(): Observable<PlaylistNew[]>{
    return this.http.get<PlaylistNew[]>(`${this.API}playlistM`)
  }

  get(): Observable<PlaylistNew> {
    return this.http.get<PlaylistNew>(`${this.API}playlistM`);
  }
  getMusic(playlistName) {
    return this.http.get(`${this.API}Musicas?Playlistnome=${playlistName}`);
  }
}
