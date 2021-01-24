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

## Existing studio [/studio/{id}]

Already registered studio.

+ Parameters
    + id: `123` (string, required) - Studio's ID.

### Update studio info [PUT]

Login is required, otherwise `403` is returned. 

When studio info updated, edit history is logged. Edit history is available in `/studio/{id}/history/edit`,

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PutStudioRequest` | - |

+ Response 200 (application/json)
+ Response 403 (application/json)
+ Response 409 (application/json)

## Edit history of studio edit [/studio/{id}/history/edit]

History of studio info edit. 

+ Parameters
    + id: `123` (string, required) - Studio's ID.

### Get history [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetStudioHistoryEditResponse` |

+ Response 200 (application/json)