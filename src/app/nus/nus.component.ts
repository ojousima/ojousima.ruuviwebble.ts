import { Component, Injectable, OnInit } from '@angular/core';
import { BluetoothCore, BrowserWebBluetooth, ConsoleLoggerService } from '@manekinekko/angular-web-bluetooth';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { map, mergeMap } from 'rxjs/operators';
import { BleService } from '../ble.service';

// make sure we get a singleton instance of each service
/*
const PROVIDERS = [{
  provide: BluetoothCore,
  useFactory: (b, l) => new BluetoothCore(b, l),
  deps: [BrowserWebBluetooth, ConsoleLoggerService]
}, {
  provide: BleService,
  useFactory: (b) => new BleService(b),
  deps: [BluetoothCore]
}];
*/
@Component({
  selector: 'app-nus',
  templateUrl: './nus.component.html',
  styleUrls: ['./nus.component.css']
})
export class NusComponent implements OnInit {
  // These variable are from Angular point of view,
  // i.e. Angular TX->Target RX and vice versa.
  /*
  RX = null;
  TX = null;
  streamSubscription: Subscription;

constructor(
    public RXService: BleService,
    public TXService: BleService,
    public snackBar: MatSnackBar) {
  	RXService.config({
      decoder: (value: DataView) => String.fromCharCode.apply(null, new Uint8Array(value.buffer)),
      service: "6E400001-B5A3-F393-E0A9-E50E24DCCA9E".toLowerCase(),
      characteristic: "6E400002-B5A3-F393-E0A9-E50E24DCCA9E".toLowerCase()
    }),
    TXService.config({
      decoder: (value: DataView) => String.fromCharCode.apply(null, new Uint8Array(value.buffer)),
      service: "6E400001-B5A3-F393-E0A9-E50E24DCCA9E".toLowerCase(),
      characteristic: "6E400003-B5A3-F393-E0A9-E50E24DCCA9E".toLowerCase()
    })
  }

  updateValue(value: DataView) {
  	this.RX = String.fromCharCode.apply(null, new Uint8Array(value.buffer));
  }

  disconnect() {
    this.streamSubscription.unsubscribe();
    this.RXService.disconnectDevice();
    this.TXService.disconnectDevice();
  }

  hasError(error: string) {
    this.snackBar.open(error, 'Close');
  }

  ngOnInit() {
  }
*/
  constructor() { }

  ngOnInit() {
  }
}
