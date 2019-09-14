import { ChangeDetectorRef, Component, Injectable, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Observable, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { NusDataService } from '../nus-data.service';
import { AngularRuuviEndpointsModule, RuuviCommand, RuuviEndpoint } from 'angular-ruuvi-endpoints';

@Component({
  selector: 'app-environmental',
  templateUrl: './environmental.component.html',
  styleUrls: ['./environmental.component.css']
})
export class EnvironmentalComponent implements OnInit {

  @ViewChild(BaseChartDirective, {static: false}) trhChart: BaseChartDirective;

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

  parser: AngularRuuviEndpointsModule;

  destinations = Object.keys(RuuviEndpoint).filter((type) => isNaN(<any>type));
  sources = Object.keys(RuuviEndpoint).filter((type) => isNaN(<any>type));
  types = Object.keys(RuuviCommand).filter((type) => isNaN(<any>type));
  typeValues = Object.values(RuuviCommand).filter((type) => isNaN(<any>type));

  readTemperature(){
    this.TX.setUint8(0, RuuviEndpoint.Temperature);
    this.TX.setUint8(1, RuuviEndpoint.Temperature);
    this.TX.setUint8(2, 0x11);
    this.TX.setUint32(3, new Date().getTime()/1000);
    this.TX.setUint32(7, 0);
    this.hideCharts();
    this.trhChartOptions.scales.xAxes[0].time.max = new Date().getTime();
    this.showCharts();
    this.NUS.sendTx(this.TX);
  }

  readHumidity(){
    this.TX.setUint8(0, RuuviEndpoint.Humidity);
    this.TX.setUint8(1, RuuviEndpoint.Humidity);
    this.TX.setUint8(2, 0x11);
    this.TX.setUint32(3, new Date().getTime()/1000);
    this.TX.setUint32(7, 0);
    this.hideCharts();
    this.trhChartOptions.scales.xAxes[0].time.max = new Date().getTime();
    this.showCharts();
    this.NUS.sendTx(this.TX);
  }

  readPressure(){
    this.TX.setUint8(0, RuuviEndpoint.Pressure);
    this.TX.setUint8(1, RuuviEndpoint.Pressure);
    this.TX.setUint8(2, 0x11);
    this.TX.setUint32(3, new Date().getTime()/1000);
    this.TX.setUint32(7, 0);
    this.hideCharts();
    this.pressureChartOptions.scales.xAxes[0].time.max = new Date().getTime();
    this.showCharts();
    this.NUS.sendTx(this.TX);
  }

  readEnvironmental(){
    this.TX.setUint8(0, RuuviEndpoint.Environmental);
    this.TX.setUint8(1, RuuviEndpoint.Environmental);
    this.TX.setUint8(2, 0x11);
    this.TX.setUint32(3, new Date().getTime()/1000);
    this.TX.setUint32(7, 0);
    this.hideCharts();
    this.trhChartOptions.scales.xAxes[0].time.max = new Date().getTime();
    this.pressureChartOptions.scales.xAxes[0].time.max = new Date().getTime();
    this.showCharts();
    this.NUS.sendTx(this.TX);
  }

  hideCharts()
  {
    this.trhChartShow = false;
    this.pressureChartShow = false;  
  }

  showCharts()
  {
    setTimeout(()=>{
      this.trhChartShow = true;
      this.pressureChartShow = true;
    }, 10)
  }

  clearHistory()
  {
    this.hideCharts();
    this.trhChartOptions.scales.xAxes[0].time.max = new Date().getTime();
    this.trhChartOptions.scales.xAxes[0].time.min = new Date().getTime()-10000000;
    this.pressureChartOptions.scales.xAxes[0].time.max = new Date().getTime();
    this.pressureChartOptions.scales.xAxes[0].time.min = new Date().getTime()-10000000;
    this.trhChartData[0].data = [];
    this.trhChartData[1].data = [];
    this.pressureChartData[0].data = [];
    this.showCharts();
  }

  constructor(private NUS: NusDataService) { 
    this.parser = new AngularRuuviEndpointsModule();
  }

  ngOnInit() {
    let buffer = new ArrayBuffer(11);
    this.RX = new DataView(buffer);
    this.TX = new DataView(buffer);
    this.NUS.currentTx.subscribe(tx => {
      if(RuuviEndpoint.Temperature == this.parser.destination(tx)){
        this.TX = tx;
        this.TXmode = "clean";
      }
    });
    this.NUS.currentRx.subscribe(rx => {
      // End of data?
      if(0xFFFFFFFF == this.RX.getUint32(3)) { 
        this.sortTime();
        return; 
      }
      if(RuuviEndpoint.Temperature == this.parser.source(rx)){
        this.RX = rx;
        this.RXmode = "clean"
        // Log write?
        if(0x10 != this.parser.type(rx)) { return; }
        // Get timestamp
        let ts = new Date(this.RX.getUint32(3)*1000).toString();
        // Get value
        let temperature = this.RX.getInt32(7)/100;
        this.trhChartData[0].data.push({t: ts, y: temperature});
      }
      if(RuuviEndpoint.Humidity == this.parser.source(rx)){
        this.RX = rx;
        this.RXmode = "clean"
        // Log write?
        if(0x10 != this.parser.type(rx)) { return; }
        // Get timestamp
        let ts = new Date(this.RX.getUint32(3)*1000).toString();
        // Get value
        let humidity = this.RX.getUint32(7)/100;
        this.trhChartData[1].data.push({t: ts, y: humidity});
      }
      if(RuuviEndpoint.Pressure == this.parser.source(rx)){
        this.RX = rx;
        this.RXmode = "clean"
        // Log write?
        if(0x10 != this.parser.type(rx)) { return; }
        // Get timestamp
        let ts = new Date(this.RX.getUint32(3)*1000).toString();
        // Get value
        let pressure = this.RX.getUint32(7);
        this.pressureChartData[0].data.push({t: ts, y: pressure});
      }
    });
  }

  sortTime()
  {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    this.trhChartData[0].data.sort(function(a,b){
      return new Date(b.t).getTime() - new Date(a.t).getTime();
    });
    this.trhChartData[1].data.sort(function(a,b){
      return new Date(b.t).getTime() - new Date(a.t).getTime();
    });
    this.pressureChartData[0].data.sort(function(a,b){
      return new Date(b.t).getTime() - new Date(a.t).getTime();
    });
  }


  public trhChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        position: 'bottom',
        time: {
          max: undefined,
          min: undefined
         }
      }]
    },
    animation: {
            duration: 0 // general animation time
        }
  };

  public trhChartType = 'line';
  public trhChartLegend = true;
  public trhChartData = [
    {data: [
      ], 
      label: 'Temperature'},
     {data: [
      ], 
      label: 'Humidity'}
  ];

  public pressureChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        position: 'bottom',
        time: {
          max: undefined,
          min: undefined
         }
      }]
    },
    animation: {
            duration: 0 // general animation time
        }
  };

  public pressureChartType = 'line';
  public pressureChartLegend = true;
  public pressureChartData = [
    {data: [
      ], 
      label: 'Pressure'}
  ];
  public trhChartShow = true;
  public pressureChartShow = true;
}
