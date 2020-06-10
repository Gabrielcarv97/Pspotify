import { NovaplaylistService } from './novaplaylist.service';
import { PlaylistNew } from './playlist.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-playlist',
  templateUrl: './nova-playlist.component.html',
  styleUrls: ['./nova-playlist.component.css']
})
export class NovaPlaylistComponent implements OnInit {

  getplaylists: PlaylistNew[]

  constructor(private novaplaylistS :NovaplaylistService) { }

  ngOnInit(): void {
    this.novaplaylistS.getplaylist().subscribe(getplaylists =>{
      this.getplaylists = getplaylists
      console.log(getplaylists)
    })
  }

}
