import type { INodeProperties } from 'n8n-workflow';

export const portfolioMarginDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi V 1 Portfolio Account",
					"value": "GET Sapi V 1 Portfolio Account",
					"action": "Portfolio Margin Account (USER_DATA)",
					"description": "Get the account info\n\n'Weight(IP): 1'",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/portfolio/account"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Portfolio Collateral Rate",
					"value": "GET Sapi V 1 Portfolio Collateral Rate",
					"action": "Portfolio Margin Collateral Rate (MARKET_DATA)",
					"description": "Portfolio Margin Collateral Rate.\n\nWeight(IP): 50",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/portfolio/collateralRate"
						}
					}
				},
				{
					"name": "GET Sapi V 2 Portfolio Collateral Rate",
					"value": "GET Sapi V 2 Portfolio Collateral Rate",
					"action": "Portfolio Margin Pro Tiered Collateral Rate(USER_DATA)",
					"description": "Portfolio Margin PRO Tiered Collateral Rate\n\nWeight(IP): 50",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v2/portfolio/collateralRate"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Portfolio Pm Loan",
					"value": "GET Sapi V 1 Portfolio Pm Loan",
					"action": "Portfolio Margin Bankruptcy Loan Amount (USER_DATA)",
					"description": "Query Portfolio Margin Bankruptcy Loan Amount.\n\nWeight(UID): 500",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/portfolio/pmLoan"
						}
					}
				},
				{
					"name": "POST Sapi V 1 Portfolio Repay",
					"value": "POST Sapi V 1 Portfolio Repay",
					"action": "Portfolio Margin Bankruptcy Loan Repay (USER_DATA)",
					"description": "Repay Portfolio Margin Bankruptcy Loan.\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/portfolio/repay"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Portfolio Interest History",
					"value": "GET Sapi V 1 Portfolio Interest History",
					"action": "Query Classic Portfolio Margin Negative Balance Interest History (USER_DATA)",
					"description": "Query interest history of negative balance for portfolio margin.\n\nWeight(IP): 50",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/portfolio/interest-history"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Portfolio Asset Index Price",
					"value": "GET Sapi V 1 Portfolio Asset Index Price",
					"action": "Query Portfolio Margin Asset Index Price (MARKET_DATA)",
					"description": "Query Portfolio Margin Asset Index Price\n\nWeight(IP):\n- 1 if send asset\n- 50 if not send asset",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/portfolio/asset-index-price"
						}
					}
				},
				{
					"name": "POST Sapi V 1 Portfolio Auto Collection",
					"value": "POST Sapi V 1 Portfolio Auto Collection",
					"action": "Fund Auto-collection (USER_DATA)",
					"description": "Transfers all assets from Futures Account to Margin account\n\nWeight(IP): 1500",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/portfolio/auto-collection"
						}
					}
				},
				{
					"name": "POST Sapi V 1 Portfolio Bnb Transfer",
					"value": "POST Sapi V 1 Portfolio Bnb Transfer",
					"action": "BNB Transfer (USER_DATA)",
					"description": "BNB transfer can be between Margin Account and USDM Account\n\nWeight(IP): 1500",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/portfolio/bnb-transfer"
						}
					}
				},
				{
					"name": "POST Sapi V 1 Portfolio Repay Futures Switch",
					"value": "POST Sapi V 1 Portfolio Repay Futures Switch",
					"action": "Change Auto-repay-futures Status (USER_DATA)",
					"description": "Change Auto-repay-futures Status\n\nWeight(IP): 1500",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/portfolio/repay-futures-switch"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Portfolio Repay Futures Switch",
					"value": "GET Sapi V 1 Portfolio Repay Futures Switch",
					"action": "Get Auto-repay-futures Status (USER_DATA)",
					"description": "Query Auto-repay-futures Status\n\nWeight(IP): 30",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/portfolio/repay-futures-switch"
						}
					}
				},
				{
					"name": "POST Sapi V 1 Portfolio Repay Futures Negative Balance",
					"value": "POST Sapi V 1 Portfolio Repay Futures Negative Balance",
					"action": "Repay futures Negative Balance (USER_DATA)",
					"description": "Repay futures Negative Balance\n\nWeight(IP): 1500",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/portfolio/repay-futures-negative-balance"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Portfolio Margin Asset Leverage",
					"value": "GET Sapi V 1 Portfolio Margin Asset Leverage",
					"action": "Get Portfolio Margin Asset Leverage (USER_DATA)",
					"description": "Weight(IP): 50",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/portfolio/margin-asset-leverage"
						}
					}
				},
				{
					"name": "POST Sapi V 1 Portfolio Asset Collection",
					"value": "POST Sapi V 1 Portfolio Asset Collection",
					"action": "Fund Collection by Asset (USER_DATA)",
					"description": "Transfers specific asset from Futures Account to Margin account\n\nWeight(IP): 60",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/portfolio/asset-collection"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/portfolio/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Account"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Account"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Account"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Account"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Account"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/portfolio/collateralRate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Collateral Rate"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Collateral Rate"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v2/portfolio/collateralRate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 2 Portfolio Collateral Rate"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 2 Portfolio Collateral Rate"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 2 Portfolio Collateral Rate"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 2 Portfolio Collateral Rate"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 2 Portfolio Collateral Rate"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/portfolio/pmLoan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Pm Loan"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Pm Loan"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Pm Loan"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Pm Loan"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Pm Loan"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/portfolio/repay",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"default": "SPOT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/portfolio/interest-history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Interest History"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Interest History"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Interest History"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Interest History"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Interest History"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Interest History"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Interest History"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Interest History"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Interest History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/portfolio/asset-index-price",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Asset Index Price"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Asset Index Price"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Asset Index Price"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/portfolio/auto-collection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Auto Collection"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Auto Collection"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Auto Collection"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Auto Collection"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Auto Collection"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/portfolio/bnb-transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Bnb Transfer"
					]
				}
			}
		},
		{
			"displayName": "Transfer Side",
			"name": "transferSide",
			"required": true,
			"default": "TO_UM",
			"type": "options",
			"options": [
				{
					"name": "TO UM",
					"value": "TO_UM"
				},
				{
					"name": "FROM UM",
					"value": "FROM_UM"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "transferSide",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Bnb Transfer"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Bnb Transfer"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Bnb Transfer"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Bnb Transfer"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Bnb Transfer"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Bnb Transfer"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/portfolio/repay-futures-switch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay Futures Switch"
					]
				}
			}
		},
		{
			"displayName": "Auto Repay",
			"name": "autoRepay",
			"required": true,
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "autoRepay",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay Futures Switch"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay Futures Switch"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay Futures Switch"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay Futures Switch"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay Futures Switch"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/portfolio/repay-futures-switch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Repay Futures Switch"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Repay Futures Switch"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Repay Futures Switch"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Repay Futures Switch"
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
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Repay Futures Switch"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/portfolio/repay-futures-negative-balance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay Futures Negative Balance"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay Futures Negative Balance"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay Futures Negative Balance"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay Futures Negative Balance"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Repay Futures Negative Balance"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/portfolio/margin-asset-leverage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"GET Sapi V 1 Portfolio Margin Asset Leverage"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/portfolio/asset-collection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Asset Collection"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Asset Collection"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Asset Collection"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Asset Collection"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Asset Collection"
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
						"Portfolio Margin"
					],
					"operation": [
						"POST Sapi V 1 Portfolio Asset Collection"
					]
				}
			}
		},
];
