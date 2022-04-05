import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FeatherIconDirective } from './feather-icons.directive';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UsersComponent } from './UserPage/users/users.component';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { AddUserComponent } from './UserPage/add-user/add-user.component';
import { UserListComponent } from './UserPage/user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './UserPage/update-user/update-user.component';
import { DropdownComponent } from './Components/dropdown/dropdown.component';
import { LocationModule } from './Location/location.module';
import { LoginComponent } from './Auth/login/login.component';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopNavBarComponent,
    SideNavComponent,
    FeatherIconDirective,
    UsersComponent,
    AdminDisplayComponent,
    AddUserComponent,
    UserListComponent,
    UpdateUserComponent,
    DropdownComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LocationModule,
  ],
  providers: [
    [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
