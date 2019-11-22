import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayerRankingComponent } from './components/player-ranking/player-ranking.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-player' },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'players-list', component: PlayersListComponent },
  { path: 'player-ranking', component: PlayerRankingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }