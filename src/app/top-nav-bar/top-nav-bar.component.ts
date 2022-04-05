import { Component, OnInit } from '@angular/core';
import { CreateNewMenuOption } from '../Models/create-new.model';
import { LocationOptionItem } from '../Models/LocationOptionItem.model';
import { ProfileOptionItem } from '../Models/profile-options.model';
import { EventService } from '../services/event.service';
import { LoginComponent } from '../Auth/login/login.component';
import { concat } from 'rxjs';
import { UserListService } from '../services/user-list.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../Models/users.models';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
})
export class TopNavBarComponent implements OnInit {
  createMenuOptions: CreateNewMenuOption[] = [];
  profileOptions: ProfileOptionItem[] = [];
  createLocationOptions: LocationOptionItem[] = [];
  leftMargin: String = '250px';
  sidebarVisibility: boolean = true;
  user?: User;
  firstname?: String;
  lastname?: String;

  constructor(
    private event: EventService,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.event.sidebarVisibilityChange.subscribe((value) => {
      this.sidebarVisibility = value;
      if (this.sidebarVisibility) {
        this.leftMargin = '250px';
      } else {
        this.leftMargin = '0px';
      }
    });
  }

  ngOnInit(): void {
    this._fetchMenus();
    this._fetchProfileOptions();
    this._fetchLocationOptions();
    this.user = this.authService.getUserDetails();
    this.firstname = this.user?.firstName;
    this.lastname = this.user?.lastName;
  }
  ngAfterViewInit() {}

  toggleMenu() {
    if (this.leftMargin === '250px') {
      this.leftMargin = '0px';
      this.event.toggleSidebarVisibility();
    } else {
      this.leftMargin = '250px';
      this.event.toggleSidebarVisibility();
    }
  }

  _fetchLocationOptions(): void {
    this.createLocationOptions = [
      { id: 1, label: 'Country', route: 'location/country' },
      { id: 1, label: 'States', route: 'location/states' },
      { id: 1, label: 'Cities', route: 'location/cities' },
    ];
  }

  _fetchMenus(): void {
    this.createMenuOptions = [
      {
        id: 1,
        label: 'New Projects',
        icon: 'uil uil-bag',
      },
      {
        id: 2,
        label: 'Create Users',
        icon: 'uil uil-user-plus',
      },
      {
        id: 3,
        label: 'Revenue Report',
        icon: 'uil uil-chart-pie',
      },

      {
        id: 4,
        label: 'Help & Support',
        icon: 'uil uil-question-circle',
      },
    ];
  }

  _fetchProfileOptions(): void {
    this.profileOptions = [
      {
        label: 'My Account',
        icon: 'uil-user',
      },
      {
        label: 'Lock Screen',
        icon: 'uil-lock',
      },
      {
        label: 'Logout',
        icon: 'uil-exit',
      },
    ];
  }
  _profileMethods(value: number): void {
    switch (value) {
      case 0: {
        break;
      }
      case 1: {
        //statements;
        break;
      }
      case 2: {
        this.authService.logout();
        this.router.navigate(['/login']);
        break;
      }

      default: {
        //statements;
        break;
      }
    }
  }
}
