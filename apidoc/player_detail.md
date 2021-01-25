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

## Instrumentals [/player/{id}/detail/instrument]

+ Parameters
    + id: `test_123` (string, required) - Player ID.

### Get player's instrument [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetPlayerDetailInstrumentResponse` |

+ Response 200 (application/json)

## Studios [/player/{id}/detail/studio]

+ Parameters
    + id: `test_123` (string, required) - Player ID.

### Get player's studio info [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetPlayerDetailStudioResponse` |

+ Response 200 (application/json)

## Following players [/player/{id}/detail/follower]

Players who're are following the player.

### Get followers [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetPlayerDetailFollowerResponse` |

+ Response 200 (application/json)

## Followed players [/player/{id}/detail/followees]

Players whom the player is following.

### Get followees [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetPlayerDetailFolloweeResponse` |

+ Response 200 (application/json)

## Biography [/player/{id}/detail/biography]

### Get followees [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | (TO be updated) |

+ Response 200 (application/json)