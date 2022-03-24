import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FeatherIconDirective } from './feather-icons.directive';
import { StatisticChartWidgetComponent } from './statistic-chart-widget/statistic-chart-widget.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UsersComponent } from './UserPage/users/users.component';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { AddUserComponent } from './UserPage/add-user/add-user.component';
import { UserListComponent } from './UserPage/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './UserPage/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopNavBarComponent,
    SideNavComponent,
    FeatherIconDirective,
    StatisticChartWidgetComponent,
    UsersComponent,
    AdminDisplayComponent,
    AddUserComponent,
    UserListComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
