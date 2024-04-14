import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityListingComponent } from './sgi/city-listing/city-listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CityListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weatherApp';
}
