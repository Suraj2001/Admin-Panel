import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Country } from 'src/app/Models/Country.model';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  countries?: Country[];
  countryId?: number;

  countryForm = new FormGroup({
    name: new FormControl(''),
    alias: new FormControl(''),
    currency: new FormControl(''),
    code: new FormControl(''),
    population: new FormControl(''),
  });

  constructor(
    private locationService: LocationService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.locationService.findAll().subscribe((data) => {
      this.countries = data;
    });
  }
  openDialog(content: any, country: Country) {
    this.modalService
      .open(content, { ariaLabelledBy: 'exampleModalLabel' })
      .result.then((result) => {
        if (result === 'yes') {
          this.deleteCountry(country);
        }
      });
  }
  openCountryDialog(content: any, country: Country) {
    this.modalService
      .open(content, { centered: true, size: 'lg' })
      .result.then((result) => {
        if (result === 'yes') {
          this.deleteCountry(country);
        }
      });
    this.countryId = country.id;
    this.countryForm = new FormGroup({
      name: new FormControl(country.name),
      alias: new FormControl(country.alias),
      currency: new FormControl(country.currency),
      code: new FormControl(country.code),
      population: new FormControl(country.population),
    });
  }

  deleteCountry(country: Country) {
    this.locationService.deleteCountry(country.id).subscribe(
      (data) => this.countries?.splice(this.countries?.indexOf(country), 1),
      (error) => console.error('Error in deleting country')
    );
  }
  updateCountry() {
    this.modalService.dismissAll();
    this.locationService
      .updateCountry(this.countryForm.value, this.countryId)
      .subscribe(() => {});
    location.reload();
  }
}
