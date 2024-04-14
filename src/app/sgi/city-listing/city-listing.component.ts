import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { NgFor, NgIf } from '@angular/common';
import { City } from '../models/city-data';
import { ListPopupViewComponent } from '../list-popup-view/list-popup-view.component';

@Component({
  selector: 'sgi-city-listing',
  standalone: true,
  imports: [NgFor, NgIf, ListPopupViewComponent],
  templateUrl: './city-listing.component.html',
  styleUrl: './city-listing.component.css'
})
export class CityListingComponent implements OnInit {
  private totalCount:number = 0 ;
  countryHovered: string | null = null;
  private totalEntryCount: number = 0;
  private pageNumber: number = 0;
  showAlternateNames(city: City) {
    this.countryHovered = city.ascii_name;
  }
  hideAlternateNames() {
    this.countryHovered = null;
  }
  cityData:City[] = [];
  constructor(private locationService: LocationService){}
  ngOnInit(){
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("User Time Zone:", userTimeZone);

    this.locationService.getCityListings(0, userTimeZone)
    .subscribe(
      (data) =>
      {
        // console.log(data);
        this.totalCount = data.total_count;
        this.cityData = data.results;
      }
    );
  }
  onScroll(event : any){

    this.fetchMoreEntries();
  }
  fetchMoreEntries(){
    this
  }
}
