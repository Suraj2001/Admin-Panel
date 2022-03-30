import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/app/Models/Country.model';
import { User } from 'src/app/Models/users.models';
import { LocationService } from 'src/app/services/location.service';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss'],
})
export class AddCountryComponent implements OnInit {
  user?: Country;
  constructor(
    private router: Router,
    private locationService: LocationService
  ) {
    this.user = new User();
  }

  countryForm = new FormGroup({
    name: new FormControl(''),
    alias: new FormControl(''),
    currency: new FormControl(''),
    code: new FormControl(''),
    population: new FormControl(''),
  });
  ngOnInit(): void {
    this.countryForm;
  }
  addCountry() {
    this.locationService.saveCountry(this.countryForm.value).subscribe(() => {
      this.gotoCountryList();
    });
    this.countryForm.reset();
  }
  gotoCountryList() {
    this.router.navigate(['/location/country/countryList']);
  }
}
