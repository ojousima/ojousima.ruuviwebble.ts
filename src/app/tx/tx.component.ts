import { ChangeDetectorRef, Component, Injectable, OnInit } from '@angular/core';
import { BluetoothCore, BrowserWebBluetooth, ConsoleLoggerService } from '@manekinekko/angular-web-bluetooth';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { map, mergeMap } from 'rxjs/operators';
import { BleService } from '../ble.service';

// make sure we get a singleton instance of each service
const PROVIDERS = [{
  provide: BluetoothCore,
  useFactory: (b, l) => new BluetoothCore(b, l),
  deps: [BrowserWebBluetooth, ConsoleLoggerService]
}, {
  provide: BleService,
  useFactory: (b) => new BleService(b),
  deps: [BluetoothCore]
}];

@Component({
  selector: 'app-tx',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.css'],
  providers: PROVIDERS
})

/** TX As in NUS characteristic TX **/
export class TxComponent implements OnInit {

  /** RX as in received data **/
  RX = null;
  mode = "determinate";
  color = "primary";
  valuesSubscription: Subscription;
  streamSubscription: Subscription;
  deviceSubscription: Subscription;

  constructor(
    public service: BleService,
    public snackBar: MatSnackBar,
    private ref: ChangeDetectorRef) {
  	service.config({
      decoder: (value: DataView) => value,
      service: "6E400001-B5A3-F393-E0A9-E50E24DCCA9E".toLowerCase(),
      characteristic: "6E400003-B5A3-F393-E0A9-E50E24DCCA9E".toLowerCase()
    })
  }


  getDeviceStatus() {
    this.deviceSubscription = this.service.getDevice()
      .subscribe(device => {
        if (device) {
          this.mode = "determinate";
        } else {
          // device not connected or disconnected
          this.mode = "indeterminate";
          this.RX = null;
        }
      }, this.hasError.bind(this));
  }

  requestValue() {
    this.valuesSubscription = this.service.value()
      .subscribe(this.updateValue.bind(this), this.hasError.bind(this));
  }

  requestStream() {
    this.streamSubscription = this.service.stream()
      .subscribe(this.updateValue.bind(this), this.hasError.bind(this));
  }

  updateValue(value: DataView) {
  	console.log("data");
  	this.RX = String.fromCharCode.apply(null, new Uint8Array(value.buffer));
    this.mode = "determinate";
  }

  disconnect() {
    this.deviceSubscription.unsubscribe();
    this.streamSubscription.unsubscribe();
    this.valuesSubscription.unsubscribe();
    this.service.disconnectDevice();
  }

  hasError(error: string) {
    this.snackBar.open(error, 'Close');
  }

  ngOnDestroy() {
  	// Component gets destroyed on tab change - keep the connection.
    // this.valuesSubscription.unsubscribe();
    // this.deviceSubscription.unsubscribe();
    // this.streamSubscription.unsubscribe();
  }

  ngOnInit() {
  }
}
