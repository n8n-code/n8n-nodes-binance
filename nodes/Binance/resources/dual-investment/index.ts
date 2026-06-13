import type { INodeProperties } from 'n8n-workflow';

export const dualInvestmentDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Dual Investment"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi v1 Dci Product List",
					"value": "GET Sapi v1 Dci Product List",
					"action": "Get Dual Investment product list(USER_DATA)",
					"description": "Get Dual Investment product list\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/dci/product/list"
						}
					}
				},
				{
					"name": "POST Sapi v1 Dci Product Subscribe",
					"value": "POST Sapi v1 Dci Product Subscribe",
					"action": "Subscribe Dual Investment products(USER_DATA)",
					"description": "Subscribe Dual Investment products\n\n- `Products are not available.` means that the APR changes to lower value, or the orders are not available.\n- `Failed` is a system or network errors.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/dci/product/subscribe"
						}
					}
				},
				{
					"name": "GET Sapi v1 Dci Product Positions",
					"value": "GET Sapi v1 Dci Product Positions",
					"action": "Get Dual Investment positions(USER_DATA)",
					"description": "Get Dual Investment positions (batch)\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/dci/product/positions"
						}
					}
				},
				{
					"name": "GET Sapi v1 Dci Product Accounts",
					"value": "GET Sapi v1 Dci Product Accounts",
					"action": "Check Dual Investment accounts(USER_DATA)",
					"description": "Check Dual Investment accounts\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/dci/product/accounts"
						}
					}
				},
				{
					"name": "POST Sapi v1 Dci Product Auto Compound Edit Status",
					"value": "POST Sapi v1 Dci Product Auto Compound Edit Status",
					"action": "Change Auto-Compound status(USER_DATA)",
					"description": "Change Auto-Compound status\n\n- 15:31 ~ 16:00 UTC+8 This function is disabled\n\nWeight(IP): 1\n\nRate Limit: Maximum 1 time/s per account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/dci/product/auto_compound/edit-status"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/dci/product/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product List"
					]
				}
			}
		},
		{
			"displayName": "Option Type",
			"name": "optionType",
			"required": true,
			"description": "Input CALL or PUT",
			"default": "CALL",
			"type": "options",
			"options": [
				{
					"name": "CALL",
					"value": "CALL"
				},
				{
					"name": "PUT",
					"value": "PUT"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "optionType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product List"
					]
				}
			}
		},
		{
			"displayName": "Exercised Coin",
			"name": "exercisedCoin",
			"required": true,
			"description": "Target exercised asset, e.g.:\nif you subscribe to a high sell product (call option), you should input:\n  - optionType: CALL,\n  - exercisedCoin: USDT,\n  - investCoin: BNB;\n\nif you subscribe to a low buy product (put option), you should input:\n  - optionType: PUT,\n  - exercisedCoin: BNB,\n  - investCoin: USDT;",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "exercisedCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product List"
					]
				}
			}
		},
		{
			"displayName": "Invest Coin",
			"name": "investCoin",
			"required": true,
			"description": "Asset used for subscribing, e.g.:\nif you subscribe to a high sell product (call option), you should input:\n  - optionType: CALL,\n  - exercisedCoin: USDT,\n  - investCoin: BNB;\n\nif you subscribe to a low buy product (put option), you should input:\n  - optionType: PUT,\n  - exercisedCoin: BNB,\n  - investCoin: USDT;",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "investCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product List"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product List"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product List"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product List"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product List"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product List"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product List"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/dci/product/subscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Subscribe"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "get id from /sapi/v1/dci/product/list",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "get orderId from /sapi/v1/dci/product/list",
			"default": "",
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
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Deposit Amount",
			"name": "depositAmount",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "depositAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Auto Compound Plan",
			"name": "autoCompoundPlan",
			"required": true,
			"description": "NONE: switch off the plan,\nSTANDARD: standard plan,\nADVANCED: advanced plan;",
			"default": "NONE",
			"type": "options",
			"options": [
				{
					"name": "NONE",
					"value": "NONE"
				},
				{
					"name": "STANDARD",
					"value": "STANDARD"
				},
				{
					"name": "ADVANCE",
					"value": "ADVANCE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "autoCompoundPlan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Subscribe"
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
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Subscribe"
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
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Subscribe"
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
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Subscribe"
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
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Subscribe"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/dci/product/positions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product Positions"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "- PENDING: Products are purchasing, will give results later;\n- PURCHASE_SUCCESS: purchase successfully;\n- SETTLED: Products are finish settling;\n- PURCHASE_FAIL: fail to purchase;\n- REFUNDING: refund ongoing;\n- REFUND_SUCCESS: refund to spot account successfully;\n- SETTLING: Products are settling.\nIf don't fill this field, will response all the position status.",
			"default": "PENDING",
			"type": "options",
			"options": [
				{
					"name": "PENDING",
					"value": "PENDING"
				},
				{
					"name": "PURCHASE SUCCESS",
					"value": "PURCHASE_SUCCESS"
				},
				{
					"name": "SETTLED",
					"value": "SETTLED"
				},
				{
					"name": "PURCHASE FAIL",
					"value": "PURCHASE_FAIL"
				},
				{
					"name": "REFUNDING",
					"value": "REFUNDING"
				},
				{
					"name": "REFUND SUCCESS",
					"value": "REFUND_SUCCESS"
				},
				{
					"name": "SETTLING",
					"value": "SETTLING"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product Positions"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product Positions"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product Positions"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product Positions"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product Positions"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product Positions"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product Positions"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/dci/product/accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product Accounts"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product Accounts"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product Accounts"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product Accounts"
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
						"Dual Investment"
					],
					"operation": [
						"GET Sapi v1 Dci Product Accounts"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/dci/product/auto_compound/edit-status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Auto Compound Edit Status"
					]
				}
			}
		},
		{
			"displayName": "Position ID",
			"name": "positionId",
			"required": true,
			"description": "Get positionId from /sapi/v1/dci/product/positions",
			"default": 0,
			"type": "number",
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
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Auto Compound Edit Status"
					]
				}
			}
		},
		{
			"displayName": "Auto Compound Plan",
			"name": "autoCompoundPlan",
			"required": true,
			"description": "NONE: switch off the plan,\nSTANDARD: standard plan,\nADVANCED: advanced plan;",
			"default": "NONE",
			"type": "options",
			"options": [
				{
					"name": "NONE",
					"value": "NONE"
				},
				{
					"name": "STANDARD",
					"value": "STANDARD"
				},
				{
					"name": "ADVANCE",
					"value": "ADVANCE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "autoCompoundPlan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Auto Compound Edit Status"
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
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Auto Compound Edit Status"
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
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Auto Compound Edit Status"
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
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Auto Compound Edit Status"
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
						"Dual Investment"
					],
					"operation": [
						"POST Sapi v1 Dci Product Auto Compound Edit Status"
					]
				}
			}
		},
];
