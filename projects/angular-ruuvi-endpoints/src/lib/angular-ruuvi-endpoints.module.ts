import { NgModule } from '@angular/core';
import { AngularRuuviEndpointsComponent } from './angular-ruuvi-endpoints.component';
import { RuuviEndpointsComponent } from './ruuvi-endpoints/ruuvi-endpoints.component';

export enum RuuviEndpoint {
  Acceleration  = 0x4A, //!< XYZ acceleration combined
  AccelerationX = 0x40, //!< X acceleration
  AccelerationY = 0x41, //!< Y acceleration
  AccelerationZ = 0x42, //!< Z acceleration
  AdcBattery    = 0x20, //!< ADC battery vs GND
  Temperature   = 0x30, //!< Temperature
  Humidity      = 0x31, //!< Humidity
  Pressure      = 0x32, //!< Pressure
  Environmental = 0x3A, //!< Temperature, humidity, air pressure combined.
  Rtc           = 0x21  //!< RTC value
}

export enum RuuviCommand {
  SensorConfigurationWrite = (0x02),
  SensorConfigurationRead  = (0x03),
  SensorOffsetWrite        = (0x04),
  SensorOffsetRead         = (0x05),
  LogConfigurationWrite    = (0x06),
  LogConfigurationRead     = (0x07),
  ValueWrite               = (0x08), //!< Sensor reads are acknowledged by setting type as value write
  ValueRead                = (0x09),
  TypeError                = (0xFF) //!< internal error has occured
}

export interface RuuviStandardMessage{
	destination: RuuviEndpoint,
	source:      RuuviEndpoint,
	type:        RuuviCommand,
  payload:     DataView
}


@NgModule({
  declarations: [AngularRuuviEndpointsComponent, RuuviEndpointsComponent],
  imports: [
  ],
  exports: [AngularRuuviEndpointsComponent]
})
export class AngularRuuviEndpointsModule { 

  private readonly destinationIndex = 0;
  private readonly sourceIndex      = 1;
  private readonly typeIndex        = 2;
  private readonly payloadIndex     = 3;
  private readonly payloadLength    = 8;

  destination(rawData: DataView) {
    return rawData.getUint8(this.destinationIndex);
  }

  source(rawData: DataView) {
    return rawData.getUint8(this.sourceIndex);
  }

  type(rawData: DataView) {
    return rawData.getUint8(this.typeIndex);
  }

  payload(rawData: DataView) {
    return new DataView(rawData.buffer, this.payloadIndex, this.payloadLength);
  }

  enumToKeys(e: any)
  {
    return Object.keys(e).filter((type) => isNaN(<any>type));
  }

}