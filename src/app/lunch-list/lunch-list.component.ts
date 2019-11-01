import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {LunchState} from "../store/lunch-store";
import {ILunch} from "../model/lunch-model";
import {IncrementUpvotes} from "../store/lunch-actions";
import {sortLunch} from "../helpers/lunch-helpers";

@Component({
  selector: 'app-lunch-list',
  templateUrl: './lunch-list.component.html'
})
export class LunchListComponent implements OnInit {

  lunchList: ILunch[];

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.select(LunchState.getLunches).subscribe(lunches => this.lunchList = sortLunch(lunches));
  }

  upvoteLunch(lunchName: string) {
    this.store.dispatch(new IncrementUpvotes(lunchName));
  }


}
