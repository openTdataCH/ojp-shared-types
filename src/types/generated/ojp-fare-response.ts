/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/ojp": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Main /ojp endpoint
         * @description Main /ojp endpoint
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/xml": {
                            OJPResponse: {
                                serviceDelivery: {
                                    responseTimestamp: string;
                                    producerRef: string;
                                    OJPFareDelivery: {
                                        responseTimestamp: string;
                                        requestMessageRef?: string;
                                        status?: boolean;
                                        defaultLanguage?: string;
                                        calcTime?: string;
                                        fareResult: {
                                            resultId: string;
                                            tripFareResult: {
                                                fromTripLegIdRef: number;
                                                toTripLegIdRef: number;
                                                fareProduct: {
                                                    fareProductId: string;
                                                    fareProductName: string;
                                                    fareAuthorityRef: string;
                                                    fareAuthorityText: string;
                                                    price?: string;
                                                    netPrice?: string;
                                                    currency?: string;
                                                    vatRate?: number;
                                                    travelClass?: string;
                                                }[];
                                            }[];
                                        }[];
                                    };
                                };
                            };
                        };
                    };
                };
                /** @description Server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        FareProduct: {
            fareProductId: string;
            fareProductName: string;
            fareAuthorityRef: string;
            fareAuthorityText: string;
            price?: string;
            netPrice?: string;
            currency?: string;
            vatRate?: number;
            travelClass?: string;
        };
        TripFareResult: {
            fromTripLegIdRef: number;
            toTripLegIdRef: number;
            fareProduct: {
                fareProductId: string;
                fareProductName: string;
                fareAuthorityRef: string;
                fareAuthorityText: string;
                price?: string;
                netPrice?: string;
                currency?: string;
                vatRate?: number;
                travelClass?: string;
            }[];
        };
        FareResult: {
            resultId: string;
            tripFareResult: {
                fromTripLegIdRef: number;
                toTripLegIdRef: number;
                fareProduct: {
                    fareProductId: string;
                    fareProductName: string;
                    fareAuthorityRef: string;
                    fareAuthorityText: string;
                    price?: string;
                    netPrice?: string;
                    currency?: string;
                    vatRate?: number;
                    travelClass?: string;
                }[];
            }[];
        };
        OJPFareDelivery: {
            responseTimestamp: string;
            requestMessageRef?: string;
            status?: boolean;
            defaultLanguage?: string;
            calcTime?: string;
            fareResult: {
                resultId: string;
                tripFareResult: {
                    fromTripLegIdRef: number;
                    toTripLegIdRef: number;
                    fareProduct: {
                        fareProductId: string;
                        fareProductName: string;
                        fareAuthorityRef: string;
                        fareAuthorityText: string;
                        price?: string;
                        netPrice?: string;
                        currency?: string;
                        vatRate?: number;
                        travelClass?: string;
                    }[];
                }[];
            }[];
        };
        OJP: {
            OJPResponse: {
                serviceDelivery: {
                    responseTimestamp: string;
                    producerRef: string;
                    OJPFareDelivery: {
                        responseTimestamp: string;
                        requestMessageRef?: string;
                        status?: boolean;
                        defaultLanguage?: string;
                        calcTime?: string;
                        fareResult: {
                            resultId: string;
                            tripFareResult: {
                                fromTripLegIdRef: number;
                                toTripLegIdRef: number;
                                fareProduct: {
                                    fareProductId: string;
                                    fareProductName: string;
                                    fareAuthorityRef: string;
                                    fareAuthorityText: string;
                                    price?: string;
                                    netPrice?: string;
                                    currency?: string;
                                    vatRate?: number;
                                    travelClass?: string;
                                }[];
                            }[];
                        }[];
                    };
                };
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
