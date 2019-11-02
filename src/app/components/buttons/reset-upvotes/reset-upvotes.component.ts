import {Component} from '@angular/core';
import {LunchService} from "../../../services/lunch.service";

@Component({
  selector: 'app-reset-upvotes',
  templateUrl: './reset-upvotes.component.html',
  styleUrls: ['./reset-upvotes.component.scss']
})
export class ResetUpvotesComponent {

  constructor(private lunchService: LunchService) {
  }

  onResetUpvotes() {
    this.lunchService.resetUpvotes();
  }

}
