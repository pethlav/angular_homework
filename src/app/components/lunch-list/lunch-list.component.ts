import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {LunchState} from "../../store/lunch-store";
import {ILunch} from "../../model/lunch-model";
import {IncrementUpvotes, RemoveLunch} from "../../store/lunch-actions";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lunch-list',
  templateUrl: './lunch-list.component.html',
  styleUrls: [ './lunch-list.component.scss' ]
})
export class LunchListComponent implements OnInit {

  lunchList$: Observable<ILunch[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.lunchList$ = this.store.select(LunchState.getLunches);
  }

  upvoteLunch(lunchName: string) {
    this.store.dispatch(new IncrementUpvotes(lunchName));
  }

  removeLunch(lunchName: string) {
    this.store.dispatch(new RemoveLunch(lunchName));
  }

}
