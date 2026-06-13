import type { INodeProperties } from 'n8n-workflow';

export const rebateDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Rebate"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi v1 Rebate Tax Query",
					"value": "GET Sapi v1 Rebate Tax Query",
					"action": "Get Spot Rebate History Records (USER_DATA)",
					"description": "- The max interval between startTime and endTime is 90 days.\n- If startTime and endTime are not sent, the recent 7 days' data will be returned.\n- The earliest startTime is supported on June 10, 2020\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/rebate/taxQuery"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/rebate/taxQuery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rebate"
					],
					"operation": [
						"GET Sapi v1 Rebate Tax Query"
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
						"Rebate"
					],
					"operation": [
						"GET Sapi v1 Rebate Tax Query"
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
						"Rebate"
					],
					"operation": [
						"GET Sapi v1 Rebate Tax Query"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "default 1",
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
						"Rebate"
					],
					"operation": [
						"GET Sapi v1 Rebate Tax Query"
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
						"Rebate"
					],
					"operation": [
						"GET Sapi v1 Rebate Tax Query"
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
						"Rebate"
					],
					"operation": [
						"GET Sapi v1 Rebate Tax Query"
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
						"Rebate"
					],
					"operation": [
						"GET Sapi v1 Rebate Tax Query"
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
						"Rebate"
					],
					"operation": [
						"GET Sapi v1 Rebate Tax Query"
					]
				}
			}
		},
];
