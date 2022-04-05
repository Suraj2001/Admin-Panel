import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDisplayComponent } from '../admin-display/admin-display.component';
import { CitiesComponent } from './cities/cities.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryComponent } from './country/country.component';
import { ManageLocationComponent } from './manage-location/manage-location.component';
import { AddStateComponent } from './states/add-state/add-state.component';
import { StateListComponent } from './states/state-list/state-list.component';
import { StatesComponent } from './states/states.component';

const routes: Routes = [
  {
    path: 'display',
    component: AdminDisplayComponent,
    children: [
      {
        path: 'location',
        component: ManageLocationComponent,
        children: [
          { path: '', redirectTo: 'country', pathMatch: 'full' },
          {
            path: 'country',
            component: CountryComponent,
            children: [
              { path: '', redirectTo: 'addCountry', pathMatch: 'full' },
              { path: 'addCountry', component: AddCountryComponent },
              { path: 'countryList', component: CountryListComponent },
            ],
          },
          {
            path: 'states',
            component: StatesComponent,
            children: [
              { path: '', redirectTo: 'addState', pathMatch: 'full' },
              { path: 'addState', component: AddStateComponent },
              { path: 'stateList', component: StateListComponent },
            ],
          },
          {
            path: 'cities',
            component: CitiesComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {}
