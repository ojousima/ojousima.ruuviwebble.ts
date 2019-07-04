import { ChangeDetectorRef, Component, Injectable, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  constructor() {
  }
  
  ngOnInit() {
  }

}