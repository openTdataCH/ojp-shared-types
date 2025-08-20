# ojp-shared-types

This repo contains the shared types used by OJP models based on OpenAPI / XSD Schema
https://vdvde.github.io/OJP/develop/documentation-tables/ojp.html

Notes
- for now now JavaScript / Node applications are supported. Not all OJP models are exposed, check [src/types/index.ts](./src/types/index.ts) to see which interfaces / types are currently exported.
- [fast-xml-parser](https://www.npmjs.com/package/fast-xml-parser) package is used for XML parsing in JS/TS SDKs, i.e. [ojp-js](https://github.com/openTdataCH/ojp-js) SDK. For correct schema parsing / building a set of mappings are used, defined in [src/types/openapi-dependencies.ts](./src/types/openapi-dependencies.ts)
- long-term, we need the above file to be also generated, i.e. by checking the schema, see [openapi-dependencies.ts from YAML files #149
](https://github.com/openTdataCH/ojp-js/issues/149) for the status.

## Usage 

- include the `ojp-shared-types` package in the `./package.json` dependencies of the project 
```
  "dependencies": {
    "ojp-shared-types": "0.0.14"
  }
```

- consume the OJP types in your application

```
import * as OJP_Types from 'ojp-shared-types';

export class MyOJPReques implements OJP_Types.TripRequestSchema {
    ....
}
```

## Build and extend the current models

- edit [openapi](./openapi/) YAML files
- generate models
`$ npm run generate:ts`

## License

The project is released under a [MIT license](./LICENSE).

Copyright (c) 2025 Open Data Platform Mobility Switzerland - [opentransportdata.swiss](https://opentransportdata.swiss/en/).
