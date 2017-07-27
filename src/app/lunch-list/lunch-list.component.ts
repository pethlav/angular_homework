import { Component, OnInit } from '@angular/core';
import UIkit from 'uikit';

import { LunchService, ILunch } from '../lunch.service';

@Component({
  selector: 'app-lunch-list',
  templateUrl: './lunch-list.component.html'
})
export class LunchListComponent implements OnInit {

  lunchList: ILunch[];

  constructor(private lunchService: LunchService) { }

  ngOnInit() {
    
    // this is ugly :-(
    setInterval(() => {
      this.loadLunchList();
    }, 1000);

  }

  upvoteLunch(lunchId: number) {
    this.lunchService.upvoteLunch(lunchId).subscribe(() => {
      UIkit.notification('Lunch upvoted!', { status: 'success' });
    }, error => {
      UIkit.notification('Failed to upvote lunch :-(', { status: 'danger' });
      console.error('failed to upvote lunch');
    })
  }

  private loadLunchList() {
    this.lunchService.getLunchList().subscribe(list => {
      this.lunchList = list;
    }, error => {
      UIkit.notification("Failed to fetch lunch list :-(", { status: 'danger' });
      console.error('failed to fetch lunch list', error);
    });
  }

}
