# Group My self

Player info of user self. Ways to update user's info are provided.

## Detail of myself [/myself/detail]

`PlayerDetail` information of the user self.

### GET player's detail [GET]

Only when the user has logged in, it returns `200`. Otherwise, `401` is returned with `ErrorCode.LOGIN_REQUIRED` error.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetMySelfDetailResponse` |

+ Response 200 (application/json)
+ Response 403 (application/json)

### Update player's detail [PUT]

`/myself/detail` offers only the way to update whole of `PlayerDetail`. When to update each field, let's use sub endpoint. 

Only player-self can update detail info, otherwise `401` is returned.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PutMyselfDetailRequest` | `PutMyselfDetailResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)

## Active area of myself [/myself/detail/area]

### Get my active areas [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetMyselfDetailAreaResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)
+ Response 403 (application/json)

### Add my active area [POST]

Only player-self can update detail info, otherwise `401` or `403` is returned.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PostMyselfDetailAreaRequest` | `PostMyselfDetailAreaResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)
+ Response 403 (application/json)

### Remove my active area [DELETE]

Only player-self can update detail info, otherwise `401` or `403` is returned.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `DeleteMyselfDetailAreaRequest` | `DeleteMyselfDetailAreaResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)
+ Response 403 (application/json)

### Update user's active area [PUT]

It requires authenticated token. It returns 200 when it's success. When token is not valid, it returns 403.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PutPlayerDetailAreaRequest` | `PutMyselfDetailAreaResponse` |

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

## Instruments of myself [/myself/detail/instrument]

### Get my instruments [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetMyselDetailInstrumentResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)

### Add my instrument [POST]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PostMyselDetailInstrumentRequest` | `PostMyselDetailInstrumentResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)

### Remove my instrument [DELETE]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `DeleteMyselDetailInstrumentRequest` | `DeleteMyselDetailInstrumentResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)

## Studios of myself [/myself/detail/studio]

### Get my studios [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetMyselfDetailStudioResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)

### Add my studio [POST]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PostMyselDetailStudioRequest` | `PostMyselDetailStudioResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)

### Remove my studio [DELETE]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `DeleteMyselfDetailStudioRequest` | `DeleteMyselDetailStudioResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)

## Followers of myself [/myself/followers]

### Get my followers [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetMyselfDetailFollowersResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)

## Following players [/myself/followees]

### Get my following players [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetMyselfDetailFolloweesResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)

### Follow the player [POST]

Even if an user has already followed the player, it returns `200` as long as an user follows the player when API is done.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PostMyselfDetailFolloweeRequest` | `PostMyselfDetailFolloweesResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)

### Unfollow the player [DELETE]

Even if an user has already followed the player, it returns `200` as long as an user doesn't follows the player when API is done.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `DeleteMyselfDetailFolloweeRequest` | `DeleteMyselfDetailFolloweesResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)
