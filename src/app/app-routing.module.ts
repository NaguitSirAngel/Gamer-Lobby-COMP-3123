import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayerRankingComponent } from './components/player-ranking/player-ranking.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { JoinGameComponent } from './components/join-game/join-game.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'player-ranking' },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'players-list', component: PlayersListComponent },
  { path: 'player-ranking', component: PlayerRankingComponent},
  { path: 'games-list', component: GamesListComponent},
  { path: 'join-game/:id', component: JoinGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }