/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AngularRuuviEndpointsComponent } from './angular-ruuvi-endpoints.component';
import { RuuviEndpointsComponent } from './ruuvi-endpoints/ruuvi-endpoints.component';
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
export { RuuviEndpoint };
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
export { RuuviCommand };
RuuviCommand[RuuviCommand.SensorConfigurationWrite] = 'SensorConfigurationWrite';
RuuviCommand[RuuviCommand.SensorConfigurationRead] = 'SensorConfigurationRead';
RuuviCommand[RuuviCommand.SensorOffsetWrite] = 'SensorOffsetWrite';
RuuviCommand[RuuviCommand.SensorOffsetRead] = 'SensorOffsetRead';
RuuviCommand[RuuviCommand.LogConfigurationWrite] = 'LogConfigurationWrite';
RuuviCommand[RuuviCommand.LogConfigurationRead] = 'LogConfigurationRead';
RuuviCommand[RuuviCommand.ValueWrite] = 'ValueWrite';
RuuviCommand[RuuviCommand.ValueRead] = 'ValueRead';
RuuviCommand[RuuviCommand.TypeError] = 'TypeError';
/**
 * @record
 */
export function RuuviStandardMessage() { }
if (false) {
    /** @type {?} */
    RuuviStandardMessage.prototype.destination;
    /** @type {?} */
    RuuviStandardMessage.prototype.source;
    /** @type {?} */
    RuuviStandardMessage.prototype.type;
    /** @type {?} */
    RuuviStandardMessage.prototype.payload;
}
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
        { type: NgModule, args: [{
                    declarations: [AngularRuuviEndpointsComponent, RuuviEndpointsComponent],
                    imports: [],
                    exports: [AngularRuuviEndpointsComponent]
                },] }
    ];
    return AngularRuuviEndpointsModule;
}());
export { AngularRuuviEndpointsModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularRuuviEndpointsModule.prototype.destinationIndex;
    /**
     * @type {?}
     * @private
     */
    AngularRuuviEndpointsModule.prototype.sourceIndex;
    /**
     * @type {?}
     * @private
     */
    AngularRuuviEndpointsModule.prototype.typeIndex;
    /**
     * @type {?}
     * @private
     */
    AngularRuuviEndpointsModule.prototype.payloadIndex;
    /**
     * @type {?}
     * @private
     */
    AngularRuuviEndpointsModule.prototype.payloadLength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1ydXV2aS1lbmRwb2ludHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ydXV2aS1lbmRwb2ludHMvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1ydXV2aS1lbmRwb2ludHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7SUFHcEYsZ0JBQW9CO0lBQ3BCLGlCQUFvQjtJQUNwQixpQkFBb0I7SUFDcEIsaUJBQW9CO0lBQ3BCLGNBQW9CO0lBQ3BCLGVBQW9CO0lBQ3BCLFlBQW9CO0lBQ3BCLFlBQW9CO0lBQ3BCLGlCQUFvQjtJQUNwQixPQUFvQixDQUFFLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJcEMsMkJBQWlDO0lBQ2pDLDBCQUFpQztJQUNqQyxvQkFBaUM7SUFDakMsbUJBQWlDO0lBQ2pDLHdCQUFpQztJQUNqQyx1QkFBaUM7SUFDakMsYUFBaUM7SUFDakMsWUFBaUM7SUFDakMsY0FBaUMsQ0FBQywrQkFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkUsMENBS0M7OztJQUpBLDJDQUEyQjs7SUFDM0Isc0NBQTJCOztJQUMzQixvQ0FBMEI7O0lBQ3pCLHVDQUFxQjs7QUFJdkI7SUFBQTtRQVFtQixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsZ0JBQVcsR0FBUSxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFVLENBQUMsQ0FBQztRQUNyQixpQkFBWSxHQUFPLENBQUMsQ0FBQztRQUNyQixrQkFBYSxHQUFNLENBQUMsQ0FBQztJQXVCeEMsQ0FBQzs7Ozs7SUFyQkMsaURBQVc7Ozs7SUFBWCxVQUFZLE9BQWlCO1FBQzNCLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELDRDQUFNOzs7O0lBQU4sVUFBTyxPQUFpQjtRQUN0QixPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsMENBQUk7Ozs7SUFBSixVQUFLLE9BQWlCO1FBQ3BCLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCw2Q0FBTzs7OztJQUFQLFVBQVEsT0FBaUI7UUFDdkIsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRUQsZ0RBQVU7Ozs7SUFBVixVQUFXLENBQU07UUFFZixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSyxDQUFDLG1CQUFLLElBQUksRUFBQSxDQUFDLEVBQWhCLENBQWdCLEVBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkFqQ0YsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO29CQUN2RSxPQUFPLEVBQUUsRUFDUjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDMUM7O0lBOEJELGtDQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0E3QlksMkJBQTJCOzs7Ozs7SUFFdEMsdURBQXNDOzs7OztJQUN0QyxrREFBc0M7Ozs7O0lBQ3RDLGdEQUFzQzs7Ozs7SUFDdEMsbURBQXNDOzs7OztJQUN0QyxvREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhclJ1dXZpRW5kcG9pbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLXJ1dXZpLWVuZHBvaW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUnV1dmlFbmRwb2ludHNDb21wb25lbnQgfSBmcm9tICcuL3J1dXZpLWVuZHBvaW50cy9ydXV2aS1lbmRwb2ludHMuY29tcG9uZW50JztcblxuZXhwb3J0IGVudW0gUnV1dmlFbmRwb2ludCB7XG4gIEFjY2VsZXJhdGlvbiAgPSAweDRBLCAvLyE8IFhZWiBhY2NlbGVyYXRpb24gY29tYmluZWRcbiAgQWNjZWxlcmF0aW9uWCA9IDB4NDAsIC8vITwgWCBhY2NlbGVyYXRpb25cbiAgQWNjZWxlcmF0aW9uWSA9IDB4NDEsIC8vITwgWSBhY2NlbGVyYXRpb25cbiAgQWNjZWxlcmF0aW9uWiA9IDB4NDIsIC8vITwgWiBhY2NlbGVyYXRpb25cbiAgQWRjQmF0dGVyeSAgICA9IDB4MjAsIC8vITwgQURDIGJhdHRlcnkgdnMgR05EXG4gIFRlbXBlcmF0dXJlICAgPSAweDMwLCAvLyE8IFRlbXBlcmF0dXJlXG4gIEh1bWlkaXR5ICAgICAgPSAweDMxLCAvLyE8IEh1bWlkaXR5XG4gIFByZXNzdXJlICAgICAgPSAweDMyLCAvLyE8IFByZXNzdXJlXG4gIEVudmlyb25tZW50YWwgPSAweDNBLCAvLyE8IFRlbXBlcmF0dXJlLCBodW1pZGl0eSwgYWlyIHByZXNzdXJlIGNvbWJpbmVkLlxuICBSdGMgICAgICAgICAgID0gMHgyMSAgLy8hPCBSVEMgdmFsdWVcbn1cblxuZXhwb3J0IGVudW0gUnV1dmlDb21tYW5kIHtcbiAgU2Vuc29yQ29uZmlndXJhdGlvbldyaXRlID0gKDB4MDIpLFxuICBTZW5zb3JDb25maWd1cmF0aW9uUmVhZCAgPSAoMHgwMyksXG4gIFNlbnNvck9mZnNldFdyaXRlICAgICAgICA9ICgweDA0KSxcbiAgU2Vuc29yT2Zmc2V0UmVhZCAgICAgICAgID0gKDB4MDUpLFxuICBMb2dDb25maWd1cmF0aW9uV3JpdGUgICAgPSAoMHgwNiksXG4gIExvZ0NvbmZpZ3VyYXRpb25SZWFkICAgICA9ICgweDA3KSxcbiAgVmFsdWVXcml0ZSAgICAgICAgICAgICAgID0gKDB4MDgpLCAvLyE8IFNlbnNvciByZWFkcyBhcmUgYWNrbm93bGVkZ2VkIGJ5IHNldHRpbmcgdHlwZSBhcyB2YWx1ZSB3cml0ZVxuICBWYWx1ZVJlYWQgICAgICAgICAgICAgICAgPSAoMHgwOSksXG4gIFR5cGVFcnJvciAgICAgICAgICAgICAgICA9ICgweEZGKSAvLyE8IGludGVybmFsIGVycm9yIGhhcyBvY2N1cmVkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUnV1dmlTdGFuZGFyZE1lc3NhZ2V7XG5cdGRlc3RpbmF0aW9uOiBSdXV2aUVuZHBvaW50LFxuXHRzb3VyY2U6ICAgICAgUnV1dmlFbmRwb2ludCxcblx0dHlwZTogICAgICAgIFJ1dXZpQ29tbWFuZCxcbiAgcGF5bG9hZDogICAgIERhdGFWaWV3XG59XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhclJ1dXZpRW5kcG9pbnRzQ29tcG9uZW50LCBSdXV2aUVuZHBvaW50c0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW0FuZ3VsYXJSdXV2aUVuZHBvaW50c0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclJ1dXZpRW5kcG9pbnRzTW9kdWxlIHsgXG5cbiAgcHJpdmF0ZSByZWFkb25seSBkZXN0aW5hdGlvbkluZGV4ID0gMDtcbiAgcHJpdmF0ZSByZWFkb25seSBzb3VyY2VJbmRleCAgICAgID0gMTtcbiAgcHJpdmF0ZSByZWFkb25seSB0eXBlSW5kZXggICAgICAgID0gMjtcbiAgcHJpdmF0ZSByZWFkb25seSBwYXlsb2FkSW5kZXggICAgID0gMztcbiAgcHJpdmF0ZSByZWFkb25seSBwYXlsb2FkTGVuZ3RoICAgID0gODtcblxuICBkZXN0aW5hdGlvbihyYXdEYXRhOiBEYXRhVmlldykge1xuICAgIHJldHVybiByYXdEYXRhLmdldFVpbnQ4KHRoaXMuZGVzdGluYXRpb25JbmRleCk7XG4gIH1cblxuICBzb3VyY2UocmF3RGF0YTogRGF0YVZpZXcpIHtcbiAgICByZXR1cm4gcmF3RGF0YS5nZXRVaW50OCh0aGlzLnNvdXJjZUluZGV4KTtcbiAgfVxuXG4gIHR5cGUocmF3RGF0YTogRGF0YVZpZXcpIHtcbiAgICByZXR1cm4gcmF3RGF0YS5nZXRVaW50OCh0aGlzLnR5cGVJbmRleCk7XG4gIH1cblxuICBwYXlsb2FkKHJhd0RhdGE6IERhdGFWaWV3KSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhVmlldyhyYXdEYXRhLmJ1ZmZlciwgdGhpcy5wYXlsb2FkSW5kZXgsIHRoaXMucGF5bG9hZExlbmd0aCk7XG4gIH1cblxuICBlbnVtVG9LZXlzKGU6IGFueSlcbiAge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhlKS5maWx0ZXIoKHR5cGUpID0+IGlzTmFOKDxhbnk+dHlwZSkpO1xuICB9XG5cbn0iXX0=