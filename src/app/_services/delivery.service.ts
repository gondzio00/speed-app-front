import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Delivery} from "../model/delivery";

const API_URL = 'https://speed-app.onrender.com/api/packages';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {

  private search: string = ''

  setSearch(search: string) {
    console.log('SET ' + search)

    this.search = search
  }

  getSearch() {
    console.log('GET ' + this.search)

    return this.search
  }

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(API_URL);
  }

  findAllByPackageNumber(packageName: string): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(API_URL + '/get/' + packageName);
  }

  findOneByPackageNumber(packageName: string | null): Observable<any> {
    return this.http.get<Delivery[]>(API_URL + '/' + packageName);
  }

  findOneUpdatedByPackageNumber(packageName: string | null): Observable<any> {
    return this.http.get<Delivery[]>(API_URL + '/updated/' + packageName);
  }

  saveUpdatedDelivery(packageName: string | null, value: any): Observable<any> {
    return this.http.post<void>(API_URL + '/updated/' + packageName, value);
  }
}
