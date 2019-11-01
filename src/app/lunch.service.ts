import {Observable, of as observableOf} from 'rxjs';

import {delay, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

let _ID = 1;

const FAKE_API_LATENCY = () => Math.random() * 1000 + 500;

export interface ILunch {
  id: number;
  name: string;
  upvotes: number;
}

@Injectable()
export class LunchService {

  private lunchStore: ILunch[] = [
    {
      id: _ID++,
      name: 'Kebab2Go',
      upvotes: 1
    },
    {
      id: _ID++,
      name: 'Sushi place',
      upvotes: 3
    },
    {
      id: _ID++,
      name: 'Melisek Restaurant',
      upvotes: 0
    },
  ]

  constructor() {
  }

  getLunchList(): Observable<ILunch[]> {
    const clone = JSON.parse(JSON.stringify(this.lunchStore));
    return observableOf(clone).pipe(delay(FAKE_API_LATENCY()));
  }

  addLunch(name: string): Observable<any> {
    return observableOf(null).pipe(delay(FAKE_API_LATENCY()), tap(() => {
      this.lunchStore.push({
        id: _ID++,
        name,
        upvotes: 0
      })
    }),);
  }

  removeLunch(id: number): Observable<any> {
    return observableOf(null).pipe(delay(FAKE_API_LATENCY()), tap(() => {
      const lunchToRemove = this.lunchStore.find(lunch => lunch.id === id);
      if (lunchToRemove) {
        this.lunchStore = this.lunchStore.filter(lunch => lunch.id !== id);
      } else {
        throw new Error("Trying to remove non-existing lunch!");
      }
    }),);
  }

  upvoteLunch(id: number): Observable<any> {
    return observableOf(id).pipe(delay(FAKE_API_LATENCY()), tap(() => {
      const lunchToUpvote = this.lunchStore.find(lunch => lunch.id === id);
      if (lunchToUpvote) {
        lunchToUpvote.upvotes++;
      } else {
        throw new Error("Trying to upvote non-existing lunch!");
      }
    }),);
  }

  resetUpvotes(): Observable<any> {
    return observableOf(null).pipe(delay(FAKE_API_LATENCY()), tap(() => {
      this.lunchStore = this.lunchStore.map(lunch => Object.assign({}, lunch, {upvotes: 0}));
    }),);
  }

}
