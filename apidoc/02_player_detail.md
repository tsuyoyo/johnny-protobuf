# Group Player detail

## Player detail [/player/{id}/detail]

Detail infomation of the player which is presented by `PlayerDetail` object. 

+ Parameters
    + id: `test_123` (string, required) - Player ID.

### Get player's detail [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetPlayerDetailResponse` |

+ Response 200 (application/json) 

### Update player's detail [PUT]

Only player-self can update detail info, otherwise `403` is returned.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PutPlayDetailReqest` | - |

+ Response 200 (application/json)
+ Response 403 (application/json)

## Active area [/player/{id}/detail/area]

`activeAreas` field of player's detail, which is areas where the player usually visits and play instrument.

+ Parameters
    + id: `test_123` (string, required) - Player ID.

### Get player's active areas [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetPlayerDetailAreaResponse` |

+ Response 200 (application/json)
    + Body

            [
                {
                    "id": 13101,
                    "name": "千代田区:,
                    "prefecture": 13
                },
                {
                    "id": 13102,
                    "name": "中央区:,
                    "prefecture": 13
                },
            ]

### Update user's active area [PUT]

It requires authenticated token. It returns 200 when it's success. When token is not valid, it returns 403.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PutPlayerDetailAreaRequest` | - |

+ Request    
    + Body

            [
                {
                                    {
                    "id": 13101,
                    "name": "千代田区:,
                    "prefecture": 13
                },
                {
                    "id": 13103, 
                    "name": "港区", 
                    "prefecture": 13,
                },
                {
                    "id": 14101, 
                    "name": "横浜市鶴見区", 
                    "prefecture": 14,
                },
            ]

+ Response 200 (application/json)
+ Response 403 (application/json)

## Instrumentals [/player/{id}/detail/instrumentals]

+ Parameters
    + id: `test_123` (string, required) - Player ID.

### Get player's instruments [GET]

+ Response 200 (application/json)

### Update player's instruments [PUT]

+ Response 200 (application/json)

## Studios [/player/{id}/detail/studios]

+ Parameters
    + id: `test_123` (string, required) - Player ID.

### Get player's studio info [GET]

+ Response 200 (application/json)

### Update player's studio info [PUT]

+ Response 200 (application/json)
