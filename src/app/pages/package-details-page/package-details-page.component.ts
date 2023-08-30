import {Component, ViewEncapsulation} from '@angular/core';
import {Delivery} from "../../model/delivery";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DeliveryService} from "../../_services/delivery.service";

interface FormField {
  label: string;
  formInputName: string;
}

@Component({
  selector: 'app-package-details-page',
  templateUrl: './package-details-page.component.html',
  styleUrls: ['./package-details-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PackageDetailsPageComponent {
  packageNumber: string | null

  delivery: Delivery
  updatedDelivery: Delivery

  form: FormGroup
  form2: FormGroup

  formFields: FormField[] = [
    {label: 'Colli/Colli razem:', formInputName: 'totalColli'},
    {label: 'Numer przesyłki:', formInputName: 'packageNumber'},
    {label: 'Aktualna trasa:', formInputName: 'road'},
    {label: 'Waga:', formInputName: 'weight'},
    {label: 'Jednostki manipulacyjne:', formInputName: 'manipUnit'},
    {label: 'Odbiorca - nazwa:', formInputName: 'receiverName'},
    {label: 'Odbiorca - ulica:', formInputName: 'receiverStreet'},
    {label: 'Odbiorca - miasto:', formInputName: 'receiverCity'},
    {label: 'Odbiorca - kod pocztowy:', formInputName: 'receiverPostalCode'},
    {label: 'Nadawca - nazwa:', formInputName: 'senderName'},
    {label: 'Nadawca - ulica:', formInputName: 'senderStreet'},
    {label: 'Nadawca - miasto:', formInputName: 'senderCity'},
    {label: 'Nadawca - kod pocztowy:', formInputName: 'senderPostalCode'},
    {label: 'Ostatni status operacyjny:', formInputName: 'lastDepotStatus'},
    {label: 'ODepot:', formInputName: 'receiverDepot'},
    {label: 'Ddepot:', formInputName: 'senderDepot'},
    {label: 'Długość (m):', formInputName: 'volume'},
    {label: 'Szerokość (m):', formInputName: 'operaticVolumeWeight'},
    {label: 'Wysokość (m):', formInputName: 'operaticVolumeCalculated'},
  ]

  constructor(private route: ActivatedRoute, private deliveryService: DeliveryService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {

      this.packageNumber = paramMap.get('packageNumber');

      this.setBasicFormData(paramMap.get('packageNumber'))
      this.setUpdatedFormData(paramMap.get('packageNumber'))
    });
  }

  setBasicFormData(packageNumber: string | null) {
    if (packageNumber == null) {
      return
    }

    this.deliveryService.findOneByPackageNumber(packageNumber)
      .subscribe(data => {
        this.delivery = data
        this.setFormData()
      })
  }

  setUpdatedFormData(packageNumber: string | null) {
    if (packageNumber == null) {
      return
    }

    this.deliveryService.findOneUpdatedByPackageNumber(packageNumber)
      .subscribe(data => {
        this.updatedDelivery = data
        this.setFormData2()
      })
  }

  submitData() {
    this.deliveryService.saveUpdatedDelivery(this.packageNumber, this.form2.value)
      .subscribe(data => {
        this.setUpdatedFormData(this.packageNumber)
      })
  }

  private setFormData2() {
    if (this.updatedDelivery == null) {
      this.form2 = this.formBuilder.group({
        totalColli: [this.delivery.totalColli],
        packageNumber: [this.delivery.packageNumber],
        road: [this.delivery.road],
        weight: [this.delivery.weight],
        manipUnit: [this.delivery.manipUnit],
        receiverName: [this.delivery.receiverName],
        receiverStreet: [this.delivery.receiverStreet],
        receiverCity: [this.delivery.receiverCity],
        receiverPostalCode: [this.delivery.receiverPostalCode],
        senderName: [this.delivery.senderName],
        senderStreet: [this.delivery.senderStreet],
        senderCity: [this.delivery.senderCity],
        senderPostalCode: [this.delivery.senderPostalCode],
        lastDepotStatus: [this.delivery.lastDepotStatus],
        receiverDepot: [this.delivery.receiverDepot],
        senderDepot: [this.delivery.senderDepot],
        volume: [this.delivery.volume],
        operaticVolumeWeight: [this.delivery.operaticVolumeWeight],
        operaticVolumeCalculated: [this.delivery.operaticVolumeCalculated]
      });
    } else {
      this.form2 = this.formBuilder.group({
        totalColli: [this.updatedDelivery.totalColli],
        packageNumber: [this.updatedDelivery.packageNumber],
        road: [this.updatedDelivery.road],
        weight: [this.updatedDelivery.weight],
        manipUnit: [this.updatedDelivery.manipUnit],
        receiverName: [this.updatedDelivery.receiverName],
        receiverStreet: [this.updatedDelivery.receiverStreet],
        receiverCity: [this.updatedDelivery.receiverCity],
        receiverPostalCode: [this.updatedDelivery.receiverPostalCode],
        senderName: [this.updatedDelivery.senderName],
        senderStreet: [this.updatedDelivery.senderStreet],
        senderCity: [this.updatedDelivery.senderCity],
        senderPostalCode: [this.updatedDelivery.senderPostalCode],
        lastDepotStatus: [this.updatedDelivery.lastDepotStatus],
        receiverDepot: [this.updatedDelivery.receiverDepot],
        senderDepot: [this.updatedDelivery.senderDepot],
        volume: [this.updatedDelivery.volume],
        operaticVolumeWeight: [this.updatedDelivery.operaticVolumeWeight],
        operaticVolumeCalculated: [this.updatedDelivery.operaticVolumeCalculated]
      });
    }
  }

  private setFormData() {
    this.form = this.formBuilder.group({
      totalColli: [this.delivery.totalColli],
      packageNumber: [this.delivery.packageNumber],
      road: [this.delivery.road],
      weight: [this.delivery.weight],
      manipUnit: [this.delivery.manipUnit],
      receiverName: [this.delivery.receiverName],
      receiverStreet: [this.delivery.receiverStreet],
      receiverCity: [this.delivery.receiverCity],
      receiverPostalCode: [this.delivery.receiverPostalCode],
      senderName: [this.delivery.senderName],
      senderStreet: [this.delivery.senderStreet],
      senderCity: [this.delivery.senderCity],
      senderPostalCode: [this.delivery.senderPostalCode],
      lastDepotStatus: [this.delivery.lastDepotStatus],
      receiverDepot: [this.delivery.receiverDepot],
      senderDepot: [this.delivery.senderDepot],
      volume: [this.delivery.volume],
      operaticVolumeWeight: [this.delivery.operaticVolumeWeight],
      operaticVolumeCalculated: [this.delivery.operaticVolumeCalculated]
    });
  }
}
