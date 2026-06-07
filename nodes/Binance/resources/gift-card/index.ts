import type { INodeProperties } from 'n8n-workflow';

export const giftCardDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					]
				}
			},
			"options": [
				{
					"name": "POST Sapi V 1 Giftcard Create Code",
					"value": "POST Sapi V 1 Giftcard Create Code",
					"action": "Create a Binance Code (USER_DATA)",
					"description": "This API is for creating a Binance Code. To get started with, please make sure:\n\n- You have a Binance account\n- You have passed kyc\n- You have a sufficient balance in your Binance funding wallet\n- You need Enable Withdrawals for the API Key which requests this endpoint.\n\nDaily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/giftcard/createCode"
						}
					}
				},
				{
					"name": "POST Sapi V 1 Giftcard Redeem Code",
					"value": "POST Sapi V 1 Giftcard Redeem Code",
					"action": "Redeem a Binance Code (USER_DATA)",
					"description": "This API is for redeeming the Binance Code. Once redeemed, the coins will be deposited in your funding wallet.\n\nPlease note that if you enter the wrong code 5 times within 24 hours, you will no longer be able to redeem any Binance Code that day.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/giftcard/redeemCode"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Giftcard Verify",
					"value": "GET Sapi V 1 Giftcard Verify",
					"action": "Verify a Binance Code (USER_DATA)",
					"description": "This API is for verifying whether the Binance Code is valid or not by entering Binance Code or reference number.\n\nPlease note that if you enter the wrong binance code 5 times within an hour, you will no longer be able to verify any binance code for that hour.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/giftcard/verify"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Giftcard Cryptography Rsa Public Key",
					"value": "GET Sapi V 1 Giftcard Cryptography Rsa Public Key",
					"action": "Fetch RSA Public Key (USER_DATA)",
					"description": "This API is for fetching the RSA Public Key.\nThis RSA Public key will be used to encrypt the card code.\nPlease note that the RSA Public key fetched is valid only for the current day.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/giftcard/cryptography/rsa-public-key"
						}
					}
				},
				{
					"name": "POST Sapi V 1 Giftcard Buy Code",
					"value": "POST Sapi V 1 Giftcard Buy Code",
					"action": "Buy a Binance Code (TRADE)",
					"description": "This API is for buying a fixed-value Binance Code, which means your Binance Code will be redeemable to a token that is different to the token that you are paying in. If the token you’re paying and the redeemable token are the same, please use the Create Binance Code endpoint.\nYou can use supported crypto currency or fiat token as baseToken to buy Binance Code that is redeemable to your chosen faceToken.\nOnce successfully purchased, the amount of baseToken would be deducted from your funding wallet.\n\nTo get started with, please make sure:\n- You have a Binance account\n- You have passed kyc\n- You have a sufficient balance in your Binance funding wallet\n- You need Enable Withdrawals for the API Key which requests this endpoint.\n\nDaily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/giftcard/buyCode"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Giftcard Buy Code Token Limit",
					"value": "GET Sapi V 1 Giftcard Buy Code Token Limit",
					"action": "Fetch Token Limit (USER_DATA)",
					"description": "This API is to help you verify which tokens are available for you to purchase fixed-value gift cards as mentioned in section 2 and it's limitation.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/giftcard/buyCode/token-limit"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /sapi/v1/giftcard/createCode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Create Code"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"required": true,
			"description": "The coin type contained in the Binance Code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Create Code"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"description": "The amount of the coin",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "amount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Create Code"
					]
				}
			}
		},
		{
			"displayName": "Recv Window",
			"name": "recvWindow",
			"description": "The value cannot be greater than 60000",
			"default": 5000,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "recvWindow",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Create Code"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"required": true,
			"description": "UTC timestamp in ms",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Create Code"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "signature",
			"required": true,
			"description": "Signature",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "signature",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Create Code"
					]
				}
			}
		},
		{
			"displayName": "X MBX APIKEY (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "Binance Public API Key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-MBX-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Create Code"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/giftcard/redeemCode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Redeem Code"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"required": true,
			"description": "Binance Code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Redeem Code"
					]
				}
			}
		},
		{
			"displayName": "External Uid",
			"name": "externalUid",
			"description": "Each external unique ID represents a unique user on the partner platform. The function helps you to identify the redemption behavior of different users, such as redemption frequency and amount. It also helps risk and limit control of a single account, such as daily limit on redemption volume, frequency, and incorrect number of entries. This will also prevent a single user account reach the partner's daily redemption limits. We strongly recommend you to use this feature and transfer us the User ID of your users if you have different users redeeming Binance codes on your platform. To protect user data privacy, you may choose to transfer the user id in any desired format (max. 400 characters).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "externalUid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Redeem Code"
					]
				}
			}
		},
		{
			"displayName": "Recv Window",
			"name": "recvWindow",
			"description": "The value cannot be greater than 60000",
			"default": 5000,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "recvWindow",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Redeem Code"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"required": true,
			"description": "UTC timestamp in ms",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Redeem Code"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "signature",
			"required": true,
			"description": "Signature",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "signature",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Redeem Code"
					]
				}
			}
		},
		{
			"displayName": "X MBX APIKEY (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "Binance Public API Key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-MBX-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Redeem Code"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/giftcard/verify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Verify"
					]
				}
			}
		},
		{
			"displayName": "Reference No",
			"name": "referenceNo",
			"required": true,
			"description": "reference number",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "referenceNo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Verify"
					]
				}
			}
		},
		{
			"displayName": "Recv Window",
			"name": "recvWindow",
			"description": "The value cannot be greater than 60000",
			"default": 5000,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "recvWindow",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Verify"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"required": true,
			"description": "UTC timestamp in ms",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Verify"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "signature",
			"required": true,
			"description": "Signature",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "signature",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Verify"
					]
				}
			}
		},
		{
			"displayName": "X MBX APIKEY (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "Binance Public API Key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-MBX-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Verify"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/giftcard/cryptography/rsa-public-key",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Cryptography Rsa Public Key"
					]
				}
			}
		},
		{
			"displayName": "Recv Window",
			"name": "recvWindow",
			"description": "The value cannot be greater than 60000",
			"default": 5000,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "recvWindow",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Cryptography Rsa Public Key"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"required": true,
			"description": "UTC timestamp in ms",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Cryptography Rsa Public Key"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "signature",
			"required": true,
			"description": "Signature",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "signature",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Cryptography Rsa Public Key"
					]
				}
			}
		},
		{
			"displayName": "X MBX APIKEY (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "Binance Public API Key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-MBX-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Cryptography Rsa Public Key"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/giftcard/buyCode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Buy Code"
					]
				}
			}
		},
		{
			"displayName": "Base Token",
			"name": "baseToken",
			"required": true,
			"description": "The token you want to pay, example BUSD",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "baseToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Buy Code"
					]
				}
			}
		},
		{
			"displayName": "Face Token",
			"name": "faceToken",
			"required": true,
			"description": "The token you want to buy, example BNB. If faceToken = baseToken, it's the same as createCode endpoint.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "faceToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Buy Code"
					]
				}
			}
		},
		{
			"displayName": "Base Token Amount",
			"name": "baseTokenAmount",
			"required": true,
			"description": "The base token asset quantity, example  1.002",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "baseTokenAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Buy Code"
					]
				}
			}
		},
		{
			"displayName": "Recv Window",
			"name": "recvWindow",
			"description": "The value cannot be greater than 60000",
			"default": 5000,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "recvWindow",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Buy Code"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"required": true,
			"description": "UTC timestamp in ms",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Buy Code"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "signature",
			"required": true,
			"description": "Signature",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "signature",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Buy Code"
					]
				}
			}
		},
		{
			"displayName": "X MBX APIKEY (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "Binance Public API Key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-MBX-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"POST Sapi V 1 Giftcard Buy Code"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/giftcard/buyCode/token-limit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Buy Code Token Limit"
					]
				}
			}
		},
		{
			"displayName": "Base Token",
			"name": "baseToken",
			"required": true,
			"description": "The token you want to pay, example BUSD",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "baseToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Buy Code Token Limit"
					]
				}
			}
		},
		{
			"displayName": "Recv Window",
			"name": "recvWindow",
			"description": "The value cannot be greater than 60000",
			"default": 5000,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "recvWindow",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Buy Code Token Limit"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"required": true,
			"description": "UTC timestamp in ms",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Buy Code Token Limit"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "signature",
			"required": true,
			"description": "Signature",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "signature",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Buy Code Token Limit"
					]
				}
			}
		},
		{
			"displayName": "X MBX APIKEY (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "Binance Public API Key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-MBX-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"GET Sapi V 1 Giftcard Buy Code Token Limit"
					]
				}
			}
		},
];
