import { Component, OnInit } from '@angular/core';
import { ProfileOptionItem } from '../../Models/profile-options.model';

@Component({
  selector: 'app-manage-location',
  templateUrl: './manage-location.component.html',
  styleUrls: ['./manage-location.component.scss'],
})
export class ManageLocationComponent implements OnInit {
  profileOptions: ProfileOptionItem[] = [];

  constructor() {}

  ngOnInit(): void {}
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
}
