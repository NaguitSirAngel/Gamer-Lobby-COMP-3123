import { Game } from './../../shared/game';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})

export class GamesListComponent implements OnInit {
  GameData: any = [];
  dataSource: MatTableDataSource<Game>;
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
  displayedColumns: string[] = ['game_title', 'game_platform', 'game_genre', 'game_rating', 'game_publisher', 'game_release', 'game_status'];
  
  constructor(private gameApi: ApiService) {
    this.gameApi.GetPlayers().subscribe(data => {
      this.GameData = data;
      this.dataSource = new MatTableDataSource<Game>(this.GameData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }
  ngOnInit() { }
}
