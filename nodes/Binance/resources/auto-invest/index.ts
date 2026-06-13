import type { INodeProperties } from 'n8n-workflow';

export const autoInvestDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi v1 Lending Auto Invest Target Asset List",
					"value": "GET Sapi v1 Lending Auto Invest Target Asset List",
					"action": "Get target asset list (USER_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/auto-invest/target-asset/list"
						}
					}
				},
				{
					"name": "GET Sapi v1 Lending Auto Invest Target Asset Roi List",
					"value": "GET Sapi v1 Lending Auto Invest Target Asset Roi List",
					"action": "Get target asset ROI data (USER_DATA)",
					"description": "ROI return list for target asset\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/auto-invest/target-asset/roi/list"
						}
					}
				},
				{
					"name": "GET Sapi v1 Lending Auto Invest All Asset",
					"value": "GET Sapi v1 Lending Auto Invest All Asset",
					"action": "Query all source asset and target asset (USER_DATA)",
					"description": "Query all source assets and target assets\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/auto-invest/all/asset"
						}
					}
				},
				{
					"name": "GET Sapi v1 Lending Auto Invest Source Asset List",
					"value": "GET Sapi v1 Lending Auto Invest Source Asset List",
					"action": "Query source asset list (USER_DATA)",
					"description": "Query Source Asset to be used for investment\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/auto-invest/source-asset/list"
						}
					}
				},
				{
					"name": "POST Sapi v1 Lending Auto Invest Plan Add",
					"value": "POST Sapi v1 Lending Auto Invest Plan Add",
					"action": "Investment plan creation (USER_DATA)",
					"description": "Post an investment plan creation\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/lending/auto-invest/plan/add"
						}
					}
				},
				{
					"name": "POST Sapi v1 Lending Auto Invest Plan Edit",
					"value": "POST Sapi v1 Lending Auto Invest Plan Edit",
					"action": "Investment plan adjustment",
					"description": "Query Source Asset to be used for investment\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/lending/auto-invest/plan/edit"
						}
					}
				},
				{
					"name": "POST Sapi v1 Lending Auto Invest Plan Edit Status",
					"value": "POST Sapi v1 Lending Auto Invest Plan Edit Status",
					"action": "Change Plan Status",
					"description": "Change Plan Status\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/lending/auto-invest/plan/edit-status"
						}
					}
				},
				{
					"name": "GET Sapi v1 Lending Auto Invest Plan List",
					"value": "GET Sapi v1 Lending Auto Invest Plan List",
					"action": "Get list of plans",
					"description": "Query plan lists\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/auto-invest/plan/list"
						}
					}
				},
				{
					"name": "GET Sapi v1 Lending Auto Invest Plan ID",
					"value": "GET Sapi v1 Lending Auto Invest Plan ID",
					"action": "Query holding details of the plan",
					"description": "Query holding details of the plan\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/auto-invest/plan/id"
						}
					}
				},
				{
					"name": "GET Sapi v1 Lending Auto Invest History List",
					"value": "GET Sapi v1 Lending Auto Invest History List",
					"action": "Query subscription transaction history",
					"description": "Query subscription transaction history of a plan\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/auto-invest/history/list"
						}
					}
				},
				{
					"name": "GET Sapi v1 Lending Auto Invest Index Info",
					"value": "GET Sapi v1 Lending Auto Invest Index Info",
					"action": "Query Index Details(USER_DATA)",
					"description": "Query index details\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/auto-invest/index/info"
						}
					}
				},
				{
					"name": "GET Sapi v1 Lending Auto Invest Index User Summary",
					"value": "GET Sapi v1 Lending Auto Invest Index User Summary",
					"action": "Query Index Linked Plan Position Details(USER_DATA)",
					"description": "Details on users Index-Linked plan position details\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/auto-invest/index/user-summary"
						}
					}
				},
				{
					"name": "POST Sapi v1 Lending Auto Invest One Off",
					"value": "POST Sapi v1 Lending Auto Invest One Off",
					"action": "One Time Transaction(TRADE)",
					"description": "One time transaction\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/lending/auto-invest/one-off"
						}
					}
				},
				{
					"name": "GET Sapi v1 Lending Auto Invest One Off Status",
					"value": "GET Sapi v1 Lending Auto Invest One Off Status",
					"action": "Query One-Time Transaction Status (USER_DATA)",
					"description": "Transaction status for one-time transaction\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/auto-invest/one-off/status"
						}
					}
				},
				{
					"name": "POST Sapi v1 Lending Auto Invest Redeem",
					"value": "POST Sapi v1 Lending Auto Invest Redeem",
					"action": "Index Linked Plan Redemption (TRADE)",
					"description": "To redeem index-Linked plan holdings\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/lending/auto-invest/redeem"
						}
					}
				},
				{
					"name": "GET Sapi v1 Lending Auto Invest Redeem History",
					"value": "GET Sapi v1 Lending Auto Invest Redeem History",
					"action": "Index Linked Plan Redemption History (USER_DATA)",
					"description": "Get the history of Index Linked Plan Redemption transactions\n\nMax 30 day difference between startTime and endTime\nIf no startTime and endTime, default to show past 30 day records\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/auto-invest/redeem/history"
						}
					}
				},
				{
					"name": "GET Sapi v1 Lending Auto Invest Rebalance History",
					"value": "GET Sapi v1 Lending Auto Invest Rebalance History",
					"action": "Index Linked Plan Rebalance Details (USER_DATA)",
					"description": "Get the history of Index Linked Plan Redemption transactions\n\nMax 30 day difference between startTime and endTime\nIf no startTime and endTime, default to show past 30 day records\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/lending/auto-invest/rebalance/history"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/lending/auto-invest/target-asset/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset List"
					]
				}
			}
		},
		{
			"displayName": "Target Asset",
			"name": "targetAsset",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "targetAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/lending/auto-invest/target-asset/roi/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset Roi List"
					]
				}
			}
		},
		{
			"displayName": "Target Asset",
			"name": "targetAsset",
			"required": true,
			"default": "BTC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "targetAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset Roi List"
					]
				}
			}
		},
		{
			"displayName": "His Roi Type",
			"name": "hisRoiType",
			"required": true,
			"default": "FIVE_YEAR",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "hisRoiType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset Roi List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset Roi List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset Roi List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset Roi List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Target Asset Roi List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/lending/auto-invest/all/asset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest All Asset"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest All Asset"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest All Asset"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest All Asset"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest All Asset"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/lending/auto-invest/source-asset/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Source Asset List"
					]
				}
			}
		},
		{
			"displayName": "Target Asset",
			"name": "targetAsset",
			"default": "BTC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "targetAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Source Asset List"
					]
				}
			}
		},
		{
			"displayName": "Index ID",
			"name": "indexId",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "indexId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Source Asset List"
					]
				}
			}
		},
		{
			"displayName": "Usage Type",
			"name": "usageType",
			"required": true,
			"default": "RECURRING",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "usageType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Source Asset List"
					]
				}
			}
		},
		{
			"displayName": "Flexible Allowed To Use",
			"name": "flexibleAllowedToUse",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "flexibleAllowedToUse",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Source Asset List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Source Asset List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Source Asset List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Source Asset List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Source Asset List"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/lending/auto-invest/plan/add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
					]
				}
			}
		},
		{
			"displayName": "Source Type",
			"name": "sourceType",
			"required": true,
			"default": "MAIN_SITE",
			"type": "options",
			"options": [
				{
					"name": "MAIN SITE",
					"value": "MAIN_SITE"
				},
				{
					"name": "TR",
					"value": "TR"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
					]
				}
			}
		},
		{
			"displayName": "Request ID",
			"name": "requestId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
					]
				}
			}
		},
		{
			"displayName": "Plan Type",
			"name": "planType",
			"required": true,
			"default": "SINGLE",
			"type": "options",
			"options": [
				{
					"name": "SINGLE",
					"value": "SINGLE"
				},
				{
					"name": "PORTFOLIO",
					"value": "PORTFOLIO"
				},
				{
					"name": "INDEX",
					"value": "INDEX"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "planType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
					]
				}
			}
		},
		{
			"displayName": "Index ID",
			"name": "IndexId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "IndexId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
					]
				}
			}
		},
		{
			"displayName": "Subscription Amount",
			"name": "subscriptionAmount",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "subscriptionAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
					]
				}
			}
		},
		{
			"displayName": "Subscription Cycle",
			"name": "subscriptionCycle",
			"required": true,
			"default": "H1",
			"type": "options",
			"options": [
				{
					"name": "H 1",
					"value": "H1"
				},
				{
					"name": "H 4",
					"value": "H4"
				},
				{
					"name": "H 8",
					"value": "H8"
				},
				{
					"name": "H 12",
					"value": "H12"
				},
				{
					"name": "WEEKLY",
					"value": "WEEKLY"
				},
				{
					"name": "DAILY",
					"value": "DAILY"
				},
				{
					"name": "MONTHLY",
					"value": "MONTHLY"
				},
				{
					"name": "BI WEEKLY",
					"value": "BI_WEEKLY"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "subscriptionCycle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
					]
				}
			}
		},
		{
			"displayName": "Subscription Start Day",
			"name": "subscriptionStartDay",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "subscriptionStartDay",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
					]
				}
			}
		},
		{
			"displayName": "Subscription Start Weekday",
			"name": "subscriptionStartWeekday",
			"default": "MON",
			"type": "options",
			"options": [
				{
					"name": "MON",
					"value": "MON"
				},
				{
					"name": "TUE",
					"value": "TUE"
				},
				{
					"name": "WED",
					"value": "WED"
				},
				{
					"name": "THU",
					"value": "THU"
				},
				{
					"name": "FRI",
					"value": "FRI"
				},
				{
					"name": "SAT",
					"value": "SAT"
				},
				{
					"name": "SUN",
					"value": "SUN"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "subscriptionStartWeekday",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
					]
				}
			}
		},
		{
			"displayName": "Subscription Start Time",
			"name": "subscriptionStartTime",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "subscriptionStartTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
					]
				}
			}
		},
		{
			"displayName": "Source Asset",
			"name": "sourceAsset",
			"required": true,
			"default": "USDT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
					]
				}
			}
		},
		{
			"displayName": "Flexible Allowed To Use",
			"name": "flexibleAllowedToUse",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "flexibleAllowedToUse",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
					]
				}
			}
		},
		{
			"displayName": "Details",
			"name": "details",
			"required": true,
			"default": "[\n  {\n    \"targetAsset\": \"BTC\"\n  }\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "details",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Add"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/lending/auto-invest/plan/edit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
					]
				}
			}
		},
		{
			"displayName": "Plan ID",
			"name": "planId",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "planId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
					]
				}
			}
		},
		{
			"displayName": "Subscription Amount",
			"name": "subscriptionAmount",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "subscriptionAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
					]
				}
			}
		},
		{
			"displayName": "Subscription Cycle",
			"name": "subscriptionCycle",
			"required": true,
			"default": "H1",
			"type": "options",
			"options": [
				{
					"name": "H 1",
					"value": "H1"
				},
				{
					"name": "H 4",
					"value": "H4"
				},
				{
					"name": "H 8",
					"value": "H8"
				},
				{
					"name": "H 12",
					"value": "H12"
				},
				{
					"name": "WEEKLY",
					"value": "WEEKLY"
				},
				{
					"name": "DAILY",
					"value": "DAILY"
				},
				{
					"name": "MONTHLY",
					"value": "MONTHLY"
				},
				{
					"name": "BI WEEKLY",
					"value": "BI_WEEKLY"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "subscriptionCycle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
					]
				}
			}
		},
		{
			"displayName": "Subscription Start Day",
			"name": "subscriptionStartDay",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "subscriptionStartDay",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
					]
				}
			}
		},
		{
			"displayName": "Subscription Start Weekday",
			"name": "subscriptionStartWeekday",
			"default": "MON",
			"type": "options",
			"options": [
				{
					"name": "MON",
					"value": "MON"
				},
				{
					"name": "TUE",
					"value": "TUE"
				},
				{
					"name": "WED",
					"value": "WED"
				},
				{
					"name": "THU",
					"value": "THU"
				},
				{
					"name": "FRI",
					"value": "FRI"
				},
				{
					"name": "SAT",
					"value": "SAT"
				},
				{
					"name": "SUN",
					"value": "SUN"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "subscriptionStartWeekday",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
					]
				}
			}
		},
		{
			"displayName": "Subscription Start Time",
			"name": "subscriptionStartTime",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "subscriptionStartTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
					]
				}
			}
		},
		{
			"displayName": "Source Asset",
			"name": "sourceAsset",
			"required": true,
			"default": "USDT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
					]
				}
			}
		},
		{
			"displayName": "Flexible Allowed To Use",
			"name": "flexibleAllowedToUse",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "flexibleAllowedToUse",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
					]
				}
			}
		},
		{
			"displayName": "Details",
			"name": "details",
			"default": "[\n  {\n    \"targetAsset\": \"BTC\"\n  }\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "details",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/lending/auto-invest/plan/edit-status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit Status"
					]
				}
			}
		},
		{
			"displayName": "Plan ID",
			"name": "planId",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "planId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit Status"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"required": true,
			"default": "ONGOING",
			"type": "options",
			"options": [
				{
					"name": "ONGOING",
					"value": "ONGOING"
				},
				{
					"name": "PAUSED",
					"value": "PAUSED"
				},
				{
					"name": "REMOVED",
					"value": "REMOVED"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit Status"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit Status"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit Status"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit Status"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Plan Edit Status"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/lending/auto-invest/plan/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Plan List"
					]
				}
			}
		},
		{
			"displayName": "Plan Type",
			"name": "planType",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "planType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Plan List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Plan List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Plan List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Plan List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Plan List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/lending/auto-invest/plan/id",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Plan ID"
					]
				}
			}
		},
		{
			"displayName": "Plan ID",
			"name": "planId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "planId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Plan ID"
					]
				}
			}
		},
		{
			"displayName": "Request ID",
			"name": "requestId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Plan ID"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Plan ID"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Plan ID"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Plan ID"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Plan ID"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/lending/auto-invest/history/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest History List"
					]
				}
			}
		},
		{
			"displayName": "Plan ID",
			"name": "planId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "planId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest History List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest History List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest History List"
					]
				}
			}
		},
		{
			"displayName": "Target Asset",
			"name": "targetAsset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "targetAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest History List"
					]
				}
			}
		},
		{
			"displayName": "Plan Type",
			"name": "planType",
			"default": "SINGLE",
			"type": "options",
			"options": [
				{
					"name": "SINGLE",
					"value": "SINGLE"
				},
				{
					"name": "PORTFOLIO",
					"value": "PORTFOLIO"
				},
				{
					"name": "INDEX",
					"value": "INDEX"
				},
				{
					"name": "ALL",
					"value": "ALL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "planType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest History List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest History List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest History List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest History List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest History List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest History List"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest History List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/lending/auto-invest/index/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Index Info"
					]
				}
			}
		},
		{
			"displayName": "Index ID",
			"name": "indexId",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "indexId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Index Info"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Index Info"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Index Info"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Index Info"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Index Info"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/lending/auto-invest/index/user-summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Index User Summary"
					]
				}
			}
		},
		{
			"displayName": "Index ID",
			"name": "indexId",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "indexId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Index User Summary"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Index User Summary"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Index User Summary"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Index User Summary"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Index User Summary"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/lending/auto-invest/one-off",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest One Off"
					]
				}
			}
		},
		{
			"displayName": "Source Type",
			"name": "sourceType",
			"required": true,
			"default": "MAIN_SITE",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest One Off"
					]
				}
			}
		},
		{
			"displayName": "Request ID",
			"name": "requestId",
			"default": "TR12354859",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest One Off"
					]
				}
			}
		},
		{
			"displayName": "Subscription Amount",
			"name": "subscriptionAmount",
			"required": true,
			"default": 10.1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "subscriptionAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest One Off"
					]
				}
			}
		},
		{
			"displayName": "Source Asset",
			"name": "sourceAsset",
			"required": true,
			"default": "USDT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceAsset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest One Off"
					]
				}
			}
		},
		{
			"displayName": "Flexible Allowed To Use",
			"name": "flexibleAllowedToUse",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "flexibleAllowedToUse",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest One Off"
					]
				}
			}
		},
		{
			"displayName": "Plan ID",
			"name": "planId",
			"default": 12345,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "planId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest One Off"
					]
				}
			}
		},
		{
			"displayName": "Index ID",
			"name": "indexId",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "indexId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest One Off"
					]
				}
			}
		},
		{
			"displayName": "Details",
			"name": "details",
			"default": "[\n  {\n    \"targetAsset\": \"BTC\",\n    \"percentage\": 40\n  }\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "details",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest One Off"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest One Off"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest One Off"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest One Off"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest One Off"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/lending/auto-invest/one-off/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest One Off Status"
					]
				}
			}
		},
		{
			"displayName": "Transaction ID",
			"name": "transactionId",
			"required": true,
			"default": 12345,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "transactionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest One Off Status"
					]
				}
			}
		},
		{
			"displayName": "Request ID",
			"name": "requestId",
			"default": "TR12354859",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest One Off Status"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest One Off Status"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest One Off Status"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest One Off Status"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest One Off Status"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/lending/auto-invest/redeem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Redeem"
					]
				}
			}
		},
		{
			"displayName": "Index ID",
			"name": "indexId",
			"required": true,
			"description": "PORTFOLIO plan's Id",
			"default": 123456,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "indexId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Redeem"
					]
				}
			}
		},
		{
			"displayName": "Request ID",
			"name": "requestId",
			"description": "sourceType + unique, transactionId and requestId cannot be empty at the same time",
			"default": "TR12354859",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Redeem"
					]
				}
			}
		},
		{
			"displayName": "Redemption Percentage",
			"name": "redemptionPercentage",
			"required": true,
			"description": "user redeem percentage,10/20/100.",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "redemptionPercentage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Redeem"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Redeem"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Redeem"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Redeem"
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
						"Auto Invest"
					],
					"operation": [
						"POST Sapi v1 Lending Auto Invest Redeem"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/lending/auto-invest/redeem/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Redeem History"
					]
				}
			}
		},
		{
			"displayName": "Request ID",
			"name": "requestId",
			"required": true,
			"default": 12345,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Redeem History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Redeem History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Redeem History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Redeem History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Redeem History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Redeem History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Redeem History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Redeem History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Redeem History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Redeem History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/lending/auto-invest/rebalance/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Rebalance History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Rebalance History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Rebalance History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Rebalance History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Rebalance History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Rebalance History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Rebalance History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Rebalance History"
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
						"Auto Invest"
					],
					"operation": [
						"GET Sapi v1 Lending Auto Invest Rebalance History"
					]
				}
			}
		},
];
