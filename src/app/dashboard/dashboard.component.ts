import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedDateRange: string = '';
  hoveredDate: NgbDate | null = null;
  fromDate!: NgbDate;
  toDate: NgbDate | null = null;

  constructor(private calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.selectedDateRange =
      ('0' + this.fromDate.day).slice(-2) +
      '-' +
      ('0' + this.fromDate.month).slice(-2) +
      '-' +
      this.fromDate.year +
      ' to ' +
      ('0' + this.toDate.day).slice(-2) +
      '-' +
      ('0' + this.toDate.month).slice(-2) +
      '-' +
      this.toDate.year;
  }

  ngOnInit(): void {}

  /**
   * selects date range
   * @param date date
   */
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.selectedDateRange =
        this.fromDate.year +
        '-' +
        this.fromDate.month +
        '-' +
        this.fromDate.day;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.selectedDateRange =
        this.fromDate.year +
        '-' +
        ('0' + this.fromDate.month).slice(-2) +
        '-' +
        ('0' + this.fromDate.day).slice(-2) +
        ' to ' +
        this.toDate.year +
        '-' +
        ('0' + this.toDate.month).slice(-2) +
        '-' +
        ('0' + this.toDate.day).slice(-2);
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.selectedDateRange = '';
    }
  }

  /**
   * returns true/false based on whether date is hovered or not
   * @param date date
   */
  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  /**
   * returns true if date is inside selected range
   * @param date date
   */
  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  /**
   * returns true if date is in range
   * @param date date
   */
  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }
}
