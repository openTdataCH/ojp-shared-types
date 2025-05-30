/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @enum {string} */
        VehicleModesOfTransportEnum: "air" | "bus" | "coach" | "trolleyBus" | "metro" | "rail" | "tram" | "water" | "ferry" | "cableway" | "funicular" | "lift" | "other" | "unknown";
        /** @enum {string} */
        UseRealtimeDataEnum: "full" | "explanatory" | "none";
        /** @enum {string} */
        PlaceTypeEnum: "stop" | "address" | "poi" | "location" | "topographicPlace";
        InternationalText: {
            text: string;
        };
        GeoPosition: {
            longitude: number;
            latitude: number;
        };
        PlaceRef: {
            stopPointRef?: string;
            stopPlaceRef?: string;
            geoPosition?: {
                longitude: number;
                latitude: number;
            };
            name: {
                text: string;
            };
        };
        PlaceContext: {
            placeRef: {
                stopPointRef?: string;
                stopPlaceRef?: string;
                geoPosition?: {
                    longitude: number;
                    latitude: number;
                };
                name: {
                    text: string;
                };
            };
            depArrTime?: string;
        };
        ServiceRequestContext: {
            language?: string;
        };
        PointOfInterestCategory: {
            osmTag?: {
                tag: string;
                value: string;
            };
        };
        StopPoint: {
            stopPointRef: string;
            stopPointName: {
                text: string;
            };
            plannedQuay?: {
                text: string;
            };
            estimatedQuay?: {
                text: string;
            };
        };
        StopPlace: {
            stopPlaceRef?: string;
            stopPlaceName?: {
                text: string;
            };
        };
        TopographicPlace: {
            topographicPlaceCode: string;
            topographicPlaceName: {
                text: string;
            };
        };
        PointOfInterest: {
            publicCode: string;
            name: {
                text: string;
            };
            pointOfInterestCategory: {
                osmTag?: {
                    tag: string;
                    value: string;
                };
            }[];
            topographicPlaceRef?: string;
        };
        Address: {
            publicCode: string;
            name: {
                text: string;
            };
            postCode?: string;
            topographicPlaceName?: string;
            TopographicPlaceRef?: string;
            Street?: string;
            HouseNumber?: string;
        };
        ModeStructure: {
            /** @enum {string} */
            ptMode: "air" | "bus" | "coach" | "trolleyBus" | "metro" | "rail" | "tram" | "water" | "ferry" | "cableway" | "funicular" | "lift" | "other" | "unknown";
            airSubmode?: string;
            busSubmode?: string;
            coachSubmode?: string;
            funicularSubmode?: string;
            metroSubmode?: string;
            tramSubmode?: string;
            telecabinSubmode?: string;
            railSubmode?: string;
            waterSubmode?: string;
            name?: {
                text: string;
            };
            shortName?: {
                text: string;
            };
        };
        Place: {
            stopPoint?: {
                stopPointRef: string;
                stopPointName: {
                    text: string;
                };
                plannedQuay?: {
                    text: string;
                };
                estimatedQuay?: {
                    text: string;
                };
            };
            stopPlace?: {
                stopPlaceRef?: string;
                stopPlaceName?: {
                    text: string;
                };
            };
            topographicPlace?: {
                topographicPlaceCode: string;
                topographicPlaceName: {
                    text: string;
                };
            };
            pointOfInterest?: {
                publicCode: string;
                name: {
                    text: string;
                };
                pointOfInterestCategory: {
                    osmTag?: {
                        tag: string;
                        value: string;
                    };
                }[];
                topographicPlaceRef?: string;
            };
            address?: {
                publicCode: string;
                name: {
                    text: string;
                };
                postCode?: string;
                topographicPlaceName?: string;
                TopographicPlaceRef?: string;
                Street?: string;
                HouseNumber?: string;
            };
            name: {
                text: string;
            };
            geoPosition: {
                longitude: number;
                latitude: number;
            };
            mode: {
                /** @enum {string} */
                ptMode: "air" | "bus" | "coach" | "trolleyBus" | "metro" | "rail" | "tram" | "water" | "ferry" | "cableway" | "funicular" | "lift" | "other" | "unknown";
                airSubmode?: string;
                busSubmode?: string;
                coachSubmode?: string;
                funicularSubmode?: string;
                metroSubmode?: string;
                tramSubmode?: string;
                telecabinSubmode?: string;
                railSubmode?: string;
                waterSubmode?: string;
                name?: {
                    text: string;
                };
                shortName?: {
                    text: string;
                };
            }[];
        };
        SharedServiceArrivalDeparture: {
            timetabledTime: string;
            estimatedTime?: string;
        };
        CallAtStop: {
            stopPointRef: string;
            stopPointName: {
                text: string;
            };
            nameSuffix?: {
                text: string;
            };
            plannedQuay?: {
                text: string;
            };
            estimatedQuay?: {
                text: string;
            };
            serviceArrival?: {
                timetabledTime: string;
                estimatedTime?: string;
            };
            serviceDeparture?: {
                timetabledTime: string;
                estimatedTime?: string;
            };
            order?: number;
            requestStop?: boolean;
            unplannedStop?: boolean;
            notServicedStop?: boolean;
            noBoardingAtStop?: boolean;
            noAlightingAtStop?: boolean;
        };
        ProductCategory: {
            name?: {
                text: string;
            };
            shortName?: {
                text: string;
            };
            productCategoryRef?: string;
        };
        GeneralAttribute: {
            userText: {
                text: string;
            };
            code: string;
        };
        DatedJourney: {
            conventionalModeOfOperation?: string;
            operatingDayRef: string;
            journeyRef: string;
            publicCode?: string;
            lineRef: string;
            directionRef?: string;
            mode: {
                /** @enum {string} */
                ptMode: "air" | "bus" | "coach" | "trolleyBus" | "metro" | "rail" | "tram" | "water" | "ferry" | "cableway" | "funicular" | "lift" | "other" | "unknown";
                airSubmode?: string;
                busSubmode?: string;
                coachSubmode?: string;
                funicularSubmode?: string;
                metroSubmode?: string;
                tramSubmode?: string;
                telecabinSubmode?: string;
                railSubmode?: string;
                waterSubmode?: string;
                name?: {
                    text: string;
                };
                shortName?: {
                    text: string;
                };
            };
            productCategory?: {
                name?: {
                    text: string;
                };
                shortName?: {
                    text: string;
                };
                productCategoryRef?: string;
            };
            publishedServiceName: {
                text: string;
            };
            trainNumber?: string;
            attribute: {
                userText: {
                    text: string;
                };
                code: string;
            }[];
            operatorRef?: string;
            destinationStopPointRef?: string;
            destinationText?: {
                text: string;
            };
            unplanned?: boolean;
            cancelled?: boolean;
            deviation?: boolean;
        };
        ResponseContextStructure: {
            places: {
                place: {
                    stopPoint?: {
                        stopPointRef: string;
                        stopPointName: {
                            text: string;
                        };
                        plannedQuay?: {
                            text: string;
                        };
                        estimatedQuay?: {
                            text: string;
                        };
                    };
                    stopPlace?: {
                        stopPlaceRef?: string;
                        stopPlaceName?: {
                            text: string;
                        };
                    };
                    topographicPlace?: {
                        topographicPlaceCode: string;
                        topographicPlaceName: {
                            text: string;
                        };
                    };
                    pointOfInterest?: {
                        publicCode: string;
                        name: {
                            text: string;
                        };
                        pointOfInterestCategory: {
                            osmTag?: {
                                tag: string;
                                value: string;
                            };
                        }[];
                        topographicPlaceRef?: string;
                    };
                    address?: {
                        publicCode: string;
                        name: {
                            text: string;
                        };
                        postCode?: string;
                        topographicPlaceName?: string;
                        TopographicPlaceRef?: string;
                        Street?: string;
                        HouseNumber?: string;
                    };
                    name: {
                        text: string;
                    };
                    geoPosition: {
                        longitude: number;
                        latitude: number;
                    };
                    mode: {
                        /** @enum {string} */
                        ptMode: "air" | "bus" | "coach" | "trolleyBus" | "metro" | "rail" | "tram" | "water" | "ferry" | "cableway" | "funicular" | "lift" | "other" | "unknown";
                        airSubmode?: string;
                        busSubmode?: string;
                        coachSubmode?: string;
                        funicularSubmode?: string;
                        metroSubmode?: string;
                        tramSubmode?: string;
                        telecabinSubmode?: string;
                        railSubmode?: string;
                        waterSubmode?: string;
                        name?: {
                            text: string;
                        };
                        shortName?: {
                            text: string;
                        };
                    }[];
                }[];
            };
        };
        LinkProjection: {
            position: {
                longitude: number;
                latitude: number;
            }[];
        };
        TrackSectionStructure: {
            trackSectionStart?: {
                stopPointRef?: string;
                stopPlaceRef?: string;
                geoPosition?: {
                    longitude: number;
                    latitude: number;
                };
                name: {
                    text: string;
                };
            };
            trackSectionEnd?: {
                stopPointRef?: string;
                stopPlaceRef?: string;
                geoPosition?: {
                    longitude: number;
                    latitude: number;
                };
                name: {
                    text: string;
                };
            };
            linkProjection?: {
                position: {
                    longitude: number;
                    latitude: number;
                }[];
            };
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
