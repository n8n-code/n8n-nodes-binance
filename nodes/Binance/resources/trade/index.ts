import type { INodeProperties } from 'n8n-workflow';

export const tradeDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					]
				}
			},
			"options": [
				{
					"name": "POST Api V 3 Order Test",
					"value": "POST Api V 3 Order Test",
					"action": "Test New Order (TRADE)",
					"description": "Test new order creation and signature/recvWindow long.\nCreates and validates a new order but does not send it into the matching engine.\n\nWeight(IP):\n  - Without computeCommissionRates: `1`\n  - With computeCommissionRates: `20`",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v3/order/test"
						}
					}
				},
				{
					"name": "GET Api V 3 Order",
					"value": "GET Api V 3 Order",
					"action": "Query Order (USER_DATA)",
					"description": "Check an order's status.\n\n- Either `orderId` or `origClientOrderId` must be sent.\n- For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.\n\nWeight(IP): 4",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/order"
						}
					}
				},
				{
					"name": "POST Api V 3 Order",
					"value": "POST Api V 3 Order",
					"action": "New Order (TRADE)",
					"description": "Send in a new order.\n\n- `LIMIT_MAKER` are `LIMIT` orders that will be rejected if they would immediately match and trade as a taker.\n- `STOP_LOSS` and `TAKE_PROFIT` will execute a `MARKET` order when the `stopPrice` is reached.\n- Any `LIMIT` or `LIMIT_MAKER` type order can be made an iceberg order by sending an `icebergQty`.\n- Any order with an `icebergQty` MUST have `timeInForce` set to `GTC`.\n- `MARKET` orders using `quantity` specifies how much a user wants to buy or sell based on the market price.\n- `MARKET` orders using `quoteOrderQty` specifies the amount the user wants to spend (when buying) or receive (when selling) of the quote asset; the correct quantity will be determined based on the market liquidity and `quoteOrderQty`.\n- `MARKET` orders using `quoteOrderQty` will not break `LOT_SIZE` filter rules; the order will execute a quantity that will have the notional value as close as possible to `quoteOrderQty`.\n- same `newClientOrderId` can be accepted only when the previous one is filled, otherwise the order will be rejected.\n\nTrigger order price rules against market price for both `MARKET` and `LIMIT` versions:\n\n- Price above market price: `STOP_LOSS` `BUY`, `TAKE_PROFIT` `SELL`\n- Price below market price: `STOP_LOSS` `SELL`, `TAKE_PROFIT` `BUY`\n\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v3/order"
						}
					}
				},
				{
					"name": "DELETE Api V 3 Order",
					"value": "DELETE Api V 3 Order",
					"action": "Cancel Order (TRADE)",
					"description": "Cancel an active order.\n\nEither `orderId` or `origClientOrderId` must be sent.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v3/order"
						}
					}
				},
				{
					"name": "POST Api V 3 Order Cancel Replace",
					"value": "POST Api V 3 Order Cancel Replace",
					"action": "Cancel an Existing Order and Send a New Order (Trade)",
					"description": "Cancels an existing order and places a new order on the same symbol.\n\nFilters and Order Count are evaluated before the processing of the cancellation and order placement occurs.\n\nA new order that was not attempted (i.e. when newOrderResult: NOT_ATTEMPTED), will still increase the order count by 1.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v3/order/cancelReplace"
						}
					}
				},
				{
					"name": "GET Api V 3 Open Orders",
					"value": "GET Api V 3 Open Orders",
					"action": "Current Open Orders (USER_DATA)",
					"description": "Get all open orders on a symbol. Careful when accessing this with no symbol.\n\nWeight(IP):\n- `6` for a single symbol;\n- `80` when the symbol parameter is omitted;",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/openOrders"
						}
					}
				},
				{
					"name": "DELETE Api V 3 Open Orders",
					"value": "DELETE Api V 3 Open Orders",
					"action": "Cancel all Open Orders on a Symbol (TRADE)",
					"description": "Cancels all active orders on a symbol.\nThis includes OCO orders.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v3/openOrders"
						}
					}
				},
				{
					"name": "GET Api V 3 All Orders",
					"value": "GET Api V 3 All Orders",
					"action": "All Orders (USER_DATA)",
					"description": "Get all account orders; active, canceled, or filled..\n\n- If `orderId` is set, it will get orders >= that `orderId`. Otherwise most recent orders are returned.\n- For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.\n- If `startTime` and/or `endTime` provided, `orderId` is not required\n\nWeight(IP): 20",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/allOrders"
						}
					}
				},
				{
					"name": "POST Api V 3 Order List Oco",
					"value": "POST Api V 3 Order List Oco",
					"action": "New Order list - OCO (TRADE)",
					"description": "Send in an one-cancels-the-other (OCO) pair, where activation of one order immediately cancels the other.\n\n- An `OCO` has 2 orders called the above order and below order.\n- One of the orders must be a `LIMIT_MAKER` order and the other must be `STOP_LOSS` or`STOP_LOSS_LIMIT` order.\n- Price restrictions:\n    - If the `OCO` is on the `SELL` side: `LIMIT_MAKER` price > Last Traded Price > stopPrice\n    - If the `OCO` is on the `BUY` side: `LIMIT_MAKER` price < Last Traded Price < stopPrice\n- OCOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_ORDERS` filter, and the `MAX_NUM_ORDERS` filter.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v3/orderList/oco"
						}
					}
				},
				{
					"name": "POST Api V 3 Order List Oto",
					"value": "POST Api V 3 Order List Oto",
					"action": "New Order List - OTO (TRADE)",
					"description": "Places an `OTO`.\n- An `OTO` (One-Triggers-the-Other) is an order list comprised of 2 orders.\n- The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book.\n- The second order is called the pending order. It can be any order type except for `MARKET` orders using parameter `quoteOrderQty`. The pending order is only placed on the order book when the working order gets fully filled.\n- If either the working order or the pending order is cancelled individually, the other order in the order list will also be canceled or expired.\n- When the order list is placed, if the working order gets immediately fully filled, the placement response will show the working order as `FILLED` but the pending order will still appear as `PENDING_NEW`. You need to query the status of the pending order again to see its updated status.\n- OTOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and `MAX_NUM_ORDERS` filter.\n\nWeight: 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v3/orderList/oto"
						}
					}
				},
				{
					"name": "POST Api V 3 Order List Otoco",
					"value": "POST Api V 3 Order List Otoco",
					"action": "New Order List - OTOCO (TRADE)",
					"description": "Place an `OTOCO`.\n- An `OTOCO` (One-Triggers-One-Cancels-the-Other) is an order list comprised of 3 orders.\n- The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book.\n  - The behavior of the working order is the same as the `OTO`.\n- `OTOCO` has 2 pending orders (pending above and pending below), forming an `OCO` pair. The pending orders are only placed on the order book when the working order gets fully filled.\n  - The rules of the pending above and pending below follow the same rules as the Order List `OCO`.\n- OTOCOs add 3 orders against the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter, and `MAX_NUM_ORDERS` filter.\n\nWeight: 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v3/orderList/otoco"
						}
					}
				},
				{
					"name": "GET Api V 3 Order List",
					"value": "GET Api V 3 Order List",
					"action": "Query OCO (USER_DATA)",
					"description": "Retrieves a specific OCO based on provided optional parameters\n\nWeight(IP): 4",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/orderList"
						}
					}
				},
				{
					"name": "DELETE Api V 3 Order List",
					"value": "DELETE Api V 3 Order List",
					"action": "Cancel OCO (TRADE)",
					"description": "Cancel an entire Order List\n\nCanceling an individual leg will cancel the entire OCO\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v3/orderList"
						}
					}
				},
				{
					"name": "GET Api V 3 All Order List",
					"value": "GET Api V 3 All Order List",
					"action": "Query all OCO (USER_DATA)",
					"description": "Retrieves all OCO based on provided optional parameters\n\nWeight(IP): 20",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/allOrderList"
						}
					}
				},
				{
					"name": "GET Api V 3 Open Order List",
					"value": "GET Api V 3 Open Order List",
					"action": "Query Open OCO (USER_DATA)",
					"description": "Weight(IP): 6",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/openOrderList"
						}
					}
				},
				{
					"name": "POST Api V 3 Sor Order",
					"value": "POST Api V 3 Sor Order",
					"action": "New order using SOR (TRADE)",
					"description": "Weight(IP): 6",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v3/sor/order"
						}
					}
				},
				{
					"name": "POST Api V 3 Sor Order Test",
					"value": "POST Api V 3 Sor Order Test",
					"action": "Test new order using SOR (TRADE)",
					"description": "Test new order creation and signature/recvWindow using smart order routing (SOR).\nCreates and validates a new order but does not send it into the matching engine.\n\nWeight(IP):\n  - Without computeCommissionRates: `1`\n  - With computeCommissionRates: `20`",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v3/sor/order/test"
						}
					}
				},
				{
					"name": "GET Api V 3 Account",
					"value": "GET Api V 3 Account",
					"action": "Account Information (USER_DATA)",
					"description": "Get current account information.\n\nWeight(IP): 20",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/account"
						}
					}
				},
				{
					"name": "GET Api V 3 My Trades",
					"value": "GET Api V 3 My Trades",
					"action": "Account Trade List (USER_DATA)",
					"description": "Get trades for a specific account and symbol.\n\nIf `fromId` is set, it will get id >= that `fromId`. Otherwise most recent orders are returned.\n\nThe time between startTime and endTime can't be longer than 24 hours.\nThese are the supported combinations of all parameters:\n\n  symbol\n\n  symbol + orderId\n\n  symbol + startTime\n\n  symbol + endTime\n\n  symbol + fromId\n\n  symbol + startTime + endTime\n\n  symbol+ orderId + fromId\n\nWeight(IP): 20",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/myTrades"
						}
					}
				},
				{
					"name": "GET Api V 3 Rate Limit Order",
					"value": "GET Api V 3 Rate Limit Order",
					"action": "Query Current Order Count Usage (TRADE)",
					"description": "Displays the user's current order count usage for all intervals.\n\nWeight(IP): 40",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/rateLimit/order"
						}
					}
				},
				{
					"name": "GET Api V 3 My Prevented Matches",
					"value": "GET Api V 3 My Prevented Matches",
					"action": "Query Prevented Matches",
					"description": "Displays the list of orders that were expired because of STP.\n\nFor additional information on what a Prevented match is, as well as Self Trade Prevention (STP), please refer to our STP FAQ page.\n\nThese are the combinations supported:\n\n* symbol + preventedMatchId\n* symbol + orderId\n* symbol + orderId + fromPreventedMatchId (limit will default to 500)\n* symbol + orderId + fromPreventedMatchId + limit\n\nWeight(IP):\n\nCase \t                          Weight\nIf symbol is invalid: \t        2\nQuerying by preventedMatchId: \t2\nQuerying by orderId: \t          20",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/myPreventedMatches"
						}
					}
				},
				{
					"name": "GET Api V 3 My Allocations",
					"value": "GET Api V 3 My Allocations",
					"action": "Query Allocations (USER_DATA)",
					"description": "Retrieves allocations resulting from SOR order placement.\n\nWeight: 20\n\nSupported parameter combinations:\nParameters \t                          Response\nsymbol \t                              allocations from oldest to newest\nsymbol + startTime \t                  oldest allocations since startTime\nsymbol + endTime \t                    newest allocations until endTime\nsymbol + startTime + endTime \t        allocations within the time range\nsymbol + fromAllocationId \t          allocations by allocation ID\nsymbol + orderId \t                    allocations related to an order starting with oldest\nsymbol + orderId + fromAllocationId \tallocations related to an order by allocation ID\n\nNote: The time between startTime and endTime can't be longer than 24 hours.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/myAllocations"
						}
					}
				},
				{
					"name": "GET Api V 3 Account Commission",
					"value": "GET Api V 3 Account Commission",
					"action": "Query Commission Rates (USER_DATA)",
					"description": "Get current account commission rates.\n\nWeight: 20",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/account/commission"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v3/order/test",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Order type",
			"default": "LIMIT",
			"type": "options",
			"options": [
				{
					"name": "LIMIT",
					"value": "LIMIT"
				},
				{
					"name": "MARKET",
					"value": "MARKET"
				},
				{
					"name": "STOP LOSS",
					"value": "STOP_LOSS"
				},
				{
					"name": "STOP LOSS LIMIT",
					"value": "STOP_LOSS_LIMIT"
				},
				{
					"name": "TAKE PROFIT",
					"value": "TAKE_PROFIT"
				},
				{
					"name": "TAKE PROFIT LIMIT",
					"value": "TAKE_PROFIT_LIMIT"
				},
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "Time In Force",
			"name": "timeInForce",
			"description": "Order time in force",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "timeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "Quantity",
			"name": "quantity",
			"description": "Order quantity",
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "Quote Order Qty",
			"name": "quoteOrderQty",
			"description": "Quote quantity",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quoteOrderQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"description": "Order price",
			"default": 219,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "price",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "New Client Order Id",
			"name": "newClientOrderId",
			"description": "Used to uniquely identify this cancel. Automatically generated by default",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "newClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "Strategy Id",
			"name": "strategyId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "strategyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "Strategy Type",
			"name": "strategyType",
			"description": "The value cannot be less than 1000000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "strategyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "Stop Price",
			"name": "stopPrice",
			"description": "Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.",
			"default": 221.01,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "stopPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "Trailing Delta",
			"name": "trailingDelta",
			"description": "Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "trailingDelta",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "Iceberg Qty",
			"name": "icebergQty",
			"description": "Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "icebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "New Order Resp Type",
			"name": "newOrderRespType",
			"description": "Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.",
			"default": "ACK",
			"type": "options",
			"options": [
				{
					"name": "ACK",
					"value": "ACK"
				},
				{
					"name": "RESULT",
					"value": "RESULT"
				},
				{
					"name": "FULL",
					"value": "FULL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "newOrderRespType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "Compute Commission Rates",
			"name": "computeCommissionRates",
			"description": "Default: false",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "computeCommissionRates",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Test"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Order Id",
			"name": "orderId",
			"description": "Order id",
			"default": 0,
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Orig Client Order Id",
			"name": "origClientOrderId",
			"description": "Order id from client",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "origClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v3/order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Order type",
			"default": "LIMIT",
			"type": "options",
			"options": [
				{
					"name": "LIMIT",
					"value": "LIMIT"
				},
				{
					"name": "MARKET",
					"value": "MARKET"
				},
				{
					"name": "STOP LOSS",
					"value": "STOP_LOSS"
				},
				{
					"name": "STOP LOSS LIMIT",
					"value": "STOP_LOSS_LIMIT"
				},
				{
					"name": "TAKE PROFIT",
					"value": "TAKE_PROFIT"
				},
				{
					"name": "TAKE PROFIT LIMIT",
					"value": "TAKE_PROFIT_LIMIT"
				},
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Time In Force",
			"name": "timeInForce",
			"description": "Order time in force",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "timeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Quantity",
			"name": "quantity",
			"description": "Order quantity",
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Quote Order Qty",
			"name": "quoteOrderQty",
			"description": "Quote quantity",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quoteOrderQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"description": "Order price",
			"default": 219,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "price",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "New Client Order Id",
			"name": "newClientOrderId",
			"description": "Used to uniquely identify this cancel. Automatically generated by default",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "newClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Strategy Id",
			"name": "strategyId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "strategyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Strategy Type",
			"name": "strategyType",
			"description": "The value cannot be less than 1000000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "strategyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Stop Price",
			"name": "stopPrice",
			"description": "Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.",
			"default": 221.01,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "stopPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Trailing Delta",
			"name": "trailingDelta",
			"description": "Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "trailingDelta",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Iceberg Qty",
			"name": "icebergQty",
			"description": "Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "icebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "New Order Resp Type",
			"name": "newOrderRespType",
			"description": "Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.",
			"default": "ACK",
			"type": "options",
			"options": [
				{
					"name": "ACK",
					"value": "ACK"
				},
				{
					"name": "RESULT",
					"value": "RESULT"
				},
				{
					"name": "FULL",
					"value": "FULL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "newOrderRespType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Self Trade Prevention Mode",
			"name": "selfTradePreventionMode",
			"description": "The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.",
			"default": "EXPIRE_TAKER",
			"type": "options",
			"options": [
				{
					"name": "EXPIRE TAKER",
					"value": "EXPIRE_TAKER"
				},
				{
					"name": "EXPIRE MAKER",
					"value": "EXPIRE_MAKER"
				},
				{
					"name": "EXPIRE BOTH",
					"value": "EXPIRE_BOTH"
				},
				{
					"name": "NONE",
					"value": "NONE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "selfTradePreventionMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v3/order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Order Id",
			"name": "orderId",
			"description": "Order id",
			"default": 0,
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Orig Client Order Id",
			"name": "origClientOrderId",
			"description": "Order id from client",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "origClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "New Client Order Id",
			"name": "newClientOrderId",
			"description": "Used to uniquely identify this cancel. Automatically generated by default",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "newClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "Cancel Restrictions",
			"name": "cancelRestrictions",
			"default": "ONLY_NEW",
			"type": "options",
			"options": [
				{
					"name": "ONLY NEW",
					"value": "ONLY_NEW"
				},
				{
					"name": "ONLY PARTIALLY FILLED",
					"value": "ONLY_PARTIALLY_FILLED"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "cancelRestrictions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v3/order/cancelReplace",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Order type",
			"default": "LIMIT",
			"type": "options",
			"options": [
				{
					"name": "LIMIT",
					"value": "LIMIT"
				},
				{
					"name": "MARKET",
					"value": "MARKET"
				},
				{
					"name": "STOP LOSS",
					"value": "STOP_LOSS"
				},
				{
					"name": "STOP LOSS LIMIT",
					"value": "STOP_LOSS_LIMIT"
				},
				{
					"name": "TAKE PROFIT",
					"value": "TAKE_PROFIT"
				},
				{
					"name": "TAKE PROFIT LIMIT",
					"value": "TAKE_PROFIT_LIMIT"
				},
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Cancel Replace Mode",
			"name": "cancelReplaceMode",
			"required": true,
			"description": "- `STOP_ON_FAILURE` If the cancel request fails, the new order placement will not be attempted.\n- `ALLOW_FAILURES` If new order placement will be attempted even if cancel request fails.",
			"default": "STOP_ON_FAILURE",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cancelReplaceMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Cancel Restrictions",
			"name": "cancelRestrictions",
			"default": "ONLY_NEW",
			"type": "options",
			"options": [
				{
					"name": "ONLY NEW",
					"value": "ONLY_NEW"
				},
				{
					"name": "ONLY PARTIALLY FILLED",
					"value": "ONLY_PARTIALLY_FILLED"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "cancelRestrictions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Time In Force",
			"name": "timeInForce",
			"description": "Order time in force",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "timeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Quantity",
			"name": "quantity",
			"description": "Order quantity",
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Quote Order Qty",
			"name": "quoteOrderQty",
			"description": "Quote quantity",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quoteOrderQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"description": "Order price",
			"default": 219,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "price",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Cancel New Client Order Id",
			"name": "cancelNewClientOrderId",
			"description": "Used to uniquely identify this cancel. Automatically generated by default",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cancelNewClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Cancel Orig Client Order Id",
			"name": "cancelOrigClientOrderId",
			"description": "Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cancelOrigClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Cancel Order Id",
			"name": "cancelOrderId",
			"description": "Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence.",
			"default": 12,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "cancelOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "New Client Order Id",
			"name": "newClientOrderId",
			"description": "Used to uniquely identify this cancel. Automatically generated by default",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "newClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Strategy Id",
			"name": "strategyId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "strategyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Strategy Type",
			"name": "strategyType",
			"description": "The value cannot be less than 1000000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "strategyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Stop Price",
			"name": "stopPrice",
			"description": "Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.",
			"default": 221.01,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "stopPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Trailing Delta",
			"name": "trailingDelta",
			"description": "Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "trailingDelta",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Iceberg Qty",
			"name": "icebergQty",
			"description": "Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "icebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "New Order Resp Type",
			"name": "newOrderRespType",
			"description": "Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.",
			"default": "ACK",
			"type": "options",
			"options": [
				{
					"name": "ACK",
					"value": "ACK"
				},
				{
					"name": "RESULT",
					"value": "RESULT"
				},
				{
					"name": "FULL",
					"value": "FULL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "newOrderRespType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "Self Trade Prevention Mode",
			"name": "selfTradePreventionMode",
			"description": "The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.",
			"default": "EXPIRE_TAKER",
			"type": "options",
			"options": [
				{
					"name": "EXPIRE TAKER",
					"value": "EXPIRE_TAKER"
				},
				{
					"name": "EXPIRE MAKER",
					"value": "EXPIRE_MAKER"
				},
				{
					"name": "EXPIRE BOTH",
					"value": "EXPIRE_BOTH"
				},
				{
					"name": "NONE",
					"value": "NONE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "selfTradePreventionMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order Cancel Replace"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/openOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 Open Orders"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Open Orders"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Open Orders"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Open Orders"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Open Orders"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Open Orders"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v3/openOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Open Orders"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Open Orders"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Open Orders"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Open Orders"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Open Orders"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Open Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/allOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Orders"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Orders"
					]
				}
			}
		},
		{
			"displayName": "Order Id",
			"name": "orderId",
			"description": "Order id",
			"default": 0,
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Orders"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Orders"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Orders"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 500; max 1000.",
			"default": 5,
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Orders"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Orders"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Orders"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Orders"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Orders"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v3/orderList/oco",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "List Client Order Id",
			"name": "listClientOrderId",
			"description": "Arbitrary unique ID among open order lists. Automatically generated if not sent.\nA new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.\n`listClientOrderId` is distinct from the `aboveClientOrderId` and the `belowCLientOrderId`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Above Type",
			"name": "aboveType",
			"required": true,
			"description": "Supported values : `STOP_LOSS_LIMIT`, `STOP_LOSS`, `LIMIT_MAKER`",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "aboveType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Above Client Order Id",
			"name": "aboveClientOrderId",
			"description": "Arbitrary unique ID among open orders for the above order. Automatically generated if not sent",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "aboveClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Above Iceberg Qty",
			"name": "aboveIcebergQty",
			"description": "Note that this can only be used if `aboveTimeInForce` is `GTC`.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "aboveIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Above Price",
			"name": "abovePrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "abovePrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Above Stop Price",
			"name": "aboveStopPrice",
			"description": "Can be used if `aboveType` is `STOP_LOSS` or `STOP_LOSS_LIMIT`.\nEither `aboveStopPrice` or `aboveTrailingDelta` or both, must be specified.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "aboveStopPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Above Trailing Delta",
			"name": "aboveTrailingDelta",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "aboveTrailingDelta",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Above Time In Force",
			"name": "aboveTimeInForce",
			"description": "Required if the `aboveType` is `STOP_LOSS_LIMIT`.",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "aboveTimeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Above Strategy Id",
			"name": "aboveStrategyId",
			"description": "Arbitrary numeric value identifying the above order within an order strategy.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "aboveStrategyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Above Strategy Type",
			"name": "aboveStrategyType",
			"description": "Arbitrary numeric value identifying the above order strategy.\nValues smaller than 1000000 are reserved and cannot be used.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "aboveStrategyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Below Type",
			"name": "belowType",
			"required": true,
			"description": "Supported values : `STOP_LOSS_LIMIT`, `STOP_LOSS`, `LIMIT_MAKER`",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "belowType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Below Client Order Id",
			"name": "belowClientOrderId",
			"description": "Arbitrary unique ID among open orders for the below order. Automatically generated if not sent",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "belowClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Below Iceberg Qty",
			"name": "belowIcebergQty",
			"description": "Note that this can only be used if `belowTimeInForce` is `GTC`.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "belowIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Below Price",
			"name": "belowPrice",
			"description": "Can be used if `belowType` is `STOP_LOSS_LIMIT` or `LIMIT_MAKER` to specify the limit price.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "belowPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Below Stop Price",
			"name": "belowStopPrice",
			"description": "Can be used if `belowType` is `STOP_LOSS` or `STOP_LOSS_LIMIT`.\nEither `belowStopPrice` or `belowTrailingDelta` or both, must be specified.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "belowStopPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Below Trailing Delta",
			"name": "belowTrailingDelta",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "belowTrailingDelta",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Below Time In Force",
			"name": "belowTimeInForce",
			"description": "Required if the `belowType` is `STOP_LOSS_LIMIT`.",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "belowTimeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Below Strategy Id",
			"name": "belowStrategyId",
			"description": "Arbitrary numeric value identifying the below order within an order strategy.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "belowStrategyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Below Strategy Type",
			"name": "belowStrategyType",
			"description": "Arbitrary numeric value identifying the below order strategy.\nValues smaller than 1000000 are reserved and cannot be used.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "belowStrategyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "New Order Resp Type",
			"name": "newOrderRespType",
			"description": "Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.",
			"default": "ACK",
			"type": "options",
			"options": [
				{
					"name": "ACK",
					"value": "ACK"
				},
				{
					"name": "RESULT",
					"value": "RESULT"
				},
				{
					"name": "FULL",
					"value": "FULL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "newOrderRespType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "Self Trade Prevention Mode",
			"name": "selfTradePreventionMode",
			"description": "The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.",
			"default": "EXPIRE_TAKER",
			"type": "options",
			"options": [
				{
					"name": "EXPIRE TAKER",
					"value": "EXPIRE_TAKER"
				},
				{
					"name": "EXPIRE MAKER",
					"value": "EXPIRE_MAKER"
				},
				{
					"name": "EXPIRE BOTH",
					"value": "EXPIRE_BOTH"
				},
				{
					"name": "NONE",
					"value": "NONE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "selfTradePreventionMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oco"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v3/orderList/oto",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "List Client Order Id",
			"name": "listClientOrderId",
			"description": "Arbitrary unique ID among open order lists. Automatically generated if not sent.\nA new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.\n`listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "New Order Resp Type",
			"name": "newOrderRespType",
			"description": "Set the response JSON.",
			"default": "ACK",
			"type": "options",
			"options": [
				{
					"name": "ACK",
					"value": "ACK"
				},
				{
					"name": "RESULT",
					"value": "RESULT"
				},
				{
					"name": "FULL",
					"value": "FULL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "newOrderRespType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Self Trade Prevention Mode",
			"name": "selfTradePreventionMode",
			"description": "The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.",
			"default": "EXPIRE_TAKER",
			"type": "options",
			"options": [
				{
					"name": "EXPIRE TAKER",
					"value": "EXPIRE_TAKER"
				},
				{
					"name": "EXPIRE MAKER",
					"value": "EXPIRE_MAKER"
				},
				{
					"name": "EXPIRE BOTH",
					"value": "EXPIRE_BOTH"
				},
				{
					"name": "NONE",
					"value": "NONE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "selfTradePreventionMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Type",
			"name": "workingType",
			"required": true,
			"description": "Supported values: LIMIT,LIMIT_MAKER",
			"default": "LIMIT",
			"type": "options",
			"options": [
				{
					"name": "LIMIT",
					"value": "LIMIT"
				},
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "workingType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Side",
			"name": "workingSide",
			"required": true,
			"description": "BUY,SELL",
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
					"property": "workingSide",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Client Order Id",
			"name": "workingClientOrderId",
			"description": "Arbitrary unique ID among open orders for the working order. Automatically generated if not sent.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Price",
			"name": "workingPrice",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Quantity",
			"name": "workingQuantity",
			"required": true,
			"description": "Sets the quantity for the working order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingQuantity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Iceberg Qty",
			"name": "workingIcebergQty",
			"required": true,
			"description": "This can only be used if workingTimeInForce is GTC.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Time In Force",
			"name": "workingTimeInForce",
			"description": "GTC, IOC, FOK",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "workingTimeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Strategy Id",
			"name": "workingStrategyId",
			"description": "Arbitrary numeric value identifying the working order within an order strategy.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingStrategyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Strategy Type",
			"name": "workingStrategyType",
			"description": "Arbitrary numeric value identifying the working order strategy.\nValues smaller than 1000000 are reserved and cannot be used.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingStrategyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Type",
			"name": "pendingType",
			"required": true,
			"description": "Supported values: Order Types Note that MARKET orders using quoteOrderQty are not supported.",
			"default": "LIMIT",
			"type": "options",
			"options": [
				{
					"name": "LIMIT",
					"value": "LIMIT"
				},
				{
					"name": "MARKET",
					"value": "MARKET"
				},
				{
					"name": "STOP LOSS",
					"value": "STOP_LOSS"
				},
				{
					"name": "STOP LOSS LIMIT",
					"value": "STOP_LOSS_LIMIT"
				},
				{
					"name": "TAKE PROFIT",
					"value": "TAKE_PROFIT"
				},
				{
					"name": "TAKE PROFIT LIMIT",
					"value": "TAKE_PROFIT_LIMIT"
				},
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Side",
			"name": "pendingSide",
			"required": true,
			"description": "BUY,SELL",
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
					"property": "pendingSide",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Client Order Id",
			"name": "pendingClientOrderId",
			"description": "Arbitrary unique ID among open orders for the pending order. Automatically generated if not sent.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Price",
			"name": "pendingPrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Stop Price",
			"name": "pendingStopPrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingStopPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Trailing Delta",
			"name": "pendingTrailingDelta",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingTrailingDelta",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Quantity",
			"name": "pendingQuantity",
			"required": true,
			"description": "Sets the quantity for the pending order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingQuantity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Iceberg Qty",
			"name": "pendingIcebergQty",
			"description": "This can only be used if pendingTimeInForce is GTC.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Time In Force",
			"name": "pendingTimeInForce",
			"description": "GTC, IOC, FOK",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingTimeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Strategy Id",
			"name": "pendingStrategyId",
			"description": "Arbitrary numeric value identifying the pending order within an order strategy.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingStrategyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Strategy Type",
			"name": "pendingStrategyType",
			"description": "Arbitrary numeric value identifying the pending order strategy.\nValues smaller than 1000000 are reserved and cannot be used.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingStrategyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Oto"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v3/orderList/otoco",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "List Client Order Id",
			"name": "listClientOrderId",
			"description": "Arbitrary unique ID among open order lists. Automatically generated if not sent.\nA new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.\n`listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "New Order Resp Type",
			"name": "newOrderRespType",
			"description": "Set the response JSON.",
			"default": "ACK",
			"type": "options",
			"options": [
				{
					"name": "ACK",
					"value": "ACK"
				},
				{
					"name": "RESULT",
					"value": "RESULT"
				},
				{
					"name": "FULL",
					"value": "FULL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "newOrderRespType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Self Trade Prevention Mode",
			"name": "selfTradePreventionMode",
			"description": "The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.",
			"default": "EXPIRE_TAKER",
			"type": "options",
			"options": [
				{
					"name": "EXPIRE TAKER",
					"value": "EXPIRE_TAKER"
				},
				{
					"name": "EXPIRE MAKER",
					"value": "EXPIRE_MAKER"
				},
				{
					"name": "EXPIRE BOTH",
					"value": "EXPIRE_BOTH"
				},
				{
					"name": "NONE",
					"value": "NONE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "selfTradePreventionMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Type",
			"name": "workingType",
			"required": true,
			"description": "Supported values: LIMIT,LIMIT_MAKER",
			"default": "LIMIT",
			"type": "options",
			"options": [
				{
					"name": "LIMIT",
					"value": "LIMIT"
				},
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "workingType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Side",
			"name": "workingSide",
			"required": true,
			"description": "BUY,SELL",
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
					"property": "workingSide",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Client Order Id",
			"name": "workingClientOrderId",
			"description": "Arbitrary unique ID among open orders for the working order. Automatically generated if not sent.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Price",
			"name": "workingPrice",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Quantity",
			"name": "workingQuantity",
			"required": true,
			"description": "Sets the quantity for the working order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingQuantity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Iceberg Qty",
			"name": "workingIcebergQty",
			"required": true,
			"description": "This can only be used if workingTimeInForce is GTC.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Time In Force",
			"name": "workingTimeInForce",
			"description": "GTC, IOC, FOK",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "workingTimeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Strategy Id",
			"name": "workingStrategyId",
			"description": "Arbitrary numeric value identifying the working order within an order strategy.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingStrategyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Strategy Type",
			"name": "workingStrategyType",
			"description": "Arbitrary numeric value identifying the working order strategy.\nValues smaller than 1000000 are reserved and cannot be used.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingStrategyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Side",
			"name": "pendingSide",
			"required": true,
			"description": "BUY,SELL",
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
					"property": "pendingSide",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Quantity",
			"name": "pendingQuantity",
			"required": true,
			"description": "Sets the quantity for the pending order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingQuantity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Type",
			"name": "pendingAboveType",
			"required": true,
			"description": "Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT",
			"default": "LIMIT_MAKER",
			"type": "options",
			"options": [
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
				},
				{
					"name": "STOP LOSS",
					"value": "STOP_LOSS"
				},
				{
					"name": "STOP LOSS LIMIT",
					"value": "STOP_LOSS_LIMIT"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Client Order Id",
			"name": "pendingAboveClientOrderId",
			"description": "Arbitrary unique ID among open orders for the pending above order. Automatically generated if not sent.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Price",
			"name": "pendingAbovePrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAbovePrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Stop Price",
			"name": "pendingAboveStopPrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveStopPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Trailing Delta",
			"name": "pendingAboveTrailingDelta",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveTrailingDelta",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Iceberg Qty",
			"name": "pendingAboveIcebergQty",
			"description": "This can only be used if pendingAboveTimeInForce is GTC.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Time In Force",
			"name": "pendingAboveTimeInForce",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveTimeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Strategy Id",
			"name": "pendingAboveStrategyId",
			"description": "Arbitrary numeric value identifying the pending above order within an order strategy.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveStrategyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Strategy Type",
			"name": "pendingAboveStrategyType",
			"description": "Arbitrary numeric value identifying the pending above order strategy.\nValues smaller than 1000000 are reserved and cannot be used.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveStrategyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Type",
			"name": "pendingBelowType",
			"description": "Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT",
			"default": "LIMIT_MAKER",
			"type": "options",
			"options": [
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
				},
				{
					"name": "STOP LOSS",
					"value": "STOP_LOSS"
				},
				{
					"name": "STOP LOSS LIMIT",
					"value": "STOP_LOSS_LIMIT"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Client Order Id",
			"name": "pendingBelowClientOrderId",
			"description": "Arbitrary unique ID among open orders for the pending below order. Automatically generated if not sent.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Price",
			"name": "pendingBelowPrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Stop Price",
			"name": "pendingBelowStopPrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowStopPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Trailing Delta",
			"name": "pendingBelowTrailingDelta",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowTrailingDelta",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Iceberg Qty",
			"name": "pendingBelowIcebergQty",
			"description": "This can only be used if pendingBelowTimeInForce is GTC.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Time In Force",
			"name": "pendingBelowTimeInForce",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowTimeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Strategy Id",
			"name": "pendingBelowStrategyId",
			"description": "Arbitrary numeric value identifying the pending below order within an order strategy.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowStrategyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Strategy Type",
			"name": "pendingBelowStrategyType",
			"description": "Arbitrary numeric value identifying the pending below order strategy.\nValues smaller than 1000000 are reserved and cannot be used.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowStrategyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Order List Otoco"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/orderList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order List"
					]
				}
			}
		},
		{
			"displayName": "Order List Id",
			"name": "orderListId",
			"description": "Order list id",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderListId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order List"
					]
				}
			}
		},
		{
			"displayName": "Orig Client Order Id",
			"name": "origClientOrderId",
			"description": "Order id from client",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "origClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Order List"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v3/orderList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order List"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order List"
					]
				}
			}
		},
		{
			"displayName": "Order List Id",
			"name": "orderListId",
			"description": "Order list id",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderListId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order List"
					]
				}
			}
		},
		{
			"displayName": "List Client Order Id",
			"name": "listClientOrderId",
			"description": "A unique Id for the entire orderList",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order List"
					]
				}
			}
		},
		{
			"displayName": "New Client Order Id",
			"name": "newClientOrderId",
			"description": "Used to uniquely identify this cancel. Automatically generated by default",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "newClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order List"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order List"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order List"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order List"
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
						"Trade"
					],
					"operation": [
						"DELETE Api V 3 Order List"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/allOrderList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Order List"
					]
				}
			}
		},
		{
			"displayName": "From Id",
			"name": "fromId",
			"description": "Trade id to fetch from. Default gets most recent trades.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Order List"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 500; max 1000.",
			"default": 5,
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 All Order List"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/openOrderList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 Open Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Open Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Open Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Open Order List"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Open Order List"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v3/sor/order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Order type",
			"default": "LIMIT",
			"type": "options",
			"options": [
				{
					"name": "LIMIT",
					"value": "LIMIT"
				},
				{
					"name": "MARKET",
					"value": "MARKET"
				},
				{
					"name": "STOP LOSS",
					"value": "STOP_LOSS"
				},
				{
					"name": "STOP LOSS LIMIT",
					"value": "STOP_LOSS_LIMIT"
				},
				{
					"name": "TAKE PROFIT",
					"value": "TAKE_PROFIT"
				},
				{
					"name": "TAKE PROFIT LIMIT",
					"value": "TAKE_PROFIT_LIMIT"
				},
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
					]
				}
			}
		},
		{
			"displayName": "Time In Force",
			"name": "timeInForce",
			"description": "Order time in force",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "timeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "price",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
					]
				}
			}
		},
		{
			"displayName": "New Client Order Id",
			"name": "newClientOrderId",
			"description": "Used to uniquely identify this cancel. Automatically generated by default",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "newClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
					]
				}
			}
		},
		{
			"displayName": "Strategy Id",
			"name": "strategyId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "strategyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
					]
				}
			}
		},
		{
			"displayName": "Strategy Type",
			"name": "strategyType",
			"description": "The value cannot be less than 1000000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "strategyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
					]
				}
			}
		},
		{
			"displayName": "Iceberg Qty",
			"name": "icebergQty",
			"description": "Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "icebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
					]
				}
			}
		},
		{
			"displayName": "New Order Resp Type",
			"name": "newOrderRespType",
			"description": "Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.",
			"default": "ACK",
			"type": "options",
			"options": [
				{
					"name": "ACK",
					"value": "ACK"
				},
				{
					"name": "RESULT",
					"value": "RESULT"
				},
				{
					"name": "FULL",
					"value": "FULL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "newOrderRespType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
					]
				}
			}
		},
		{
			"displayName": "Self Trade Prevention Mode",
			"name": "selfTradePreventionMode",
			"description": "The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.",
			"default": "EXPIRE_TAKER",
			"type": "options",
			"options": [
				{
					"name": "EXPIRE TAKER",
					"value": "EXPIRE_TAKER"
				},
				{
					"name": "EXPIRE MAKER",
					"value": "EXPIRE_MAKER"
				},
				{
					"name": "EXPIRE BOTH",
					"value": "EXPIRE_BOTH"
				},
				{
					"name": "NONE",
					"value": "NONE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "selfTradePreventionMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v3/sor/order/test",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Order type",
			"default": "LIMIT",
			"type": "options",
			"options": [
				{
					"name": "LIMIT",
					"value": "LIMIT"
				},
				{
					"name": "MARKET",
					"value": "MARKET"
				},
				{
					"name": "STOP LOSS",
					"value": "STOP_LOSS"
				},
				{
					"name": "STOP LOSS LIMIT",
					"value": "STOP_LOSS_LIMIT"
				},
				{
					"name": "TAKE PROFIT",
					"value": "TAKE_PROFIT"
				},
				{
					"name": "TAKE PROFIT LIMIT",
					"value": "TAKE_PROFIT_LIMIT"
				},
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
					]
				}
			}
		},
		{
			"displayName": "Time In Force",
			"name": "timeInForce",
			"description": "Order time in force",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "timeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "price",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
					]
				}
			}
		},
		{
			"displayName": "New Client Order Id",
			"name": "newClientOrderId",
			"description": "Used to uniquely identify this cancel. Automatically generated by default",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "newClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
					]
				}
			}
		},
		{
			"displayName": "Strategy Id",
			"name": "strategyId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "strategyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
					]
				}
			}
		},
		{
			"displayName": "Strategy Type",
			"name": "strategyType",
			"description": "The value cannot be less than 1000000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "strategyType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
					]
				}
			}
		},
		{
			"displayName": "Iceberg Qty",
			"name": "icebergQty",
			"description": "Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "icebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
					]
				}
			}
		},
		{
			"displayName": "New Order Resp Type",
			"name": "newOrderRespType",
			"description": "Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.",
			"default": "ACK",
			"type": "options",
			"options": [
				{
					"name": "ACK",
					"value": "ACK"
				},
				{
					"name": "RESULT",
					"value": "RESULT"
				},
				{
					"name": "FULL",
					"value": "FULL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "newOrderRespType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
					]
				}
			}
		},
		{
			"displayName": "Self Trade Prevention Mode",
			"name": "selfTradePreventionMode",
			"description": "The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.",
			"default": "EXPIRE_TAKER",
			"type": "options",
			"options": [
				{
					"name": "EXPIRE TAKER",
					"value": "EXPIRE_TAKER"
				},
				{
					"name": "EXPIRE MAKER",
					"value": "EXPIRE_MAKER"
				},
				{
					"name": "EXPIRE BOTH",
					"value": "EXPIRE_BOTH"
				},
				{
					"name": "NONE",
					"value": "NONE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "selfTradePreventionMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
					]
				}
			}
		},
		{
			"displayName": "Compute Commission Rates",
			"name": "computeCommissionRates",
			"description": "Default: false",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "computeCommissionRates",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
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
						"Trade"
					],
					"operation": [
						"POST Api V 3 Sor Order Test"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 Account"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Account"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Account"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Account"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Account"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/myTrades",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Trades"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Trades"
					]
				}
			}
		},
		{
			"displayName": "Order Id",
			"name": "orderId",
			"description": "This can only be used in combination with symbol.",
			"default": 0,
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Trades"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Trades"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Trades"
					]
				}
			}
		},
		{
			"displayName": "From Id",
			"name": "fromId",
			"description": "Trade id to fetch from. Default gets most recent trades.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Trades"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 500; max 1000.",
			"default": 5,
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Trades"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Trades"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Trades"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Trades"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Trades"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/rateLimit/order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 Rate Limit Order"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Rate Limit Order"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Rate Limit Order"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Rate Limit Order"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Rate Limit Order"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/myPreventedMatches",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Prevented Matches"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Prevented Matches"
					]
				}
			}
		},
		{
			"displayName": "Prevented Match Id",
			"name": "preventedMatchId",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "preventedMatchId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Prevented Matches"
					]
				}
			}
		},
		{
			"displayName": "Order Id",
			"name": "orderId",
			"description": "Order id",
			"default": 0,
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Prevented Matches"
					]
				}
			}
		},
		{
			"displayName": "From Prevented Match Id",
			"name": "fromPreventedMatchId",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromPreventedMatchId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Prevented Matches"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 500; max 1000.",
			"default": 5,
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Prevented Matches"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Prevented Matches"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Prevented Matches"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Prevented Matches"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Prevented Matches"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/myAllocations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Allocations"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Allocations"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Allocations"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Allocations"
					]
				}
			}
		},
		{
			"displayName": "From Allocation Id",
			"name": "fromAllocationId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromAllocationId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Allocations"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 500; max 1000.",
			"default": 5,
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Allocations"
					]
				}
			}
		},
		{
			"displayName": "Order Id",
			"name": "orderId",
			"description": "Order id",
			"default": 0,
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Allocations"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Allocations"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Allocations"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Allocations"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 My Allocations"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/account/commission",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade"
					],
					"operation": [
						"GET Api V 3 Account Commission"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Account Commission"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Account Commission"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Account Commission"
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
						"Trade"
					],
					"operation": [
						"GET Api V 3 Account Commission"
					]
				}
			}
		},
];
