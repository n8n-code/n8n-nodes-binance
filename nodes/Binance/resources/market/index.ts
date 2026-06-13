import type { INodeProperties } from 'n8n-workflow';

export const marketDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					]
				}
			},
			"options": [
				{
					"name": "GET API v3 Ping",
					"value": "GET API v3 Ping",
					"action": "Test Connectivity",
					"description": "Test connectivity to the Rest API.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/ping"
						}
					}
				},
				{
					"name": "GET API v3 Time",
					"value": "GET API v3 Time",
					"action": "Check Server Time",
					"description": "Test connectivity to the Rest API and get the current server time.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/time"
						}
					}
				},
				{
					"name": "GET API v3 Exchange Info",
					"value": "GET API v3 Exchange Info",
					"action": "Exchange Information",
					"description": "Current exchange trading rules and symbol information\n\n- If any symbol provided in either symbol or symbols do not exist, the endpoint will throw an error.\n- All parameters are optional.\n- permissions can support single or multiple values (e.g. SPOT, [\"MARGIN\",\"LEVERAGED\"])\n- If permissions parameter not provided, the default values will be [\"SPOT\",\"MARGIN\",\"LEVERAGED\"].\n  - To display all permissions you need to specify them explicitly. (e.g. SPOT, MARGIN,...)\n\nExamples of Symbol Permissions Interpretation from the Response:\n- [[\"A\",\"B\"]] means you may place an order if your account has either permission \"A\" or permission \"B\".\n- [[\"A\"],[\"B\"]] means you can place an order if your account has permission \"A\" and permission \"B\".\n- [[\"A\"],[\"B\",\"C\"]] means you can place an order if your account has permission \"A\" and permission \"B\" or permission \"C\". (Inclusive or is applied here, not exclusive or, so your account may have both permission \"B\" and permission \"C\".)\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/exchangeInfo"
						}
					}
				},
				{
					"name": "GET API v3 Depth",
					"value": "GET API v3 Depth",
					"action": "Order Book",
					"description": "| Limit               | Weight(IP)  |\n|---------------------|-------------|\n| 1-100               | 5           |\n| 101-500             | 25          |\n| 501-1000            | 50          |\n| 1001-5000           | 250         |",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/depth"
						}
					}
				},
				{
					"name": "GET API v3 Trades",
					"value": "GET API v3 Trades",
					"action": "Recent Trades List",
					"description": "Get recent trades.\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/trades"
						}
					}
				},
				{
					"name": "GET API v3 Historical Trades",
					"value": "GET API v3 Historical Trades",
					"action": "Old Trade Lookup",
					"description": "Get older market trades.\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/historicalTrades"
						}
					}
				},
				{
					"name": "GET API v3 Agg Trades",
					"value": "GET API v3 Agg Trades",
					"action": "Compressed/Aggregate Trades List",
					"description": "Get compressed, aggregate trades. Trades that fill at the time, from the same order, with the same price will have the quantity aggregated.\n- If `fromId`, `startTime`, and `endTime` are not sent, the most recent aggregate trades will be returned.\n- Note that if a trade has the following values, this was a duplicate aggregate trade and marked as invalid:\n\n  p = '0' // price\n\n  q = '0' // qty\n\n  f = -1 // ﬁrst_trade_id\n\n  l = -1 // last_trade_id\n\nWeight(IP): 2",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/aggTrades"
						}
					}
				},
				{
					"name": "GET API v3 Klines",
					"value": "GET API v3 Klines",
					"action": "Kline/Candlestick Data",
					"description": "Kline/candlestick bars for a symbol.\nKlines are uniquely identified by their open time.\n\n- If `startTime` and `endTime` are not sent, the most recent klines are returned.\n\nWeight(IP): 2",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/klines"
						}
					}
				},
				{
					"name": "GET API v3 UI Klines",
					"value": "GET API v3 UI Klines",
					"action": "UIKlines",
					"description": "The request is similar to klines having the same parameters and response.\n\nuiKlines return modified kline data, optimized for presentation of candlestick charts.\n\nWeight(IP): 2",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/uiKlines"
						}
					}
				},
				{
					"name": "GET API v3 Avg Price",
					"value": "GET API v3 Avg Price",
					"action": "Current Average Price",
					"description": "Current average price for a symbol.\n\nWeight(IP): 2",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/avgPrice"
						}
					}
				},
				{
					"name": "GET API v3 Ticker 24 Hr",
					"value": "GET API v3 Ticker 24 Hr",
					"action": "24hr Ticker Price Change Statistics",
					"description": "24 hour rolling window price change statistics. Careful when accessing this with no symbol.\n\n- If the symbol is not sent, tickers for all symbols will be returned in an array.\n\nWeight(IP):\n- `2` for a single symbol;\n- `80` when the symbol parameter is omitted;",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/ticker/24hr"
						}
					}
				},
				{
					"name": "GET API v3 Ticker Trading Day",
					"value": "GET API v3 Ticker Trading Day",
					"action": "Trading Day Ticker",
					"description": "Price change statistics for a trading day.\n\nNotes:\n- Supported values for timeZone:\n  - Hours and minutes (e.g. -1:00, 05:45)\n  - Only hours (e.g. 0, 8, 4)\n\nWeight:\n- `4` for each requested symbol.\n- The weight for this request will cap at `200` once the number of symbols in the request is more than `50`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/ticker/tradingDay"
						}
					}
				},
				{
					"name": "GET API v3 Ticker Price",
					"value": "GET API v3 Ticker Price",
					"action": "Symbol Price Ticker",
					"description": "Latest price for a symbol or symbols.\n\n- If the symbol is not sent, prices for all symbols will be returned in an array.\n\nWeight(IP):\n- `2` for a single symbol;\n- `4` when the symbol parameter is omitted;",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/ticker/price"
						}
					}
				},
				{
					"name": "GET API v3 Ticker Book Ticker",
					"value": "GET API v3 Ticker Book Ticker",
					"action": "Symbol Order Book Ticker",
					"description": "Best price/qty on the order book for a symbol or symbols.\n\n- If the symbol is not sent, bookTickers for all symbols will be returned in an array.\n\nWeight(IP):\n- `2` for a single symbol;\n- `4` when the symbol parameter is omitted;",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/ticker/bookTicker"
						}
					}
				},
				{
					"name": "GET API v3 Ticker",
					"value": "GET API v3 Ticker",
					"action": "Rolling window price change statistics",
					"description": "The window used to compute statistics is typically slightly wider than requested windowSize.\n\nopenTime for /api/v3/ticker always starts on a minute, while the closeTime is the current time of the request. As such, the effective window might be up to 1 minute wider than requested.\n\nE.g. If the closeTime is 1641287867099 (January 04, 2022 09:17:47:099 UTC) , and the windowSize is 1d. the openTime will be: 1641201420000 (January 3, 2022, 09:17:00 UTC)\n\nWeight(IP): 4 for each requested symbol regardless of windowSize.\n\nThe weight for this request will cap at 200 once the number of symbols in the request is more than 50.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v3/ticker"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v3/ping",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Ping"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/time",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Time"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/exchangeInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Exchange Info"
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
						"Market"
					],
					"operation": [
						"GET API v3 Exchange Info"
					]
				}
			}
		},
		{
			"displayName": "Symbols",
			"name": "symbols",
			"default": "[\"BTCUSDT\",\"BNBBTC\"]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Exchange Info"
					]
				}
			}
		},
		{
			"displayName": "Permissions",
			"name": "permissions",
			"default": "'SPOT' or ['MARGIN','LEVERAGED']",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "permissions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Exchange Info"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/depth",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Depth"
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
						"Market"
					],
					"operation": [
						"GET API v3 Depth"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "If limit > 5000, then the response will truncate to 5000",
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
						"Market"
					],
					"operation": [
						"GET API v3 Depth"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/trades",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Trades"
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
						"Market"
					],
					"operation": [
						"GET API v3 Trades"
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
						"Market"
					],
					"operation": [
						"GET API v3 Trades"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/historicalTrades",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Historical Trades"
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
						"Market"
					],
					"operation": [
						"GET API v3 Historical Trades"
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
						"Market"
					],
					"operation": [
						"GET API v3 Historical Trades"
					]
				}
			}
		},
		{
			"displayName": "From ID",
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
						"Market"
					],
					"operation": [
						"GET API v3 Historical Trades"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/aggTrades",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Agg Trades"
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
						"Market"
					],
					"operation": [
						"GET API v3 Agg Trades"
					]
				}
			}
		},
		{
			"displayName": "From ID",
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
						"Market"
					],
					"operation": [
						"GET API v3 Agg Trades"
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
						"Market"
					],
					"operation": [
						"GET API v3 Agg Trades"
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
						"Market"
					],
					"operation": [
						"GET API v3 Agg Trades"
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
						"Market"
					],
					"operation": [
						"GET API v3 Agg Trades"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/klines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Klines"
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
						"Market"
					],
					"operation": [
						"GET API v3 Klines"
					]
				}
			}
		},
		{
			"displayName": "Interval",
			"name": "interval",
			"required": true,
			"description": "kline intervals",
			"default": "\"1m\"",
			"type": "options",
			"options": [
				{
					"name": "1 S",
					"value": "1s"
				},
				{
					"name": "1 M",
					"value": "1m"
				},
				{
					"name": "3 M",
					"value": "3m"
				},
				{
					"name": "5 M",
					"value": "5m"
				},
				{
					"name": "15 M",
					"value": "15m"
				},
				{
					"name": "30 M",
					"value": "30m"
				},
				{
					"name": "1 H",
					"value": "1h"
				},
				{
					"name": "2 H",
					"value": "2h"
				},
				{
					"name": "4 H",
					"value": "4h"
				},
				{
					"name": "6 H",
					"value": "6h"
				},
				{
					"name": "8 H",
					"value": "8h"
				},
				{
					"name": "12 H",
					"value": "12h"
				},
				{
					"name": "1 D",
					"value": "1d"
				},
				{
					"name": "3 D",
					"value": "3d"
				},
				{
					"name": "1 W",
					"value": "1w"
				},
				{
					"name": "1 M",
					"value": "1M"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "interval",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Klines"
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
						"Market"
					],
					"operation": [
						"GET API v3 Klines"
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
						"Market"
					],
					"operation": [
						"GET API v3 Klines"
					]
				}
			}
		},
		{
			"displayName": "Time Zone",
			"name": "timeZone",
			"description": "Default: 0 (UTC)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "timeZone",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Klines"
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
						"Market"
					],
					"operation": [
						"GET API v3 Klines"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/uiKlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 UI Klines"
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
						"Market"
					],
					"operation": [
						"GET API v3 UI Klines"
					]
				}
			}
		},
		{
			"displayName": "Interval",
			"name": "interval",
			"required": true,
			"description": "kline intervals",
			"default": "\"1m\"",
			"type": "options",
			"options": [
				{
					"name": "1 S",
					"value": "1s"
				},
				{
					"name": "1 M",
					"value": "1m"
				},
				{
					"name": "3 M",
					"value": "3m"
				},
				{
					"name": "5 M",
					"value": "5m"
				},
				{
					"name": "15 M",
					"value": "15m"
				},
				{
					"name": "30 M",
					"value": "30m"
				},
				{
					"name": "1 H",
					"value": "1h"
				},
				{
					"name": "2 H",
					"value": "2h"
				},
				{
					"name": "4 H",
					"value": "4h"
				},
				{
					"name": "6 H",
					"value": "6h"
				},
				{
					"name": "8 H",
					"value": "8h"
				},
				{
					"name": "12 H",
					"value": "12h"
				},
				{
					"name": "1 D",
					"value": "1d"
				},
				{
					"name": "3 D",
					"value": "3d"
				},
				{
					"name": "1 W",
					"value": "1w"
				},
				{
					"name": "1 M",
					"value": "1M"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "interval",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 UI Klines"
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
						"Market"
					],
					"operation": [
						"GET API v3 UI Klines"
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
						"Market"
					],
					"operation": [
						"GET API v3 UI Klines"
					]
				}
			}
		},
		{
			"displayName": "Time Zone",
			"name": "timeZone",
			"description": "Default: 0 (UTC)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "timeZone",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 UI Klines"
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
						"Market"
					],
					"operation": [
						"GET API v3 UI Klines"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/avgPrice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Avg Price"
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
						"Market"
					],
					"operation": [
						"GET API v3 Avg Price"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/ticker/24hr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Ticker 24 Hr"
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
						"Market"
					],
					"operation": [
						"GET API v3 Ticker 24 Hr"
					]
				}
			}
		},
		{
			"displayName": "Symbols",
			"name": "symbols",
			"default": "[\"BTCUSDT\",\"BNBBTC\"]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Ticker 24 Hr"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Supported values: FULL or MINI.\nIf none provided, the default is FULL",
			"default": "FULL",
			"type": "options",
			"options": [
				{
					"name": "FULL",
					"value": "FULL"
				},
				{
					"name": "MINI",
					"value": "MINI"
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
						"Market"
					],
					"operation": [
						"GET API v3 Ticker 24 Hr"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/ticker/tradingDay",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Ticker Trading Day"
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
						"Market"
					],
					"operation": [
						"GET API v3 Ticker Trading Day"
					]
				}
			}
		},
		{
			"displayName": "Symbols",
			"name": "symbols",
			"default": "[\"BTCUSDT\",\"BNBBTC\"]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Ticker Trading Day"
					]
				}
			}
		},
		{
			"displayName": "Time Zone",
			"name": "timeZone",
			"description": "Default: 0 (UTC)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "timeZone",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Ticker Trading Day"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Supported values: FULL or MINI.\nIf none provided, the default is FULL",
			"default": "FULL",
			"type": "options",
			"options": [
				{
					"name": "FULL",
					"value": "FULL"
				},
				{
					"name": "MINI",
					"value": "MINI"
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
						"Market"
					],
					"operation": [
						"GET API v3 Ticker Trading Day"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/ticker/price",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Ticker Price"
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
						"Market"
					],
					"operation": [
						"GET API v3 Ticker Price"
					]
				}
			}
		},
		{
			"displayName": "Symbols",
			"name": "symbols",
			"default": "[\"BTCUSDT\",\"BNBBTC\"]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Ticker Price"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/ticker/bookTicker",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Ticker Book Ticker"
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
						"Market"
					],
					"operation": [
						"GET API v3 Ticker Book Ticker"
					]
				}
			}
		},
		{
			"displayName": "Symbols",
			"name": "symbols",
			"default": "[\"BTCUSDT\",\"BNBBTC\"]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Ticker Book Ticker"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v3/ticker",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Ticker"
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
						"Market"
					],
					"operation": [
						"GET API v3 Ticker"
					]
				}
			}
		},
		{
			"displayName": "Symbols",
			"name": "symbols",
			"default": "[\"BTCUSDT\",\"BNBBTC\"]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Ticker"
					]
				}
			}
		},
		{
			"displayName": "Window Size",
			"name": "windowSize",
			"description": "Defaults to 1d if no parameter provided.\nSupported windowSize values:\n1m,2m....59m for minutes\n1h, 2h....23h - for hours\n1d...7d - for days.\n\nUnits cannot be combined (e.g. 1d2h is not allowed)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "windowSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Market"
					],
					"operation": [
						"GET API v3 Ticker"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Supported values: FULL or MINI.\nIf none provided, the default is FULL",
			"default": "",
			"type": "string",
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
						"Market"
					],
					"operation": [
						"GET API v3 Ticker"
					]
				}
			}
		},
];
