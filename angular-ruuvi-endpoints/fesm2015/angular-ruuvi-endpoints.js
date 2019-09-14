import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularRuuviEndpointsService {
    constructor() { }
}
AngularRuuviEndpointsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularRuuviEndpointsService.ctorParameters = () => [];
/** @nocollapse */ AngularRuuviEndpointsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularRuuviEndpointsService_Factory() { return new AngularRuuviEndpointsService(); }, token: AngularRuuviEndpointsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularRuuviEndpointsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AngularRuuviEndpointsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-ruuvi-endpoints',
                template: `
    <p>
      angular-ruuvi-endpoints works!
    </p>
  `
            }] }
];
/** @nocollapse */
AngularRuuviEndpointsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RuuviEndpointsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RuuviEndpointsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ruuvi-endpoints',
                template: "<p>ruuvi-endpoints works!</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
RuuviEndpointsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const RuuviEndpoint = {
    Acceleration: 74,
    AccelerationX: 64,
    AccelerationY: 65,
    AccelerationZ: 66,
    AdcBattery: 32,
    Temperature: 48,
    Humidity: 49,
    Pressure: 50,
    Environmental: 58,
    Rtc: 33 //!< RTC value
    ,
};
RuuviEndpoint[RuuviEndpoint.Acceleration] = 'Acceleration';
RuuviEndpoint[RuuviEndpoint.AccelerationX] = 'AccelerationX';
RuuviEndpoint[RuuviEndpoint.AccelerationY] = 'AccelerationY';
RuuviEndpoint[RuuviEndpoint.AccelerationZ] = 'AccelerationZ';
RuuviEndpoint[RuuviEndpoint.AdcBattery] = 'AdcBattery';
RuuviEndpoint[RuuviEndpoint.Temperature] = 'Temperature';
RuuviEndpoint[RuuviEndpoint.Humidity] = 'Humidity';
RuuviEndpoint[RuuviEndpoint.Pressure] = 'Pressure';
RuuviEndpoint[RuuviEndpoint.Environmental] = 'Environmental';
RuuviEndpoint[RuuviEndpoint.Rtc] = 'Rtc';
/** @enum {number} */
const RuuviCommand = {
    SensorConfigurationWrite: 2,
    SensorConfigurationRead: 3,
    SensorOffsetWrite: 4,
    SensorOffsetRead: 5,
    LogConfigurationWrite: 6,
    LogConfigurationRead: 7,
    ValueWrite: 8,
    ValueRead: 9,
    TypeError: 255 //!< internal error has occured
    ,
};
RuuviCommand[RuuviCommand.SensorConfigurationWrite] = 'SensorConfigurationWrite';
RuuviCommand[RuuviCommand.SensorConfigurationRead] = 'SensorConfigurationRead';
RuuviCommand[RuuviCommand.SensorOffsetWrite] = 'SensorOffsetWrite';
RuuviCommand[RuuviCommand.SensorOffsetRead] = 'SensorOffsetRead';
RuuviCommand[RuuviCommand.LogConfigurationWrite] = 'LogConfigurationWrite';
RuuviCommand[RuuviCommand.LogConfigurationRead] = 'LogConfigurationRead';
RuuviCommand[RuuviCommand.ValueWrite] = 'ValueWrite';
RuuviCommand[RuuviCommand.ValueRead] = 'ValueRead';
RuuviCommand[RuuviCommand.TypeError] = 'TypeError';
class AngularRuuviEndpointsModule {
    constructor() {
        this.destinationIndex = 0;
        this.sourceIndex = 1;
        this.typeIndex = 2;
        this.payloadIndex = 3;
        this.payloadLength = 8;
    }
    /**
     * @param {?} rawData
     * @return {?}
     */
    destination(rawData) {
        return rawData.getUint8(this.destinationIndex);
    }
    /**
     * @param {?} rawData
     * @return {?}
     */
    source(rawData) {
        return rawData.getUint8(this.sourceIndex);
    }
    /**
     * @param {?} rawData
     * @return {?}
     */
    type(rawData) {
        return rawData.getUint8(this.typeIndex);
    }
    /**
     * @param {?} rawData
     * @return {?}
     */
    payload(rawData) {
        return new DataView(rawData.buffer, this.payloadIndex, this.payloadLength);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    enumToKeys(e) {
        return Object.keys(e).filter((/**
         * @param {?} type
         * @return {?}
         */
        (type) => isNaN((/** @type {?} */ (type)))));
    }
}
AngularRuuviEndpointsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AngularRuuviEndpointsComponent, RuuviEndpointsComponent],
                imports: [],
                exports: [AngularRuuviEndpointsComponent]
            },] }
];

export { AngularRuuviEndpointsComponent, AngularRuuviEndpointsModule, AngularRuuviEndpointsService, RuuviCommand, RuuviEndpoint, RuuviEndpointsComponent as ɵa };
//# sourceMappingURL=angular-ruuvi-endpoints.js.map
