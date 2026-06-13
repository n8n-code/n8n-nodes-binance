import type { INodeProperties } from 'n8n-workflow';

export const payDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pay"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi v1 Pay Transactions",
					"value": "GET Sapi v1 Pay Transactions",
					"action": "Get Pay Trade History (USER_DATA)",
					"description": "- If startTime and endTime are not sent, the recent 90 days' data will be returned.\n- The max interval between startTime and endTime is 90 days.\n- Support for querying orders within the last 18 months.\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/pay/transactions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/pay/transactions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pay"
					],
					"operation": [
						"GET Sapi v1 Pay Transactions"
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
						"Pay"
					],
					"operation": [
						"GET Sapi v1 Pay Transactions"
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
						"Pay"
					],
					"operation": [
						"GET Sapi v1 Pay Transactions"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "default 100, max 100",
			"default": 100,
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
						"Pay"
					],
					"operation": [
						"GET Sapi v1 Pay Transactions"
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
						"Pay"
					],
					"operation": [
						"GET Sapi v1 Pay Transactions"
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
						"Pay"
					],
					"operation": [
						"GET Sapi v1 Pay Transactions"
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
						"Pay"
					],
					"operation": [
						"GET Sapi v1 Pay Transactions"
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
						"Pay"
					],
					"operation": [
						"GET Sapi v1 Pay Transactions"
					]
				}
			}
		},
];
