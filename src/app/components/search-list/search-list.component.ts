import {Component, Input} from '@angular/core';
import {Delivery} from "../../model/delivery";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {

  @Input()
  deliveries: Delivery[] = [];

}
