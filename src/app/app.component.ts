import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ojousima-ruuviwebble-ts';
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
        	disabled: false,
            label: 'Device',
            link: './device',
            index: 0
        }, {
        	disabled: true,
            label: 'Acceleration',
            link: './acceleration',
            index: 1
        }, {
        	disabled: true,
            label: 'ADC',
            link: './adc',
            index: 2
        }, {
        	disabled: true,
            label: 'Environmental',
            link: './environmental',
            index: 3
        }, {
        	disabled: true,
            label: 'GPIO',
            link: './gpio',
            index: 4
        }, {
        	disabled: false,
            label: 'RTC',
            link: './rtc',
            index: 5
        }, {
        	disabled: false,
            label: 'NUS',
            link: './nus',
            index: 6
        }
    ];
}

ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }
}