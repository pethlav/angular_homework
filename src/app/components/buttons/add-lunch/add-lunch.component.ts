import {Component} from '@angular/core';
import {LunchService} from "../../../services/lunch.service";

@Component({
  selector: 'app-add-lunch',
  templateUrl: './add-lunch.component.html'
})
export class AddLunchComponent {

  lunchInput: string;

  constructor(private lunchService: LunchService) {
  }

  onLunchAdd() {
    this.lunchService.addLunch(this.lunchInput);
  }

}
