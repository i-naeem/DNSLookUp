# <img src="./icon.png" alt="Logo" width="40" height="40"> DNSLookUp

 A fast and simple rest api to preform DNS Lookup.

## Features

- DNS Lookup
- DNS Reverse Lookup

## Routes

```json
{
  "namespace": "/",
  "routes": {
    "/lookup": {
      "method": "GET",
      "params": {
        "domain": {
          "description": "The domain name to look for.",
          "example": "/lookup?domain=google.com",
          "type": "String",
          "required": true
        }
      }
    },
    "/reverse": {
      "method": "GET",
      "params": {
        "address": {
          "description": "The address name to look for host.",
          "example": "/reverse?address=142.250.181.78",
          "type": "String",
          "required": true
        }
      }
    }
  }
}
```
