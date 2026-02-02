# CHANGELOG

## 0.1.4 - 02.02.2026
- Fix OJPv1 Situations - [PR #43](https://github.com/openTdataCH/ojp-shared-types/pull/43)
  - adds `situationFullRef` for OJPv1 `Service`
  - updates OJPv1 arrays declaration

## 0.1.3 - 30.01.2026

- TR: adds request / response - [PR #42](https://github.com/openTdataCH/ojp-shared-types/pull/42)
  - adds TR v1/v2 specs (removed stand-alone Trip)
    - adds shared `TransferTypeEnum`, `RailSubmodeEnum`
    - adds leg `emissionCO2`
  - TRR: adds TripResponseContext
  - separate OJP v1,v2 MapArrayTags
  - drop `MapModelKeepPropertiesXML` dependency, is not anymore needed by `ojp-sdk-next`

## 0.1.2 - 22.01.2026
- Updates API - [PR #40](https://github.com/openTdataCH/ojp-shared-types/pull/40)
  - updates TRR `TripRefineParam`
  - updates TR `TripParam`, adds [OptimisationMethodEnum](https://vdvde.github.io/OJP/develop/documentation-tables/ojp.html#type_ojp__OptimisationMethodEnumeration)

## 0.1.1 - 25.11.2025
- Updates API - [PR #38](https://github.com/openTdataCH/ojp-shared-types/pull/38)
  - OJPv2
    - adds `GeneralAttribute`
    - expose `PtSituationElementStructure`
  - LIR 
    - adds `pointOfInterestFilter` + types (OJP v1, OJPv2)
  - SER
    - adds specs for request / response (OJP v1, OJPv2)
  - OJPv1
    - use OJPv1 `PlaceRef` schema
    - expose `PtSituationElementStructure`, `LocationResult`
  - enforce arrays in `MapArrayTags` 

## 0.0.24 - 22.11.2025
- Adds Service.originText - [PR #39](https://github.com/openTdataCH/ojp-shared-types/pull/39)

## 0.0.23 - 13.11.2025
- Fix OJPv1 GeneralAttribute - [PR #37](https://github.com/openTdataCH/ojp-shared-types/pull/37)
  - differentiate between OJPv1 / OJPv2 

## 0.0.22 - 13.11.2025
- updates API - [PR #36](https://github.com/openTdataCH/ojp-shared-types/pull/36)
  - expose `OJPv1_LocationSchema`

## 0.0.21 - 12.11.2025
- updates models LIR - [PR #35](https://github.com/openTdataCH/ojp-shared-types/pull/35)
  - patch OJP v1
  - adds OJP `LocationInformationRequest` models
  - use `Location`
  - patch `TripInformationRequest` to use v1 ResponseContextStructure
  - updates Place POI OJP v2

## 0.0.20 - 31.10.2025
- adds `IndividualTransportOptionSchema` to Public API - [PR #34](https://github.com/openTdataCH/ojp-shared-types/pull/34)

## 0.0.19 - 26.10.2025
- adds `ItModesStructure`, `IndividualTransportOptionStructure` - [PR #33](https://github.com/openTdataCH/ojp-shared-types/pull/33)
  - adds individualTransportOption to origin / destination
  - adds Github workflow for npm publish automation 

## 0.0.18 - 16.10.2025
- improves Geo/Distance nodes - [PR #31](https://github.com/openTdataCH/ojp-shared-types/pull/31)
  - adds PathGuidance/LinkProkection/Distance/Length to trip legs
  - enforce `OJPTripDelivery.TripResult` array

## 0.0.17 - 26.09.2025
- extend TR params - [PR #29](https://github.com/openTdataCH/ojp-shared-types/pull/29)
  - adds `LineFilter`, `OperatorFilter`, `VehicleFilter`

## 0.0.16 - 07.09.2025
- extend TR mode filter - [PR #27](https://github.com/openTdataCH/ojp-shared-types/pull/27)

## 0.0.15 - 01.09.2025
- enforce arrays for `OJPTripRefineDelivery.TripResult` nodes - [PR #25](https://github.com/openTdataCH/ojp-shared-types/pull/25)

## 0.0.14 - 20.08.2025
- adds `ExpectedDepartureOccupancy` to TR response - [TR - add occupancy model #20](https://github.com/openTdataCH/ojp-shared-types/issues/20) - [PR #23](https://github.com/openTdataCH/ojp-shared-types/pull/23)

## 0.0.13 - 08.07.2025
- adds `changeWithinVehicle` flag for TransferTypeEnumeration - [PR #21](https://github.com/openTdataCH/ojp-shared-types/pull/21)

## 0.0.12 - 24.06.2025
- updates `PtMode`, adds `telecabin` - [PR #19](https://github.com/openTdataCH/ojp-shared-types/pull/19)
- enforce `publishedServiceName.text` to be always text

## 0.0.11 - 12.06.2025
- adds `PtMode` filter for LIR requests

## 0.0.10 - 11.06.2025
- updates `Fare Response` array mapping - [PR #17](https://github.com/openTdataCH/ojp-shared-types/pull/17)

## 0.0.9 - 10.06.2025
- adds `walkSpeed` - [PR #16](https://github.com/openTdataCH/ojp-shared-types/pull/16)
- `openapi-typescript` package is now in `devDependencies` section

## 0.0.8 - 05.06.2025
- exports `OJPFareDelivery` - [PR #14](https://github.com/openTdataCH/ojp-shared-types/pull/14)

## 0.0.7 - 04.06.2025
- fix `ViaPoint` - [PR #12](https://github.com/openTdataCH/ojp-shared-types/pull/12)
- adds `ParentRef` to `StopPoint` - [PR #11](https://github.com/openTdataCH/ojp-shared-types/pull/11)

## 0.0.6 - 02.06.2025
- SIRI-SX Situations model - [PR #9](https://github.com/openTdataCH/ojp-shared-types/pull/9)
- Harmonise export response (OJP, DeliverySchema) - [PR #10](https://github.com/openTdataCH/ojp-shared-types/pull/10)

## 0.0.5 - 29.05.2025
- OJP 1.0: adds `TripInformationRequest` response model - [PR #8](https://github.com/openTdataCH/ojp-shared-types/pull/8)
- OJP 1.0: adds `Extension` for TripRequest TimedLeg response
- harmonize types names

## 0.0.4 - 25.05.2025
- **BREAKING CHANGE:** dont use `OpenAPI_Dependencies.MapParentArrayTags` anymore, that will be dynamically created in the parser
- adds `TripInformationRequest` request / response models
- make `ResponseContext`, `LegTrack / TrackSectionStructure` shared

## 0.0.2 - 7.05.2025
- created repo, initial commit
