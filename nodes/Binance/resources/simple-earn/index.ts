import type { INodeProperties } from 'n8n-workflow';

export const simpleEarnDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi v1 Simple Earn Flexible List",
					"value": "GET Sapi v1 Simple Earn Flexible List",
					"action": "Get Simple Earn Flexible Product List (USER_DATA)",
					"description": "Get available Simple Earn flexible product list\n\nWeight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/flexible/list"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Locked List",
					"value": "GET Sapi v1 Simple Earn Locked List",
					"action": "Get Simple Earn Locked Product List (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/locked/list"
						}
					}
				},
				{
					"name": "POST Sapi v1 Simple Earn Flexible Subscribe",
					"value": "POST Sapi v1 Simple Earn Flexible Subscribe",
					"action": "Subscribe Flexible Product (TRADE)",
					"description": "Weight(IP): 1\n\nRate Limit: 1/3s per account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/simple-earn/flexible/subscribe"
						}
					}
				},
				{
					"name": "POST Sapi v1 Simple Earn Locked Subscribe",
					"value": "POST Sapi v1 Simple Earn Locked Subscribe",
					"action": "Subscribe Locked Product (TRADE)",
					"description": "Weight(IP): 1\n\nRate Limit: 1/3s per account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/simple-earn/locked/subscribe"
						}
					}
				},
				{
					"name": "POST Sapi v1 Simple Earn Flexible Redeem",
					"value": "POST Sapi v1 Simple Earn Flexible Redeem",
					"action": "Redeem Flexible Product (TRADE)",
					"description": "Weight(IP): 1\n\nRate Limit: 1/3s per account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/simple-earn/flexible/redeem"
						}
					}
				},
				{
					"name": "POST Sapi v1 Simple Earn Locked Redeem",
					"value": "POST Sapi v1 Simple Earn Locked Redeem",
					"action": "Redeem Locked Product (TRADE)",
					"description": "Weight(IP): 1\n\nRate Limit: 1/3s per account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/simple-earn/locked/redeem"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Flexible Position",
					"value": "GET Sapi v1 Simple Earn Flexible Position",
					"action": "Get Flexible Product Position (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/flexible/position"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Locked Position",
					"value": "GET Sapi v1 Simple Earn Locked Position",
					"action": "Get Locked Product Position (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/locked/position"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Account",
					"value": "GET Sapi v1 Simple Earn Account",
					"action": "Simple Account (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/account"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Flexible History Subscription Record",
					"value": "GET Sapi v1 Simple Earn Flexible History Subscription Record",
					"action": "Get Flexible Subscription Record (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/flexible/history/subscriptionRecord"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Locked History Subscription Record",
					"value": "GET Sapi v1 Simple Earn Locked History Subscription Record",
					"action": "Get Locked Subscription Record (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/locked/history/subscriptionRecord"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Flexible History Redemption Record",
					"value": "GET Sapi v1 Simple Earn Flexible History Redemption Record",
					"action": "Get Flexible Redemption Record (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/flexible/history/redemptionRecord"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Locked History Redemption Record",
					"value": "GET Sapi v1 Simple Earn Locked History Redemption Record",
					"action": "Get Locked Redemption Record (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/locked/history/redemptionRecord"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Flexible History Rewards Record",
					"value": "GET Sapi v1 Simple Earn Flexible History Rewards Record",
					"action": "Get Flexible Rewards History (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/flexible/history/rewardsRecord"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Locked History Rewards Record",
					"value": "GET Sapi v1 Simple Earn Locked History Rewards Record",
					"action": "Get Locked Rewards History (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/locked/history/rewardsRecord"
						}
					}
				},
				{
					"name": "POST Sapi v1 Simple Earn Flexible Set Auto Subscribe",
					"value": "POST Sapi v1 Simple Earn Flexible Set Auto Subscribe",
					"action": "Set Flexible Auto Subscribe (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/simple-earn/flexible/setAutoSubscribe"
						}
					}
				},
				{
					"name": "POST Sapi v1 Simple Earn Locked Set Auto Subscribe",
					"value": "POST Sapi v1 Simple Earn Locked Set Auto Subscribe",
					"action": "Set Locked Auto Subscribe (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/simple-earn/locked/setAutoSubscribe"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Flexible Personal Left Quota",
					"value": "GET Sapi v1 Simple Earn Flexible Personal Left Quota",
					"action": "Get Flexible Personal Left Quota (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/flexible/personalLeftQuota"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Locked Personal Left Quota",
					"value": "GET Sapi v1 Simple Earn Locked Personal Left Quota",
					"action": "Get Locked Personal Left Quota (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/locked/personalLeftQuota"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Flexible Subscription Preview",
					"value": "GET Sapi v1 Simple Earn Flexible Subscription Preview",
					"action": "Get Flexible Subscription Preview (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/flexible/subscriptionPreview"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Locked Subscription Preview",
					"value": "GET Sapi v1 Simple Earn Locked Subscription Preview",
					"action": "Get Locked Subscription Preview (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/locked/subscriptionPreview"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Locked Set Redeem Option",
					"value": "GET Sapi v1 Simple Earn Locked Set Redeem Option",
					"action": "Set Locked Product Redeem Option(USER_DATA)",
					"description": "Set redeem option for Locked product\n\nWeight(IP): 50",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/locked/setRedeemOption"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Flexible History Rate History",
					"value": "GET Sapi v1 Simple Earn Flexible History Rate History",
					"action": "Get Rate History (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/flexible/history/rateHistory"
						}
					}
				},
				{
					"name": "GET Sapi v1 Simple Earn Flexible History Collateral Record",
					"value": "GET Sapi v1 Simple Earn Flexible History Collateral Record",
					"action": "Get Collateral Record (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/simple-earn/flexible/history/collateralRecord"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/flexible/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/locked/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked List"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked List"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/simple-earn/flexible/subscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "productId",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "productId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"default": 0,
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Auto Subscribe",
			"name": "autoSubscribe",
			"description": "true or false, default true.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "autoSubscribe",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Source Account",
			"name": "sourceAccount",
			"description": "SPOT,FUND,ALL, default SPOT",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceAccount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Subscribe"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/simple-earn/locked/subscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "projectId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"default": 0,
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Auto Subscribe",
			"name": "autoSubscribe",
			"description": "true or false, default true.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "autoSubscribe",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Source Account",
			"name": "sourceAccount",
			"description": "SPOT,FUND,ALL, default SPOT",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceAccount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Redeem To",
			"name": "redeemTo",
			"description": "SPOT,FLEXIBLE, default FLEXIBLE",
			"default": "SPOT",
			"type": "options",
			"options": [
				{
					"name": "SPOT",
					"value": "SPOT"
				},
				{
					"name": "FLEXIBLE",
					"value": "FLEXIBLE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "redeemTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Subscribe"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/simple-earn/flexible/redeem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Redeem"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "productId",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "productId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Redeem"
					]
				}
			}
		},
		{
			"displayName": "Redeem All",
			"name": "redeemAll",
			"description": "true or false, default to false",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "redeemAll",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Redeem"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"description": "if redeemAll is false, amount is mandatory",
			"default": 0,
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Redeem"
					]
				}
			}
		},
		{
			"displayName": "Dest Account",
			"name": "destAccount",
			"description": "SPOT,FUND,ALL, default SPOT",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destAccount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Redeem"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Redeem"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Redeem"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Redeem"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Redeem"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/simple-earn/locked/redeem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Redeem"
					]
				}
			}
		},
		{
			"displayName": "Position ID",
			"name": "positionId",
			"required": true,
			"description": "1234",
			"default": "",
			"type": "string",
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Redeem"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Redeem"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Redeem"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Redeem"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Redeem"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/flexible/position",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Position"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"default": "",
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Position"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "productId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "productId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Position"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Position"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Position"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Position"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Position"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Position"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Position"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/locked/position",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Position"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"default": "",
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Position"
					]
				}
			}
		},
		{
			"displayName": "Position ID",
			"name": "positionId",
			"default": "",
			"type": "string",
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Position"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "projectId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Position"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Position"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Position"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Position"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Position"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Position"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Position"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Account"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Account"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Account"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Account"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Account"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/flexible/history/subscriptionRecord",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Subscription Record"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "productId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "productId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Subscription Record"
					]
				}
			}
		},
		{
			"displayName": "Purchase ID",
			"name": "purchaseId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "purchaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Subscription Record"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"default": "",
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Subscription Record"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/locked/history/subscriptionRecord",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Subscription Record"
					]
				}
			}
		},
		{
			"displayName": "Purchase ID",
			"name": "purchaseId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "purchaseId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Subscription Record"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"default": "",
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Subscription Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Subscription Record"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/flexible/history/redemptionRecord",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Redemption Record"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "productId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "productId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Redemption Record"
					]
				}
			}
		},
		{
			"displayName": "Redeem ID",
			"name": "redeemId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "redeemId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Redemption Record"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"default": "",
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Redemption Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Redemption Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Redemption Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Redemption Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Redemption Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Redemption Record"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/locked/history/redemptionRecord",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Redemption Record"
					]
				}
			}
		},
		{
			"displayName": "Position ID",
			"name": "positionId",
			"default": "",
			"type": "string",
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Redemption Record"
					]
				}
			}
		},
		{
			"displayName": "Redeem ID",
			"name": "redeemId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "redeemId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Redemption Record"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"default": "",
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Redemption Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Redemption Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Redemption Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Redemption Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Redemption Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Redemption Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Redemption Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Redemption Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Redemption Record"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/flexible/history/rewardsRecord",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rewards Record"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "productId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "productId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rewards Record"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"default": "",
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rewards Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rewards Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rewards Record"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "\"BONUS\", \"REALTIME\", \"REWARDS\"",
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rewards Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rewards Record"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/locked/history/rewardsRecord",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Rewards Record"
					]
				}
			}
		},
		{
			"displayName": "Position ID",
			"name": "positionId",
			"default": "",
			"type": "string",
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Rewards Record"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"default": "",
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Rewards Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Rewards Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Rewards Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Rewards Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Rewards Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Rewards Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Rewards Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked History Rewards Record"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/simple-earn/flexible/setAutoSubscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Set Auto Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "productId",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "productId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Set Auto Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Auto Subscribe",
			"name": "autoSubscribe",
			"required": true,
			"description": "true or false",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "autoSubscribe",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Set Auto Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Set Auto Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Set Auto Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Set Auto Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Flexible Set Auto Subscribe"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/simple-earn/locked/setAutoSubscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Set Auto Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Position ID",
			"name": "positionId",
			"required": true,
			"default": "",
			"type": "string",
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Set Auto Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Auto Subscribe",
			"name": "autoSubscribe",
			"required": true,
			"description": "true or false",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "autoSubscribe",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Set Auto Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Set Auto Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Set Auto Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Set Auto Subscribe"
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
						"Simple Earn"
					],
					"operation": [
						"POST Sapi v1 Simple Earn Locked Set Auto Subscribe"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/flexible/personalLeftQuota",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Personal Left Quota"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "productId",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "productId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Personal Left Quota"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Personal Left Quota"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Personal Left Quota"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Personal Left Quota"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Personal Left Quota"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/locked/personalLeftQuota",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Personal Left Quota"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "projectId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Personal Left Quota"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Personal Left Quota"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Personal Left Quota"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Personal Left Quota"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Personal Left Quota"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/flexible/subscriptionPreview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Subscription Preview"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "productId",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "productId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Subscription Preview"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"default": 0,
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Subscription Preview"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Subscription Preview"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Subscription Preview"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Subscription Preview"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible Subscription Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/locked/subscriptionPreview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Subscription Preview"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "projectId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Subscription Preview"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"default": 0,
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Subscription Preview"
					]
				}
			}
		},
		{
			"displayName": "Auto Subscribe",
			"name": "autoSubscribe",
			"description": "true or false, default true.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "autoSubscribe",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Subscription Preview"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Subscription Preview"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Subscription Preview"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Subscription Preview"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Subscription Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/locked/setRedeemOption",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Set Redeem Option"
					]
				}
			}
		},
		{
			"displayName": "Position ID",
			"name": "positionId",
			"required": true,
			"default": "",
			"type": "string",
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Set Redeem Option"
					]
				}
			}
		},
		{
			"displayName": "Redeem To",
			"name": "redeemTo",
			"description": "SPOT,FLEXIBLE, default FLEXIBLE",
			"default": "SPOT",
			"type": "options",
			"options": [
				{
					"name": "SPOT",
					"value": "SPOT"
				},
				{
					"name": "FLEXIBLE",
					"value": "FLEXIBLE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "redeemTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Set Redeem Option"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Set Redeem Option"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Set Redeem Option"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Set Redeem Option"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Locked Set Redeem Option"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/flexible/history/rateHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rate History"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "productId",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "productId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rate History"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rate History"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rate History"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rate History"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rate History"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rate History"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rate History"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rate History"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Rate History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/simple-earn/flexible/history/collateralRecord",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Collateral Record"
					]
				}
			}
		},
		{
			"displayName": "Product ID",
			"name": "productId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "productId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Collateral Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Collateral Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Collateral Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Collateral Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Collateral Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Collateral Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Collateral Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Collateral Record"
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
						"Simple Earn"
					],
					"operation": [
						"GET Sapi v1 Simple Earn Flexible History Collateral Record"
					]
				}
			}
		},
];
