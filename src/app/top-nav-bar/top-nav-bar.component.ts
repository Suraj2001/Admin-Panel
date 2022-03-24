import {
  AfterViewInit,
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { CreateNewMenuOption } from '../Models/create-new.model';
import { ProfileOptionItem } from '../Models/profile-options.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
})
export class TopNavBarComponent implements OnInit {
  createMenuOptions: CreateNewMenuOption[] = [];
  profileOptions: ProfileOptionItem[] = [];
  leftMargin: string = '250px';
  sidebarVisibility: boolean = true;

  constructor(private event: EventService) {
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
        label: 'Settings',
        icon: 'uil uil-cog',
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
        icon: 'user',
      },
      {
        label: 'Lock Screen',
        icon: 'lock',
      },
      {
        label: 'Logout',
        icon: 'log-out',
      },
    ];
  }
}
