import { ChangeDetectorRef, Component, Injectable, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { NusDataService } from '../nus-data.service';
import { AngularRuuviEndpointsModule, RuuviCommand, RuuviEndpoint } from 'angular-ruuvi-endpoints';

@Component({
  selector: 'app-rtc',
  templateUrl: './rtc.component.html',
  styleUrls: ['./rtc.component.css']
})
export class RtcComponent implements OnInit {

  /** TX as in transmitted data **/
  TX = null;
  /** RX as in received data **/
  RX = null;
  mode = "determinate";
  color = "primary";
  time: Date;

  destinations = Object.keys(RuuviEndpoint).filter((type) => isNaN(<any>type));
  sources = Object.keys(RuuviEndpoint).filter((type) => isNaN(<any>type));
  types = Object.keys(RuuviCommand).filter((type) => isNaN(<any>type));

  @Input() data: Observable<DataView>;
  @Output() response: Observable<DataView>;

  constructor(private NUS: NusDataService) { 
    
  }

  ngOnInit() {
  	this.NUS.currentTx.subscribe(tx => {
      this.TX = tx;
    });
  	this.NUS.currentRx.subscribe(rx => {
      let msg = new AngularRuuviEndpointsModule();
      if(RuuviEndpoint.Rtc == msg.source(rx)){
        this.RX = rx;
        this.time = new Date(this.RX.getBigUint64(msg.payload()));
      }
    });
  }

}
