import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityData } from '../models/city-data';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private siteUrl = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records`;
  private pageSize = 30;
  private selectFields = encodeURIComponent(`name,ascii_name,geoname_id,alternate_names,country_code,cou_name_en,population,timezone,label_en`);
  constructor(private http: HttpClient) { }

  getCityListings(pageNo: number, timeZone:string):Observable<CityData>{

    timeZone = encodeURIComponent(timeZone);
    let url:string = `${this.siteUrl}?select=${this.selectFields}&limit=${this.pageSize}&offset=${this.pageSize * pageNo}&timezone=${timeZone}`;
    // console.log(url);
    return this.http.get<CityData>(url);
  }
  getCityListingsWithFilter(pageNo: number, timeZone:string ,):Observable<CityData>{

    timeZone = encodeURIComponent(timeZone);
    let url:string = `${this.siteUrl}?select=${this.selectFields}&limit=${this.pageSize}&offset=${this.pageSize * pageNo}&timezone=${timeZone}`;
    // console.log(url);
    return this.http.get<CityData>(url);
  }
}
