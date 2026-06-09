import type { INodeProperties } from 'n8n-workflow';

export const miningDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi v1 Mining Pub Algo List",
					"value": "GET Sapi v1 Mining Pub Algo List",
					"action": "Acquiring Algorithm (MARKET_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/mining/pub/algoList"
						}
					}
				},
				{
					"name": "GET Sapi v1 Mining Pub Coin List",
					"value": "GET Sapi v1 Mining Pub Coin List",
					"action": "Acquiring CoinName (MARKET_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/mining/pub/coinList"
						}
					}
				},
				{
					"name": "GET Sapi v1 Mining Worker Detail",
					"value": "GET Sapi v1 Mining Worker Detail",
					"action": "Request for Detail Miner List (USER_DATA)",
					"description": "Weight(IP): 5",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/mining/worker/detail"
						}
					}
				},
				{
					"name": "GET Sapi v1 Mining Worker List",
					"value": "GET Sapi v1 Mining Worker List",
					"action": "Request for Miner List (USER_DATA)",
					"description": "Weight(IP): 5",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/mining/worker/list"
						}
					}
				},
				{
					"name": "GET Sapi v1 Mining Payment List",
					"value": "GET Sapi v1 Mining Payment List",
					"action": "Earnings List (USER_DATA)",
					"description": "Weight(IP): 5",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/mining/payment/list"
						}
					}
				},
				{
					"name": "GET Sapi v1 Mining Payment Other",
					"value": "GET Sapi v1 Mining Payment Other",
					"action": "Extra Bonus List (USER_DATA)",
					"description": "Weight(IP): 5",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/mining/payment/other"
						}
					}
				},
				{
					"name": "GET Sapi v1 Mining Hash Transfer Config Details List",
					"value": "GET Sapi v1 Mining Hash Transfer Config Details List",
					"action": "Hashrate Resale List (USER_DATA)",
					"description": "Weight(IP): 5",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/mining/hash-transfer/config/details/list"
						}
					}
				},
				{
					"name": "GET Sapi v1 Mining Hash Transfer Profit Details",
					"value": "GET Sapi v1 Mining Hash Transfer Profit Details",
					"action": "Hashrate Resale Details (USER_DATA)",
					"description": "Weight(IP): 5",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/mining/hash-transfer/profit/details"
						}
					}
				},
				{
					"name": "POST Sapi v1 Mining Hash Transfer Config",
					"value": "POST Sapi v1 Mining Hash Transfer Config",
					"action": "Hashrate Resale Request (USER_DATA)",
					"description": "Weight(IP): 5",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/mining/hash-transfer/config"
						}
					}
				},
				{
					"name": "POST Sapi v1 Mining Hash Transfer Config Cancel",
					"value": "POST Sapi v1 Mining Hash Transfer Config Cancel",
					"action": "Cancel Hashrate Resale configuration (USER_DATA)",
					"description": "Weight(IP): 5",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/mining/hash-transfer/config/cancel"
						}
					}
				},
				{
					"name": "GET Sapi v1 Mining Statistics User Status",
					"value": "GET Sapi v1 Mining Statistics User Status",
					"action": "Statistic List (USER_DATA)",
					"description": "Weight(IP): 5",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/mining/statistics/user/status"
						}
					}
				},
				{
					"name": "GET Sapi v1 Mining Statistics User List",
					"value": "GET Sapi v1 Mining Statistics User List",
					"action": "Account List (USER_DATA)",
					"description": "Weight(IP): 5",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/mining/statistics/user/list"
						}
					}
				},
				{
					"name": "GET Sapi v1 Mining Payment Uid",
					"value": "GET Sapi v1 Mining Payment Uid",
					"action": "Mining Account Earning (USER_DATA)",
					"description": "Weight(IP): 5",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/mining/payment/uid"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/mining/pub/algoList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Pub Algo List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Pub Algo List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/mining/pub/coinList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Pub Coin List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Pub Coin List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/mining/worker/detail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker Detail"
					]
				}
			}
		},
		{
			"displayName": "Algo",
			"name": "algo",
			"required": true,
			"description": "Algorithm(sha256)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "algo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker Detail"
					]
				}
			}
		},
		{
			"displayName": "User Name",
			"name": "userName",
			"required": true,
			"description": "Mining Account",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker Detail"
					]
				}
			}
		},
		{
			"displayName": "Worker Name",
			"name": "workerName",
			"required": true,
			"description": "Miner’s name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "workerName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker Detail"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker Detail"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker Detail"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker Detail"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker Detail"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/mining/worker/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker List"
					]
				}
			}
		},
		{
			"displayName": "Algo",
			"name": "algo",
			"required": true,
			"description": "Algorithm(sha256)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "algo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker List"
					]
				}
			}
		},
		{
			"displayName": "User Name",
			"name": "userName",
			"required": true,
			"description": "Mining Account",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker List"
					]
				}
			}
		},
		{
			"displayName": "Page Index",
			"name": "pageIndex",
			"description": "Page number, default is first page, start form 1",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageIndex",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker List"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "sort sequence(default=0)0 positive sequence, 1 negative sequence",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker List"
					]
				}
			}
		},
		{
			"displayName": "Sort Column",
			"name": "sortColumn",
			"description": "Sort by( default 1): 1: miner name, 2: real-time computing power, 3: daily average computing power, 4: real-time rejection rate, 5: last submission time",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortColumn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker List"
					]
				}
			}
		},
		{
			"displayName": "Worker Status",
			"name": "workerStatus",
			"description": "miners status(default=0)0 all, 1 valid, 2 invalid, 3 failure",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workerStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Worker List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/mining/payment/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment List"
					]
				}
			}
		},
		{
			"displayName": "Algo",
			"name": "algo",
			"required": true,
			"description": "Algorithm(sha256)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "algo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment List"
					]
				}
			}
		},
		{
			"displayName": "User Name",
			"name": "userName",
			"required": true,
			"description": "Mining Account",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment List"
					]
				}
			}
		},
		{
			"displayName": "Coin",
			"name": "coin",
			"description": "Coin name",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "coin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment List"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"description": "Search date, millisecond timestamp, while empty query all",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment List"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"description": "Search date, millisecond timestamp, while empty query all",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment List"
					]
				}
			}
		},
		{
			"displayName": "Page Index",
			"name": "pageIndex",
			"description": "Page number, default is first page, start form 1",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageIndex",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment List"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Number of pages, minimum 10, maximum 200",
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/mining/payment/other",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Other"
					]
				}
			}
		},
		{
			"displayName": "Algo",
			"name": "algo",
			"required": true,
			"description": "Algorithm(sha256)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "algo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Other"
					]
				}
			}
		},
		{
			"displayName": "User Name",
			"name": "userName",
			"required": true,
			"description": "Mining Account",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Other"
					]
				}
			}
		},
		{
			"displayName": "Coin",
			"name": "coin",
			"description": "Coin name",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "coin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Other"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"description": "Search date, millisecond timestamp, while empty query all",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Other"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"description": "Search date, millisecond timestamp, while empty query all",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Other"
					]
				}
			}
		},
		{
			"displayName": "Page Index",
			"name": "pageIndex",
			"description": "Page number, default is first page, start form 1",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageIndex",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Other"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Number of pages, minimum 10, maximum 200",
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Other"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Other"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Other"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Other"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Other"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/mining/hash-transfer/config/details/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Config Details List"
					]
				}
			}
		},
		{
			"displayName": "Page Index",
			"name": "pageIndex",
			"description": "Page number, default is first page, start form 1",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageIndex",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Config Details List"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Number of pages, minimum 10, maximum 200",
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Config Details List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Config Details List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Config Details List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Config Details List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Config Details List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/mining/hash-transfer/profit/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Profit Details"
					]
				}
			}
		},
		{
			"displayName": "Config ID",
			"name": "configId",
			"required": true,
			"description": "Mining ID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "configId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Profit Details"
					]
				}
			}
		},
		{
			"displayName": "User Name",
			"name": "userName",
			"required": true,
			"description": "Mining Account",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Profit Details"
					]
				}
			}
		},
		{
			"displayName": "Page Index",
			"name": "pageIndex",
			"description": "Page number, default is first page, start form 1",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageIndex",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Profit Details"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Number of pages, minimum 10, maximum 200",
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Profit Details"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Profit Details"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Profit Details"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Profit Details"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Hash Transfer Profit Details"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/mining/hash-transfer/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config"
					]
				}
			}
		},
		{
			"displayName": "User Name",
			"name": "userName",
			"required": true,
			"description": "Mining Account",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config"
					]
				}
			}
		},
		{
			"displayName": "Algo",
			"name": "algo",
			"required": true,
			"description": "Algorithm(sha256)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "algo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"description": "Search date, millisecond timestamp, while empty query all",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"description": "Search date, millisecond timestamp, while empty query all",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config"
					]
				}
			}
		},
		{
			"displayName": "To Pool User",
			"name": "toPoolUser",
			"required": true,
			"description": "Mining Account",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toPoolUser",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config"
					]
				}
			}
		},
		{
			"displayName": "Hash Rate",
			"name": "hashRate",
			"required": true,
			"description": "Resale hashrate h/s must be transferred (BTC is greater than 500000000000 ETH is greater than 500000)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "hashRate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config"
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
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config"
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
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config"
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
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config"
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
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/mining/hash-transfer/config/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config Cancel"
					]
				}
			}
		},
		{
			"displayName": "Config ID",
			"name": "configId",
			"required": true,
			"description": "Mining ID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "configId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config Cancel"
					]
				}
			}
		},
		{
			"displayName": "User Name",
			"name": "userName",
			"required": true,
			"description": "Mining Account",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config Cancel"
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
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config Cancel"
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
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config Cancel"
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
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config Cancel"
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
						"Mining"
					],
					"operation": [
						"POST Sapi v1 Mining Hash Transfer Config Cancel"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/mining/statistics/user/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User Status"
					]
				}
			}
		},
		{
			"displayName": "Algo",
			"name": "algo",
			"required": true,
			"description": "Algorithm(sha256)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "algo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User Status"
					]
				}
			}
		},
		{
			"displayName": "User Name",
			"name": "userName",
			"required": true,
			"description": "Mining Account",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User Status"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User Status"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User Status"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User Status"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User Status"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/mining/statistics/user/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User List"
					]
				}
			}
		},
		{
			"displayName": "Algo",
			"name": "algo",
			"required": true,
			"description": "Algorithm(sha256)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "algo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User List"
					]
				}
			}
		},
		{
			"displayName": "User Name",
			"name": "userName",
			"required": true,
			"description": "Mining Account",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User List"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Statistics User List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/mining/payment/uid",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Uid"
					]
				}
			}
		},
		{
			"displayName": "Algo",
			"name": "algo",
			"required": true,
			"description": "Algorithm(sha256)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "algo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Uid"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"description": "Search date, millisecond timestamp, while empty query all",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Uid"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"description": "Search date, millisecond timestamp, while empty query all",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Uid"
					]
				}
			}
		},
		{
			"displayName": "Page Index",
			"name": "pageIndex",
			"description": "Page number, default is first page, start form 1",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageIndex",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Uid"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Number of pages, minimum 10, maximum 200",
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Uid"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Uid"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Uid"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Uid"
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
						"Mining"
					],
					"operation": [
						"GET Sapi v1 Mining Payment Uid"
					]
				}
			}
		},
];
