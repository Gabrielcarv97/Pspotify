import { PlaylistNew } from "./../nova-playlist/playlist.model";
import { NovaplaylistService } from "./../nova-playlist/novaplaylist.service";

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Musica } from "../musicas";

@Component({
  selector: "app-playlist-detail",
  templateUrl: "./playlist-detail.component.html",
  styleUrls: ["./playlist-detail.component.css"],
})
export class PlaylistDetailComponent implements OnInit {
  play: PlaylistNew;
  musics: any;


  constructor(
    private router: ActivatedRoute,
    private pl: NovaplaylistService
  ) {}

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get("id");
    this.pl.get().subscribe((data: any) => {
      this.play = data.find((e) => e.id == id);

      this.pl.getMusic(this.play.nome).subscribe((data: any) => {
        this.musics = data;
      });
    });
  }
}
