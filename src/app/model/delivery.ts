export class Delivery {
  totalColli: String;
  packageNumber: String;
  road: String;
  weight: String;
  manipUnit: String;

  receiverName: String;
  receiverStreet: String;
  receiverCity: String;
  receiverPostalCode: String;

  senderName: String;
  senderStreet: String;
  senderCity: String;
  senderPostalCode: String;

  lastDepotStatus: String;
  lastStatus: String;
  lastStatusDate: Date;

  receiverDepot: String;
  senderDepot: String;

  plannedCollectionDate: Date;
  plannedDeliveryDate: Date;

  collectionRoute: String;
  distributionRoute: String;

  collectionDriver: String;
  distributionDriver: String;

  volume: String;
  operaticVolumeWeight: String;
  operaticVolumeCalculated: String;

  constructor(totalColli: String, packageNumber: String, road: String, weight: String, manipUnit: String, receiverName: String, receiverStreet: String, receiverCity: String, receiverPostalCode: String, senderName: String, senderStreet: String, senderCity: String, senderPostalCode: String, lastDepotStatus: String, lastStatus: String, lastStatusDate: Date, receiverDepot: String, senderDepot: String, plannedCollectionDate: Date, plannedDeliveryDate: Date, collectionRoute: String, distributionRoute: String, collectionDriver: String, distributionDriver: String, volume: String, operaticVolumeWeight: String, operaticVolumeCalculated: String) {
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
