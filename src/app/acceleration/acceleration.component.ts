import { ChangeDetectorRef, Component, Injectable, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-acceleration',
  templateUrl: './acceleration.component.html',
  styleUrls: ['./acceleration.component.css']
})
export class AccelerationComponent implements OnInit {

  @Input() data: Observable<DataView>;
  @Output() response: Observable<DataView>;

  constructor() { }

  ngOnInit() {
  }

}
