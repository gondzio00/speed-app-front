import {Component} from '@angular/core';
import {Delivery} from "../../model/delivery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  searchListData: Delivery[] = [];


  public setSearchListData($event: Delivery[]) {
    this.searchListData = $event
  }
}
