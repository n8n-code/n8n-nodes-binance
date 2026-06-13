import type { INodeProperties } from 'n8n-workflow';

export const copyTradingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Copy Trading"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi v1 Copy Trading Futures User Status",
					"value": "GET Sapi v1 Copy Trading Futures User Status",
					"action": "Get Futures Lead Trader Status(TRADE)",
					"description": "Get Futures Lead Trader Status\n\nWeight(UID): 20",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/copyTrading/futures/userStatus"
						}
					}
				},
				{
					"name": "GET Sapi v1 Copy Trading Futures Lead Symbol",
					"value": "GET Sapi v1 Copy Trading Futures Lead Symbol",
					"action": "Get Futures Lead Trading Symbol Whitelist(USER_DATA)",
					"description": "Get Futures Lead Trading Symbol Whitelist\n\nWeight(IP): 20",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/copyTrading/futures/leadSymbol"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/copyTrading/futures/userStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Copy Trading"
					],
					"operation": [
						"GET Sapi v1 Copy Trading Futures User Status"
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
						"Copy Trading"
					],
					"operation": [
						"GET Sapi v1 Copy Trading Futures User Status"
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
						"Copy Trading"
					],
					"operation": [
						"GET Sapi v1 Copy Trading Futures User Status"
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
						"Copy Trading"
					],
					"operation": [
						"GET Sapi v1 Copy Trading Futures User Status"
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
						"Copy Trading"
					],
					"operation": [
						"GET Sapi v1 Copy Trading Futures User Status"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/copyTrading/futures/leadSymbol",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Copy Trading"
					],
					"operation": [
						"GET Sapi v1 Copy Trading Futures Lead Symbol"
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
						"Copy Trading"
					],
					"operation": [
						"GET Sapi v1 Copy Trading Futures Lead Symbol"
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
						"Copy Trading"
					],
					"operation": [
						"GET Sapi v1 Copy Trading Futures Lead Symbol"
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
						"Copy Trading"
					],
					"operation": [
						"GET Sapi v1 Copy Trading Futures Lead Symbol"
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
						"Copy Trading"
					],
					"operation": [
						"GET Sapi v1 Copy Trading Futures Lead Symbol"
					]
				}
			}
		},
];
