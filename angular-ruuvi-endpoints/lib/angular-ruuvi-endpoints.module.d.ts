export declare enum RuuviEndpoint {
    Acceleration = 74,
    AccelerationX = 64,
    AccelerationY = 65,
    AccelerationZ = 66,
    AdcBattery = 32,
    Temperature = 48,
    Humidity = 49,
    Pressure = 50,
    Environmental = 58,
    Rtc = 33
}
export declare enum RuuviCommand {
    SensorConfigurationWrite = 2,
    SensorConfigurationRead = 3,
    SensorOffsetWrite = 4,
    SensorOffsetRead = 5,
    LogConfigurationWrite = 6,
    LogConfigurationRead = 7,
    ValueWrite = 8,
    ValueRead = 9,
    TypeError = 255
}
export interface RuuviStandardMessage {
    destination: RuuviEndpoint;
    source: RuuviEndpoint;
    type: RuuviCommand;
    payload: DataView;
}
export declare class AngularRuuviEndpointsModule {
    private readonly destinationIndex;
    private readonly sourceIndex;
    private readonly typeIndex;
    private readonly payloadIndex;
    private readonly payloadLength;
    destination(rawData: DataView): number;
    source(rawData: DataView): number;
    type(rawData: DataView): number;
    payload(rawData: DataView): DataView;
    enumToKeys(e: any): string[];
}
