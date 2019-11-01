import { Component, OnInit } from '@angular/core';
import UIkit from 'uikit';

import { LunchService} from '../lunch.service';
import {Store} from "@ngxs/store";
import {LunchState} from "../store/lunch-store";
import {ILunch} from "../model/lunch-model";
import {IncrementUpvotes} from "../store/lunch-actions";

@Component({
  selector: 'app-lunch-list',
  templateUrl: './lunch-list.component.html'
})
export class LunchListComponent implements OnInit {

  lunchList: ILunch[];

  constructor(private store: Store,
              private lunchService: LunchService) { }

  ngOnInit() {
    this.lunchList = this.store.selectSnapshot(LunchState.getLunches);

    // this is ugly :-(
    // setInterval(() => {
    //   this.loadLunchList();
    // }, 1000);

  }

  upvoteLunch(lunchName: string) {
    console.log("======== upvoteLunch IN");
    this.store.dispatch(new IncrementUpvotes(lunchName));
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
