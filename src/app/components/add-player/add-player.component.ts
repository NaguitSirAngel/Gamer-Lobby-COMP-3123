import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})

export class AddPlayerComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('resetPlayerForm', {static:true}) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  playerForm: FormGroup;

  RankingArray: any = ["1", "2", "3", "4", "5"];
  FavouriteGameArray: any = ["Overwatch", "Battle Realms", "Command and Conquer", "World of Warcraft", "Dota 2"];

  ngOnInit() {
    this.submitBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private playerApi: ApiService
  ) { }

  /* Reactive book form */
  submitBookForm() {
    this.playerForm = this.fb.group({
      player_name: ['', [Validators.required]],
      player_score: ['', [Validators.required]],
      player_time: ['', [Validators.required]],
      player_favourite_game: ['', [Validators.required]],
      player_rank: ['', [Validators.required]],
      player_status: ['Available']
    })
  }

  /* Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.playerForm.get('dob').setValue(convertDate, {
      onlyself: true
    })
  }  

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.playerForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  submitPlayerForm() {
    if (this.playerForm.valid) {
      this.playerApi.AddPlayer(this.playerForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/players-list'))
      });
    }
  }

}