import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarDisplayComponent } from './calendar-display/calendar-display.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { EventListComponent } from './event-list/event-list.component';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  bootstrapPlugin,
  timeGridPlugin,
  listPlugin,
]);

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarDisplayComponent,
    EventListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModalModule,
    FullCalendarModule,
    CalendarRoutingModule,
  ],
})
export class CalendarModule {}
