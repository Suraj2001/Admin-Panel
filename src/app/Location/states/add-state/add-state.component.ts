import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Country } from 'src/app/Models/Country.model';
import { LocationService } from 'src/app/services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.scss'],
})
export class AddStateComponent implements OnInit {
  countryList?: Country[];
  stateForm = new FormGroup({
    countryid: new FormControl(''),
    state: new FormControl(''),
  });
  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.locationService.findAll().subscribe((data) => {
      this.countryList = data;
    });
  }

  submit() {
    console.log(this.stateForm.value);
    this.locationService.saveState(this.stateForm.value).subscribe();
    this.stateForm.reset();
    this.gotoStateList();
  }
  gotoStateList() {
    this.router.navigate(['location/states/stateList']);
  }
}
