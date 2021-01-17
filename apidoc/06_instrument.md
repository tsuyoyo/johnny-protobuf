# Group Instrument

## Instrument [/instrument]

### Get all instruments [GET]

It returns all of instruments registered by users.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `GetInstrumentsResponse` | - |

+ Response 200 (application/json)
    + Body

            [
                {
                    "id": 3,
                    "name": "ギター",
                    "authorId": "user_123", 
                },
                {
                    "id": 5,
                    "name": "ドラム",
                    "authorId": "user_123", 
                },
            ]

### Register a new instrument [POST]

Login is required, otherwise `403` is returned. 

When instrument's name is conflicted (already registered), `409 (Conflict)` is returned.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PostInstrumentRequest` | - |

+ Response 200 (application/json)
+ Response 403 (application/json)
+ Response 409 (application/json)

## Existing instrument [/instrument/{id}]

Instrument info which's been already registered.

+ Parameters
    + id: `123` (string, required) - Instrument ID.

### Get specific instrument [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `GetInstrumentByIdResoponse` | - |

+ Response 200 (application/json)
    + Body

            {
                "id": 5,
                "name": "ドラム",
                "authorId": "user_123", 
            }

### Update instrument info [PUT]

When update is success, `200` is returned. This API requires login, otherwise `403` is returned. 

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PutInstrumentByIdRequest` | - |

+ Response 200 (application/json)
+ Response 403 (applilcation/json)
+ Response 404 (application/json)

