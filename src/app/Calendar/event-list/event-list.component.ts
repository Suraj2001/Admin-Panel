import { Component, OnInit, ViewChild } from '@angular/core';
import { EventInput } from '@fullcalendar/angular';
import { CALENDAREVENTS } from 'src/app/Models/data';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  calendarEventsData: EventInput[] = [];
  event: EventInput = {};
  myDate = new Date();
  decoration: String = 'none';
  isChecked: Boolean = false;
  priority?: String;
  taskId?: number;
  status: Boolean = true;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this._fetchData();
  }

  _fetchData(): void {
    this.taskService.getAllTask().subscribe((data) => {
      this.calendarEventsData = this.calendarEventsData.concat(data);
      for (let event of this.calendarEventsData) {
        event.backgroundColor = this.getPriorityColor(event['priority']);
        // event.extendedProps['priority'] =
      }
    });
  }

  checkbox(id: any, event: any) {
    // console.log(event.target.checked);
    this.isChecked = event.target.checked;
    this.taskId = id;
  }

  changeBox(event: any) {
    // console.log(event.target.checked);
  }

  deleteTask(task: EventInput) {
    this.taskService.deleteTask(task?.id).subscribe(
      (data) => {
        this.calendarEventsData.splice(
          this.calendarEventsData.indexOf(task),
          1
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPriority(id: String) {
    switch (id) {
      case '1': {
        return 'High';
      }
      case '2': {
        return 'Medium';
      }
      case '3': {
        return 'Low';
      }
      case '4': {
        return 'None';
      }
      default: {
        return 'N/A';
      }
    }
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
