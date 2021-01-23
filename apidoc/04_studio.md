# Group Studio

## Studio [/studio{?prefecture_id,city_id}]

### All studios [GET]

Get studio info. Filter is available by adding one of following params in query params. When no query parameter is added, all of studios are returned.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetStudioResponse` |

+ Parameters
    + prefecture_id: 13 (number, optional) - filter studios by prefecture
    + city_id: 12345 (string, optional) - filter stduios by city

+ Response 200 (application/json)

### Register new studio [POST]

Login is required, otherwise `403` is returned.

When studio's name and ciry are conflicted, `409` is returned.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PostStudioRequest` | - |

+ Response 200 (application/json)
+ Response 403 (application/json)
+ Response 409 (application/json)

### Update existing studio [PUT]

Login is required, otherwise `403` is returned.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PutStudioRequest` | - |

+ Response 200 (application/json)
+ Response 403 (application/json)
+ Response 409 (application/json)

## Edit history of studio edit  [/studio/{id}/editors]

History of studio info edit. History is updated when `/studio/{id}` resource is updated.

+ Parameters
    + id: `123` (string, required) - Instrument ID.

### Get editors [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetStudioEditorsResponse` |

+ Response 200 (application/json)