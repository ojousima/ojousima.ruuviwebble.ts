import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { RtcComponent } from './rtc/rtc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';
import { AccelerationComponent } from './acceleration/acceleration.component';
import { EnvironmentalComponent } from './environmental/environmental.component';
import { AdcComponent } from './adc/adc.component';
import { GpioComponent } from './gpio/gpio.component';
import { NusComponent } from './nus/nus.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    RtcComponent,
    AccelerationComponent,
    EnvironmentalComponent,
    AdcComponent,
    GpioComponent,
    NusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
