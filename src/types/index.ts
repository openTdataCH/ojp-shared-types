import { components as sharedComponents } from './generated/ojp-shared';

import { components as ojpV1_SharedComponents } from './generated/legacy/ojp-v1/ojp-shared';

import { components as locationInformationRequestComponents } from './generated/ojp-lir-request';
import { components as locationInformationResponseComponents } from './generated/ojp-lir-response';
import { components as ojpV1_LocationInformationRequestComponents } from './generated/legacy/ojp-v1/ojp-lir-request';
import { components as ojpV1_LocationInformationResponseComponents } from './generated/legacy/ojp-v1/ojp-lir-response';

import { components as stopEventRequestComponents } from './generated/ojp-ser-request';
import { components as stopEventResponseComponents } from './generated/ojp-ser-response';
import { components as ojpV1_StopEventRequestComponents } from './generated/legacy/ojp-v1/ojp-ser-request';
import { components as ojpV1_StopEventResponseComponents } from './generated/legacy/ojp-v1/ojp-ser-response';

import { components as tripInfoRequestComponents } from './generated/ojp-tir-request';
import { components as tripInfoResponseComponents } from './generated/ojp-tir-response';
import { components as ojpV1_TripInfoResponseComponents } from './generated/legacy/ojp-v1/ojp-tir-response';

import { components as tripRequestComponents } from './generated/ojp-tr-request';
import { components as tripReponseComponents } from './generated/ojp-tr-response';
import { components as ojpV1_TripRequestComponents } from './generated/legacy/ojp-v1/ojp-tr-request';
import { components as ojpV1_TripRequestResponseComponents } from './generated/legacy/ojp-v1/ojp-tr-response';

import { components as trrRequestComponents } from './generated/ojp-trr-request';
import { components as trrResponseComponents } from './generated/ojp-trr-response';

import { components as fareRequestComponents } from './generated/ojp-fare-request';
import { components as fareResponseComponents } from './generated/ojp-fare-response';

// TODO - this can be generated

export type OJPv1_DatedJourneySchema = ojpV1_SharedComponents['schemas']['DatedJourney'];
export type OJPv1_LocationSchema = ojpV1_SharedComponents['schemas']['Location']
export type OJPv1_GeneralAttributeSchema = ojpV1_SharedComponents['schemas']['GeneralAttribute'];
export type OJPv1_PointOfInterestSchema = ojpV1_SharedComponents['schemas']['PointOfInterest'];
export type OJPv1_PlaceRefSchema = ojpV1_SharedComponents['schemas']['PlaceRef'];

export type OJPv1_TimedLegSchema = ojpV1_TripRequestResponseComponents['schemas']['TimedLeg']
export type OJPv1_TripLegSchema = ojpV1_TripRequestResponseComponents['schemas']['TripLeg'];
export type OJPv1_TripSchema = ojpV1_TripRequestResponseComponents['schemas']['Trip'];

export type UseRealtimeDataEnum = sharedComponents["schemas"]["UseRealtimeDataEnum"];
export type PersonalModesEnum = sharedComponents["schemas"]['PersonalModesEnumeration'];
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
export type GeoRestrictionsSchema = sharedComponents['schemas']['GeoRestrictionsStructure'];

export type ModeStructureSchema = sharedComponents['schemas']['ModeStructure'];
export type ProductCategorySchema = sharedComponents['schemas']['ProductCategory'];
export type GeneralAttributeSchema = sharedComponents['schemas']['GeneralAttribute'];
export type ModeFilterSchema = sharedComponents["schemas"]['ModeFilterStructure'];
export type TrackSectionSchema = sharedComponents['schemas']['TrackSectionStructure'];

export type ResponseContextSchema = sharedComponents['schemas']['ResponseContextStructure'];

export type IndividualTransportOptionSchema = sharedComponents['schemas']['IndividualTransportOptionStructure'];

export type PtSituationElement = sharedComponents['schemas']['PtSituationElementStructure']
export type OJPv1_PtSituationElement = ojpV1_SharedComponents['schemas']['PtSituationElementStructure']

export type TripRequestOJP = tripRequestComponents["schemas"]["OJP"];
export type TripParamsSchema = tripRequestComponents["schemas"]["TripParam"];
export type TripRequestSchema = tripRequestComponents["schemas"]["OJPTripRequest"];

export type ViaPointSchema = tripRequestComponents["schemas"]["ViaPoint"];

export type TripResultSchema = tripReponseComponents['schemas']['TripResult'];

export type TripSchema = tripReponseComponents["schemas"]["Trip"];
export type LegSchema = tripReponseComponents["schemas"]["Leg"];

export type TimedLegSchema = tripReponseComponents["schemas"]["TimedLeg"];
export type TransferLegSchema = tripReponseComponents["schemas"]["TransferLeg"];
export type ContinuousLegSchema = tripReponseComponents["schemas"]["ContinuousLeg"];

export type TripRequestResponseOJP = tripReponseComponents['schemas']['OJP'];
export type TripDeliverySchema = tripReponseComponents['schemas']['OJPTripDelivery'];

export type InitialInputSchema = locationInformationRequestComponents['schemas']['InitialInput'];
export type LIR_RequestParamsSchema = locationInformationRequestComponents['schemas']['PlaceParam'];
export type LocationInformationRequestOJP = locationInformationRequestComponents['schemas']['OJP'];
export type LocationInformationRequestSchema = locationInformationRequestComponents['schemas']['OJPLocationInformationRequest'];

export type PlaceResultSchema = locationInformationResponseComponents['schemas']['PlaceResult'];
export type LocationInformationRequestResponseOJP = locationInformationResponseComponents['schemas']['OJP'];
export type LocationInformationDeliverySchema = locationInformationResponseComponents['schemas']['OJPLocationInformationDelivery'];

export type StopEventRequestSchema = stopEventRequestComponents['schemas']['OJPStopEventRequest'];
export type SER_RequestLocationSchema = stopEventRequestComponents['schemas']['PlaceContext'];
export type SER_RequestParamsSchema = stopEventRequestComponents['schemas']['StopEventParam'];
export type SER_RequestOJP = stopEventRequestComponents['schemas']['OJP'];

export type StopEventResultSchema = stopEventResponseComponents['schemas']['StopEventResult'];
export type StopEventSchema = stopEventResponseComponents['schemas']['StopEvent'];
export type StopEventRequestResponseOJP = stopEventResponseComponents['schemas']['OJP'];
export type StopEventDeliverySchema = stopEventResponseComponents['schemas']['OJPStopEventDelivery'];

export type TRR_RequestParamsSchema = trrRequestComponents['schemas']['TripRefineParam']
export type TRR_RequestSchema = trrRequestComponents["schemas"]['OJPTripRefineRequest'];
export type TRR_RequestOJP = trrRequestComponents['schemas']['OJP'];

export type TRR_ResponseOJP = trrResponseComponents['schemas']['OJP'];
export type TRR_DeliverySchema = trrResponseComponents['schemas']['OJPTripRefineDelivery'];

export type FareRequestParamsSchema = fareRequestComponents["schemas"]['FareParamStructure'];
export type FareRequestSchema = fareRequestComponents['schemas']['OJPFareRequest'];
export type FareRequestsSchema = fareRequestComponents['schemas']['OJPFareRequests'];
export type FareRequestOJP = fareRequestComponents['schemas']['OJP'];
export type FareResponseOJP = fareResponseComponents['schemas']['OJP'];
export type FareDeliverySchema = fareResponseComponents['schemas']['OJPFareDelivery'];
export type FareResultSchema = fareResponseComponents['schemas']['FareResult'];

export type TIR_RequestParamsSchema = tripInfoRequestComponents['schemas']['TripInfoParamStructure'];
export type TIR_RequestSchema = tripInfoRequestComponents['schemas']['OJPTripInfoRequest'];
export type TIR_RequestOJP = tripInfoRequestComponents['schemas']['OJP'];

export type TripInfoResponseOJP = tripInfoResponseComponents['schemas']['OJP'];
export type TripInfoDeliverySchema = tripInfoResponseComponents['schemas']['OJPTripInfoDelivery'];
export type TripInfoResultStructureSchema = tripInfoResponseComponents['schemas']['TripInfoResultStructure'];

export type OJPv1_StopEventRequestOJP = ojpV1_stopEventRequestComponents['schemas']['OJP'];
export type OJPv1_StopEventRequestSchema = ojpV1_stopEventRequestComponents['schemas']['OJPStopEventRequest'];
export type OJPv1_SER_RequestLocationSchema = ojpV1_stopEventRequestComponents['schemas']['PlaceContext'];
export type OJPv1_StopEventResponseOJP = ojpV1_StopEventResponseComponents['schemas']['OJP'];
export type OJPv1_StopEventDeliverySchema = ojpV1_StopEventResponseComponents['schemas']['OJPStopEventDelivery'];
export type OJPv1_StopEventResultSchema = ojpV1_StopEventResponseComponents['schemas']['StopEventResult'];


export type OJPv1_TripInfoResponseOJP = ojpV1_tripInfoResponseComponents['schemas']['OJP'];
export type OJPv1_TripInfoDeliverySchema = ojpV1_tripInfoResponseComponents['schemas']['OJPTripInfoDelivery'];
export type OJPv1_TripInfoResultStructureSchema = ojpV1_tripInfoResponseComponents['schemas']['TripInfoResultStructure'];

export type OJPv1_LocationInformationRequestOJP = ojpV1_locationInformationRequestComponents['schemas']['OJP'];
export type OJPv1_LocationInformationRequestSchema = ojpV1_locationInformationRequestComponents['schemas']['OJPLocationInformationRequest'];
export type OJPv1_InitialInputSchema = ojpV1_locationInformationRequestComponents['schemas']['InitialInput'];

export type OJPv1_LocationResultSchema = ojpV1_locationInformationResponseComponents['schemas']['LocationResult'];
export type OJPv1_LocationInformationRequestResponseOJP = ojpV1_locationInformationResponseComponents['schemas']['OJP'];
export type OJPv1_LocationInformationDeliverySchema = ojpV1_locationInformationResponseComponents['schemas']['OJPLocationInformationDelivery'];
