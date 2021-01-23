# Group Login and Signup

## Signup [/signup]

### Signup new user [POST]

Clients send token which is got from Firebase by verifying the user in other services (e.g. Twitter). 

When the user has already been registered, API returns `200` with existing `Player` data.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PostSignupRequest` | `PostSignupResponse` |

+ Response 200 (application/json)

## Login [/login]

### Login [POST]

Same as singup flow, clients send firebase token verified by other services.

`401` is returned, when the user is not found in the database.

| Content-Type header | Request | Response |
| --- | --- | --- |
| application/protobuf | `PostLoginRequest` | `PostLoginResponse` |

+ Response 200 (application/json)
+ Response 401 (application/json)

