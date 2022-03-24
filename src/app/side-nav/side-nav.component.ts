import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  width = '250px';
  sidebarVisibility: boolean = true;

  constructor(private event: EventService) {
    this.event.sidebarVisibilityChange.subscribe((value) => {
      this.sidebarVisibility = value;
      if (this.sidebarVisibility) {
        this.width = '250px';
      } else {
        this.width = '0px';
      }
    });
  }
  closeNav() {
    this.event.toggleSidebarVisibility();
  }

  ngOnInit(): void {}
}
