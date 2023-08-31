import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Delivery} from "../../model/delivery";
import {DeliveryService} from "../../_services/delivery.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  @Output() searchNotify: EventEmitter<Delivery[]> = new EventEmitter();
  inputValue: string;
  options: string[];

  constructor(private deliveryService: DeliveryService) {
  }

  getSearchValue() {
    return this.deliveryService.getSearch()
  }

  public search(value: string): void {
    this.deliveryService.setSearch(value)

    this.deliveryService.findAllByPackageNumber(value)
      .subscribe(data => {
        this.notifySearch(data)
      })
  }

  private notifySearch(deliveries: Delivery[]) {
    console.log("emmit : " + deliveries)

    this.searchNotify.emit(deliveries);
  }

  ngOnInit(): void {
    this.deliveryService.findAll()
      .subscribe(data => {
        this.options = data.map(delivery => delivery.packageNumber)
      })

    let value = this.getSearchValue()
    if (value) {
      this.inputValue = value;
      this.search(value)
    }
  }
}
