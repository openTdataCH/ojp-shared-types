import { components as sharedComponents } from './generated/ojp-shared';

import { components as ojpV1_SharedComponents } from './generated/legacy/ojp-v1/ojp-shared';
import { components as ojpV1_TripComponents } from './generated/legacy/ojp-v1/ojp-trip';

import { components as locationInformationRequestComponents } from './generated/ojp-lir-request';
import { components as locationInformationResponseComponents } from './generated/ojp-lir-response';
import { components as stopEventRequestComponents } from './generated/ojp-ser-request'
import { components as stopEventResponseComponents } from './generated/ojp-ser-response'
import { components as tripRequestComponents } from './generated/ojp-tr-request';
import { components as tripReponseComponents } from './generated/ojp-tr-response';
import { components as trrRequestComponents } from './generated/ojp-trr-request';
import { components as fareRequestComponents } from './generated/ojp-fare-request';
import { components as fareResponseComponents } from './generated/ojp-fare-response';

// TODO - this can be generated

export type OJPv1_TimedLegServiceSchema = ojpV1_SharedComponents['schemas']['DatedJourney'];
export type OJPv1_TimedLegSchema = ojpV1_TripComponents['schemas']['TimedLeg']
export type OJPv1_TripLegSchema = ojpV1_TripComponents['schemas']['TripLeg'];
export type OJPv1_TripSchema = ojpV1_TripComponents['schemas']['Trip'];

export type UseRealtimeDataEnum = sharedComponents["schemas"]["UseRealtimeDataEnum"];
export type VehicleModesOfTransportEnum = sharedComponents["schemas"]["VehicleModesOfTransportEnum"];
export type PlaceTypeEnum = sharedComponents["schemas"]["PlaceTypeEnum"];

export type GeoPositionSchema = sharedComponents["schemas"]["GeoPosition"];
export type PlaceRefSchema = sharedComponents["schemas"]["PlaceRef"];
export type InternationalTextSchema = sharedComponents["schemas"]["InternationalText"];

export type DatedJourneySchema = sharedComponents["schemas"]["DatedJourney"];
export type CallAtStopSchema = sharedComponents["schemas"]["CallAtStop"];

export type PlaceContextSchema = sharedComponents["schemas"]["PlaceContext"];
export type PlaceSchema = sharedComponents['schemas']['Place']
export type StopPointSchema = sharedComponents['schemas']['StopPoint']
export type StopPlaceSchema = sharedComponents['schemas']['StopPlace']
export type TopographicPlaceSchema = sharedComponents['schemas']['TopographicPlace']
export type PointOfInterestSchema = sharedComponents['schemas']['PointOfInterest']
export type AddressSchema = sharedComponents['schemas']['Address']
export type PlaceModeStructureSchema = sharedComponents['schemas']['ModeStructure']

export type TripRequestOJP = tripRequestComponents["schemas"]["OJP"];
export type TripParamsSchema = tripRequestComponents["schemas"]["TripParam"];
export type TripRequestSchema = tripRequestComponents["schemas"]["OJPTripRequest"];

export type ViaPointSchema = tripRequestComponents["schemas"]["ViaPoint"];
export type ModeAndModeOfOperationFilterSchema = tripRequestComponents["schemas"]["ModeAndModeOfOperationFilter"];

export type TripResultSchema = tripReponseComponents['schemas']['TripResult'];

export type TripSchema = tripReponseComponents["schemas"]["Trip"];
export type LegSchema = tripReponseComponents["schemas"]["Leg"];

export type TimedLegSchema = tripReponseComponents["schemas"]["TimedLeg"];
export type TransferLegSchema = tripReponseComponents["schemas"]["TransferLeg"];
export type ContinuousLegSchema = tripReponseComponents["schemas"]["ContinuousLeg"];

export type InitialInputSchema = locationInformationRequestComponents['schemas']['InitialInput']
export type LIR_RequestParamsSchema = locationInformationRequestComponents['schemas']['PlaceParam']
export type LocationInformationRequestOJP = locationInformationRequestComponents['schemas']['OJP']
export type LocationInformationRequestSchema = locationInformationRequestComponents['schemas']['OJPLocationInformationRequest']

export type PlaceResultSchema = locationInformationResponseComponents['schemas']['PlaceResult']

export type StopEventRequestSchema = stopEventRequestComponents['schemas']['OJPStopEventRequest']
export type SER_RequestLocationSchema = stopEventRequestComponents['schemas']['PlaceContext']
export type SER_RequestParamsSchema = stopEventRequestComponents['schemas']['StopEventParam']
export type SER_RequestOJP = stopEventRequestComponents['schemas']['OJP'];

export type StopEventResultSchema = stopEventResponseComponents['schemas']['StopEventResult']
export type StopEventSchema = stopEventResponseComponents['schemas']['StopEvent']

export type TRR_RequestParamsSchema = trrRequestComponents['schemas']['TripRefineParam']
export type TRR_RequestSchema = trrRequestComponents["schemas"]['OJPTripRefineRequest'];
export type TRR_RequestOJP = trrRequestComponents['schemas']['OJP'];

export type FareRequestParamsSchema = fareRequestComponents["schemas"]['FareParamStructure'];
export type FareRequestSchema = fareRequestComponents['schemas']['OJPFareRequest'];
export type FareRequestsSchema = fareRequestComponents['schemas']['OJPFareRequests'];
export type FareRequestOJP = fareRequestComponents['schemas']['OJP'];
export type FareResponseOJP = fareResponseComponents['schemas']['OJP'];
export type FareResultSchema = fareResponseComponents['schemas']['FareResult'];
