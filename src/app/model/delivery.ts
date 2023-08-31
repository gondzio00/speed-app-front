export class Delivery {
  totalColli: string;
  packageNumber: string;
  road: string;
  weight: string;
  manipUnit: string;

  receiverName: string;
  receiverStreet: string;
  receiverCity: string;
  receiverPostalCode: string;

  senderName: string;
  senderStreet: string;
  senderCity: string;
  senderPostalCode: string;

  lastDepotStatus: string;
  lastStatus: string;
  lastStatusDate: Date;

  receiverDepot: string;
  senderDepot: string;

  plannedCollectionDate: Date;
  plannedDeliveryDate: Date;

  collectionRoute: string;
  distributionRoute: string;

  collectionDriver: string;
  distributionDriver: string;

  volume: string;
  operaticVolumeWeight: string;
  operaticVolumeCalculated: string;

  constructor(totalColli: string, packageNumber: string, road: string, weight: string, manipUnit: string, receiverName: string, receiverStreet: string, receiverCity: string, receiverPostalCode: string, senderName: string, senderStreet: string, senderCity: string, senderPostalCode: string, lastDepotStatus: string, lastStatus: string, lastStatusDate: Date, receiverDepot: string, senderDepot: string, plannedCollectionDate: Date, plannedDeliveryDate: Date, collectionRoute: string, distributionRoute: string, collectionDriver: string, distributionDriver: string, volume: string, operaticVolumeWeight: string, operaticVolumeCalculated: string) {
    this.totalColli = totalColli;
    this.packageNumber = packageNumber;
    this.road = road;
    this.weight = weight;
    this.manipUnit = manipUnit;
    this.receiverName = receiverName;
    this.receiverStreet = receiverStreet;
    this.receiverCity = receiverCity;
    this.receiverPostalCode = receiverPostalCode;
    this.senderName = senderName;
    this.senderStreet = senderStreet;
    this.senderCity = senderCity;
    this.senderPostalCode = senderPostalCode;
    this.lastDepotStatus = lastDepotStatus;
    this.lastStatus = lastStatus;
    this.lastStatusDate = lastStatusDate;
    this.receiverDepot = receiverDepot;
    this.senderDepot = senderDepot;
    this.plannedCollectionDate = plannedCollectionDate;
    this.plannedDeliveryDate = plannedDeliveryDate;
    this.collectionRoute = collectionRoute;
    this.distributionRoute = distributionRoute;
    this.collectionDriver = collectionDriver;
    this.distributionDriver = distributionDriver;
    this.volume = volume;
    this.operaticVolumeWeight = operaticVolumeWeight;
    this.operaticVolumeCalculated = operaticVolumeCalculated;
  }
}
