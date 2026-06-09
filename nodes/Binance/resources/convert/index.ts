import type { INodeProperties } from 'n8n-workflow';

export const convertDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi v1 Convert Exchange Info",
					"value": "GET Sapi v1 Convert Exchange Info",
					"action": "List All Convert Pairs",
					"description": "Query for all convertible token pairs and the tokens’ respective upper/lower limits\n\nWeight(IP): 3000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/convert/exchangeInfo"
						}
					}
				},
				{
					"name": "GET Sapi v1 Convert Asset Info",
					"value": "GET Sapi v1 Convert Asset Info",
					"action": "Query order quantity precision per asset (USER_DATA)",
					"description": "Query for supported asset precision information\n\nWeight(IP): 100",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/convert/assetInfo"
						}
					}
				},
				{
					"name": "POST Sapi v1 Convert Get Quote",
					"value": "POST Sapi v1 Convert Get Quote",
					"action": "Send quote request (USER_DATA)",
					"description": "Request a quote for the requested token pairs\n\nWeight(UID): 200",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/convert/getQuote"
						}
					}
				},
				{
					"name": "POST Sapi v1 Convert Accept Quote",
					"value": "POST Sapi v1 Convert Accept Quote",
					"action": "Accept Quote (TRADE)",
					"description": "Accept the offered quote by quote ID.\n\nWeight(UID): 500",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/convert/acceptQuote"
						}
					}
				},
				{
					"name": "GET Sapi v1 Convert Order Status",
					"value": "GET Sapi v1 Convert Order Status",
					"action": "Order status (USER_DATA)",
					"description": "Query order status by order ID.\n\nWeight(UID): 100",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/convert/orderStatus"
						}
					}
				},
				{
					"name": "POST Sapi v1 Convert Limit Place Order",
					"value": "POST Sapi v1 Convert Limit Place Order",
					"action": "Place limit order (USER_DATA)",
					"description": "Enable users to place a limit order\n\n- baseAsset or quoteAsset can be determined via exchangeInfo endpoint.\n- Limit price is defined from baseAsset to quoteAsset.\n- Either baseAmount or quoteAmount is used.\n\nWeight(UID): 500",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/convert/limit/placeOrder"
						}
					}
				},
				{
					"name": "POST Sapi v1 Convert Limit Cancel Order",
					"value": "POST Sapi v1 Convert Limit Cancel Order",
					"action": "Cancel limit order (USER_DATA)",
					"description": "Enable users to cancel a limit order\n\nWeight(UID): 200",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/convert/limit/cancelOrder"
						}
					}
				},
				{
					"name": "GET Sapi v1 Convert Limit Query Open Orders",
					"value": "GET Sapi v1 Convert Limit Query Open Orders",
					"action": "Query limit open orders (USER_DATA)",
					"description": "Enable users to query for all existing limit orders\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/convert/limit/queryOpenOrders"
						}
					}
				},
				{
					"name": "GET Sapi v1 Convert Trade Flow",
					"value": "GET Sapi v1 Convert Trade Flow",
					"action": "Get Convert Trade History (USER_DATA)",
					"description": "- The max interval between startTime and endTime is 30 days.\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/convert/tradeFlow"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/convert/exchangeInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Exchange Info"
					]
				}
			}
		},
		{
			"displayName": "From Asset",
			"name": "fromAsset",
			"description": "User spends coin",
			"default": "BTC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Exchange Info"
					]
				}
			}
		},
		{
			"displayName": "To Asset",
			"name": "toAsset",
			"description": "User receives coin",
			"default": "USDT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Exchange Info"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/convert/assetInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Asset Info"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Asset Info"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Asset Info"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Asset Info"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Asset Info"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/convert/getQuote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Get Quote"
					]
				}
			}
		},
		{
			"displayName": "From Asset",
			"name": "fromAsset",
			"required": true,
			"default": "BTC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Get Quote"
					]
				}
			}
		},
		{
			"displayName": "To Asset",
			"name": "toAsset",
			"required": true,
			"default": "USDT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Get Quote"
					]
				}
			}
		},
		{
			"displayName": "From Amount",
			"name": "fromAmount",
			"description": "When specified, it is the amount you will be debited after the conversion",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Get Quote"
					]
				}
			}
		},
		{
			"displayName": "To Amount",
			"name": "toAmount",
			"description": "When specified, it is the amount you will be debited after the conversion",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "toAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Valid Time",
			"name": "validTime",
			"description": "10s, 30s, 1m, 2m, default 10s",
			"default": "10s",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "validTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Wallet Type",
			"name": "walletType",
			"description": "SPOT or FUNDING. Default is SPOT",
			"default": "SPOT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "walletType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Get Quote"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Get Quote"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Get Quote"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Get Quote"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Get Quote"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/convert/acceptQuote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Accept Quote"
					]
				}
			}
		},
		{
			"displayName": "Quote ID",
			"name": "quoteId",
			"required": true,
			"default": 1000,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "quoteId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Accept Quote"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Accept Quote"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Accept Quote"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Accept Quote"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Accept Quote"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/convert/orderStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Order Status"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"default": 1000,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Order Status"
					]
				}
			}
		},
		{
			"displayName": "Quote ID",
			"name": "quoteId",
			"default": 1000,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "quoteId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Order Status"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Order Status"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Order Status"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Order Status"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Order Status"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/convert/limit/placeOrder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Place Order"
					]
				}
			}
		},
		{
			"displayName": "Base Asset",
			"name": "baseAsset",
			"required": true,
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "baseAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Place Order"
					]
				}
			}
		},
		{
			"displayName": "Quote Asset",
			"name": "quoteAsset",
			"required": true,
			"default": "USDT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "quoteAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Place Order"
					]
				}
			}
		},
		{
			"displayName": "Limit Price",
			"name": "limitPrice",
			"required": true,
			"description": "Symbol limit price (from baseAsset to quoteAsset)",
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Place Order"
					]
				}
			}
		},
		{
			"displayName": "Base Amount",
			"name": "baseAmount",
			"description": "Base asset amount. (One of baseAmount or quoteAmount is required)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "baseAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Place Order"
					]
				}
			}
		},
		{
			"displayName": "Quote Amount",
			"name": "quoteAmount",
			"description": "Quote asset amount. (One of baseAmount or quoteAmount is required)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quoteAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Place Order"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Place Order"
					]
				}
			}
		},
		{
			"displayName": "Wallet Type",
			"name": "walletType",
			"description": "SPOT or FUNDING or SPOT_FUNDING. It is to use which type of assets. Default is SPOT.",
			"default": "SPOT",
			"type": "options",
			"options": [
				{
					"name": "SPOT",
					"value": "SPOT"
				},
				{
					"name": "FUNDING",
					"value": "FUNDING"
				},
				{
					"name": "SPOT FUNDING",
					"value": "SPOT_FUNDING"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "walletType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Place Order"
					]
				}
			}
		},
		{
			"displayName": "Expired Type",
			"name": "expiredType",
			"description": "1_D, 3_D, 7_D, 30_D (D means day)",
			"default": "1_D",
			"type": "options",
			"options": [
				{
					"name": "1 D",
					"value": "1_D"
				},
				{
					"name": "3 D",
					"value": "3_D"
				},
				{
					"name": "7 D",
					"value": "7_D"
				},
				{
					"name": "30 D",
					"value": "30_D"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "expiredType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Place Order"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Place Order"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Place Order"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Place Order"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Place Order"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/convert/limit/cancelOrder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Cancel Order"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"default": 1603680255057330400,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Cancel Order"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Cancel Order"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Cancel Order"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Cancel Order"
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
						"Convert"
					],
					"operation": [
						"POST Sapi v1 Convert Limit Cancel Order"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/convert/limit/queryOpenOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Limit Query Open Orders"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Limit Query Open Orders"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Limit Query Open Orders"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Limit Query Open Orders"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Limit Query Open Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/convert/tradeFlow",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Trade Flow"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "startTime",
			"required": true,
			"description": "UTC timestamp in ms",
			"default": 1624248872184,
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Trade Flow"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "endTime",
			"required": true,
			"description": "UTC timestamp in ms",
			"default": 1624248872185,
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Trade Flow"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "default 100, max 1000",
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Trade Flow"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Trade Flow"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Trade Flow"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Trade Flow"
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
						"Convert"
					],
					"operation": [
						"GET Sapi v1 Convert Trade Flow"
					]
				}
			}
		},
];
