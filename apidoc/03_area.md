## Group Area

Resources related to areas (cities) in the API.

## Cities of prefecture [/area/prefecture/{prefecture_id}/cities]

Cities in the prefecture. A city object is defined as `City` message.

+ Parameters
    + prefecture_id: 13 (required, number) - ID of prefecture, it has to be one of `Prefecture` enum.

### Get all cities [GET]

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