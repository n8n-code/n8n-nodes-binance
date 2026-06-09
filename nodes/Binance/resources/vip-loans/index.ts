import type { INodeProperties } from 'n8n-workflow';

export const vipLoansDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi v1 Loan Vip Ongoing Orders",
					"value": "GET Sapi v1 Loan Vip Ongoing Orders",
					"action": "Get VIP Loan Ongoing Orders (USER_DATA)",
					"description": "VIP loan is available for VIP users only.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/vip/ongoing/orders"
						}
					}
				},
				{
					"name": "POST Sapi v1 Loan Vip Repay",
					"value": "POST Sapi v1 Loan Vip Repay",
					"action": "VIP Loan Repay (TRADE)",
					"description": "VIP loan is available for VIP users only.\n\nWeight(UID): 6000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/loan/vip/repay"
						}
					}
				},
				{
					"name": "GET Sapi v1 Loan Vip Repay History",
					"value": "GET Sapi v1 Loan Vip Repay History",
					"action": "Get VIP Loan Repayment History (USER_DATA)",
					"description": "VIP loan is available for VIP users only.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/vip/repay/history"
						}
					}
				},
				{
					"name": "GET Sapi v1 Loan Vip Collateral Account",
					"value": "GET Sapi v1 Loan Vip Collateral Account",
					"action": "Check Locked Value of VIP Collateral Account (USER_DATA)",
					"description": "VIP loan is available for VIP users only.\n\nWeight(IP): 6000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/vip/collateral/account"
						}
					}
				},
				{
					"name": "POST Sapi v1 Loan Vip Borrow",
					"value": "POST Sapi v1 Loan Vip Borrow",
					"action": "VIP Loan Borrow",
					"description": "VIP loan is available for VIP users only.\n\nWeight(UID): 6000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/loan/vip/borrow"
						}
					}
				},
				{
					"name": "GET Sapi v1 Loan Vip Loanable Data",
					"value": "GET Sapi v1 Loan Vip Loanable Data",
					"action": "Get Loanable Assets Data",
					"description": "Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/vip/loanable/data"
						}
					}
				},
				{
					"name": "GET Sapi v1 Loan Vip Collateral Data",
					"value": "GET Sapi v1 Loan Vip Collateral Data",
					"action": "Get Collateral Asset Data (USER_DATA)",
					"description": "Get collateral asset data.\n\nWeight(IP): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/vip/collateral/data"
						}
					}
				},
				{
					"name": "GET Sapi v1 Loan Vip Request Data",
					"value": "GET Sapi v1 Loan Vip Request Data",
					"action": "Query Application Status (USER_DATA)",
					"description": "Get Application Status\n\nWeight(UID): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/vip/request/data"
						}
					}
				},
				{
					"name": "GET Sapi v1 Loan Vip Request Interest Rate",
					"value": "GET Sapi v1 Loan Vip Request Interest Rate",
					"action": "Get Borrow Interest Rate (USER_DATA)",
					"description": "Get borrow interest rate.\n\nWeight(UID): 400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/loan/vip/request/interestRate"
						}
					}
				},
				{
					"name": "POST Sapi v1 Loan Vip Renew",
					"value": "POST Sapi v1 Loan Vip Renew",
					"action": "VIP Loan Renew",
					"description": "VIP loan is available for VIP users only.\n\nWeight(UID): 6000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/loan/vip/renew"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/loan/vip/ongoing/orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Ongoing Orders"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Ongoing Orders"
					]
				}
			}
		},
		{
			"displayName": "Collateral Account ID",
			"name": "collateralAccountId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralAccountId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Ongoing Orders"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Ongoing Orders"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Ongoing Orders"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Ongoing Orders"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 10; max 100.",
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Ongoing Orders"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Ongoing Orders"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Ongoing Orders"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Ongoing Orders"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Ongoing Orders"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/loan/vip/repay",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Repay"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Repay"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"default": "1.01",
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Repay"
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Repay"
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Repay"
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Repay"
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Repay"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/loan/vip/repay/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Repay History"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Repay History"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Repay History"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Repay History"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Repay History"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Repay History"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 10; max 100.",
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Repay History"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Repay History"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Repay History"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Repay History"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Repay History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/loan/vip/collateral/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Collateral Account"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Collateral Account"
					]
				}
			}
		},
		{
			"displayName": "Collateral Account ID",
			"name": "collateralAccountId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralAccountId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Collateral Account"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Collateral Account"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Collateral Account"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Collateral Account"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Collateral Account"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/loan/vip/borrow",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Borrow"
					]
				}
			}
		},
		{
			"displayName": "Loan Account ID",
			"name": "loanAccountId",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "loanAccountId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Borrow"
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Borrow"
					]
				}
			}
		},
		{
			"displayName": "Loan Amount",
			"name": "loanAmount",
			"required": true,
			"default": 0,
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Borrow"
					]
				}
			}
		},
		{
			"displayName": "Collateral Account ID",
			"name": "collateralAccountId",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "collateralAccountId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Borrow"
					]
				}
			}
		},
		{
			"displayName": "Collateral Coin",
			"name": "collateralCoin",
			"required": true,
			"default": "",
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Borrow"
					]
				}
			}
		},
		{
			"displayName": "Is Flexible Rate",
			"name": "isFlexibleRate",
			"required": true,
			"default": "TRUE",
			"type": "options",
			"options": [
				{
					"name": "TRUE",
					"value": "TRUE"
				},
				{
					"name": "FALSE",
					"value": "FALSE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "isFlexibleRate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Borrow"
					]
				}
			}
		},
		{
			"displayName": "Loan Term",
			"name": "loanTerm",
			"default": 0,
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Borrow"
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Borrow"
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Borrow"
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Borrow"
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Borrow"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/loan/vip/loanable/data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Loanable Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Loanable Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Loanable Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Loanable Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Loanable Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Loanable Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Loanable Data"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/loan/vip/collateral/data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Collateral Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Collateral Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Collateral Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Collateral Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Collateral Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Collateral Data"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/loan/vip/request/data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Request Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Request Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Request Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Request Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Request Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Request Data"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Request Data"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/loan/vip/request/interestRate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Request Interest Rate"
					]
				}
			}
		},
		{
			"displayName": "Loan Coin",
			"name": "loanCoin",
			"description": "Max 10 assets, Multiple split by \",\"",
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Request Interest Rate"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Request Interest Rate"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Request Interest Rate"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Request Interest Rate"
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
						"VIP Loans"
					],
					"operation": [
						"GET Sapi v1 Loan Vip Request Interest Rate"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/loan/vip/renew",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Renew"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Renew"
					]
				}
			}
		},
		{
			"displayName": "Loan Term",
			"name": "loanTerm",
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Renew"
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Renew"
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Renew"
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Renew"
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
						"VIP Loans"
					],
					"operation": [
						"POST Sapi v1 Loan Vip Renew"
					]
				}
			}
		},
];
