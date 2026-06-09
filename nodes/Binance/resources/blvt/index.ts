import type { INodeProperties } from 'n8n-workflow';

export const blvtDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi v1 Blvt Token Info",
					"value": "GET Sapi v1 Blvt Token Info",
					"action": "BLVT Info (MARKET_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/blvt/tokenInfo"
						}
					}
				},
				{
					"name": "POST Sapi v1 Blvt Subscribe",
					"value": "POST Sapi v1 Blvt Subscribe",
					"action": "Subscribe BLVT (USER_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/blvt/subscribe"
						}
					}
				},
				{
					"name": "GET Sapi v1 Blvt Subscribe Record",
					"value": "GET Sapi v1 Blvt Subscribe Record",
					"action": "Query Subscription Record (USER_DATA)",
					"description": "- Only the data of the latest 90 days is available\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/blvt/subscribe/record"
						}
					}
				},
				{
					"name": "POST Sapi v1 Blvt Redeem",
					"value": "POST Sapi v1 Blvt Redeem",
					"action": "Redeem BLVT (USER_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/blvt/redeem"
						}
					}
				},
				{
					"name": "GET Sapi v1 Blvt Redeem Record",
					"value": "GET Sapi v1 Blvt Redeem Record",
					"action": "Redemption Record (USER_DATA)",
					"description": "- Only the data of the latest 90 days is available\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/blvt/redeem/record"
						}
					}
				},
				{
					"name": "GET Sapi v1 Blvt User Limit",
					"value": "GET Sapi v1 Blvt User Limit",
					"action": "BLVT User Limit Info (USER_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/blvt/userLimit"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/blvt/tokenInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Token Info"
					]
				}
			}
		},
		{
			"displayName": "Token Name",
			"name": "tokenName",
			"description": "BTCDOWN, BTCUP",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tokenName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Token Info"
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
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Token Info"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/blvt/subscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Token Name",
			"name": "tokenName",
			"required": true,
			"description": "BTCDOWN, BTCUP",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tokenName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Cost",
			"name": "cost",
			"required": true,
			"description": "Spot balance",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "cost",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Subscribe"
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
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Subscribe"
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
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Subscribe"
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
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Subscribe"
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
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Subscribe"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/blvt/subscribe/record",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Subscribe Record"
					]
				}
			}
		},
		{
			"displayName": "Token Name",
			"name": "tokenName",
			"description": "BTCDOWN, BTCUP",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tokenName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Subscribe Record"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Subscribe Record"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "startTime",
			"description": "UTC timestamp in ms",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "startTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Subscribe Record"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "endTime",
			"description": "UTC timestamp in ms",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "endTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Subscribe Record"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 500; max 1000.",
			"default": 5,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Subscribe Record"
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
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Subscribe Record"
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
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Subscribe Record"
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
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Subscribe Record"
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
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Subscribe Record"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/blvt/redeem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Redeem"
					]
				}
			}
		},
		{
			"displayName": "Token Name",
			"name": "tokenName",
			"required": true,
			"description": "BTCDOWN, BTCUP",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tokenName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Redeem"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"default": "1.01",
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
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Redeem"
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
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Redeem"
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
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Redeem"
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
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Redeem"
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
						"BLVT"
					],
					"operation": [
						"POST Sapi v1 Blvt Redeem"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/blvt/redeem/record",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Redeem Record"
					]
				}
			}
		},
		{
			"displayName": "Token Name",
			"name": "tokenName",
			"description": "BTCDOWN, BTCUP",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tokenName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Redeem Record"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Redeem Record"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "startTime",
			"description": "UTC timestamp in ms",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "startTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Redeem Record"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "endTime",
			"description": "UTC timestamp in ms",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "endTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Redeem Record"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "default 1000, max 1000",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Redeem Record"
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
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Redeem Record"
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
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Redeem Record"
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
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Redeem Record"
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
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt Redeem Record"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/blvt/userLimit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt User Limit"
					]
				}
			}
		},
		{
			"displayName": "Token Name",
			"name": "tokenName",
			"description": "BTCDOWN, BTCUP",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tokenName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt User Limit"
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
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt User Limit"
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
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt User Limit"
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
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt User Limit"
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
						"BLVT"
					],
					"operation": [
						"GET Sapi v1 Blvt User Limit"
					]
				}
			}
		},
];
