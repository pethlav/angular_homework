import UIkit from 'uikit';
import {Injectable} from '@angular/core';
import {LunchState} from "../store/lunch-store";
import {AddLunch, ResetUpvotes} from "../store/lunch-actions";
import {Store} from "@ngxs/store";

@Injectable()
export class LunchService {

  constructor(private store: Store) {
  }

  addLunch(input: string): void {
    if (this.store.selectSnapshot(LunchState.getLunches).some(lunch => lunch.name === input)) {
      LunchService.displayAddNotification(false)
    } else {
      this.store.dispatch(new AddLunch(input));
      LunchService.displayAddNotification(true);
    }
  }

  resetUpvotes() {
    this.store.dispatch(new ResetUpvotes());
  }

  private static displayAddNotification(success: boolean) {
    success
      ? UIkit.notification('New lunch option added!', {status: 'success'})
      : UIkit.notification('The name you entered already exists. Choose please other name.', {status: 'danger'});
  }

}
