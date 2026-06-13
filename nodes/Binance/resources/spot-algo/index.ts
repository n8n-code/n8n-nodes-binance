import type { INodeProperties } from 'n8n-workflow';

export const spotAlgoDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					]
				}
			},
			"options": [
				{
					"name": "POST Sapi v1 Algo Spot New Order Twap",
					"value": "POST Sapi v1 Algo Spot New Order Twap",
					"action": "Time-Weighted Average Price (Twap) New Order",
					"description": "Place a new spot TWAP order with Algo service.\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/algo/spot/newOrderTwap"
						}
					}
				},
				{
					"name": "DELETE Sapi v1 Algo Spot Order",
					"value": "DELETE Sapi v1 Algo Spot Order",
					"action": "Cancel Algo Order",
					"description": "Cancel an open TWAP order\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sapi/v1/algo/spot/order"
						}
					}
				},
				{
					"name": "GET Sapi v1 Algo Spot Open Orders",
					"value": "GET Sapi v1 Algo Spot Open Orders",
					"action": "Query Current Algo Open Orders",
					"description": "Get all open SPOT TWAP orders\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/algo/spot/openOrders"
						}
					}
				},
				{
					"name": "GET Sapi v1 Algo Spot Historical Orders",
					"value": "GET Sapi v1 Algo Spot Historical Orders",
					"action": "Query Historical Algo Orders",
					"description": "Get all historical SPOT TWAP orders\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/algo/spot/historicalOrders"
						}
					}
				},
				{
					"name": "GET Sapi v1 Algo Spot Sub Orders",
					"value": "GET Sapi v1 Algo Spot Sub Orders",
					"action": "Query Sub Orders",
					"description": "Get respective sub orders for a specified algoId\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/algo/spot/subOrders"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /sapi/v1/algo/spot/newOrderTwap",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Spot New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"description": "Trading symbol, e.g. BNBUSDT",
			"default": "BNBUSDT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Spot New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "Side",
			"name": "side",
			"required": true,
			"default": "SELL",
			"type": "options",
			"options": [
				{
					"name": "SELL",
					"value": "SELL"
				},
				{
					"name": "BUY",
					"value": "BUY"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "side",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Spot New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "Quantity",
			"name": "quantity",
			"required": true,
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quantity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Spot New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"required": true,
			"default": 300,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "duration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Spot New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "Client Algo ID",
			"name": "clientAlgoId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "clientAlgoId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Spot New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "Limit Price",
			"name": "limitPrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limitPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Spot New Order Twap"
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
						"Spot Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Spot New Order Twap"
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
						"Spot Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Spot New Order Twap"
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
						"Spot Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Spot New Order Twap"
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
						"Spot Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Spot New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sapi/v1/algo/spot/order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"DELETE Sapi v1 Algo Spot Order"
					]
				}
			}
		},
		{
			"displayName": "Algo ID",
			"name": "algoId",
			"required": true,
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "algoId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"DELETE Sapi v1 Algo Spot Order"
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
						"Spot Algo"
					],
					"operation": [
						"DELETE Sapi v1 Algo Spot Order"
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
						"Spot Algo"
					],
					"operation": [
						"DELETE Sapi v1 Algo Spot Order"
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
						"Spot Algo"
					],
					"operation": [
						"DELETE Sapi v1 Algo Spot Order"
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
						"Spot Algo"
					],
					"operation": [
						"DELETE Sapi v1 Algo Spot Order"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/algo/spot/openOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Open Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Open Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Open Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Open Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Open Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/algo/spot/historicalOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Historical Orders"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"description": "Trading symbol, e.g. BNBUSDT",
			"default": "BNBUSDT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Historical Orders"
					]
				}
			}
		},
		{
			"displayName": "Side",
			"name": "side",
			"required": true,
			"default": "SELL",
			"type": "options",
			"options": [
				{
					"name": "SELL",
					"value": "SELL"
				},
				{
					"name": "BUY",
					"value": "BUY"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "side",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Historical Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Historical Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Historical Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Historical Orders"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "MIN 1, MAX 100; Default 100",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Historical Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Historical Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Historical Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Historical Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Historical Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/algo/spot/subOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Sub Orders"
					]
				}
			}
		},
		{
			"displayName": "Algo ID",
			"name": "algoId",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "algoId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Sub Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Sub Orders"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "MIN 1, MAX 100; Default 100",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Sub Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Sub Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Sub Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Sub Orders"
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
						"Spot Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Spot Sub Orders"
					]
				}
			}
		},
];
