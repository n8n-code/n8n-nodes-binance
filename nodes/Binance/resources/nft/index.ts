import type { INodeProperties } from 'n8n-workflow';

export const nftDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"NFT"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi V 1 Nft History Transactions",
					"value": "GET Sapi V 1 Nft History Transactions",
					"action": "Get NFT Transaction History (USER_DATA)",
					"description": "- The max interval between startTime and endTime is 90 days.\n- If startTime and endTime are not sent, the recent 7 days' data will be returned.\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/nft/history/transactions"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Nft History Deposit",
					"value": "GET Sapi V 1 Nft History Deposit",
					"action": "Get NFT Deposit History(USER_DATA)",
					"description": "- The max interval between startTime and endTime is 90 days.\n- If startTime and endTime are not sent, the recent 7 days' data will be returned.\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/nft/history/deposit"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Nft History Withdraw",
					"value": "GET Sapi V 1 Nft History Withdraw",
					"action": "Get NFT Withdraw History (USER_DATA)",
					"description": "- The max interval between startTime and endTime is 90 days.\n- If startTime and endTime are not sent, the recent 7 days' data will be returned.\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/nft/history/withdraw"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Nft User Get Asset",
					"value": "GET Sapi V 1 Nft User Get Asset",
					"action": "Get NFT Asset (USER_DATA)",
					"description": "Weight(UID): 3000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/nft/user/getAsset"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/nft/history/transactions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Transactions"
					]
				}
			}
		},
		{
			"displayName": "Order Type",
			"name": "orderType",
			"required": true,
			"description": "0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Transactions"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Transactions"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Transactions"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 50, Max 50",
			"default": 50,
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Transactions"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Transactions"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Transactions"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Transactions"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Transactions"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Transactions"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/nft/history/deposit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Deposit"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Deposit"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Deposit"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 50, Max 50",
			"default": 50,
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Deposit"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Deposit"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Deposit"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Deposit"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Deposit"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Deposit"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/nft/history/withdraw",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Withdraw"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Withdraw"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Withdraw"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 50, Max 50",
			"default": 50,
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Withdraw"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Withdraw"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Withdraw"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Withdraw"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Withdraw"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft History Withdraw"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/nft/user/getAsset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft User Get Asset"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 50, Max 50",
			"default": 50,
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft User Get Asset"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft User Get Asset"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft User Get Asset"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft User Get Asset"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft User Get Asset"
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
						"NFT"
					],
					"operation": [
						"GET Sapi V 1 Nft User Get Asset"
					]
				}
			}
		},
];
