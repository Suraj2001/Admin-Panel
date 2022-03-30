import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './UserPage/users/users.component';
import { AddUserComponent } from './UserPage/add-user/add-user.component';
import { UserListComponent } from './UserPage/user-list/user-list.component';
import { UpdateUserComponent } from './UserPage/update-user/update-user.component';
import { ManageLocationComponent } from './Location/manage-location/manage-location.component';
import { CountryComponent } from './Location/country/country.component';
import { StatesComponent } from './Location/states/states.component';
import { CitiesComponent } from './Location/cities/cities.component';
import { CountryListComponent } from './Location/country/country-list/country-list.component';
import { AddCountryComponent } from './Location/country/add-country/add-country.component';
import { AddStateComponent } from './Location/states/add-state/add-state.component';
import { StateListComponent } from './Location/states/state-list/state-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: '', redirectTo: 'addUser', pathMatch: 'full' },
      { path: 'addUser', component: AddUserComponent },
      { path: 'userList', component: UserListComponent },
      { path: 'editUser/:id', component: UpdateUserComponent },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'email', component: DashboardComponent },
  { path: 'calendar', component: DashboardComponent },
  { path: 'chat', component: DashboardComponent },
  { path: 'projects', component: DashboardComponent },
  { path: 'task', component: DashboardComponent },
  { path: 'filemanager', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
