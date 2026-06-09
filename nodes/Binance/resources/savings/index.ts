import type { INodeProperties } from 'n8n-workflow';

export const savingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi v1 Lending Project List",
					"value": "GET Sapi v1 Lending Project List",
					"action": "Get Fixed/Activity Project List(USER_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/project/list"
						}
					}
				},
				{
					"name": "POST Sapi v1 Lending Customized Fixed Purchase",
					"value": "POST Sapi v1 Lending Customized Fixed Purchase",
					"action": "Purchase Fixed/Activity Project (USER_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/lending/customizedFixed/purchase"
						}
					}
				},
				{
					"name": "GET Sapi v1 Lending Project Position List",
					"value": "GET Sapi v1 Lending Project Position List",
					"action": "Get Fixed/Activity Project Position (USER_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/project/position/list"
						}
					}
				},
				{
					"name": "POST Sapi v1 Lending Position Changed",
					"value": "POST Sapi v1 Lending Position Changed",
					"action": "Change Fixed/Activity Position to Daily Position (USER_DATA)",
					"description": "- PositionId is mandatory parameter for fixed position.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/lending/positionChanged"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/lending/project/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project List"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "asset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project List"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"default": "ACTIVITY",
			"type": "options",
			"options": [
				{
					"name": "ACTIVITY",
					"value": "ACTIVITY"
				},
				{
					"name": "CUSTOMIZED FIXED",
					"value": "CUSTOMIZED_FIXED"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project List"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Default `ALL`",
			"default": "ALL",
			"type": "options",
			"options": [
				{
					"name": "ALL",
					"value": "ALL"
				},
				{
					"name": "SUBSCRIBABLE",
					"value": "SUBSCRIBABLE"
				},
				{
					"name": "UNSUBSCRIBABLE",
					"value": "UNSUBSCRIBABLE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project List"
					]
				}
			}
		},
		{
			"displayName": "Is Sort Asc",
			"name": "isSortAsc",
			"description": "default \"true\"",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "isSortAsc",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project List"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sortBy",
			"description": "Default `START_TIME`",
			"default": "START_TIME",
			"type": "options",
			"options": [
				{
					"name": "START TIME",
					"value": "START_TIME"
				},
				{
					"name": "LOT SIZE",
					"value": "LOT_SIZE"
				},
				{
					"name": "INTEREST RATE",
					"value": "INTEREST_RATE"
				},
				{
					"name": "DURATION",
					"value": "DURATION"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sortBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project List"
					]
				}
			}
		},
		{
			"displayName": "Current",
			"name": "current",
			"description": "Current querying page. Start from 1. Default:1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "current",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project List"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Default:10 Max:100",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project List"
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
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project List"
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
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project List"
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
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project List"
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
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project List"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/lending/customizedFixed/purchase",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Customized Fixed Purchase"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "projectId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Customized Fixed Purchase"
					]
				}
			}
		},
		{
			"displayName": "Lot",
			"name": "lot",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lot",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Customized Fixed Purchase"
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
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Customized Fixed Purchase"
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
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Customized Fixed Purchase"
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
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Customized Fixed Purchase"
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
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Customized Fixed Purchase"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/lending/project/position/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project Position List"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"required": true,
			"default": "BTC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "asset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project Position List"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "projectId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project Position List"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Default `ALL`",
			"default": "ALL",
			"type": "options",
			"options": [
				{
					"name": "ALL",
					"value": "ALL"
				},
				{
					"name": "SUBSCRIBABLE",
					"value": "SUBSCRIBABLE"
				},
				{
					"name": "UNSUBSCRIBABLE",
					"value": "UNSUBSCRIBABLE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project Position List"
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
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project Position List"
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
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project Position List"
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
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project Position List"
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
						"Savings"
					],
					"operation": [
						"GET Sapi v1 Lending Project Position List"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/lending/positionChanged",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Position Changed"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "projectId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Position Changed"
					]
				}
			}
		},
		{
			"displayName": "Lot",
			"name": "lot",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lot",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Position Changed"
					]
				}
			}
		},
		{
			"displayName": "Position ID",
			"name": "positionId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "positionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Position Changed"
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
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Position Changed"
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
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Position Changed"
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
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Position Changed"
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
						"Savings"
					],
					"operation": [
						"POST Sapi v1 Lending Position Changed"
					]
				}
			}
		},
];
