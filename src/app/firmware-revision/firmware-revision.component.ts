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
  selector: 'app-firmware-revision',
  templateUrl: './firmware-revision.component.html',
  styleUrls: ['./firmware-revision.component.css'],
  providers: PROVIDERS
})

export class FirmwareRevisionComponent implements OnInit {

  fwstring = null;
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
      decoder: (value: DataView) => String.fromCharCode.apply(null, new Uint8Array(value.buffer)),
      service: "device_information",
      characteristic: "firmware_revision_string"
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
          this.fwstring = null;
        }
      }, this.hasError.bind(this));
  }

  requestValue() {
    this.valuesSubscription = this.service.value()
      .subscribe(this.updateValue.bind(this), this.hasError.bind(this));
  }

  updateValue(value: DataView) {
  	this.fwstring = String.fromCharCode.apply(null, new Uint8Array(value.buffer));
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
