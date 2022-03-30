import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from '@popperjs/core';
import { Observable } from 'rxjs';
import { City } from '../Models/City.model';
import { Country } from '../Models/Country.model';
import { States } from '../Models/States.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/api/location/';
  }

  public saveCountry(countryDetails: Country) {
    return this.http.post<Country>(this.baseUrl + 'countries', countryDetails);
  }

  public deleteCountry(id?: number) {
    return this.http.delete(this.baseUrl + 'deleteCountry/' + id);
  }
  public updateCountry(country: Country, id?: number) {
    return this.http.put<Country>(
      this.baseUrl + 'updateCountry/' + id,
      country
    );
  }

  public findAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl + 'countries');
  }

  public saveState(state: States) {
    return this.http.post<States>(this.baseUrl + 'states', state);
  }
  public findAllStates(): Observable<States[]> {
    return this.http.get<States[]>(this.baseUrl + 'states');
  }
  public updateState(state: States, id?: number) {
    return this.http.put<States>(this.baseUrl + 'updateState/' + id, state);
  }
  public deleteState(id?: number) {
    return this.http.delete(this.baseUrl + 'deleteState/' + id);
  }
}
