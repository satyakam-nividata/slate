---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell

toc_footers:

includes:

search: true
---

# API Integration Document

Each api call is an HTTP request. The name of the called function is path of the URL. A call to the function "CreateAccount" should like like this:
[https://server.portal.chat/ZimmoAPIGate/CreateAccount](http://server.portal.chat/ZimmoAPIGate/CreateAccount)

All parameters to the function can be passed either through the url or through the posted data. If the posted data is used to pass parameters it must be url encoded (the same why browsers encode form data).

All calls return JSON of an object that has exactly 3 properties:

1. "Success" (boolean) - Determines whether the call succeeded. If can be either true(success) false(failed)
2. "Error" (string nullable) - In case there was an error contains the error message otherwise it is still present, but its value is null.
3. "Result" (any) - Function specific result. In case there was an error it is still present, but its value is null.

# Authentication

All calls have one required common parameter: "AccessCode". It is string that validates your rights to access the API.
For test purposes the current AccessCode is: "fbgio589gnoi34gn980g";
If required we can support certificate signed calls, but maybe it will be pointless at this point.

> To authorize, use this code:

```shell
# With shell, you can just pass the correct AccessCode in request parameter
curl "api_endpoint_here/AccessCode=fbgio589gnoi34gn980g"
```

Portal.chat expects for the API key to be included in all API requests to the server in a request paramter that looks like the following:

`AccessCode=fbgio589gnoi34gn980g`

<aside class="notice">
You must replace <code>fbgio589gnoi34gn980g</code> with your personal API key.
</aside>

# AccountGlobal

This is AccountGlobal API type. Here, you will find all APIs in this type.

## ActivateAccount

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ActivateAccount"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

This endpoint creates an agency account.

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ActivateAccount`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description

## AddPromptchatAccount

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/AddPromptchatAccount"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/AddPromptchatAccount`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description
arg4 | java.lang.String | optional | description

## AddPromptchatAccountDomain

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/AddPromptchatAccountDomain"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/AddPromptchatAccountDomain`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | 1 | optional | description
arg2 | java.lang.String | optional | description


## AuthWithAPIKey

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/AuthWithAPIKey"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/AuthWithAPIKey`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## BuildApp

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/BuildApp"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/BuildApp`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description
arg4 | int | optional | description
arg5 | int | optional | description


## ChangePassword

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ChangePassword"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ChangePassword`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description


## ChangeUsername

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ChangeUsername"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ChangeUsername`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## CheckDomainAdd

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/CheckDomainAdd"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/CheckDomainAdd`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## ClearAPIKey

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ClearAPIKey"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ClearAPIKey`


## CreateAccount

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/CreateAccount"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/CreateAccount`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | MasterServer.SystemObjects.Interface.AccountCreationInfo | optional | description


## CreateApp

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/CreateApp"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/CreateApp`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | int | optional | description
arg3 | java.lang.String | optional | description
arg4 | java.lang.String | optional | description
arg5 | java.lang.String | optional | description
arg6 | java.lang.String | optional | description
arg7 | java.lang.String | optional | description
arg8 | java.lang.String | optional | description
arg9 | java.lang.String | optional | description


## CreateChatAccount

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/CreateChatAccount"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/CreateChatAccount`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description
arg4 | java.lang.String | optional | description
arg5 | java.lang.String | optional | description
arg6 | java.lang.String | optional | description
arg7 | java.lang.String | optional | description


## CreateUser

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/CreateUser"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/CreateUser`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | MasterServer.AccountObjects.Interface.AccountUserCreationInfo | optional | description


## DeleteApp

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteApp"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteApp`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## DeleteAppRelease

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteAppRelease"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteAppRelease`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg1 | int | optional | description


## DeleteCurrentUser

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteCurrentUser"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteCurrentUser`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## DeleteUser

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteUser"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteUser`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## GetAPIKey

```shell
curl "https://portalchattest.com/APIGate/Account/AccountGlobal/GetAPIKey?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "string",
    "Value": "FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
  },
  "Error": null
}

```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/AccountGlobal/GetAPIKey?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## GetAllIdealIssuers

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/GetAllIdealIssuers"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/GetAllIdealIssuers`


## GetApp

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/GetApp"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/GetApp`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## GetAppConfig

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/GetAppConfig"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/GetAppConfig`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## GetAppReleases

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/GetAppReleases"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/GetAppReleases`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## GetApps

```shell
curl "https://portalchattest.com/APIGate/Account/AccountGlobal/GetApps?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json
{
  "Result":
  {
    "Type" : "array", 
    "ItemType" : "AppInfo", 
    "Depth" : 1, 
    "Value" : [ 0 ]
  },
  "Error":null
}
```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/AccountGlobal/GetApps?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## GetPromptchatAccountDomains

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/GetPromptchatAccountDomains"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/GetPromptchatAccountDomains`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## GetPromptchatAccounts

```shell
curl "https://portalchattest.com/APIGate/Account/AccountGlobal/GetPromptchatAccounts?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "array",
    "ItemType": "PromptchatAccountInfo",
    "Depth": 1,
    "Value": [
      0
    ]
  },
  "Error": null
}

```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/AccountGlobal/GetPromptchatAccounts?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## GetPromptchatSubscriptions

```shell
curl "https://portalchattest.com/APIGate/Account/AccountGlobal/GetPromptchatSubscriptions?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "array",
    "ItemType": "PromptchatSubscriptionInfo",
    "Depth": 1,
    "Value": [
      0
    ]
  },
  "Error": null
}

```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/AccountGlobal/GetPromptchatSubscriptions?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## GetSetupInfo

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/GetSetupInfo"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/GetSetupInfo`


## InitiateIdealPurchase

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/InitiateIdealPurchase"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/InitiateIdealPurchase`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | int | optional | description
arg3 | java.lang.String | optional | description


## InitiatePaypalPurchase

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/InitiatePaypalPurchase"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/InitiatePaypalPurchase`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## KurentoOnIceCandidate

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/KurentoOnIceCandidate"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/KurentoOnIceCandidate`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg0 | java.lang.String | optional | description


## KurentoOnOfferPresenter

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/KurentoOnOfferPresenter"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/KurentoOnOfferPresenter`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## Login

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/Login"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/Login`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description
arg4 | java.lang.String | optional | description
arg5 | boolean | optional | description


## LoginWithDeviceToken

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/LoginWithDeviceToken"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/LoginWithDeviceToken`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description
arg4 | java.lang.String | optional | description
arg5 | boolean | optional | description
arg6 | java.lang.String | optional | description
arg7 | java.lang.String | optional | description


## LoginWithZimmoCode

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/LoginWithZimmoCode"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/LoginWithZimmoCode`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description


## Logout

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/Logout"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/Logout`


## LogoutWithDeviceToken

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/LogoutWithDeviceToken"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/LogoutWithDeviceToken`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## PurchaseDomain

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/PurchaseDomain"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/PurchaseDomain`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | int | optional | description
arg3 | int | optional | description


## PurchaseDomainExtension

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/PurchaseDomainExtension"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/PurchaseDomainExtension`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | int | optional | description
arg3 | int | optional | description


## PurchasePremium

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/PurchasePremium"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/PurchasePremium`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | int | optional | description


## PurchaseSetup

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/PurchaseSetup"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/PurchaseSetup`


## RemovePromptchatAccount

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/RemovePromptchatAccount"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/RemovePromptchatAccount`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## RemovePromptchatAccountDomain

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/RemovePromptchatAccountDomain"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/RemovePromptchatAccountDomain`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | java.lang.String | optional | description


## RequestForgottenForAllPassword

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/RequestForgottenForAllPassword"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/RequestForgottenForAllPassword`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description


## RequestForgottenPassword

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/RequestForgottenPassword"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/RequestForgottenPassword`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description


## ResetAPIKey

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ResetAPIKey"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ResetAPIKey`


## ResetUserPassword

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ResetUserPassword"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ResetUserPassword`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## ResumeUser

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ResumeUser"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ResumeUser`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## SaveOfflineVisitor

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SaveOfflineVisitor"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SaveOfflineVisitor`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | int | optional | description
arg3 | int | optional | description


## SearchOfflineVisitors

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SearchOfflineVisitors"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SearchOfflineVisitors`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description
arg4 | java.lang.String | optional | description


## SearchOfflineVisitorsEmail

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SearchOfflineVisitorsEmail"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SearchOfflineVisitorsEmail`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description


## SetAppConfig

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetAppConfig"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetAppConfig`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | java.lang.String | optional | description


## SetAppSettings

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetAppSettings"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetAppSettings`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description
arg4 | java.lang.String | optional | description
arg5 | java.lang.String | optional | description
arg6 | java.lang.String | optional | description
arg7 | java.lang.String | optional | description
arg8 | int | optional | description
arg9 | int | optional | description


## SetDeviceToken

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetDeviceToken"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetDeviceToken`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## SetForgottenPassword

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetForgottenPassword"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetForgottenPassword`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description


## SetPromptchatAccountAdminPassword

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetPromptchatAccountAdminPassword"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetPromptchatAccountAdminPassword`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | java.lang.String | optional | description


## SetReviewSettings

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetReviewSettings"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetReviewSettings`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | MasterServer.Database.ReviewData$ReviewSetInfo | optional | description
arg2 | java.lang.String | optional | description


## SetReviewState

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetReviewState"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetReviewState`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | boolean | optional | description
arg3 | boolean | optional | description


## SetSetupInfo

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetSetupInfo"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetSetupInfo`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## SetUserEmail

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetUserEmail"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetUserEmail`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | java.lang.String | optional | description


## SuspendUser

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SuspendUser"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SuspendUser`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## SwitchMaster

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SwitchMaster"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SwitchMaster`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## UpdateIdealTransactionStatus

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/UpdateIdealTransactionStatus"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/UpdateIdealTransactionStatus`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## UpdatePromptchatAccount

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/UpdatePromptchatAccount"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/UpdatePromptchatAccount`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description


## UploadGenericImage

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/UploadGenericImage"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/UploadGenericImage`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | int | optional | description
arg3 | int | optional | description
arg4 | java.lang.String | optional | description


## UploadTempImage

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/UploadTempImage"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/UploadTempImage`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## UseCode

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/UseCode"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/UseCode`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## getAccountPlanAmount

```shell
curl "https://portalchattest.com/APIGate/Account/AccountGlobal/getAccountPlanAmount?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "int",
    "Value": 50
  },
  "Error": null
}


```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/AccountGlobal/getAccountPlanAmount?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## getAccountPlanExpired

```shell
curl "https://portalchattest.com/APIGate/Account/AccountGlobal/getAccountPlanExpired?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "bool",
    "Value": false
  },
  "Error": null
}

```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/AccountGlobal/getAccountPlanExpired?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## setAccountPlanActive

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/setAccountPlanActive"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/setAccountPlanActive`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


# ChatOperator

This is ChatOperator API type. Here, you will find all APIs in this type.

## AddCannedMessage

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/AddCannedMessage"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/AddCannedMessage`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## AddChatBox

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/AddChatBox"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/AddChatBox`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## AddOperatorToChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/AddOperatorToChat"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/AddOperatorToChat`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description


## AddSubAccount

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/AddSubAccount"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/AddSubAccount`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description
arg4 | java.lang.String | optional | description
arg5 | java.lang.String | optional | description
arg6 | boolean | optional | description
arg7 | boolean | optional | description


## AddTaxonomy

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/AddTaxonomy"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/AddTaxonomy`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | boolean | optional | description


## AddTaxonomyItem

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/AddTaxonomyItem"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/AddTaxonomyItem`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | int | optional | description
arg3 | java.lang.String | optional | description
arg4 | boolean | optional | description
arg5 | boolean | optional | description
arg6 | boolean | optional | description


## ChangeOperatorSettings

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/ChangeOperatorSettings"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/ChangeOperatorSettings`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description
arg3 | boolean | optional | description
arg4 | java.lang.String | optional | description
arg5 | java.lang.String | optional | description
arg6 | boolean | optional | description


## ConnectEndpoint

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/ConnectEndpoint"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/ConnectEndpoint`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description


## DeleteSubAccount

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/DeleteSubAccount"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/DeleteSubAccount`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## DisconnectEndpoint

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/DisconnectEndpoint"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/DisconnectEndpoint`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description


## ExportAccountCSV

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/ExportAccountCSV?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "string",
    "Value": "https://portalchattest.com/Resource/Statistics/Accountsd5XDzn9BQ7OJcK0CbSPEKw==dmecfAbl.csv"
  },
  "Error": null
}

```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/ExportAccountCSV?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## ExportChats

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/ExportChats"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/ExportChats`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg1 | int | optional | description


## FindChats

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/FindChats"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/FindChats`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | int | optional | description
arg3 | int | optional | description
arg4 | int | optional | description
arg5 | int | optional | description
arg6 | int | optional | description
arg7 | int | optional | description
arg8 | int | optional | description


## FindSubAccount

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/FindSubAccount"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/FindSubAccount`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## GetAGConfig

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetAGConfig?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "ChatAccountAG",
    "Value": {
      "AGAccountGenerationEmail": null,
      "AGAccountNamePrefix": "",
      "AGAllowAccountForm": false,
      "AGGenerateSuspendedAccounts": false,
      "AGGetAccountInfoUrl": null,
      "AGOnNewAdvertiserCode": null,
      "AGUseAgentIdAsAccountName": false,
      "AGUseEmailFromTopic": false,
      "AGValidateLoginUrl": null,
      "AutoGenerateSubAccounts": false,
      "ChatAccountId": 585
    }
  },
  "Error": null
}

```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetAGConfig?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## GetAvailableStatisticsValues

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetAvailableStatisticsValues"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetAvailableStatisticsValues`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | boolean| optional | description


## GetAvailableTimeZones

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetAvailableTimeZones?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "TimeZoneList",
    "Value": {
      "TimeZones": [
        617,
        {
          "Id": "ACT",
          "Name": "Australian Central Standard Time (Northern Territory)"
        },
                
        {
          "Id": "Zulu",
          "Name": "Coordinated Universal Time"
        }
      ]
    }
  },
  "Error": null
}


```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetAvailableTimeZones?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## GetBotAllowed

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetBotAllowed?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "bool",
    "Value": true
  },
  "Error": null
}

```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetBotAllowed?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## GetBotConfigured

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetBotConfigured?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "bool",
    "Value": false
  },
  "Error": null
}

```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetBotConfigured?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## GetCurrentServiceEntitiyInfo

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetCurrentServiceEntitiyInfo?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "string",
    "Value": "{\"ChatBoxes\":[{\"LeaveAMessageMessage\":\"All operators are currently busy. It make take a while before we can anwer your chat request. If you prefer to leave us a message instead please type the message in this chat and your email address in the field below.\",\"Height\":442,\"AllowAutoOpenWhenNotAvailable\":false,\"NoChatAvailableMessage\":\"\",\"TypeYourMessageHereCaption\":\"Type your message here...\",\"PaddingRight\":5,\"WaitingForOperatorMessage\":\"Waiting for operator\",\"TitleCaption\":\"LIVE CHAT\",\"EmailCaption\":\"Your email here\",\"HeaderColorTo\":2774131,\"TheChatHasFinishedAfterEmail\":\"The chat has finished. Click the button below to start a new chat.\",\"OfflineButton\":{\"AllowVideo\":false,\"ButtonType\":\"default\",\"BaseColor\":5214399,\"OffsetX\":0,\"Show\":true,\"ButtonConfig\":\"{\\\"Box\\\":{\\\"ShowBox\\\":false,\\\"ShowByDefault\\\":false,\\\"ShowOnMouseOver\\\":false,\\\"Title\\\":\\\"\\\",\\\"Description\\\":\\\"\\\",\\\"TypeHereText\\\":\\\"\\\",\\\"ContentSize\\\":20,\\\"Width\\\":360,\\\"ImageId\\\":\\\"\\\"},\\\"Button\\\":{\\\"Size\\\":60,\\\"IconColor\\\":16777215,\\\"BorderColor\\\":16777215,\\\"BackgroundFrom\\\":0,\\\"BackgroundTo\\\":0,\\\"BackgroundHighlightFrom\\\":0,\\\"BackgroundHighlightTo\\\":0},\\\"ShadowSize\\\":10,\\\"ShadowColor\\\":0,\\\"AutoColors\\\":false}\",\"VideoWidth\":120,\"IndicatorOffsetX\":0,\"InheritColorFromChatBox\":true,\"InheritAlignmentFromChatBox\":true,\"IndicatorOffsetY\":0,\"AlignmentY\":2,\"AlignmentX\":2,\"OffsetY\":0,\"VideoCaption\":\"\"},\"PaddingLeft\":60,\"AutoOpenOnMessageRecieved\":true,\"AdditionalColor\":3566997,\"AlignmentY\":2,\"ChatEndedMessage\":\"Chat has ended\",\"Name\":\"Default\",\"ImmediateIfNA\":false,\"AutoRequestChatOnChatBoxOpen\":false,\"PaddingBottom\":0,\"PaddingTop\":0,\"AutoOpenMessage\":\"\",\"AskEmail\":1,\"ChatAccountId\":585,\"EndChatOnSetEmail\":false,\"Width\":406,\"ChatStartedAtCaption\":\"Chat started at\",\"ThankYouForTheEmailMessage\":\"Thank you for providing your email. We will contact you shortly.\",\"AutoOpenTime\":0,\"OffsetX\":0,\"HeaderTitleColor\":3355443,\"ChatBoxId\":269,\"AlignmentX\":2,\"AllowForDesktop\":true,\"OnlineButton\":{\"AllowVideo\":false,\"ButtonType\":\"default\",\"BaseColor\":5214399,\"OffsetX\":0,\"Show\":true,\"ButtonConfig\":\"{\\\"Box\\\":{\\\"ShowBox\\\":false,\\\"ShowByDefault\\\":false,\\\"ShowOnMouseOver\\\":false,\\\"Title\\\":\\\"\\\",\\\"Description\\\":\\\"\\\",\\\"TypeHereText\\\":\\\"\\\",\\\"ContentSize\\\":20,\\\"Width\\\":360,\\\"ImageId\\\":\\\"\\\"},\\\"Button\\\":{\\\"Size\\\":60,\\\"IconColor\\\":16777215,\\\"BorderColor\\\":16777215,\\\"BackgroundFrom\\\":0,\\\"BackgroundTo\\\":0,\\\"BackgroundHighlightFrom\\\":0,\\\"BackgroundHighlightTo\\\":0},\\\"ShadowSize\\\":10,\\\"ShadowColor\\\":0,\\\"AutoColors\\\":false}\",\"VideoWidth\":120,\"IndicatorOffsetX\":0,\"InheritColorFromChatBox\":true,\"InheritAlignmentFromChatBox\":true,\"IndicatorOffsetY\":0,\"AlignmentY\":2,\"AlignmentX\":2,\"OffsetY\":0,\"VideoCaption\":\"\"},\"AllowForMobile\":true,\"AutoColors\":true,\"HeaderColorFrom\":5214399,\"LeaveAMessageDelay\":120,\"BaseColor\":5214399,\"ChatBotTransfertoAgentCount\":3,\"OffsetY\":0,\"SendMyEmailCaption\":\"Set my email\"}],\"HasFallbackAccount\":false,\"Chats\":[],\"AutoFallbackDelay\":30,\"TaxonomyConfigurationReference\":{\"Taxonomies\":[{\"TaxonomyName\":\"\",\"Root\":{\"TaxonomyItemId\":0,\"AllowedForSelection\":false,\"MarkAsProcessed\":false,\"ForbidTranscriptEmail\":false,\"ItemName\":\"Root\",\"SubItems\":[]},\"TaxonomyId\":479,\"Required\":false}]},\"Visitors\":[],\"HasSubAccounts\":true,\"IsAutoFallbackOn\":true,\"InVisitorCutoffMode\":false,\"Operators\":[{\"IsMaster\":true,\"AllowPhoneChat\":false,\"Nickname\":\"mynividata\",\"IsResponding\":true,\"IsOnline\":true,\"OperatorId\":\"740\",\"Avatar\":\"https://portalchattest.com/ChatBox/Operator0.jpg\",\"IsAvailable\":true,\"PhoneNumber\":\"\",\"TranscriptEmail\":\"hitesh@nividata.com\",\"RegisteredDeviceCount\":0,\"NotifyForPickedChat\":false}],\"CannedMessages\":[{\"MessageText\":\"\",\"CannedMessageId\":68},{\"MessageText\":\"\",\"CannedMessageId\":69}],\"IsFallbackOn\":true}"
  },
  "Error": null
}

```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetCurrentServiceEntitiyInfo?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## GetCustomInfoVariations

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetCustomInfoVariations"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetCustomInfoVariations`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## GetDoubleStatisticsData

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetDoubleStatisticsData"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetDoubleStatisticsData`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | int | optional | description
arg3 | java.lang.String | optional | description
arg4 | java.lang.String | optional | description
arg5 | java.lang.String | optional | description


## GetExportConfig

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetExportConfig?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "ExportConfig",
    "Value": {
      "AutoExportInterval": 0,
      "FTPExportPath": "",
      "FTPHost": "",
      "FTPPassword": "",
      "FTPPort": "",
      "FTPType": 0,
      "FTPUsername": "",
      "LastExportTime": 0
    }
  },
  "Error": null
}

```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetExportConfig?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## GetForbiddenIdentifiers

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetForbiddenIdentifiers?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "string",
    "Value": ""
  },
  "Error": null
}

```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetForbiddenIdentifiers?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## GetHistogramStatisticsData

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetHistogramStatisticsData"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetHistogramStatisticsData`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | int | optional | description
arg3 | java.lang.String | optional | description
arg4 | java.lang.String | optional | description
arg5 | java.lang.String | optional | description


## GetHistoryChatDetails

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetHistoryChatDetails"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetHistoryChatDetails`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## GetIntegerStatisticsData

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetIntegerStatisticsData"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetIntegerStatisticsData`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | int | optional | description
arg3 | java.lang.String | optional | description
arg4 | java.lang.String | optional | description
arg5 | java.lang.String | optional | description


## GetPageVisits

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetPageVisits"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetPageVisits`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## GetPossibleOperators

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetPossibleOperators"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetPossibleOperators`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## GetRelatedHistoryChats

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetRelatedHistoryChats"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetRelatedHistoryChats`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description


## GetRelatedVisits

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetRelatedVisits"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetRelatedVisits`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## GetServiceEntityInfo

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetServiceEntityInfo?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "ServiceEntityInfo",
    "Value": {
      "AlarmPhone": "",
      "AllowSubAccountAvailability": true,
      "AllowSubChatBoxConfiguration": true,
      "AllowSubRequestHandling": true,
      "Info": "",
      "NonPrimaryEntityDelay": 0,
      "PreassignOperators": false,
      "PreassignmentDuration": 0,
      "PreassignmentsBeforeGlobalAssignment": 0,
      "TimeZoneId": "",
      "TranscriptEMail": "hitesh@nividata.com"
    }
  },
  "Error": null
}

```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetServiceEntityInfo?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## GetShortStatistics

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetShortStatistics"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetShortStatistics`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | int | optional | description
arg3 | java.lang.String | optional | description
arg4 | int | optional | description


## InitChat

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/InitChat?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "string",
    "Value": "740"
  },
  "Error": null
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

```

Description

### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/InitChat?auth=apikey:FFvtoADgSzCJYk4mhX4hhA==HEYXngQd`


## JoinChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/JoinChat"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/JoinChat`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## LeaveChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/LeaveChat"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/LeaveChat`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## PrepareStatisticsExport

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/PrepareStatisticsExport"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/PrepareStatisticsExport`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg1 | Chat.ChatOperatorObjects.Interface.StatisticsPeriodList | optional | description


## PrepareYearStatisticsExport

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/PrepareYearStatisticsExport"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/PrepareYearStatisticsExport`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg1 | int | optional | description


## RegisterAccount

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/RegisterAccount"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/RegisterAccount`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg0 | int | optional | description
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description
arg4 | java.lang.String | optional | description
arg5 | java.lang.String | optional | description


## RegisterSingleAccount

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/RegisterSingleAccount"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/RegisterSingleAccount`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg0 | java.lang.String | optional | description
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description
arg4 | java.lang.String | optional | description
arg5 | java.lang.String | optional | description
arg6 | java.lang.String | optional | description


## RemoveCannedMessage

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/RemoveCannedMessage"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/RemoveCannedMessage`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## RemoveChatBox

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/RemoveChatBox"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/RemoveChatBox`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## RemoveOperatorFromChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/RemoveOperatorFromChat"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/RemoveOperatorFromChat`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description


## RemoveTaxonomy

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/RemoveTaxonomy"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/RemoveTaxonomy`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## RemoveTaxonomyItem

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/RemoveTaxonomyItem"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/RemoveTaxonomyItem`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg1 | int | optional | description


## ResetSubAccountMasterPassword

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/ResetSubAccountMasterPassword"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/ResetSubAccountMasterPassword`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## SendIceCandidate

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SendIceCandidate"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SendIceCandidate`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description


## SendMessage

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SendMessage"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SendMessage`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description


## SendSms

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SendSms"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SendSms`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description


## SetAGConfig

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetAGConfig"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetAGConfig`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | Chat.ChatOperatorObjects.Interface.ChatAccountAG | optional | description


## SetAutoFallbackDelay

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetAutoFallbackDelay"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetAutoFallbackDelay`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description


## SetBoradcasting

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetBoradcasting"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetBoradcasting`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | Chat.ChatOperatorObjects.Interface.BroadcastSettings | optional | description


## SetBotAllowed

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetBotAllowed"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetBotAllowed`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | boolean | optional | description


## SetChatProcessed

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetChatProcessed"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetChatProcessed`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg1 | boolean | optional | description


## SetCustomInfo

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetCustomInfo"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetCustomInfo`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | int | optional | description
arg3 | int | optional | description
arg4 | java.lang.String | optional | description
arg5 | java.lang.String | optional | description
arg6 | java.lang.String | optional | description


## SetExportConfig

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetExportConfig"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetExportConfig`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | Chat.ChatOperatorObjects.Interface.ExportConfig | optional | description


## SetForbiddenIdentifiers

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetForbiddenIdentifiers"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetForbiddenIdentifiers`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## SetIsAutoFallbackOn

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetIsAutoFallbackOn"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetIsAutoFallbackOn`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | boolean | optional | description


## SetIsAvailable

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetIsAvailable"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetIsAvailable`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | boolean | optional | description


## SetIsFallbackOn

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetIsFallbackOn"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetIsFallbackOn`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | boolean | optional | description


## SetSeenMessageCount

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetSeenMessageCount"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetSeenMessageCount`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg1 | int | optional | description


## SetServiceEntityInfo

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetServiceEntityInfo"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetServiceEntityInfo`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description
arg3 | java.lang.String | optional | description
arg4 | boolean | optional | description
arg5 | boolean | optional | description
arg6 | boolean | optional | description
arg7 | java.lang.String | optional | description
arg8 | int | optional | description
arg9 | boolean | optional | description
arg10 | int | optional | description
arg11 | int | optional | description


## SetSubAccountState

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetSubAccountState"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetSubAccountState`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | java.lang.String | optional | description
arg3 | boolean | optional | description


## SetTaxonomyValue

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetTaxonomyValue"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetTaxonomyValue`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | int | optional | description
arg3 | int | optional | description


## SetTestPhoneNumber

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetTestPhoneNumber"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetTestPhoneNumber`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## StartChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/StartChat"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/StartChat`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


## StartOperatorChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/StartOperatorChat"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/StartOperatorChat`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description


## StopBoradcasting

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/StopBoradcasting"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/StopBoradcasting`


## StopChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/StopChat"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/StopChat`


## UpdateChatBox

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/UpdateChatBox"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/UpdateChatBox`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | Chat.Data.IChatBox | optional | description
arg2 | Chat.Data.IChatBoxFloatingButton | optional | description
arg3 | Chat.Data.IChatBoxFloatingButton | optional | description


## UpdateTaxonomy

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/UpdateTaxonomy"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/UpdateTaxonomy`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg1 | java.lang.String | optional | description
arg1 | boolean | optional | description


## UpdateTaxonomyItem

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/UpdateTaxonomyItem"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/UpdateTaxonomyItem`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | int | optional | description
arg2 | int | optional | description
arg3 | java.lang.String | optional | description
arg4 | boolean | optional | description
arg5 | boolean | optional | description
arg6 | boolean | optional | description


## UploadAccountCSV

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/UploadAccountCSV"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/UploadAccountCSV`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg1 | java.lang.String | optional | description


# Common APIs

This is Common API type. 

## AllocateBundle

```shell
curl "https://server.portal.chat/APIGate/Account/Common/AllocateBundle"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/Common/AllocateBundle`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg0 | java.lang.String | optional | description
arg1 | java.lang.String | optional | description


## GetBundleInfoAndData

```shell
curl "https://server.portal.chat/APIGate/Account/Common/GetBundleInfoAndData"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/Common/GetBundleInfoAndData`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg0 | java.lang.String | optional | description


## SaveBundle

```shell
curl "https://server.portal.chat/APIGate/Account/Common/SaveBundle"
```

> The above command returns JSON structured like this:

```json

{
  "Success": true,
  "Error": null,
  "Result":
  {
    "Id" : 5,
    "ExternalId": "56546",
    "AccountName": "test",
    "TranscriptEmail": "test@test.com",
    "AlarmPhone": "",
    "Suspended": false,
    "Operators": [],
    "SubAccount": [],
    "ParentAccount": null
  }
}

```

Description

### HTTP Request

`GET https://server.portal.chat/APIGate/Account/Common/SaveBundle`

### Query Parameters
Parameter |  Type  |  Required  |  Description
--------- | -------| -----------|  -----------|
arg0 | java.lang.String | optional | description
arg1 | java.lang.String | optional | description
arg2 | java.lang.String | optional | description

