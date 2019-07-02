import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccelerationComponent } from '../acceleration/acceleration.component';
import { AdcComponent } from '../adc/adc.component';
import { DeviceComponent } from '../device/device.component';
import { EnvironmentalComponent } from '../environmental/environmental.component';
import { GpioComponent } from '../gpio/gpio.component';
import { NusComponent } from '../nus/nus.component';
import { RtcComponent } from '../rtc/rtc.component';

const routes: Routes = [
  { path: '', redirectTo: '/device', pathMatch: 'full' },
  { path: 'acceleration', component:  AccelerationComponent},
  { path: 'adc', component:  AdcComponent},
  { path: 'device', component:  DeviceComponent},
  { path: 'environmental', component:  EnvironmentalComponent},
  { path: 'gpio', component:  GpioComponent},
  { path: 'nus', component:  NusComponent},
  { path: 'rtc', component:  RtcComponent},
];

export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }