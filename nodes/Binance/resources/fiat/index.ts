import type { INodeProperties } from 'n8n-workflow';

export const fiatDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Fiat"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi V 1 Fiat Orders",
					"value": "GET Sapi V 1 Fiat Orders",
					"action": "Fiat Deposit/Withdraw History (USER_DATA)",
					"description": "- If beginTime and endTime are not sent, the recent 30-day data will be returned.\n\nWeight(UID): 90000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/fiat/orders"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Fiat Payments",
					"value": "GET Sapi V 1 Fiat Payments",
					"action": "Fiat Payments History (USER_DATA)",
					"description": "- If beginTime and endTime are not sent, the recent 30-day data will be returned.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/fiat/payments"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/fiat/orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Orders"
					]
				}
			}
		},
		{
			"displayName": "Transaction Type",
			"name": "transactionType",
			"required": true,
			"description": "* `0` - deposit\n* `1` - withdraw",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "transactionType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Orders"
					]
				}
			}
		},
		{
			"displayName": "Begin Time",
			"name": "beginTime",
			"default": 1626144956000,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "beginTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Orders"
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
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Orders"
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
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Orders"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "Default 100, max 500",
			"default": 300,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rows",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Orders"
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
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Orders"
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
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Orders"
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
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Orders"
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
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/fiat/payments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Payments"
					]
				}
			}
		},
		{
			"displayName": "Transaction Type",
			"name": "transactionType",
			"required": true,
			"description": "* `0` - deposit\n* `1` - withdraw",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "transactionType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Payments"
					]
				}
			}
		},
		{
			"displayName": "Begin Time",
			"name": "beginTime",
			"default": 1626144956000,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "beginTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Payments"
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
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Payments"
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
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Payments"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "Default 100, max 500",
			"default": 300,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rows",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Payments"
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
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Payments"
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
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Payments"
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
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Payments"
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
						"Fiat"
					],
					"operation": [
						"GET Sapi V 1 Fiat Payments"
					]
				}
			}
		},
];
