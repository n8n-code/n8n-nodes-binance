import type { INodeProperties } from 'n8n-workflow';

export const cryptoLoansDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi v1 Loan Income",
					"value": "GET Sapi v1 Loan Income",
					"action": "Get Crypto Loans Income History (USER_DATA)",
					"description": "- If startTime and endTime are not sent, the recent 7-day data will be returned.\n- The max interval between startTime and endTime is 30 days.\n\nWeight(UID): 6000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/income"
						}
					}
				},
				{
					"name": "POST Sapi v1 Loan Borrow",
					"value": "POST Sapi v1 Loan Borrow",
					"action": "Crypto Loan Borrow (TRADE)",
					"description": "Weight(UID): 6000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/loan/borrow"
						}
					}
				},
				{
					"name": "GET Sapi v1 Loan Borrow History",
					"value": "GET Sapi v1 Loan Borrow History",
					"action": "Get Crypto Loans Borrow History (USER_DATA)",
					"description": "- If startTime and endTime are not sent, the recent 90-day data will be returned.\n- The max interval between startTime and endTime is 180 days.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/borrow/history"
						}
					}
				},
				{
					"name": "GET Sapi v1 Loan Ongoing Orders",
					"value": "GET Sapi v1 Loan Ongoing Orders",
					"action": "Get Loan Ongoing Orders (USER_DATA)",
					"description": "Weight(IP): 300",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/ongoing/orders"
						}
					}
				},
				{
					"name": "POST Sapi v1 Loan Repay",
					"value": "POST Sapi v1 Loan Repay",
					"action": "Crypto Loan Repay (TRADE)",
					"description": "Weight(UID): 6000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/loan/repay"
						}
					}
				},
				{
					"name": "GET Sapi v1 Loan Repay History",
					"value": "GET Sapi v1 Loan Repay History",
					"action": "Get Loan Repayment History (USER_DATA)",
					"description": "If startTime and endTime are not sent, the recent 90-day data will be returned.\nThe max interval between startTime and endTime is 180 days.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/repay/history"
						}
					}
				},
				{
					"name": "POST Sapi v1 Loan Adjust Ltv",
					"value": "POST Sapi v1 Loan Adjust Ltv",
					"action": "Crypto Loan Adjust LTV (TRADE)",
					"description": "Weight(UID): 6000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/loan/adjust/ltv"
						}
					}
				},
				{
					"name": "GET Sapi v1 Loan Ltv Adjustment History",
					"value": "GET Sapi v1 Loan Ltv Adjustment History",
					"action": "Get Loan LTV Adjustment History (USER_DATA)",
					"description": "If startTime and endTime are not sent, the recent 90-day data will be returned.\nThe max interval between startTime and endTime is 180 days.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/ltv/adjustment/history"
						}
					}
				},
				{
					"name": "GET Sapi v1 Loan Loanable Data",
					"value": "GET Sapi v1 Loan Loanable Data",
					"action": "Get Loanable Assets Data (USER_DATA)",
					"description": "Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/loanable/data"
						}
					}
				},
				{
					"name": "GET Sapi v1 Loan Collateral Data",
					"value": "GET Sapi v1 Loan Collateral Data",
					"action": "Get Collateral Assets Data (USER_DATA)",
					"description": "Get LTV information and collateral limit of collateral assets. The collateral limit is shown in USD value.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/collateral/data"
						}
					}
				},
				{
					"name": "GET Sapi v1 Loan Repay Collateral Rate",
					"value": "GET Sapi v1 Loan Repay Collateral Rate",
					"action": "Check Collateral Repay Rate (USER_DATA)",
					"description": "Get the the rate of collateral coin / loan coin when using collateral repay, the rate will be valid within 8 second.\n\nWeight(IP): 6000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/repay/collateral/rate"
						}
					}
				},
				{
					"name": "POST Sapi v1 Loan Customize Margin Call",
					"value": "POST Sapi v1 Loan Customize Margin Call",
					"action": "Crypto Loan Customize Margin Call (TRADE)",
					"description": "Customize margin call for ongoing orders only.\n\nWeight(UID): 6000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/loan/customize/margin_call"
						}
					}
				},
				{
					"name": "POST Sapi v2 Loan Flexible Borrow",
					"value": "POST Sapi v2 Loan Flexible Borrow",
					"action": "Borrow - Flexible Loan Borrow (TRADE)",
					"description": "- Only available for master account\n\nWeight(UID): 6000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v2/loan/flexible/borrow"
						}
					}
				},
				{
					"name": "GET Sapi v2 Loan Flexible Ongoing Orders",
					"value": "GET Sapi v2 Loan Flexible Ongoing Orders",
					"action": "Borrow - Get Flexible Loan Ongoing Orders (USER_DATA)",
					"description": "\nWeight(IP): 300",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v2/loan/flexible/ongoing/orders"
						}
					}
				},
				{
					"name": "GET Sapi v2 Loan Flexible Borrow History",
					"value": "GET Sapi v2 Loan Flexible Borrow History",
					"action": "Borrow - Get Flexible Loan Borrow History (USER_DATA)",
					"description": "- If startTime and endTime are not sent, the recent 90-day data will be returned.\n- The max interval between startTime and endTime is 180 days.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v2/loan/flexible/borrow/history"
						}
					}
				},
				{
					"name": "POST Sapi v2 Loan Flexible Repay",
					"value": "POST Sapi v2 Loan Flexible Repay",
					"action": "Repay - Flexible Loan Repay (TRADE)",
					"description": "- repayAmount is mandatory even fullRepayment = FALSE\n\nWeight(IP): 6000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v2/loan/flexible/repay"
						}
					}
				},
				{
					"name": "GET Sapi v2 Loan Flexible Repay History",
					"value": "GET Sapi v2 Loan Flexible Repay History",
					"action": "Repay - Get Flexible Loan Repayment History (USER_DATA)",
					"description": "- If startTime and endTime are not sent, the recent 90-day data will be returned.\n- The max interval between startTime and endTime is 180 days.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v2/loan/flexible/repay/history"
						}
					}
				},
				{
					"name": "POST Sapi v2 Loan Flexible Adjust Ltv",
					"value": "POST Sapi v2 Loan Flexible Adjust Ltv",
					"action": "Adjust LTV - Flexible Loan Adjust LTV (TRADE)",
					"description": "- API Key needs Spot & Margin Trading permission for this endpoint\n\nWeight(UID): 6000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v2/loan/flexible/adjust/ltv"
						}
					}
				},
				{
					"name": "GET Sapi v2 Loan Flexible Ltv Adjustment History",
					"value": "GET Sapi v2 Loan Flexible Ltv Adjustment History",
					"action": "Adjust LTV - Get Flexible Loan LTV Adjustment History (USER_DATA)",
					"description": "- If startTime and endTime are not sent, the recent 90-day data will be returned.\n- The max interval between startTime and endTime is 180 days.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v2/loan/flexible/ltv/adjustment/history"
						}
					}
				},
				{
					"name": "GET Sapi v2 Loan Flexible Loanable Data",
					"value": "GET Sapi v2 Loan Flexible Loanable Data",
					"action": "Get Flexible Loan Assets Data (USER_DATA)",
					"description": "Get interest rate and borrow limit of flexible loanable assets. The borrow limit is shown in USD value.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v2/loan/flexible/loanable/data"
						}
					}
				},
				{
					"name": "GET Sapi v2 Loan Flexible Collateral Data",
					"value": "GET Sapi v2 Loan Flexible Collateral Data",
					"action": "Get Flexible Loan Collateral Assets Data (USER_DATA)",
					"description": "Get LTV information and collateral limit of flexible loan's collateral assets. The collateral limit is shown in USD value.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v2/loan/flexible/collateral/data"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/loan/income",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Income"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Income"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "All types will be returned by default.\n  * `borrowIn`\n  * `collateralSpent`\n  * `repayAmount`\n  * `collateralReturn` - Collateral return after repayment\n  * `addCollateral`\n  * `removeCollateral`\n  * `collateralReturnAfterLiquidation`",
			"default": "borrowIn",
			"type": "options",
			"options": [
				{
					"name": "Borrow In",
					"value": "borrowIn"
				},
				{
					"name": "Collateral Spent",
					"value": "collateralSpent"
				},
				{
					"name": "Repay Amount",
					"value": "repayAmount"
				},
				{
					"name": "Collateral Return",
					"value": "collateralReturn"
				},
				{
					"name": "Add Collateral",
					"value": "addCollateral"
				},
				{
					"name": "Remove Collateral",
					"value": "removeCollateral"
				},
				{
					"name": "Collateral Return After Liquidation",
					"value": "collateralReturnAfterLiquidation"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Income"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Income"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Income"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "default 20, max 100",
			"default": 20,
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Income"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Income"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Income"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Income"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Income"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/loan/borrow",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Borrow"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"required": true,
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Borrow"
					]
				}
			}
		},
		{
			"displayName": "Loan Amount",
			"name": "loanAmount",
			"description": "Loan amount",
			"default": 100.1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Borrow"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"required": true,
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Borrow"
					]
				}
			}
		},
		{
			"displayName": "Collateral Amount",
			"name": "collateralAmount",
			"default": 50.5,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Borrow"
					]
				}
			}
		},
		{
			"displayName": "Loan Term",
			"name": "loanTerm",
			"required": true,
			"description": "7/14/30/90/180 days",
			"default": 30,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanTerm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Borrow"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Borrow"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Borrow"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Borrow"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Borrow"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/loan/borrow/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Borrow History"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"description": "orderId in POST /sapi/v1/loan/borrow",
			"default": 10,
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Borrow History"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Borrow History"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Borrow History"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "default 10, max 100",
			"default": 10,
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Borrow History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/loan/ongoing/orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ongoing Orders"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"description": "orderId in POST /sapi/v1/loan/borrow",
			"default": 10,
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ongoing Orders"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ongoing Orders"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ongoing Orders"
					]
				}
			}
		},
		{
			"displayName": "Current",
			"name": "current",
			"description": "Current querying page. Start from 1; default:1, max:1000",
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ongoing Orders"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "default 10, max 100",
			"default": 10,
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ongoing Orders"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ongoing Orders"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ongoing Orders"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ongoing Orders"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ongoing Orders"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/loan/repay",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Repay"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "Order ID",
			"default": 123456789,
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Repay"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"description": "Repayment Amount",
			"default": 100.5,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "amount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Repay"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Default: 1. 1 for 'repay with borrowed coin'; 2 for 'repay with collateral'.",
			"default": 1,
			"type": "number",
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Repay"
					]
				}
			}
		},
		{
			"displayName": "Collateral Return",
			"name": "collateralReturn",
			"description": "Default: TRUE. TRUE: Return extra collateral to spot account; FALSE: Keep extra collateral in the order.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralReturn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Repay"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Repay"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Repay"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Repay"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Repay"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/loan/repay/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay History"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"description": "Order ID",
			"default": 10,
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay History"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay History"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay History"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "default 10, max 100",
			"default": 10,
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay History"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/loan/adjust/ltv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Adjust Ltv"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "Order ID",
			"default": 123456789,
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Adjust Ltv"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"description": "Amount",
			"default": 100.5,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "amount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Adjust Ltv"
					]
				}
			}
		},
		{
			"displayName": "Direction",
			"name": "direction",
			"required": true,
			"description": "'ADDITIONAL', 'REDUCED'",
			"default": "ADDITIONAL",
			"type": "options",
			"options": [
				{
					"name": "ADDITIONAL",
					"value": "ADDITIONAL"
				},
				{
					"name": "REDUCED",
					"value": "REDUCED"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "direction",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Adjust Ltv"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Adjust Ltv"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Adjust Ltv"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Adjust Ltv"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Adjust Ltv"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/loan/ltv/adjustment/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ltv Adjustment History"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"description": "Order ID",
			"default": 10,
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ltv Adjustment History"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ltv Adjustment History"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ltv Adjustment History"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "default 10, max 100",
			"default": 10,
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Ltv Adjustment History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/loan/loanable/data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Loanable Data"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Loanable Data"
					]
				}
			}
		},
		{
			"displayName": "Vip Level",
			"name": "vipLevel",
			"description": "Defaults to user's vip level",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "vipLevel",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Loanable Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Loanable Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Loanable Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Loanable Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Loanable Data"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/loan/collateral/data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Collateral Data"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Collateral Data"
					]
				}
			}
		},
		{
			"displayName": "Vip Level",
			"name": "vipLevel",
			"description": "Defaults to user's vip level",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "vipLevel",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Collateral Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Collateral Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Collateral Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Collateral Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Collateral Data"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/loan/repay/collateral/rate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay Collateral Rate"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"required": true,
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay Collateral Rate"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"required": true,
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay Collateral Rate"
					]
				}
			}
		},
		{
			"displayName": "Repay Amount",
			"name": "repayAmount",
			"required": true,
			"description": "repay amount of loanCoin",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "repayAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay Collateral Rate"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay Collateral Rate"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay Collateral Rate"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay Collateral Rate"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Repay Collateral Rate"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/loan/customize/margin_call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Customize Margin Call"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"description": "Mandatory when collateralCoin is empty. Send either orderId or collateralCoin, if both parameters are sent, take orderId only.",
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Customize Margin Call"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Customize Margin Call"
					]
				}
			}
		},
		{
			"displayName": "Margin Call",
			"name": "marginCall",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "marginCall",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Customize Margin Call"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Customize Margin Call"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Customize Margin Call"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Customize Margin Call"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Customize Margin Call"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v2/loan/flexible/borrow",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Borrow"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Borrow"
					]
				}
			}
		},
		{
			"displayName": "Loan Amount",
			"name": "loanAmount",
			"description": "Loan amount",
			"default": 100.1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Borrow"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Borrow"
					]
				}
			}
		},
		{
			"displayName": "Collateral Amount",
			"name": "collateralAmount",
			"default": 50.5,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Borrow"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Borrow"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Borrow"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Borrow"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Borrow"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v2/loan/flexible/ongoing/orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ongoing Orders"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ongoing Orders"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ongoing Orders"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ongoing Orders"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ongoing Orders"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ongoing Orders"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ongoing Orders"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ongoing Orders"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ongoing Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v2/loan/flexible/borrow/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Borrow History"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Borrow History"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Borrow History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Borrow History"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v2/loan/flexible/repay",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Repay"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Repay"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Repay"
					]
				}
			}
		},
		{
			"displayName": "Repay Amount",
			"name": "repayAmount",
			"required": true,
			"description": "repay amount of loanCoin",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "repayAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Repay"
					]
				}
			}
		},
		{
			"displayName": "Collateral Return",
			"name": "collateralReturn",
			"description": "Default: TRUE.\nTRUE: Return extra collateral to earn account;\nFALSE: Keep extra collateral in the order, and lower LTV.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralReturn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Repay"
					]
				}
			}
		},
		{
			"displayName": "Full Repayment",
			"name": "fullRepayment",
			"description": "Default: FALSE.\nTRUE: Full repayment;\nFALSE: Partial repayment, based on loanAmount",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fullRepayment",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Repay"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Repay"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Repay"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Repay"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Repay"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v2/loan/flexible/repay/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Repay History"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Repay History"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Repay History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Repay History"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v2/loan/flexible/adjust/ltv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Adjust Ltv"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Adjust Ltv"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Adjust Ltv"
					]
				}
			}
		},
		{
			"displayName": "Adjustment Amount",
			"name": "adjustmentAmount",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "adjustmentAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Adjust Ltv"
					]
				}
			}
		},
		{
			"displayName": "Direction",
			"name": "direction",
			"required": true,
			"default": "ADDITIONAL",
			"type": "options",
			"options": [
				{
					"name": "ADDITIONAL",
					"value": "ADDITIONAL"
				},
				{
					"name": "REDUCED",
					"value": "REDUCED"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "direction",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Adjust Ltv"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Adjust Ltv"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Adjust Ltv"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Adjust Ltv"
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
						"Crypto Loans"
					],
					"operation": [
						"POST Sapi v2 Loan Flexible Adjust Ltv"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v2/loan/flexible/ltv/adjustment/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ltv Adjustment History"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ltv Adjustment History"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ltv Adjustment History"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Ltv Adjustment History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v2/loan/flexible/loanable/data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Loanable Data"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Coin loaned",
			"default": "BUSD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Loanable Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Loanable Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Loanable Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Loanable Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Loanable Data"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v2/loan/flexible/collateral/data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Collateral Data"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"description": "Coin used as collateral",
			"default": "BNB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralCoin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Collateral Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Collateral Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Collateral Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Collateral Data"
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
						"Crypto Loans"
					],
					"operation": [
						"GET Sapi v2 Loan Flexible Collateral Data"
					]
				}
			}
		},
];
