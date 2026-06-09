import type { INodeProperties } from 'n8n-workflow';

export const futuresAlgoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Futures Algo"
					]
				}
			},
			"options": [
				{
					"name": "POST Sapi v1 Algo Futures New Order Vp",
					"value": "POST Sapi v1 Algo Futures New Order Vp",
					"action": "Volume Participation(VP) New Order (TRADE)",
					"description": "Send in a VP new order. Only support on USDⓈ-M Contracts.\n\n- You need to enable `Futures Trading Permission` for the api key which requests this endpoint.\n- Base URL: https://api.binance.com\n\n- Total Algo open orders max allowed: 10 orders.\n- Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi.\n- Receiving \"success\": true does not mean that your order will be executed. Please use the query order endpoints(GET sapi/v1/algo/futures/openOrders or GET sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive \"success\": true, but the order status will be expired after we check it.\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/algo/futures/newOrderVp"
						}
					}
				},
				{
					"name": "POST Sapi v1 Algo Futures New Order Twap",
					"value": "POST Sapi v1 Algo Futures New Order Twap",
					"action": "Time-Weighted Average Price(Twap) New Order (TRADE)",
					"description": "Send in a Twap new order. Only support on USDⓈ-M Contracts.\n\nYou need to enable Futures Trading Permission for the api key which requests this endpoint.\nBase URL: https://api.binance.com\n\n- Total Algo open orders max allowed: 10 orders.\n- Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi.\n- Receiving \"success\": true does not mean that your order will be executed. Please use the query order endpoints(GET sapi/v1/algo/futures/openOrders or GET sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive \"success\": true, but the order status will be expired after we check it.\n- quantity * 60 / duration should be larger than minQty\n- duration cannot be less than 5 mins or more than 24 hours.\n- For delivery contracts, TWAP end time should be one hour earlier than the delivery time of the symbol.\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/algo/futures/newOrderTwap"
						}
					}
				},
				{
					"name": "DELETE Sapi v1 Algo Futures Order",
					"value": "DELETE Sapi v1 Algo Futures Order",
					"action": "Cancel Algo Order(TRADE)",
					"description": "Cancel an active order.\n- You need to enable Futures Trading Permission for the api key which requests this endpoint.\n- Base URL: https://api.binance.com\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sapi/v1/algo/futures/order"
						}
					}
				},
				{
					"name": "GET Sapi v1 Algo Futures Open Orders",
					"value": "GET Sapi v1 Algo Futures Open Orders",
					"action": "Query Current Algo Open Orders (USER_DATA)",
					"description": "- You need to enable Futures Trading Permission for the api key which requests this endpoint.\n- Base URL: https://api.binance.com\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/algo/futures/openOrders"
						}
					}
				},
				{
					"name": "GET Sapi v1 Algo Futures Historical Orders",
					"value": "GET Sapi v1 Algo Futures Historical Orders",
					"action": "Query Historical Algo Orders (USER_DATA)",
					"description": "- You need to enable Futures Trading Permission for the api key which requests this endpoint.\n- Base URL: https://api.binance.com\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/algo/futures/historicalOrders"
						}
					}
				},
				{
					"name": "GET Sapi v1 Algo Futures Sub Orders",
					"value": "GET Sapi v1 Algo Futures Sub Orders",
					"action": "Query Sub Orders (USER_DATA)",
					"description": "- You need to enable Futures Trading Permission for the api key which requests this endpoint.\n- Base URL: https://api.binance.com\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/algo/futures/subOrders"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /sapi/v1/algo/futures/newOrderVp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Vp"
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Vp"
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Vp"
					]
				}
			}
		},
		{
			"displayName": "Position Side",
			"name": "positionSide",
			"description": "Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode.",
			"default": "BOTH",
			"type": "options",
			"options": [
				{
					"name": "BOTH",
					"value": "BOTH"
				},
				{
					"name": "LONG",
					"value": "LONG"
				},
				{
					"name": "SHORT",
					"value": "SHORT"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "positionSide",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Vp"
					]
				}
			}
		},
		{
			"displayName": "Quantity",
			"name": "quantity",
			"required": true,
			"description": "Quantity of base asset; The notional (quantity * mark price(base asset)) must be more than the equivalent of 10,000 USDT and less than the equivalent of 1,000,000 USDT",
			"default": 0,
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Vp"
					]
				}
			}
		},
		{
			"displayName": "Urgency",
			"name": "urgency",
			"required": true,
			"description": "Represent the relative speed of the current execution; ENUM: LOW, MEDIUM, HIGH",
			"default": "LOW",
			"type": "options",
			"options": [
				{
					"name": "LOW",
					"value": "LOW"
				},
				{
					"name": "MEDIUM",
					"value": "MEDIUM"
				},
				{
					"name": "HIGH",
					"value": "HIGH"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "urgency",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Vp"
					]
				}
			}
		},
		{
			"displayName": "Client Algo ID",
			"name": "clientAlgoId",
			"description": "A unique id among Algo orders (length should be 32 characters)， If it is not sent, we will give default value",
			"default": "00358ce6a268403398bd34eaa36dffe7",
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Vp"
					]
				}
			}
		},
		{
			"displayName": "Reduce Only",
			"name": "reduceOnly",
			"description": "'true' or 'false'. Default 'false'; Cannot be sent in Hedge Mode; Cannot be sent when you open a position",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "reduceOnly",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Vp"
					]
				}
			}
		},
		{
			"displayName": "Limit Price",
			"name": "limitPrice",
			"description": "Limit price of the order; If it is not sent, will place order by market price by default",
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Vp"
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Vp"
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Vp"
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Vp"
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Vp"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/algo/futures/newOrderTwap",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Twap"
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Twap"
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "Position Side",
			"name": "positionSide",
			"description": "Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode.",
			"default": "BOTH",
			"type": "options",
			"options": [
				{
					"name": "BOTH",
					"value": "BOTH"
				},
				{
					"name": "LONG",
					"value": "LONG"
				},
				{
					"name": "SHORT",
					"value": "SHORT"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "positionSide",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "Quantity",
			"name": "quantity",
			"required": true,
			"description": "Quantity of base asset; The notional (quantity * mark price(base asset)) must be more than the equivalent of 10,000 USDT and less than the equivalent of 1,000,000 USDT",
			"default": 0,
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"required": true,
			"description": "Duration for TWAP orders in seconds. [300, 86400];Less than 5min => defaults to 5 min; Greater than 24h => defaults to 24h",
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "Client Algo ID",
			"name": "clientAlgoId",
			"description": "A unique id among Algo orders (length should be 32 characters)， If it is not sent, we will give default value",
			"default": "00358ce6a268403398bd34eaa36dffe7",
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "Reduce Only",
			"name": "reduceOnly",
			"description": "'true' or 'false'. Default 'false'; Cannot be sent in Hedge Mode; Cannot be sent when you open a position",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "reduceOnly",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "Limit Price",
			"name": "limitPrice",
			"description": "Limit price of the order; If it is not sent, will place order by market price by default",
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Twap"
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Twap"
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Twap"
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Twap"
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
						"Futures Algo"
					],
					"operation": [
						"POST Sapi v1 Algo Futures New Order Twap"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sapi/v1/algo/futures/order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Futures Algo"
					],
					"operation": [
						"DELETE Sapi v1 Algo Futures Order"
					]
				}
			}
		},
		{
			"displayName": "Algo ID",
			"name": "algoId",
			"required": true,
			"description": "Eg. 14511",
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
						"Futures Algo"
					],
					"operation": [
						"DELETE Sapi v1 Algo Futures Order"
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
						"Futures Algo"
					],
					"operation": [
						"DELETE Sapi v1 Algo Futures Order"
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
						"Futures Algo"
					],
					"operation": [
						"DELETE Sapi v1 Algo Futures Order"
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
						"Futures Algo"
					],
					"operation": [
						"DELETE Sapi v1 Algo Futures Order"
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
						"Futures Algo"
					],
					"operation": [
						"DELETE Sapi v1 Algo Futures Order"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/algo/futures/openOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Open Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Open Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Open Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Open Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Open Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/algo/futures/historicalOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Historical Orders"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Historical Orders"
					]
				}
			}
		},
		{
			"displayName": "Side",
			"name": "side",
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Historical Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Historical Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Historical Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Historical Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Historical Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Historical Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Historical Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Historical Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Historical Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/algo/futures/subOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Sub Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Sub Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Sub Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Sub Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Sub Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Sub Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Sub Orders"
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
						"Futures Algo"
					],
					"operation": [
						"GET Sapi v1 Algo Futures Sub Orders"
					]
				}
			}
		},
];
