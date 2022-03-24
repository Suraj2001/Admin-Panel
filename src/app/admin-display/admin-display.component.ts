import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.scss'],
})
export class AdminDisplayComponent implements OnInit {
  leftMargin = '250px';
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

  ngOnInit(): void {}
}
