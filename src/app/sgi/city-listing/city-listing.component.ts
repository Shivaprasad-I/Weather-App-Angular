import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { NgFor, NgIf } from '@angular/common';
import { City } from '../models/city-data';
import { ListPopupViewComponent } from '../list-popup-view/list-popup-view.component';
import { LocationServiceConstants } from '../models/location-service-constants';

@Component({
  selector: 'sgi-city-listing',
  standalone: true,
  imports: [NgFor, NgIf, ListPopupViewComponent],
  templateUrl: './city-listing.component.html',
  styleUrl: './city-listing.component.css'
})
export class CityListingComponent implements OnInit {
  private totalCount:number = 0 ;
  userTimeZone :string ="";
  isloading: boolean = false;
  countryHovered: string | null = null;
  showAlternateNames(city: City) {
    this.countryHovered = city.ascii_name;
  }
  hideAlternateNames() {
    this.countryHovered = null;
  }
  cityData:City[] = [];
  constructor(private locationService: LocationService){}
  ngOnInit(){
    this.isloading = true
    this.userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("User Time Zone:", this.userTimeZone);

    this.locationService.getCityListings(0, this.userTimeZone).subscribe(
      (data) =>
      {
        // console.log(data);
        this.totalCount = data.total_count;
        this.cityData = data.results;
        this.isloading = false;
      }
    );
  }
  onScroll(event : any){
    console.log("isloading : "+this.isloading);
    if(this.isloading){
      return;
    }
    const container = event.target as HTMLElement;
    const threshold = 50;
    
    if (container.scrollHeight - container.scrollTop - container.clientHeight < threshold) {
      this.isloading = true;
      let pageNumber = this.cityData.length / LocationServiceConstants.PageSize;
      this.fetchMoreEntries(pageNumber);
    }
  }
  fetchMoreEntries(pageNumber:number){
    this.locationService.getCityListings(pageNumber, this.userTimeZone).subscribe(
      (data) =>
      {
        // console.log(data);
        this.totalCount = data.total_count;
        this.cityData = [...this.cityData,...data.results];
        this.isloading = false;
      }
    );
  }
}
