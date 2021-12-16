import { Component } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  //single
  date: string;
  type: 'string';

  onChange($event: any) {
    console.log($event);
  }

  //multiple
  // dateMulti: string[];
  // type: 'string';
  // optionsMulti: CalendarComponentOptions = {
  // pickMode: 'multi'
  // };


  //range
  // dateRange: { from: string; to: string; };
  // type: 'string';
  
  // optionsRange: CalendarComponentOptions = {
  //   pickMode: 'range'
  // };

  constructor() { }

}
