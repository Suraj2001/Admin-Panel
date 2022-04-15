import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDisplayComponent } from '../admin-display/admin-display.component';
import { CalendarDisplayComponent } from './calendar-display/calendar-display.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  {
    path: 'display',
    component: AdminDisplayComponent,
    children: [
      {
        path: 'calendarDisplay',
        component: CalendarDisplayComponent,
        children: [
          { path: '', redirectTo: 'calendar', pathMatch: 'full' },
          {
            path: 'calendar',
            component: CalendarComponent,
          },
          {
            path: 'tasks',
            component: EventListComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
