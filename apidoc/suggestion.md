## Group Suggestion

API to return suggestion to input.

## Cities [/suggestion/city{?zip_code}]

Cities which can be suggested by part of zipCode. A city object is defined as `City` message.

+ Parameters
    + zip_code: 123 (string) - Part of zip code to get sugggestion.

### Get city suggestions [GET]

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | - | `GetSuggestCityResponse` |

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