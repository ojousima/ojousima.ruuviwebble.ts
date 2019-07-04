import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { RtcComponent } from './rtc/rtc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { AccelerationComponent } from './acceleration/acceleration.component';
import { EnvironmentalComponent } from './environmental/environmental.component';
import { AdcComponent } from './adc/adc.component';
import { GpioComponent } from './gpio/gpio.component';
import { NusComponent } from './nus/nus.component';
import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';
import { ManufacturerNameComponent } from './manufacturer-name/manufacturer-name.component';
import { SerialNumberComponent } from './serial-number/serial-number.component';
import { HardwareRevisionComponent } from './hardware-revision/hardware-revision.component';
import { FirmwareRevisionComponent } from './firmware-revision/firmware-revision.component';
import { ModelNumberComponent } from './model-number/model-number.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    RtcComponent,
    AccelerationComponent,
    EnvironmentalComponent,
    AdcComponent,
    GpioComponent,
    NusComponent,
    ManufacturerNameComponent,
    SerialNumberComponent,
    HardwareRevisionComponent,
    FirmwareRevisionComponent,
    ModelNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    WebBluetoothModule.forRoot({
      enableTracing: true // or false, this will enable logs in the browser's console
    }),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
