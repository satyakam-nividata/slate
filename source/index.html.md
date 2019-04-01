---
title: API Reference

toc_footers:

includes:

search: true

---

# API Integration Document

Each api call is an HTTP request. The name of the called function is path of the URL. A call to the function "CreateAccount" should like like this: [https://server.portal.chat/APIGate/Account/AccountGlobal/CreateAccount](https://server.portal.chat/APIGate/Account/AccountGlobal/CreateAccount)

All parameters to the function can be passed either through the url or through the posted data. If the posted data is used to pass parameters it must be url encoded (the same why browsers encode form data).

All calls return JSON of an object that has exactly 3 properties:

1. "Success" (boolean) - Determines whether the call succeeded. If can be either true(success) false(failed)
2. "Error" (string nullable) - In case there was an error contains the error message otherwise it is still present, but its value is null.
3. "Result" (any) - Function specific result. In case there was an error it is still present, but its value is null.

# Authentication

All calls have one required common parameter: "AccessCode". It is string that validates your rights to access the API. For test purposes the current AccessCode is: "YOUR_API_KEY"; If required we can support certificate signed calls, but maybe it will be pointless at this point.

> To authorize, use this code:

```shell
# With shell, you can just pass the correct AccessCode in request parameter
curl "api_endpoint_here/AccessCode=YOUR_API_KEY"
```

Portal.chat expects for the API key to be included in all API requests to the server in a request parameter that looks like the following:

`AccessCode=YOUR_API_KEY`

<aside class="notice">
You must replace <code>YOUR_API_KEY</code> with your personal API key.
</aside>

# AccountGlobal

These are AccountGlobal APIs.

## Account Info APIs

### CheckDomainAdd

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/CheckDomainAdd?auth=apikey:YOUR_API_KEY&domainEnd=PARAMETER_VALUE"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "SystemGlobalObject_InvalidDomainEnd",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "Invalid domain end"
      },
      "ParameterName": "domainEnd"
    }
  }
}
```

Check whether domain can be added or not.

##### HTTP Request
`GET https://server.portal.chat/APIGate/Account/AccountGlobal/CheckDomainAdd?auth=apikey:YOUR_API_KEY&domainEnd=PARAMETER_VALUE`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
domainEnd | java.lang.String | Domain name to be verified.

### CreateAccount

This API is used to create account. Not possible from API. Can not pass object in GET.

##### Sample URL
`https://server.portal.chat/APIGate/Account/AccountGlobal/CreateAccount?auth=apikey:YOUR_API_KEY&accountCreationInfo=OBJECT`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
accountCreationInfo | MasterServer.SystemObjects.Interface.AccountCreationInfo | Object of AccountCreationInfo class

### CreateChatAccount

To create new account with domain and master user.

##### Sample URL
`GET https://server.portal.chat/APIGate/Account/AccountGlobal/CreateChatAccount?auth=apikey:YOUR_API_KEY&generatorId=VALUE&code=VALUE&mainDomain=VALUE&accountName=VALUE&username=VALUE&password=VALUE&email=VALUE`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
generatorId | int | Generator id of prompt chat account
code | java.lang.String | Token to be used to create account
mainDomain | java.lang.String | Domain name for account
accountName | java.lang.String | Account name
username | java.lang.String | Username of master user
password | java.lang.String | Password of master user
email	| java.lang.String | Email of master user

### getAccountPlanAmount

```shell
curl "https://portalchattest.com/APIGate/Account/AccountGlobal/getAccountPlanAmount?auth=apikey:YOUR_API_KEY"
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

To retrieve plan amount of account associated with user whose key is in use.

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/AccountGlobal/getAccountPlanAmount?auth=apikey:YOUR_API_KEY`

### getAccountPlanExpired

```shell
curl "https://portalchattest.com/APIGate/Account/AccountGlobal/getAccountPlanExpired?auth=apikey:YOUR_API_KEY"
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

To check whether account plan is expired or not.

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/AccountGlobal/getAccountPlanExpired?auth=apikey:YOUR_API_KEY`

### GetSetupInfo

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/GetSetupInfo?auth=apikey:YOUR_API_KEY"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "string",
    "Value": "Setup"
  },
  "Error": null
}
```

Returns set up information of account of user whose API key is in use.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/GetSetupInfo?auth=apikey:YOUR_API_KEY`

### setAccountPlanActive

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/setAccountPlanActive?auth=apikey:YOUR_API_KEY"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "bool",
    "Value": false
  },
  "Error": null
}
```

Update account plan status by creating transaction using token.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/setAccountPlanActive`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
token | java.lang.String | Token to be used to create entry in transaction.
clientIp | java.lang.String | IP address of client.
email | java.lang.String | Email id to be used with transaction detail.

### SetSetupInfo

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetSetupInfo"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

Sets up information of account of user whose API key is in use.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetSetupInfo`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
setupInfo | java.lang.String | Set up information of account.

## App APIs

### CreateApp

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/CreateApp"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "AppInfo",
    "Value": {
      "APKFilename": null,
      "AccountId": 8428,
      "Active": false,
      "AppDomainId": "com.test.app",
      "AppId": 12,
      "AppName": "test",
      "CertificateCity": "city",
      "CertificateCountryCode": "IN",
      "CertificateDeprtment": "department",
      "CertificateOrganization": "org",
      "CertificateOwnerName": "ownername",
      "CertificateState": "state",
      "FacebookAppId": null,
      "LogoId": null,
      "MajorVersion": 1,
      "MinorVersion": 0,
      "PromoId": null,
      "SchoolFeaturesAllowed": false,
      "SplashLogoId": null,
      "SystemId": 1,
      "TinyHeaderLogoId": null
    }
  },
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AccountServer_InvalidCertificateCountryCode",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "Invalid certificate country code."
      },
      "ParameterName": "certificateCountryCode"
    }
  }
}
```

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AccountServer_InvalidCertificateState",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "Invalid certificate state."
      },
      "ParameterName": "certificateState"
    }
  }
}
```

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AccountServer_InvalidCertificateCity",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "Invalid certificate city."
      },
      "ParameterName": "certificateCity"
    }
  }
}
```

To create application with required parameter.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/CreateApp`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
domainId | java.lang.String | Application domain name.	
sourceAppId | int | Application source id to be used to create new application.
appName	| java.lang.String | Application name.
certificateOwnerName | java.lang.String | Certificate owner name.
certificateDeprtment | java.lang.String | Certificate department name.
certificateOrganization | java.lang.String | Certificate organization name.
certificateCity	| java.lang.String | Certificate city name.
certificateState | java.lang.String | Certificate state name.
certificateCountryCode | java.lang.String | Certificate country code.

### DeleteApp

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteApp"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AccountServer_InvalidAppId",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "Invalid app id."
      },
      "ParameterName": "appId"
    }
  }
}
```

To delete application with application id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteApp`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
appId | int | Application id to be deleted.	

### DeleteAppRelease

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteAppRelease"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AccountServer_InvalidAppId",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "Invalid app id."
      },
      "ParameterName": "appId"
    }
  }
}
```

To remove application release by application and release Id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteAppRelease`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
appId | int | Application Id.
appReleaseId | int | Application release Id.

### GetApp

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/GetApp"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "AppInfo",
    "Value": {
      "APKFilename": null,
      "AccountId": 8428,
      "Active": false,
      "AppDomainId": "com.testa.app",
      "AppId": 6,
      "AppName": "test",
      "CertificateCity": "qerg",
      "CertificateCountryCode": "BG",
      "CertificateDeprtment": "eqrg",
      "CertificateOrganization": "qerg",
      "CertificateOwnerName": "erg",
      "CertificateState": "qerg",
      "FacebookAppId": "fid",
      "LogoId": "test.app",
      "MajorVersion": 2,
      "MinorVersion": 1,
      "PromoId": "test.app",
      "SchoolFeaturesAllowed": false,
      "SplashLogoId": "test.app",
      "SystemId": 1,
      "TinyHeaderLogoId": "test.app"
    }
  },
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AccountServer_InvalidAppId",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "Invalid app id."
      },
      "ParameterName": "appId"
    }
  }
}
```

To retrieve application information.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/GetApp`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
appId | int | Application Id.

### GetAppConfig

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/GetAppConfig"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "string",
    "Value": "{abc}"
  },
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AccountServer_InvalidAppId",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "Invalid app id."
      },
      "ParameterName": "appId"
    }
  }
}
```

To retrieve application configuration.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/GetAppConfig`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
appId | int | Application Id.	

### GetAppReleases

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/GetAppReleases"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "AppReleaseInfoList",
    "Value": {
      "Releases": [
        1,
        {
          "AppId": 6,
          "AppReleaseId": 14,
          "MajorVersion": 1,
          "MinorVersion": 0,
          "Name": "qwe",
          "Path": null,
          "RemoteServerId": null,
          "Type": "android"
        }
      ]
    }
  },
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AccountServer_InvalidAppId",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "Invalid app id."
      },
      "ParameterName": "appId"
    }
  }
}
```

To get all application releases by application id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/GetAppReleases`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
appId | int | Application Id.

### GetApps

```shell
curl "https://portalchattest.com/APIGate/Account/AccountGlobal/GetApps?auth=apikey:YOUR_API_KEY"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "array",
    "ItemType": "AppInfo",
    "Depth": 1,
    "Value": [
      1,
      {
        "Type": "AppInfo",
        "Value": {
          "APKFilename": null,
          "AccountId": 8428,
          "Active": false,
          "AppDomainId": "com.testa.app",
          "AppId": 6,
          "AppName": "test",
          "CertificateCity": "qerg",
          "CertificateCountryCode": "BG",
          "CertificateDeprtment": "eqrg",
          "CertificateOrganization": "qerg",
          "CertificateOwnerName": "erg",
          "CertificateState": "qerg",
          "FacebookAppId": "fid",
          "LogoId": "test.app",
          "MajorVersion": 2,
          "MinorVersion": 1,
          "PromoId": "test.app",
          "SchoolFeaturesAllowed": false,
          "SplashLogoId": "test.app",
          "SystemId": 1,
          "TinyHeaderLogoId": "test.app"
        }
      }
    ]
  },
  "Error": null
}
```

To get all application associated with account id of user whose key is in use.

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/AccountGlobal/GetApps?auth=apikey:YOUR_API_KEY`

### SetAppConfig

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetAppConfig"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{"Result":null,"Error":
{
   "Type" : "InvalidParameterException",
   "Value" : {
      "Message" : {
         "StringType" : "Leaf",
         "Id" : "AccountServer_InvalidAppId",
         "Namespace" : "MasterServer.MasterServerStringTable",
         "Value" : "Invalid app id." },
      "ParameterName" : "appId" } }
}
```

To set application configuration by application Id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetAppConfig`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
appId | int | Application Id whose configuration to be set.	
config | java.lang.String | Configuration in json format.

### SetAppSettings

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetAppSettings"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "AppInfo",
    "Value": {
      "APKFilename": null,
      "AccountId": 8428,
      "Active": false,
      "AppDomainId": "com.testa.app",
      "AppId": 6,
      "AppName": "test",
      "CertificateCity": "qerg",
      "CertificateCountryCode": "BG",
      "CertificateDeprtment": "eqrg",
      "CertificateOrganization": "qerg",
      "CertificateOwnerName": "erg",
      "CertificateState": "qerg",
      "FacebookAppId": "fid",
      "LogoId": "test.app",
      "MajorVersion": 2,
      "MinorVersion": 1,
      "PromoId": "test.app",
      "SchoolFeaturesAllowed": false,
      "SplashLogoId": "test.app",
      "SystemId": 1,
      "TinyHeaderLogoId": "test.app"
    }
  },
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AccountServer_InvalidAppId",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "Invalid app id."
      },
      "ParameterName": "appId"
    }
  }
}
```

To update application setting by application Id and setting detail.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetAppSettings`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
appId | int | Application Id whose configuration to be set.
appName | java.lang.String | Application name to be set.
facebookAppId | java.lang.String | Associated facebook application Id.
logoId | java.lang.String | Application log path.
splashId | java.lang.String | Splash image path.
promoId | java.lang.String | Promo image path.
tinyHeaderLogoId | java.lang.String | Tiny header logo path.
majorVersion | int | Major version of application.
minorVersion | int | Minor version of application

## AuthenticationServer APIs

### UseCode

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/UseCode"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "AccountLoginInfo",
    "Value": {
      "Code": "abc",
      "TempCode": "r4ID2JdjTR-afwXG8X2D5Q==MS0xrypSYpSGXXYG6eM0wQ=="
    }
  },
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AuthenticationServer_InvalidAuthenticationCode",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "The supplied authentication code is invlaid or expired."
      },
      "ParameterName": "authenticationCode"
    }
  }
}
```

To login with authentication code and also returns temprory code which can be used for subsequent call.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/UseCode`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
code | java.lang.String | Authentication code.

## Promptchat APIs

### GetPromptchatAccountDomains

To retrieve prompt chat account domains by prompt chat account id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/GetPromptchatAccountDomains`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
promptchatAccountId | int | Prompt chat account id

### GetPromptchatAccounts

```shell
curl "https://portalchattest.com/APIGate/Account/AccountGlobal/GetPromptchatAccounts?auth=apikey:YOUR_API_KEY"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "array",
    "ItemType": "PromptchatAccountInfo",
    "Depth": 1,
    "Value": [
      1,
      {
        "Type": "PromptchatAccountInfo",
        "Value": {
          "Name": "A",
          "Password": null,
          "PromptchatAccountId": 8428,
          "PromptchatSubscriptionId": 1,
          "ServerAccountId": 8428
        }
      }
    ]
  },
  "Error": null
}
```

To retrieve associated prompt chat accounts with user's account.

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/AccountGlobal/GetPromptchatAccounts?auth=apikey:YOUR_API_KEY`

### GetPromptchatSubscriptions

```shell
curl "https://portalchattest.com/APIGate/Account/AccountGlobal/GetPromptchatSubscriptions?auth=apikey:YOUR_API_KEY"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "array",
    "ItemType": "PromptchatSubscriptionInfo",
    "Depth": 1,
    "Value": [
      1,
      {
        "Type": "PromptchatSubscriptionInfo",
        "Value": {
          "ActiveUntil": 99999999,
          "MaxAccounts": 1,
          "MaxDomains": 1,
          "MaximumOperators": 1,
          "Name": "M",
          "PromptchatSubscriptionId": 1,
          "TemplateAccountId": 1
        }
      }
    ]
  },
  "Error": null
}
```

To retrieve associated prompt chat subscriptions with user's account.

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/AccountGlobal/GetPromptchatSubscriptions?auth=apikey:YOUR_API_KEY`

### UpdatePromptchatAccount

To update name and password of prompt chat account. Password will be updated at prompt chat server.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/UpdatePromptchatAccount`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
promptchatAccountId | int | Prompt chat account id
name | java.lang.String | Account name
adminPassword | java.lang.String | Admin password

### RemovePromptchatAccount

To remove prompt chat account from prompt chat server.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/RemovePromptchatAccount`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
promptchatAccountId | int | Prompt chat account id

### RemovePromptchatAccountDomain

To remove prompt chat account domain from prompt chat server.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/RemovePromptchatAccountDomain`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
promptchatAccountId | int | Prompt chat account id
domain | java.lang.String | Domain name to be deleted

### SetPromptchatAccountAdminPassword

To set prompt chat account passwprd to prompt chat server.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetPromptchatAccountAdminPassword`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
promptchatAccountId | int | Prompt chat account id
adminPassword | java.lang.String | Password to be set

## Purchase-Payment APIs

### InitiateIdealPurchase

Third party integration for payment.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/InitiateIdealPurchase`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
amount | int | Amount to be paid.
vat | int | description
issuerId | java.lang.String | description

### InitiatePaypalPurchase

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/InitiatePaypalPurchase"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "PurchaseInfo",
    "Value": {
      "Amount": 10,
      "PaymnetUrl": null,
      "PurchaseId": "GhAwzaaCVMc="
    }
  },
  "Error": null
}
```

To send paypal payment request which return Amount, paymentUrl and Purchase Id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/InitiatePaypalPurchase`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
amount | int | Amount to be paid.

### InitiateStripePurchase

To send stripe payment request. Unable to run in local.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/InitiateStripePurchase`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
tokenid | java.lang.String | Stripe token to initiate payment
amount | int | Amount to be paid

### PurchaseDomain

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/PurchaseDomain"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "NotAllowedException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "SystemGlobalObject_TheDomainIsInUse",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "The domain is already in use."
      }
    }
  }
}
```

To purchase new domain. This will debit amount from wallet.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/PurchaseDomain`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
domainEnd | java.lang.String | Domain name
months | int | Duration of activation in months
amount | int | Amount to be charged

### PurchaseDomainExtension

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/PurchaseDomainExtension"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InternalServerError",
    "Value": {
    }
  }
}
```

To extend existing domain. This will debit amount from wallet.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/PurchaseDomainExtension`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
domainLicenseId | int | License id of domain
months | int | Duration of activation in months
amount | int | Amount to be charged

### PurchasePremium

To extend existing domain. This will debit amount from wallet.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/PurchasePremium`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
months | int | Duration of activation in months
amount | int | Amount to be charged

### UpdateIdealTransactionStatus

To update status of partial transaction.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/UpdateIdealTransactionStatus`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
purchaseId | java.lang.String | Purchase id received from payment partner.

## User APIs

Description

### ActivateAccount

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ActivateAccount"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "NotAllowedException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AuthenticationServer_AlreadyAuthenticated",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "The user is already authenticated."
      }
    }
  }
}
```

To activate inactivated user by activation code.  

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ActivateAccount`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
activationCode | java.lang.String | Activation code associated with user to be activated.

### AuthWithAPIKey

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/AuthWithAPIKey"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "NotAllowedException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AuthenticationServer_AlreadyAuthenticated",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "The user is already authenticated."
      }
    }
  }
}
```

To validate authentication key. Similar to login for API.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/AuthWithAPIKey`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
apiKey | java.lang.String | API key to be validated

### BuildApp

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/BuildApp"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AccountServer_InvalidAppId",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "Invalid app id."
      },
      "ParameterName": "appId"
    }
  }
}
```

To update app details by app Id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/BuildApp`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
appId | int | Application ID stored in database
type | java.lang.String | Application type
name | java.lang.String | Application name
majorVersion | int | Major version of application
minorVersion | int | Minor version of application

### ChangePassword

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ChangePassword?auth=apikey:YOUR_API_KEY&oldPassword=PARAMETER_VALUE&newPassword=PARAMETER_VALUE"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidCredentialsException",
    "Value": {
    }
  }
}
```

To change password of account user whose API key is in use.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ChangePassword?auth=apikey:YOUR_API_KEY&oldPassword=PARAMETER_VALUE&newPassword=PARAMETER_VALUE`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
oldPassword | java.lang.String | Old md5 password	
newPassword | java.lang.String | New md5 password

### ChangeUsername

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ChangeUsername?auth=apikey:YOUR_API_KEY&newUsername=PARAMETER_VALUE"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AuthenticationServer_DuplicateUsername",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "The username is already in use by another user account."
      },
      "ParameterName": "nickname"
    }
  }
}
```

To change username of account user whose API key is in use.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ChangeUsername`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
newUsername | java.lang.String | New user name to be replaced with existing one.

### CreateUser

To create user.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/CreateUser`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
accountCreationInfo | MasterServer.AccountObjects.Interface.AccountUserCreationInfo | object

### ClearAPIKey

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ClearAPIKey"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

To remove api key.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ClearAPIKey`

### DeleteCurrentUser

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteCurrentUser"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

To delete account user whose API key is in use.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteCurrentUser`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
password | java.lang.String | MD5 password.

### DeleteUser

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteUser"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "SystemGlobalObject_InvalidUserId",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "The supplied user id is invalid."
      },
      "ParameterName": "userId"
    }
  }
}
```

To delete user by providing userId.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/DeleteUser`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
userId | int | User id to e deleted.

### GetAPIKey

```shell
curl "https://portalchattest.com/APIGate/Account/AccountGlobal/GetAPIKey?auth=apikey:YOUR_API_KEY"
```

> The above command returns JSON structured like this:

```json

{
  "Result": {
    "Type": "string",
    "Value": "YOUR_API_KEY"
  },
  "Error": null
}

```

To retrieve API key of User.

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/AccountGlobal/GetAPIKey?auth=apikey:YOUR_API_KEY`

### GetAllIdealIssuers

Returns all ideal users

##### HTTP Request
`GET https://server.portal.chat/APIGate/Account/AccountGlobal/GetAllIdealIssuers`

### Login

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/Login"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "NotAllowedException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AuthenticationServer_AlreadyAuthenticated",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "The user is already authenticated."
      }
    }
  }
}
```

To login into system

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/Login`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
systemName | java.lang.String | System name for user
accountName | java.lang.String | Account name for user
emailOrNickname | java.lang.String | Email id or username
passwordMd5 | java.lang.String | Password in md5 form
rememberMe | boolean | Flag which used whether to authenticate user for new session

### LoginWithDeviceToken

To login with device token.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/LoginWithDeviceToken`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
systemName | java.lang.String | System name for user
accountName | java.lang.String | Account name for user
emailOrNickname | java.lang.String | Email id or username
passwordMd5 | java.lang.String | Password in md5 form
rememberMe | boolean | Flag which used whether to authenticate user for new session
deviceToken | java.lang.String | Device token stored with user detail
deviceType | java.lang.String | Device type

### LoginWithZimmoCode

Third party integration using Zimmo Code.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/LoginWithZimmoCode`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
code | java.lang.String | Zimmo code
domain | java.lang.String | Domain

### Logout

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/Logout"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

Logs out user which api key is in use.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/Logout`

### LogoutWithDeviceToken

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/LogoutWithDeviceToken"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

Logs out user associated with device token.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/LogoutWithDeviceToken`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
deviceToken | java.lang.String | Device token stored with user detail.

### ResetUserPassword

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ResetUserPassword"
```

> The above command returns JSON structured like this:

> Success: Returns passcode which can be used to reset password.

```json
{
  "Result": {
    "Type": "string",
    "Value": "999999"
  },
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AuthenticationServer_DuplicateUsername",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "The username is already in use by another user account."
      },
      "ParameterName": "nickname"
    }
  }
}
```

Reset user password. Returns passcode which can be used to reset password.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ResetUserPassword`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
userId | int | UserId of user whose password to be reset.

### ResumeUser

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ResumeUser"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{"Result":null,"Error":
{
   "Type" : "InvalidParameterException",
   "Value" : {
      "Message" : {
         "StringType" : "Leaf",
         "Id" : "SystemGlobalObject_InvalidUserId",
         "Namespace" : "MasterServer.MasterServerStringTable",
         "Value" : "The supplied user id is invalid." },
      "ParameterName" : "userId" } }
}
```

To resume user who is suspended.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ResumeUser`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
userId | int | UserId of user who needs to be resumed

### RequestForgottenForAllPassword

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/RequestForgottenForAllPassword"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "NotAllowedException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AuthenticationServer_AlreadyAuthenticated",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "The user is already authenticated."
      }
    }
  }
}
```

To reset all password of users of any account associated with email id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/RequestForgottenForAllPassword`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
systemName | java.lang.String | System name of user whose key in use
email | java.lang.String | Email id by which users to be retrieved

### RequestForgottenPassword

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/RequestForgottenPassword"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "NotAllowedException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AuthenticationServer_AlreadyAuthenticated",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "The user is already authenticated."
      }
    }
  }
}
```

To reset password of user associated with email id and accont id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/RequestForgottenPassword`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
systemName | java.lang.String | System name of user whose key in use
accountName | java.lang.String | Account name of user whose password to be reset
email | java.lang.String | Email id by which users to be retrieved to reset password

### ResetAPIKey

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/ResetAPIKey"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "string",
    "Value": "YOUR_NEW_API_KEY"
  },
  "Error": null
}
```

To remove existing key and generate new key.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/ResetAPIKey`

### SetUserEmail

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetUserEmail"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "SystemGlobalObject_InvalidUserId",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "The supplied user id is invalid."
      },
      "ParameterName": "userId"
    }
  }
}
```

Sets user's email address.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetUserEmail`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
userId | int | User id whose email is to be set
email | java.lang.String | New email id to be set

### SuspendUser

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SuspendUser"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "InvalidParameterException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "SystemGlobalObject_InvalidUserId",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "The supplied user id is invalid."
      },
      "ParameterName": "userId"
    }
  }
}
```

To suspend user using user id

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SuspendUser`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
userId | int | User id to be suspended

### SetForgottenPassword

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetForgottenPassword"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

> Failure:

```json
{
  "Result": null,
  "Error": {
    "Type": "NotAllowedException",
    "Value": {
      "Message": {
        "StringType": "Leaf",
        "Id": "AuthenticationServer_InvalidForgottenPasswordCode",
        "Namespace": "MasterServer.MasterServerStringTable",
        "Value": "The supplied reset password code is invalid or expired."
      }
    }
  }
}
```

Set new password using password received in reset password.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetForgottenPassword`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
forgottenPasswordCode | java.lang.String | Password received with reset password
newPassword | java.lang.String | New password to set

### SetDeviceToken

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SetDeviceToken"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

To set device token for user whose API key is in use.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SetDeviceToken`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
deviceToken | java.lang.String | Device token to be set for user

### SwitchMaster

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SwitchMaster"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

To switch user to master user.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SwitchMaster`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
userId | java.lang.String | Userid to be switched to master

### UploadGenericImage

This is a Form method. Api call not supported.

##### HTTP Request
`GET https://server.portal.chat/APIGate/Account/AccountGlobal/UploadGenericImage`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
imageParameterName | java.lang.String | Parameter's name
width | int | width of the image
height | int | height of the image
format | java.lang.String | format of the image

### UploadTempImage

This is a Form method. Api call not supported.

##### HTTP Request
`GET https://server.portal.chat/APIGate/Account/AccountGlobal/UploadTempImage`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
imageParameterName | java.lang.String | Image parameter name

## Visitor APIs

### SaveOfflineVisitor

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SaveOfflineVisitor"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

Save visitor information for visitor page.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SaveOfflineVisitor`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
email | java.lang.String | Visitor's email id
accountId | int | AccountId of user
chatId | int | Chat id of visitor's chat

### SearchOfflineVisitors

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SearchOfflineVisitors"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "array",
    "ItemType": "OfflineVisitor",
    "Depth": 1,
    "Value": [
      2,
      {
        "Type": "OfflineVisitor",
        "Value": {
          "account_id": "8428",
          "agegroup": "",
          "chat_id": "260",
          "createdate": "11-03-2019 22:03:30",
          "email": "a@b.com",
          "facebook": "",
          "linkedin": "",
          "location": "",
          "name": "AB",
          "offline_visitor_id": 146,
          "phoneno": "",
          "profilepic": "",
          "twitter": "",
          "visit": "",
          "website": ""
        }
      },
      {
        "Type": "OfflineVisitor",
        "Value": {
          "account_id": "8428",
          "agegroup": "",
          "chat_id": "261",
          "createdate": "11-03-2019 22:03:45",
          "email": "a@b.com",
          "facebook": "",
          "linkedin": "",
          "location": "a@b.com",
          "name": "",
          "offline_visitor_id": 147,
          "phoneno": "8428",
          "profilepic": "",
          "twitter": "",
          "visit": "",
          "website": ""
        }
      }
    ]
  },
  "Error": null
}
```

Search visitors by date range and email filter.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SearchOfflineVisitors`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
filter | java.lang.String | Unused field
frmDt | java.lang.String | From date in format YYYY-MM-DD
toDt | java.lang.String | To date in format YYYY-MM-DD
email | java.lang.String | Email id to be filtered

### SearchOfflineVisitorsEmail

```shell
curl "https://server.portal.chat/APIGate/Account/AccountGlobal/SearchOfflineVisitorsEmail"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "array",
    "ItemType": "OfflineVisitor",
    "Depth": 1,
    "Value": [
      0
    ]
  },
  "Error": null
}
```

Search visitors by date and email filter.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/AccountGlobal/SearchOfflineVisitorsEmail`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
filter | java.lang.String | Unused field
dt | java.lang.String | Date in format YYYY-MM-DD
email | java.lang.String | Email id to be filtered

### getOfflineVisitorsByAccountChat

```shell
curl "https://portalchattest.com/APIGate/Account/AccountGlobal/getOfflineVisitorsByAccountChat?auth=apikey:YOUR_API_KEY"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "OfflineVisitor",
    "Value": {
      "account_id": "8428",
      "agegroup": "agegroup",
      "chat_id": "287",
      "createdate": "12-03-2019 23:03:11",
      "email": "r@g.com",
      "facebook": "face",
      "linkedin": "linked",
      "location": "location",
      "name": "RG",
      "offline_visitor_id": 161,
      "phoneno": "99",
      "profilepic": "profile",
      "twitter": "twitter",
      "visit": "",
      "website": "web"
    }
  },
  "Error": null
}
```

To search visitor by chat id.

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/AccountGlobal/getOfflineVisitorsByAccountChat?auth=apikey:YOUR_API_KEY`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatId | int | Chat id generated by system.	

# ChatOperator

This is ChatOperator API type. Here, you will find all APIs in this type.

## ChatBox APIs

### AddChatBox

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/AddChatBox"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

To create chatbox from existing chat box.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/AddChatBox`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
sourceChatBoxId | int | Source chat box id to be used to create new chat box.

### RemoveChatBox

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/RemoveChatBox"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

To remove chat box with chat box id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/RemoveChatBox`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatBoxId | int | Chat box id to be removed.

## Chat-Bot APIs

### GetBotAllowed

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetBotAllowed?auth=apikey:YOUR_API_KEY"
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

Retrive whether bot is allowed with account or not.

##### HTTP Request
`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetBotAllowed?auth=apikey:YOUR_API_KEY`

### GetBotConfigured

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetBotConfigured?auth=apikey:YOUR_API_KEY"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "bool",
    "Value": false
  },
  "Error": null
}
```

Retrieve whether bot is configured with account or not

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetBotConfigured?auth=apikey:YOUR_API_KEY`

### SetBotAllowed

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetBotAllowed"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

To enable or disable bot for account.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetBotAllowed`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
botAllowed | boolean | Set boolean to enable or disable bot.

### SetChatBotRequest

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetChatBotRequest"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

To Send chat bot enable request to administrator.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetChatBotRequest`

## Taxonomy APIs

### AddTaxonomy

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/AddTaxonomy"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "int",
    "Value": 7
  },
  "Error": null
}
```

To add new taxonomy.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/AddTaxonomy`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
name | java.lang.String | Taxonomy name.
required | boolean | It is required or not.

### AddTaxonomyItem

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/AddTaxonomyItem"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "int",
    "Value": 1
  },
  "Error": null
}
```

To add taxonomy items.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/AddTaxonomyItem`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
taxonomyId | int | Taxonomy id to be created
parentItemId | int | Patent taxonomy id
name | java.lang.String | Taxonomy name
allowSelection | boolean | Flag whether selection on item is allowed
forbidTrasncriptEmail | boolean | Flag to forbid transcript mail
markAsProcessed | boolean | Flag whether Taxonomy is marked as processed or not

### RemoveTaxonomy

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/RemoveTaxonomy"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "bool",
    "Value": true
  },
  "Error": null
}
```

> Failure:

```json
{
  "Result": {
    "Type": "bool",
    "Value": false
  },
  "Error": null
}
```

To soft delete Taxonomy from database.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/RemoveTaxonomy`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
id | int | Taxonomy ID to be removed

### RemoveTaxonomyItem

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/RemoveTaxonomyItem"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "bool",
    "Value": true
  },
  "Error": null
}
```

> Failure:

```json
{
  "Result": {
    "Type": "bool",
    "Value": false
  },
  "Error": null
}
```

To remove Taxonomy item by Taxonomy item id and parent Taxonomy id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/RemoveTaxonomyItem`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
taxonomyId | int | Parent Taxonomy id
id | int | Taxonomy item id

### SetTaxonomyValue

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetTaxonomyValue"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

Sets taxonomy value

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetTaxonomyValue`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatId | java.lang.String | Chat id
taxonomyId | int | Taxonomy id
itemId | int | Taxonomy item id

### UpdateTaxonomy

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/UpdateTaxonomy"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

To update existing Taxonomy.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/UpdateTaxonomy`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
taxonomyId	 | int | Taxonomy id to be updated.
name | java.lang.String | Taxonomy name to be updated.
required | boolean | Required flag.

### UpdateTaxonomyItem

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/UpdateTaxonomyItem"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

To update existing Taxonomy item.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/UpdateTaxonomyItem`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
taxonomyId | int | Parent Taxonomy id.
itemId | int | Taxonomy Item id.
name | java.lang.String | Taxonomy name.
allowSelection | boolean | Flag whether selection on item is allowed.
forbidTrasncriptEmail | boolean | Flag to forbid transcript mail.
markAsProcessed | boolean | Flag whether Taxonomy is marked as processed or not.

## Chat APIs

### AddOperatorToChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/AddOperatorToChat"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

To Add operator to chat.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/AddOperatorToChat`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatId | java.lang.String | Current chat id.
operatorId | java.lang.String | Operator id to be added to chat.

### ExportChats

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/ExportChats"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "string",
    "Value": "https://server.portal.chat/Resource/Statistics/Export_localhost_1969-11-31_180010_-_1969-11-31_180011.zip"
  },
  "Error": null
}
```

Export chats as zip file with time filter.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/ExportChats`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
fromTime | int | From time
toTime | int | To time

### FindChats

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/FindChats"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "ChatInfoList",
    "Value": {
      "Chats": [
        0
      ]
    }
  },
  "Error": null
}
```

Get chats with different filter.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/FindChats`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
fromTime | int | From time
toTime | int | To time
operatorId | int | Operator id
requestedByVisitor | int | 0 or 1 whether requested by visitor
autoOpened | int | 0 or 1 whether started automatically
isTwoWayConnected | int | 0 or 1 whether two way connected
isTwoWayChat | int | 0 or 1 whether two way chat
processed | int | 0 or 1 whether processed or not

### GetHistoryChatDetails

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetHistoryChatDetails"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "ChatDetailedInfo",
    "Value": {
      "ChatAccountId": "0",
      "ChatId": "290",
      "FirstOperatorJoinTime": 0,
      "FirstOperatorMessageTime": 0,
      "InitialOperatorWait": 0,
      "InitialVisitorWait": 0,
      "InitiatingVisitId": 0,
      "LastCommunicationTime": 0,
      "LongestOperatorWait": 0,
      "LongestVisitorWait": 0,
      "Messages": [
        0
      ],
      "Processed": false,
      "StartedTime": 1552673023,
      "TaxonomyString": null,
      "Visit": {
        "Type": "null"
      }
    }
  },
  "Error": null
}
```

To chat details by chat id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetHistoryChatDetails`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatId | java.lang.String | Current chat id.

### GetPossibleOperators

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetPossibleOperators"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "PossibleOperatorsList",
    "Value": {
      "Accounts": [
        1,
        {
          "AccountName": "localhost",
          "Operators": [
            3,
            {
              "AlreadyInTheChat": true,
              "Avatar": "http://localhost:8080/ChatBox/Operator0.jpg",
              "IsAvailable": true,
              "IsOnline": true,
              "IsResponding": true,
              "Nickname": {
                "StringType": "Invariant",
                "Value": "admin"
              },
              "OperatorId": "127",
              "RegisteredDeviceCount": 1
            },
            {
              "AlreadyInTheChat": true,
              "Avatar": "http://localhost:8080/AppResource/Repository/DmNl_l6OQf6fDrsQhkqmDA==EzJRsQETm21x_8IbGUSoSQ==.jpg",
              "IsAvailable": true,
              "IsOnline": false,
              "IsResponding": false,
              "Nickname": {
                "StringType": "Invariant",
                "Value": "hitesh"
              },
              "OperatorId": "128",
              "RegisteredDeviceCount": 0
            },
            {
              "AlreadyInTheChat": false,
              "Avatar": "http://localhost:8080/ChatBox/Operator0.jpg",
              "IsAvailable": false,
              "IsOnline": false,
              "IsResponding": false,
              "Nickname": {
                "StringType": "Invariant",
                "Value": "root"
              },
              "OperatorId": "130",
              "RegisteredDeviceCount": 0
            }
          ]
        }
      ]
    }
  },
  "Error": null
}
```

To retrieve all possible operators associated with account with details.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetPossibleOperators`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatId | java.lang.String | Current chat id

### GetRelatedHistoryChats

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetRelatedHistoryChats"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "ChatInfoList",
    "Value": {
      "Chats": [
        0
      ]
    }
  },
  "Error": null
}
```

Retrieve all chats related to chat account id and visitor id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetRelatedHistoryChats`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatId | java.lang.String | Current chat id
chatAccountChatVisitorId | java.lang.String | Combination of account chat id and visitor id

### GetCustomInfoVariations

Not available.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetCustomInfoVariations`

##### Query Parameters
Para
meter | Type | Description
--------- | ---- | -----------
chatAccountChatVisitorId | java.lang.String | Combination of account id and chat visitor id.

### InitChat

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/InitChat?auth=apikey:YOUR_API_KEY"
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

To initialize new chat. Returns active operator id.

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/InitChat?auth=apikey:YOUR_API_KEY`

### JoinChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/JoinChat"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

Logged in user can join chat with this method.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/JoinChat`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatId | java.lang.String | Chat id where to join chat.

### LeaveChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/LeaveChat"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

Logged in user can leave joined chat.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/LeaveChat`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatId | java.lang.String | Current chat id.

### RemoveOperatorFromChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/RemoveOperatorFromChat"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

To remove operator from chat.

##### HTTP Request
`GET https://server.portal.chat/APIGate/Account/ChatOperator/RemoveOperatorFromChat`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatId | java.lang.String | Current chat id.
operatorId | java.lang.String | Operator id to be removed from chat.

### StartChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/StartChat"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

To start new chat with visitor id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/StartChat`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatAccountChatVisitorId | java.lang.String | Combination of account id and visitor id.

### StartOperatorChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/StartOperatorChat"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": {
    "Type": "string",
    "Value": "291"
  },
  "Error": null
}
```

To launch chat with operator.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/StartOperatorChat`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
operatorId | java.lang.String | Operator id to be added to chat.
relatedChatId | java.lang.String | Current chat id.

### StopBoradcasting

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/StopBoradcasting"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

Stop broadcasting for current user.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/StopBoradcasting`

### StopChat

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/StopChat"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

Stop chat for current user.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/StopChat`

### SetChatProcessed

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetChatProcessed"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

Sets chat is processed or not.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetChatProcessed`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatId | java.lang.String | Current chat id.
processed | boolean | Flag to set chat processed or not.

### SetBoradcasting

Not available, Cannot pass object in GET

##### Sample Request


`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetBoradcasting`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
broadcastSettings | Chat.ChatOperatorObjects.Interface.BroadcastSettings | object

### SendMessage

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SendMessage"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

To send message to visitor in chat.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SendMessage`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatId | java.lang.String | Current chat id.
message | java.lang.String | Message text.

### SetSeenMessageCount

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetSeenMessageCount"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

Sets seen message count for chat and logged in user.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetSeenMessageCount`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatId | java.lang.String | Current chat id.
count | int | Message count.

### SetIsAvailable

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetIsAvailable"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

To set available status of logged in user.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetIsAvailable`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
isAvailable | boolean | Flag for user is available for chat or not.

### SetCustomInfo

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetCustomInfo"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

Sets visitor custom information.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetCustomInfo`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatAccountChatVisitorId | java.lang.String | Combination of account id and chat visitor id.
hostId | int | Host id.
tokenId | int | Token id.
name | java.lang.String | Visitor name
contacts | java.lang.String | Visitor contact.
details | java.lang.String | Visitor other details.

### UpdateChatBox

Not Available. Can not pass object in get.

##### Sample URL

`https://server.portal.chat/APIGate/Account/ChatOperator/UpdateChatBox`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatbox | Chat.Data.IChatBox | IChatBox object
onlineButton | Chat.Data.IChatBoxFloatingButton | IChatBoxFloatingButton object
offlineButton | Chat.Data.IChatBoxFloatingButton | IChatBoxFloatingButton object

## SubAccount APIs

### AddSubAccount

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/AddSubAccount"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

Add sub account to existing account.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/AddSubAccount`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
name | java.lang.String | New account name.
identifier | java.lang.String | Account identifier
masterUsername | java.lang.String | Master user name
masterEmail | java.lang.String | Master user email
password | java.lang.String | Master user password
sendNotificationEmail | boolean | Flag whether send notification to user or not
autoGeneratePassword | boolean | Generate password automatically or consider user's password

### FindSubAccount

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/FindSubAccount"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "SubAccountList",
    "Value": {
      "SubAccounts": [
        2,
        {
          "AccountId": 8430,
          "ChatAccountId": 8363,
          "Identifier": "test",
          "IsSuspended": false,
          "MasterUsername": "test",
          "Name": "test"
        },
        {
          "AccountId": 8431,
          "ChatAccountId": 8364,
          "Identifier": "test2",
          "IsSuspended": false,
          "MasterUsername": "test",
          "Name": "test2"
        }
      ],
      "TotalCount": 2
    }
  },
  "Error": null
}
```

Find subaccount by text filter.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/FindSubAccount`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
filter | java.lang.String | Filter text which works on name and identifier to retrieve matched accounts.

### DeleteSubAccount

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/DeleteSubAccount"
```

> The above command returns JSON structured like this:

> Success:

```json
{
  "Result": null,
  "Error": null
}
```

Delete sub account by account id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/DeleteSubAccount`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatAccountId | int | Sub account id to be deleted.

### ResetSubAccountMasterPassword

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/ResetSubAccountMasterPassword"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "string",
    "Value": "348908"
  },
  "Error": null
}
```

Reset account's master user password.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/ResetSubAccountMasterPassword`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatAccountId | int | Sub account id.

### SetSubAccountState

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetSubAccountState"
```

> The above command returns JSON structured like this:

> Success

```json
{
  "Result": null,
  "Error": null
}
```

Change account state to suspended or not suspended.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetSubAccountState`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatAccountId | int | Chat account id.
identifier | java.lang.String | Account identifier.
suspended | boolean | Flag whether to suspend account or not.


## Endpoint APIs

### ConnectEndpoint

Not available

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/ConnectEndpoint`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
objectId | java.lang.String | description
endPointId | java.lang.String | description
sdp | java.lang.String | description

### DisconnectEndpoint

Not available

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/DisconnectEndpoint`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
objectId | java.lang.String | description
endPointId | java.lang.String | description


## Import - Export APIs

### ExportAccountCSV

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/ExportAccountCSV?auth=apikey:YOUR_API_KEY"
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

Returns download url of exported csv file of accounts.

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/ExportAccountCSV?auth=apikey:YOUR_API_KEY`

### GetExportConfig

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetExportConfig?auth=apikey:YOUR_API_KEY"
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

Get export configuration.

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetExportConfig?auth=apikey:YOUR_API_KEY`

### GetShortStatistics

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetShortStatistics"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "ShortStatisticsBundle",
    "Value": {
      "PreviousPeriod": {
        "Type": "ShortStatistics",
        "Value": {
          "BestTopics": [
            0
          ],
          "FromDayIndex": 0,
          "RealChats24Hours": [24, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
          "ToDayIndex": 0,
          "TotalChats24Hours": [24, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
          "Visits24Hours": [24, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
        }
      },
      "PreviousRelatedPeriod": {
        "Type": "ShortStatistics",
        "Value": {
          "BestTopics": [
            0
          ],
          "FromDayIndex": -6,
          "RealChats24Hours": [24, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
          "ToDayIndex": -6,
          "TotalChats24Hours": [24, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
          "Visits24Hours": [24, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
        }
      },
      "PrimaryPeriod": {
        "Type": "ShortStatistics",
        "Value": {
          "BestTopics": [
            0
          ],
          "FromDayIndex": 1,
          "RealChats24Hours": [24, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
          "ToDayIndex": 1,
          "TotalChats24Hours": [24, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
          "Visits24Hours": [24, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
        }
      }
    }
  },
  "Error": null
}
```

Get overall statistcs.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetShortStatistics`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
fromDayIndex | int | From day.
toDayIndex	 | int | To day.
filter | java.lang.String | Filter text.
sortMode | int | sorting mode

### PrepareStatisticsExport

Can not pass object in get request. Not available.

##### Sample URL

`https://server.portal.chat/APIGate/Account/ChatOperator/PrepareStatisticsExport`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
exportSetConfig | java.lang.String | description
periods | Chat.ChatOperatorObjects.Interface.StatisticsPeriodList | description

### PrepareYearStatisticsExport

Generate statastics report for year.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/PrepareYearStatisticsExport`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
exportSetConfig | java.lang.String | XML configuration file for export file.
year | int | Year for which statastics to be retrieved.

### SetExportConfig

Set export configurations

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetExportConfig`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
exportConfig | Chat.ChatOperatorObjects.Interface.ExportConfig | XML configuration file

### UploadAccountCSV

Can not pass file data in get request. Not available.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/UploadAccountCSV`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
fileParameterName | java.lang.String | description


## Facebook Account APIs

### GetFacebookAccount
```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetFacebookAcccount"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "array",
    "ItemType": "object",
    "Depth": 1,
    "Value": [
      2,
      {
        "Type": "bool",
        "Value": true
      },
      {
        "Type": "string",
        "Value": "fb url"
      }
    ]
  },
  "Error": null
}
```

Get facebook account details for logged in user.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetFacebookAcccount`


### SetFacebookAccount

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetFacebookAccount"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

Set facebook account configuration.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetFacebookAccount`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
isAllowed | Boolean | Flag whether chat through FB is allowed or not.
url | java.lang.String | Facebook url configured for chat.


## Reports APIs

### GetDoubleStatisticsData

Description not available

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetDoubleStatisticsData`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
index | int | description
count	 | int | description
valueId | java.lang.String | description
operatorId | java.lang.String | description
aggregationMode | java.lang.String | description

### GetHistogramStatisticsData

Description not available

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetHistogramStatisticsData`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
index | int | description
count | int | description
valueId | java.lang.String | description
operatorId | java.lang.String | description
aggregationMode | java.lang.String | description


## Settings APIs

### ChangeOperatorSettings

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/ChangeOperatorSettings"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

To update operator setting.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/ChangeOperatorSettings`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
nickname | java.lang.String | Nick name of user.
phoneNumber | java.lang.String | Phone number of operator.
allowPhoneChat | boolean | Flag whether phone chat allowed or not.
avatarPath | java.lang.String | Avatar image path
transcriptEmail | java.lang.String | Transcript email.
notifyForPickedChat | boolean | Flag whether get notification on picked up chat.

### GetAvailableTimeZones

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetAvailableTimeZones?auth=apikey:YOUR_API_KEY"
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

Returns all available timezones.

##### HTTP Request
`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetAvailableTimeZones?auth=apikey:YOUR_API_KEY`

## ServiceEntity APIs

### AddCannedMessage

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/AddCannedMessage"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "int",
    "Value": 2
  },
  "Error": null
}
```

Add canned message.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/AddCannedMessage`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
message | java.lang.String | Message to be added.

### GetCurrentServiceEntitiyInfo

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetCurrentServiceEntitiyInfo?auth=apikey:YOUR_API_KEY"
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

Returns current service entity information as json.

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetCurrentServiceEntitiyInfo?auth=apikey:YOUR_API_KEY`

### GetServiceEntityInfo

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetServiceEntityInfo?auth=apikey:YOUR_API_KEY"
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
      "TranscriptEMail": "admin@localhost.com"
    }
  },
  "Error": null
}
```

Returns service entity information.

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetServiceEntityInfo?auth=apikey:YOUR_API_KEY`

### GetAvailableStatisticsValues

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetAvailableStatisticsValues"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "StatisticsValueInfoList",
    "Value": {
      "StatisticsValueInfos": [
        56,
        {
          "Id": "ConnectedVisitors",
          "Method": "GetDoubleStatisticsData",
          "Type": "DoubleSumStatistics"
        },
        {
          "Id": "VisitorArrives",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "VisitorChatRequests",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "ProactiveRequests",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "OnlyOwnProactiveRequests",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "AutoOpens",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "PickedAutoOpens",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "AnsweredAutoOpens",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "OnlyOwnAnsweredAutoOpens",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "AnsweredVisitorChatRequests",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "OnlyOwnAnsweredVisitorChatRequests",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "PickedProactiveRequests",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "OnlyOwnPickedProactiveRequests",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "UnansweredVisitorChatRequests",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "UnansweredPickedAutoOpens",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "NotPickedAutoOpens",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "NotPickedProactiveRequests",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "OnlyOwnNotPickedProactiveRequests",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "Chats",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "RealChats",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "InitialVisitorWait",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "InitialOperatorWait",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "InitialVisitorWaitRealChats",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "InitialVisitorWaitNotRealChats",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "InitialVisitorWaitNotConnected",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "RealChatLength",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "RealChatsEndedByVisitor",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "RealChatVisitorWait",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "RealChatOperatorWait",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "RealChatMessages",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "RealChatCharacters",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "RealChatOperatorMessages",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "RealChatOperatorCharacters",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "RealChatVisitorMessages",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "RealChatVisitorCharacters",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnChats",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "OnlyOwnRealChats",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "OnlyOwnInitialVisitorWait",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnInitialOperatorWait",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnInitialVisitorWaitRealChats",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnInitialVisitorWaitNotRealChats",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnInitialVisitorWaitNotConnected",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnRealChatLength",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnRealChatsEndedByVisitor",
          "Method": "GetIntegerStatisticsData",
          "Type": "IntegerSumStatistics"
        },
        {
          "Id": "OnlyOwnRealChatVisitorWait",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnRealChatOperatorWait",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnRealChatMessages",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnRealChatCharacters",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnRealChatOperatorMessages",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnRealChatOperatorCharacters",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnRealChatVisitorMessages",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "OnlyOwnRealChatVisitorCharacters",
          "Method": "GetHistorgramStatisticsData",
          "Type": "DoubleDistributionStatistics"
        },
        {
          "Id": "ActiveChats",
          "Method": "GetDoubleStatisticsData",
          "Type": "DoubleSumStatistics"
        },
        {
          "Id": "ActiveRealChats",
          "Method": "GetDoubleStatisticsData",
          "Type": "DoubleSumStatistics"
        },
        {
          "Id": "OnlyOwnActiveChats",
          "Method": "GetDoubleStatisticsData",
          "Type": "DoubleSumStatistics"
        },
        {
          "Id": "OnlyOwnActiveRealChats",
          "Method": "GetDoubleStatisticsData",
          "Type": "DoubleSumStatistics"
        }
      ]
    }
  },
  "Error": null
}
```

To retrieve all possible statistics values.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetAvailableStatisticsValues`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
forOperator | boolean| description

### GetIntegerStatisticsData

Not available.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetIntegerStatisticsData`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
index | int | description
count | int | description
valueId | java.lang.String | description
operatorId | java.lang.String | description
aggregationMode | java.lang.String | description

### RemoveCannedMessage

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/RemoveCannedMessage"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

Remove canned message by message id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/RemoveCannedMessage`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
cannedMessageId | int | Canned message id.

### SetAutoFallbackDelay

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetAutoFallbackDelay"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

Sets auto fallback delay.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetAutoFallbackDelay`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
autoFallbackDelay | int | Flag to set auto fallback delay.

### SetIsAutoFallbackOn

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetIsAutoFallbackOn"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

Sets auto fallback.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetIsAutoFallbackOn`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
isAutoFallbackOn | boolean | Flag to set auto fallback.

### SetIsFallbackOn

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetIsFallbackOn"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

To set fallback.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetIsFallbackOn`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
isFallbackOn | boolean | Flag to set fallback.

### SetServiceEntityInfo

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetServiceEntityInfo"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

To set service entity information.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetServiceEntityInfo`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
serviceEntityInfo | java.lang.String | Service entity information.
transcriptEMail | java.lang.String | Transcript email.
alarmPhone | java.lang.String | Alarm phone.
allowSubAccountAvailability	| boolean | Flag whether allow sub account or not
allowSubChatBoxConfiguration | boolean | Flag whether allow sub chat box configuration
allowSubRequestHandling	| boolean | Flag whether allo sub request handling
timeZone | java.lang.String | Timezone
nonPrimaryEntityDelay | int | Flag whether non primary entity delay or not
preassignOperators | boolean | Flag whether preassign operators or not
preassignmentDuration | int | Pre assignment duration
preassignmentsBeforeGlobalAssignment | int | Flag whether Pre assign before global assignment 


## ChatAccount APIs

### GetForbiddenIdentifiers

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetForbiddenIdentifiers?auth=apikey:YOUR_API_KEY"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "string",
    "Value": "test"
  },
  "Error": null
}
```

Returns forbidden identifier.

##### HTTP Request
`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetForbiddenIdentifiers?auth=apikey:YOUR_API_KEY`

### GetAGConfig

```shell
curl "https://portalchattest.com/APIGate/Account/ChatOperator/GetAGConfig?auth=apikey:YOUR_API_KEY"
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

Returns account generation configuration for account associated with loggeed in user.

##### HTTP Request

`GET https://portalchattest.com/APIGate/Account/ChatOperator/GetAGConfig?auth=apikey:YOUR_API_KEY`

### RegisterAccount

For registering new account.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/RegisterAccount`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatAccountId | int | chat account id
agentId | java.lang.String | agent id
firstName | java.lang.String | first name
lastName | java.lang.String | last name
email | java.lang.String | email address
phone | java.lang.String | phone number

### RegisterSingleAccount

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/RegisterSingleAccount"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "RegisterAccountResult",
    "Value": {
      "Instructions": "[Chat_Generated_Instructions(AgentId = 127, FirstName = Test, LastName = Test, Email = test@test.com, Phone = 999)]",
      "Success": true
    }
  },
  "Error": null
}
```

To create single chat account.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/RegisterSingleAccount`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
domain | java.lang.String | domain
username | java.lang.String | username 
email | java.lang.String | email address
passwordMD5 | java.lang.String | MD5 of password
firstName | java.lang.String | first name
lastName | java.lang.String | second name
phone | java.lang.String | phone number

### SetAGConfig

Not available. Can not pass object in get.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetAGConfig`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
config | Chat.ChatOperatorObjects.Interface.ChatAccountAG | ChatAccountAG object

### SetForbiddenIdentifiers

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/SetForbiddenIdentifiers"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

To set forbidden identifier.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SetForbiddenIdentifiers`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
forbiddenIdentifiers | java.lang.String | Forbidden identifier to be updated.

## ChatVisitor APIs

### GetPageVisits

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetPageVisits"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "PageVisitInfoList",
    "Value": {
      "Visits": [
        1,
        {
          "ArriveTime": 1552710218,
          "LastCommunicationTime": 0,
          "Location": "http://localhost:8080/ChatTestInline.html",
          "Referer": ""
        }
      ]
    }
  },
  "Error": null
}
```

Returns list of visited page of vistor by chat account and visitor id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetPageVisits`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatAccountChatVisitorId | java.lang.String | Combination of chat account and visitor id.

### GetRelatedVisits

```shell
curl "https://server.portal.chat/APIGate/Account/ChatOperator/GetRelatedVisits"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "VisitInfoList",
    "Value": {
      "Visits": [
        100,
        {
          "ArriveLocation": "localhost:8080/ChatTestInline.html",
          "ArriveReferer": "",
          "ArriveTime": 1552682911,
          "Browser": "Chrome 72.0",
          "ConfidencePercentage": 90,
          "Device": "",
          "HasJavascript": false,
          "Host": "127.0.0.1",
          "IpInfo": {
            "AccuracyRadius": -1,
            "CityConfidence": -1,
            "CityName": "",
            "ContinentName": "",
            "CountryCode": "",
            "CountryConfidence": -1,
            "CountryName": "",
            "CountyConfidence": -1,
            "CountyName": "",
            "IpDomain": "",
            "IspName": "",
            "Latitude": -1,
            "Longitude": -1,
            "OrganizationName": "",
            "PostalCode": "",
            "PostalCodeConfidence": -1,
            "RegisteredCountryCode": "",
            "RegisteredCountryName": "",
            "TimeZone": "",
            "TimeZoneOffset": 0,
            "UserType": ""
          },
          "Is64Bit": true,
          "IsInDST": false,
          "IsPhone": false,
          "IsSSL": false,
          "IsTablet": false,
          "IsTouchscreen": false,
          "LastCommunicationTime": 0,
          "Locale": "en",
          "Os": "Windows 8.1",
          "Resolution": "1536x864",
          "Timezone": "UTC+5.5",
          "VisitId": 367
        }
      ]
    }
  },
  "Error": null
}
```

Returns current and all related visits of visitor. Related visits are filtered with host name.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/GetRelatedVisits`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
chatAccountChatVisitorId | java.lang.String | Combination of chat account and visitor id.

### SendIceCandidate

Not available

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/ChatOperator/SendIceCandidate`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
objectId | java.lang.String | description
endPointId | java.lang.String | description
iceCandidate | java.lang.String | description

# Common APIs

This is Common API type.

### AllocateBundle

```shell
curl "https://server.portal.chat/APIGate/Account/Common/AllocateBundle"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "string",
    "Value": "3"
  },
  "Error": null
}
```

Create bundle from source bundle and bundle type. Returns new bundle id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/Common/AllocateBundle`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
bundleTypeId | java.lang.String | Bundle type id.
bundleBaseId | java.lang.String | Source bundle id to be used to create new bundle.

### GetBundleInfoAndData

```shell
curl "https://server.portal.chat/APIGate/Account/Common/GetBundleInfoAndData"
```

> The above command returns JSON structured like this:

```json
{
  "Result": {
    "Type": "BundleInfoAndData",
    "Value": {
      "BundleInfo": {
        "BundleBaseId": "1",
        "BundleBaseName": null,
        "BundleId": "3",
        "BundleName": null,
        "BundleTypeId": "2",
        "BundleTypeName": "Bundle type"
      },
      "Data": ""
    }
  },
  "Error": null
}
```

Returns bundle information by bundle id.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/Common/GetBundleInfoAndData`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
bundleId | java.lang.String | Bundle id whose information to be retrieved.

### SaveBundle

```shell
curl "https://server.portal.chat/APIGate/Account/Common/SaveBundle"
```

> The above command returns JSON structured like this:

```json
{
  "Result": null,
  "Error": null
}
```

To update existing bundle.

##### HTTP Request

`GET https://server.portal.chat/APIGate/Account/Common/SaveBundle`

##### Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
bundleId | java.lang.String | Bundle id to be updated.
bundleName | java.lang.String | Bundle name.
bundleData | java.lang.String | Bundle data.
