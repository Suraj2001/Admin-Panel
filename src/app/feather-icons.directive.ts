import { Directive } from '@angular/core';
import * as feather from 'feather-icons';

@Directive({
  selector: '[appFeatherIcon]',
})
export class FeatherIconsDirective {
  constructor() {}

  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }
}
