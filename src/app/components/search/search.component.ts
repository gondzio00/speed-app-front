import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Delivery} from "../../model/delivery";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DeliveryService} from "../../_services/delivery.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() searchNotify: EventEmitter<Delivery[]> = new EventEmitter();

  constructor(private deliveryService: DeliveryService) {
  }

  public search(value: HTMLInputElement): void {

    this.deliveryService.findAllByPackageNumber(value.value)
      .subscribe(data => {
        this.notifySearch(data)
      })
  }

  private notifySearch(deliveries: Delivery[]) {
    console.log("emmit : " + deliveries)

    this.searchNotify.emit(deliveries);
  }
}
