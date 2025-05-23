// TODO - split request / response

// TODO - this should be generated
// - in request (builder) XML
const MapNS_Tags: Record<string, string> = {
  'OJPRequest.ServiceRequest': 'siri',
  'ServiceRequest.ServiceRequestContext': 'siri',
  'ServiceRequestContext.Language': 'siri',
  'ServiceRequest.RequestTimestamp': 'siri',
  'ServiceRequest.RequestorRef': 'siri',

  'OJPResponse.ServiceDelivery': 'siri',
  'ServiceDelivery.ResponseTimestamp': 'siri',
  'ServiceDelivery.ProducerRef': 'siri',

  // TRR
  'OJPTripRefineRequest.RequestTimestamp': 'siri',
  // FareRequest
  'OJPFareRequest.RequestTimestamp': 'siri',

  // TripRequest  
  'OJPTripRequest.RequestTimestamp': 'siri',
 
  // TripResponse
  'OJPTripDelivery.ResponseTimestamp': 'siri',
  'OJPTripDelivery.RequestMessageRef': 'siri',
  'OJPTripDelivery.DefaultLanguage': 'siri',

  'LegBoard.StopPointRef': 'siri',
  'LegIntermediate.StopPointRef': 'siri',
  'LegIntermediates.StopPointRef': 'siri', // OJP v1
  'LegAlight.StopPointRef': 'siri',
  
  'Mode.AirSubmode': 'siri',
  'Mode.BusSubmode': 'siri',
  'Mode.CoachSubmode': 'siri',
  'Mode.FunicularSubmode': 'siri',
  'Mode.MetroSubmode': 'siri',
  'Mode.TramSubmode': 'siri',
  'Mode.TelecabinSubmode': 'siri',
  'Mode.RailSubmode': 'siri',
  'Mode.WaterSubmode': 'siri',

  'Service.LineRef': 'siri',
  'Service.OperatorRef': 'siri',
  'Service.DirectionRef': 'siri',

  'TrackSectionStart.StopPointRef': 'siri',
  'TrackSectionEnd.StopPointRef': 'siri',
  
  'Position.Longitude': 'siri',

  'LegStart.StopPointRef': 'siri',
  'LegEnd.StopPointRef': 'siri',

  // LIR Request
  'OJPLocationInformationRequest.RequestTimestamp': 'siri',
  'UpperLeft.Longitude': 'siri',
  'UpperLeft.Latitude': 'siri',
  'LowerRight.Longitude': 'siri',
  'LowerRight.Latitude': 'siri',

  // TR Request
  'GeoPosition.Longitude': 'siri',
  'GeoPosition.Latitude': 'siri',

  // SER Request
  'OJPStopEventRequest.RequestTimestamp': 'siri',
  'PlaceRef.StopPointRef': 'siri',
};

// TODO - this should be generated
// - this is used by the parser.isArrayHandler - to always return arrays even when there is only one result
// - in response (parser) XML
const MapArrayTags: Record<string, boolean> = {
  // Shared
  'places.place': true,
  'situations.ptSituation': true,
  'linkProjection.position': true,

  // Service
  'service.attribute': true,

  // TR Response
  'trip.leg': true,
  'timedLeg.legIntermediate': true,
  'legTrack.trackSection': true,

  // LIR Response
  'pointOfInterest.pointOfInterestCategory': true,
  'place.mode': true,
  'OJPLocationInformationDelivery.placeResult': true,

  // SER Response
  'stopEvent.previousCall': true,
  'stopEvent.onwardCall': true,

  // Fare Response
  'fareResult.tripFareResult': true, // TODO - this is not in the current schema (v2)
  'tripFareResult.fareProduct': true,
};

// TODO - this should be generated
// Declare object properties that are / should be serialised to XML
// - in request (builder) XML
const MapModelKeepPropertiesXML: Record<string, string[]> = {
  'OJPLocationInformationRequest': ['requestTimestamp', 'initialInput', 'placeRef', 'restrictions'],
  'OJPTripRequest': ['requestTimestamp', 'origin', 'destination', 'via', 'params'],
  'OJPStopEventRequest': ['requestTimestamp', 'location', 'params'],
  'OJPTripRefineRequest': ['requestTimestamp', 'refineParams', 'tripResult'],
  'geoPosition': ['longitude', 'latitude'],
};

// TODO - this should be generated
// - in response (parser) XML
const MapStringValues: Record<string, boolean> = {
  'stopPlace.stopPlaceRef': true,
};

export const OpenAPI_Dependencies = {
  MapNS_Tags: MapNS_Tags,
  MapArrayTags: MapArrayTags,
  MapModelKeepPropertiesXML: MapModelKeepPropertiesXML,
  MapStringValues: MapStringValues,
} as const;
