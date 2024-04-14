import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityData } from '../models/city-data';
import { LocationServiceConstants, LocationServiceFieldOptions } from '../models/location-service-constants';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private siteUrl = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records`;
  private selectRequiredFields = encodeURIComponent(`${LocationServiceFieldOptions.NAME},${LocationServiceFieldOptions.ASCII_NAME},${LocationServiceFieldOptions.GEONAME_ID},${LocationServiceFieldOptions.ALTERNATE_NAMES},${LocationServiceFieldOptions.COUNTRY_CODE},${LocationServiceFieldOptions.COUNTRY_NAME},${LocationServiceFieldOptions.POPULATION},${LocationServiceFieldOptions.TIMEZONE},${LocationServiceFieldOptions.LABEL}`);
  constructor(private http: HttpClient) { }

  getCityListings(pageNo: number, timeZone:string):Observable<CityData>{

    timeZone = encodeURIComponent(timeZone);
    let url:string = `${this.siteUrl}?select=${this.selectRequiredFields}&limit=${LocationServiceConstants.PageSize}&offset=${LocationServiceConstants.PageSize * pageNo}&timezone=${timeZone}`;
    // console.log(url);
    return this.http.get<CityData>(url);
  }

  // Need to use this for search functionality
  // getCityListingsWithFilter(pageNo: number, timeZone:string ,):Observable<CityData>{

  //   timeZone = encodeURIComponent(timeZone);
  //   let url:string = `${this.siteUrl}?select=${this.selectFields}&limit=${this.pageSize}&offset=${this.pageSize * pageNo}&timezone=${timeZone}`;
  //   // console.log(url);
  //   return this.http.get<CityData>(url);
  // }
}
