import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { CitiesComponent } from './cities/cities.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryComponent } from './country/country.component';
import { ManageLocationComponent } from './manage-location/manage-location.component';
import { AddStateComponent } from './states/add-state/add-state.component';
import { StateListComponent } from './states/state-list/state-list.component';
import { StatesComponent } from './states/states.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManageLocationComponent,
    CountryComponent,
    StatesComponent,
    CitiesComponent,
    CountryListComponent,
    AddCountryComponent,
    StateListComponent,
    AddStateComponent,
  ],
  imports: [CommonModule, LocationRoutingModule, ReactiveFormsModule],
})
export class LocationModule {}
