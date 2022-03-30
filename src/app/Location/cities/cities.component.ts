import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { City } from 'src/app/Models/City.model';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  cityRoute?: Subscription;
  stateId?: number;
  cities?: City[];

  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cityRoute = this.route.params.subscribe((params) => {
      this.stateId = params['stateId'];
    });
  }
}
