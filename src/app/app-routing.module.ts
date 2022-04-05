import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './UserPage/users/users.component';
import { AddUserComponent } from './UserPage/add-user/add-user.component';
import { UserListComponent } from './UserPage/user-list/user-list.component';
import { UpdateUserComponent } from './UserPage/update-user/update-user.component';
import { LoginComponent } from './Auth/login/login.component';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'display',
    component: AdminDisplayComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
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

      { path: 'email', component: DashboardComponent },
      { path: 'calendar', component: DashboardComponent },
      { path: 'chat', component: DashboardComponent },
      { path: 'projects', component: DashboardComponent },
      { path: 'task', component: DashboardComponent },
      { path: 'filemanager', component: DashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
