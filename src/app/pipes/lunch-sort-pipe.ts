import { Pipe, PipeTransform } from '@angular/core';
import {ILunch} from "../model/lunch-model";
import {sortLunches} from "../helpers/lunch-helpers";

@Pipe({ name: 'lunchSort' })

export class LunchSortPipe implements PipeTransform {
  transform(lunches: ILunch[]) {
    return sortLunches(lunches);
  }
}
