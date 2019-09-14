(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-ruuvi-endpoints', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['angular-ruuvi-endpoints'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularRuuviEndpointsService = /** @class */ (function () {
        function AngularRuuviEndpointsService() {
        }
        AngularRuuviEndpointsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularRuuviEndpointsService.ctorParameters = function () { return []; };
        /** @nocollapse */ AngularRuuviEndpointsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AngularRuuviEndpointsService_Factory() { return new AngularRuuviEndpointsService(); }, token: AngularRuuviEndpointsService, providedIn: "root" });
        return AngularRuuviEndpointsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularRuuviEndpointsComponent = /** @class */ (function () {
        function AngularRuuviEndpointsComponent() {
        }
        /**
         * @return {?}
         */
        AngularRuuviEndpointsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        AngularRuuviEndpointsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-angular-ruuvi-endpoints',
                        template: "\n    <p>\n      angular-ruuvi-endpoints works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        AngularRuuviEndpointsComponent.ctorParameters = function () { return []; };
        return AngularRuuviEndpointsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RuuviEndpointsComponent = /** @class */ (function () {
        function RuuviEndpointsComponent() {
        }
        /**
         * @return {?}
         */
        RuuviEndpointsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        RuuviEndpointsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-ruuvi-endpoints',
                        template: "<p>ruuvi-endpoints works!</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        RuuviEndpointsComponent.ctorParameters = function () { return []; };
        return RuuviEndpointsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var RuuviEndpoint = {
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
    var RuuviCommand = {
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
    var AngularRuuviEndpointsModule = /** @class */ (function () {
        function AngularRuuviEndpointsModule() {
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
        AngularRuuviEndpointsModule.prototype.destination = /**
         * @param {?} rawData
         * @return {?}
         */
        function (rawData) {
            return rawData.getUint8(this.destinationIndex);
        };
        /**
         * @param {?} rawData
         * @return {?}
         */
        AngularRuuviEndpointsModule.prototype.source = /**
         * @param {?} rawData
         * @return {?}
         */
        function (rawData) {
            return rawData.getUint8(this.sourceIndex);
        };
        /**
         * @param {?} rawData
         * @return {?}
         */
        AngularRuuviEndpointsModule.prototype.type = /**
         * @param {?} rawData
         * @return {?}
         */
        function (rawData) {
            return rawData.getUint8(this.typeIndex);
        };
        /**
         * @param {?} rawData
         * @return {?}
         */
        AngularRuuviEndpointsModule.prototype.payload = /**
         * @param {?} rawData
         * @return {?}
         */
        function (rawData) {
            return new DataView(rawData.buffer, this.payloadIndex, this.payloadLength);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        AngularRuuviEndpointsModule.prototype.enumToKeys = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return Object.keys(e).filter((/**
             * @param {?} type
             * @return {?}
             */
            function (type) { return isNaN((/** @type {?} */ (type))); }));
        };
        AngularRuuviEndpointsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [AngularRuuviEndpointsComponent, RuuviEndpointsComponent],
                        imports: [],
                        exports: [AngularRuuviEndpointsComponent]
                    },] }
        ];
        return AngularRuuviEndpointsModule;
    }());

    exports.AngularRuuviEndpointsComponent = AngularRuuviEndpointsComponent;
    exports.AngularRuuviEndpointsModule = AngularRuuviEndpointsModule;
    exports.AngularRuuviEndpointsService = AngularRuuviEndpointsService;
    exports.RuuviCommand = RuuviCommand;
    exports.RuuviEndpoint = RuuviEndpoint;
    exports.ɵa = RuuviEndpointsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-ruuvi-endpoints.umd.js.map
