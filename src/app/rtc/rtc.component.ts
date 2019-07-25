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
  TX: DataView = null;
  TXmode = "unknown";
  selectedDestination: String;
  selectedSource: String;
  selectedType: String
  /** RX as in received data **/
  RX: DataView = null;
  RXmode = "unknown"
  RXcmd: string;

  
  localTime: Date;
  tagTime: Date;
  parser: AngularRuuviEndpointsModule;

  destinations = Object.keys(RuuviEndpoint).filter((type) => isNaN(<any>type));
  sources = Object.keys(RuuviEndpoint).filter((type) => isNaN(<any>type));
  types = Object.keys(RuuviCommand).filter((type) => isNaN(<any>type));
  typeValues = Object.values(RuuviCommand).filter((type) => isNaN(<any>type));
  


  sendTX(){
    this.TX.setUint8(0, RuuviEndpoint.Rtc);
    this.TX.setUint8(1, RuuviEndpoint.Rtc);
    this.TX.setUint8(2, RuuviCommand.ValueRead);
    this.NUS.sendTx(this.TX);
  }

  synchEpoch(){

  }

  constructor(private NUS: NusDataService) { 
    this.parser = new AngularRuuviEndpointsModule();
  }

  ngOnInit() {
    let buffer = new ArrayBuffer(11);
    this.RX = new DataView(buffer);
    this.TX = new DataView(buffer);
  	this.NUS.currentTx.subscribe(tx => {
      if(RuuviEndpoint.Rtc == this.parser.destination(tx)){
        this.TX = tx;
        this.TXmode = "clean";
        this.localTime = new Date(this.parser.payload(tx).getUint16(2)*2^32 + this.parser.payload(tx).getUint32(4));
      }
    });
  	this.NUS.currentRx.subscribe(rx => {
      if(RuuviEndpoint.Rtc == this.parser.source(rx)){
        this.RX = rx;
        this.RXmode = "clean"
        this.tagTime = new Date(this.parser.payload(rx).getUint16(2)*2^32 + this.parser.payload(rx).getUint32(4));
        this.RXcmd = RuuviCommand[this.parser.type(rx)];
      }
    });
  }
}
