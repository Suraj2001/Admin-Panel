import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CalendarOptions,
  EventClickArg,
  EventInput,
  FullCalendarComponent,
} from '@fullcalendar/angular';
import { DateClickArg } from '@fullcalendar/interaction';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {};
  calendarTaskData: EventInput[] = [];
  selectedDay: any = {};
  taskId?: String;
  isEditable: boolean = false;
  event: EventInput = {};
  prioritySelected?: number;
  priorityColor?: String;
  taskForm = new FormGroup({
    title: new FormControl(null),
    start: new FormControl(null),
    end: new FormControl(null),
    priority: new FormControl(null),
  });
  priorityList: {
    id?: number;
    title?: String;
    color?: String;
    isDisabled?: Boolean;
  }[] = [
    { id: 0, title: 'Select Your Option', color: '#00000', isDisabled: true },
    { id: 1, title: 'High', color: '#DB324D', isDisabled: false },
    { id: 2, title: 'Medium', color: '#F4743B', isDisabled: false },
    { id: 3, title: 'Low', color: '#ffc107', isDisabled: false },
    { id: 4, title: 'None', color: '#5369f8', isDisabled: false },
  ];

  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;

  @ViewChild('content', { static: true })
  eventModal!: CalendarComponent;

  constructor(
    private modalService: NgbModal,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initCalendar();
    this._fetchData();
    this.taskForm;
    this.taskForm.patchValue({
      priority: 1,
    });
  }

  initCalendar(): void {
    // full calendar config
    this.calendarOptions = {
      themeSystem: 'bootstrap',
      bootstrapFontAwesome: false,
      buttonText: {
        today: 'Today',
        month: 'Month',
        // list: 'List',
        prev: 'Prev',
        next: 'Next',
      },
      dayMaxEventRows: 2,
      initialView: 'dayGridMonth',
      handleWindowResize: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth',
      },
      // events: [...this.calendarEventsData],
      editable: true,
      // droppable: true, // this allows things to be dropped onto the calendar
      selectable: true,
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      // drop: this.onDrop.bind(this),
    };
  }

  _fetchData(): void {
    this.taskService.getAllTask().subscribe((data) => {
      this.calendarTaskData = this.calendarTaskData.concat(data);
      for (let event of this.calendarTaskData) {
        event.backgroundColor = this.getPriorityColor(event['priority']);
      }
      this.calendarOptions.events = [...this.calendarTaskData];
    });
  }

  handleDateClick(arg: DateClickArg): void {
    this.selectedDay = arg;
    this.isEditable = false;
    this.prioritySelected = 0;
    this.priorityColor = '#000000';
    this.taskForm.setValue({
      title: null,
      start: formatDate(arg.date, 'yyyy-MM-dd', 'en'),
      end: formatDate(
        arg.date.setDate(arg.date.getDate() + 1),
        'yyyy-MM-dd',
        'en'
      ),
      priority: null,
    });
    this.modalService.open(this.eventModal, {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
      centered: true,
    });
  }

  handleEventClick(arg: EventClickArg): void {
    const event = arg.event;
    this.isEditable = true;
    this.taskId = event.id;
    this.prioritySelected = event.extendedProps['priority'];
    this.priorityColor = this.getPriorityColor(
      this.prioritySelected?.toString()
    );
    if (event.start != null) {
      this.taskForm.setValue({
        title: event.title,
        start: formatDate(event.start, 'yyyy-MM-dd', 'en'),
        end:
          event.end != null ? formatDate(event.end, 'yyyy-MM-dd', 'en') : null,
        priority: null,
      });
    }
    // this.isEditable = true;
    this.modalService.open(this.eventModal, {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
      centered: true,
    });
  }

  saveTask() {
    this.taskService.saveTask(this.taskForm.value).subscribe(
      (data) => {
        this.calendarTaskData = [];
        this._fetchData();
      },
      (error) => {
        console.log(error);
      }
    );
    this.modalService.dismissAll();
  }

  updateTask() {
    this.taskService.updateTask(this.taskForm.value, this.taskId).subscribe(
      (data) => {
        this.calendarTaskData = [];
        this._fetchData();
      },
      (error) => {
        console.log(error);
      }
    );
    this.modalService.dismissAll();
    this.isEditable = false;
  }

  deleteTask() {
    this.taskService.deleteTask(this.taskId).subscribe(
      (data) => {
        this.calendarTaskData.splice(this.getTaskIndex(), 1);
        this.calendarOptions.events = [...this.calendarTaskData];
      },
      (error) => {
        console.log(error);
      }
    );
    this.modalService.dismissAll();
    this.isEditable = false;
  }

  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/display/calendarDisplay']);
    });
  }

  getTaskIndex() {
    let modifiedTasks = [...this.calendarTaskData];
    const eventIndex = modifiedTasks.findIndex(
      (task) => task.id == this.taskId
    );
    return eventIndex;
  }

  changePriority(priority: any) {
    this.priorityColor = this.getPriorityColor(
      priority.target.value?.toString()
    );
  }

  getPriorityColor(id?: String) {
    switch (id) {
      case '1': {
        return '#DB324D';
      }
      case '2': {
        return '#F4743B';
      }
      case '3': {
        return '#ffc107';
      }
      case '4': {
        return '#5369f8';
      }
      default: {
        return '#00000';
      }
    }
  }
}
