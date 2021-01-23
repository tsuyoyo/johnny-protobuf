# Group Player

## Player summaries [/player{?prefecture_id,city_id,instrument_id,studio_id}]

List of player summaries. 

### Get players' summary [GET]

Various conditions can be specified in request. When multiple paramters are passed, filters work as "AND". 

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetPlayerResponse` |

+ Parameters
    + prefecture_id: 13 (number, optional) - filter players by prefecture
    + city_id: 12345 (string, optional) - filter players by city
    + instrument_id: 1 (number, optional) - filter players by instrument
    + studio_id : 10 (number, optional) - filter players by studio

+ Response 200 (application/json)

## Player summary [/player/{id}]

Summary of specific player.

+ Parameters
    + id: `test_123` (string, required) - Player ID.

### Get player's summary [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetPlayerResponse` |

+ Response 200 (application/json)
