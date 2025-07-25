# CHANGELOG

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
