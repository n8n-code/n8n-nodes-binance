import type { INodeProperties } from 'n8n-workflow';

export const c2CDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"C 2 C"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi V 1 C 2 C Order Match List User Order History",
					"value": "GET Sapi V 1 C 2 C Order Match List User Order History",
					"action": "Get C2C Trade History (USER_DATA)",
					"description": "- If startTimestamp and endTimestamp are not sent, the recent 30-day data will be returned.\n- The max interval between startTimestamp and endTimestamp is 30 days.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/c2c/orderMatch/listUserOrderHistory"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/c2c/orderMatch/listUserOrderHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"C 2 C"
					],
					"operation": [
						"GET Sapi V 1 C 2 C Order Match List User Order History"
					]
				}
			}
		},
		{
			"displayName": "Trade Type",
			"name": "tradeType",
			"required": true,
			"default": "BUY",
			"type": "options",
			"options": [
				{
					"name": "BUY",
					"value": "BUY"
				},
				{
					"name": "SELL",
					"value": "SELL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "tradeType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"C 2 C"
					],
					"operation": [
						"GET Sapi V 1 C 2 C Order Match List User Order History"
					]
				}
			}
		},
		{
			"displayName": "Start Timestamp",
			"name": "startTimestamp",
			"description": "UTC timestamp in ms",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "startTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"C 2 C"
					],
					"operation": [
						"GET Sapi V 1 C 2 C Order Match List User Order History"
					]
				}
			}
		},
		{
			"displayName": "End Timestamp",
			"name": "endTimestamp",
			"description": "UTC timestamp in ms",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "endTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"C 2 C"
					],
					"operation": [
						"GET Sapi V 1 C 2 C Order Match List User Order History"
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
						"C 2 C"
					],
					"operation": [
						"GET Sapi V 1 C 2 C Order Match List User Order History"
					]
				}
			}
		},
		{
			"displayName": "Rows",
			"name": "rows",
			"description": "default 100, max 100",
			"default": 0,
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
						"C 2 C"
					],
					"operation": [
						"GET Sapi V 1 C 2 C Order Match List User Order History"
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
						"C 2 C"
					],
					"operation": [
						"GET Sapi V 1 C 2 C Order Match List User Order History"
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
						"C 2 C"
					],
					"operation": [
						"GET Sapi V 1 C 2 C Order Match List User Order History"
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
						"C 2 C"
					],
					"operation": [
						"GET Sapi V 1 C 2 C Order Match List User Order History"
					]
				}
			}
		},
];
