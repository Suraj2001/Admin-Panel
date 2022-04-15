import { EventInput } from '@fullcalendar/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

export const CALENDAREVENTS: EventInput[] = [
  {
    id: '1',
    title: 'Meeting with Mr. Shreyu',
    start: new Date().setDate(new Date().getDate() + 2),
    end: new Date().setDate(new Date().getDate() + 4),
    classNames: ['bg-warning'],
  },
  {
    id: '2',
    title: 'Interview - Backend Engineer',
    start: new Date(),
    // classNames: ['bg-warning'],
    textColor: '#5369f8',
  },
  {
    id: '3',
    title: 'Phone Screen - Frontend Engineer',
    start: new Date().setDate(new Date().getDate() + 2),
  },
  {
    id: '4',
    title: 'Buy Design Assets',
    start: new Date().setDate(new Date().getDate() + 4),
    end: new Date().setDate(new Date().getDate() + 5),
  },
  {
    id: '4',
    title: 'Suraj  Shah',
    start: '2022-04-06',
    end: '2022-04-08',
    backgroundColor: '#DB324D',
  },
];
