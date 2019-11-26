import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from './../../shared/api.service';
import { FormBuilder } from "@angular/forms";
import { Player } from '../../shared/player';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})

export class JoinGameComponent implements OnInit {
  Player: Player = new Player();
  GamesList: any;
  selectedGame;
  isTrue: Boolean = true;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private playerApi: ApiService,
    private gameApi: ApiService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.playerApi.GetPlayer(id).subscribe(data => {
      this.Player = data;
      // console.log(this.Player);    
    });

    this.gameApi.GetGames().subscribe(data => {
      this.GamesList = data;
      // console.log(this.GamesList);
    });
  }

  ngOnInit() {
  }
  /* Update book */
  updatePlayerForm() {
    if (this.selectedGame != null) {
      this.Player.player_status = 'Unavailable';
      this.Player.player_games_played.push(" " + this.selectedGame);
      var id = this.actRoute.snapshot.paramMap.get('id');
      if (window.confirm('Are you sure you want to join?')) {
        this.playerApi.UpdatePlayer(id, this.Player).subscribe(res => {
          this.ngZone.run(() => this.router.navigateByUrl('/player-ranking'))
        });
      }
    }else{
      this.isTrue = false;
    }
  }
}
