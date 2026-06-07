import type { INodeProperties } from 'n8n-workflow';

export const stakingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					]
				}
			},
			"options": [
				{
					"name": "POST Sapi V 2 Eth Staking Eth Stake",
					"value": "POST Sapi V 2 Eth Staking Eth Stake",
					"action": "Subscribe ETH Staking V2(TRADE)",
					"description": "Stake ETH to get WBETH\n\n- You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.\n\nWeight(IP): 150",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v2/eth-staking/eth/stake"
						}
					}
				},
				{
					"name": "POST Sapi V 1 Eth Staking Eth Redeem",
					"value": "POST Sapi V 1 Eth Staking Eth Redeem",
					"action": "Redeem ETH (TRADE)",
					"description": "Redeem WBETH or BETH and get ETH\n\n- You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.\n\nWeight(IP): 150",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/eth-staking/eth/redeem"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Eth Staking Eth History Staking History",
					"value": "GET Sapi V 1 Eth Staking Eth History Staking History",
					"action": "Get ETH staking history (USER_DATA)",
					"description": "- The time between startTime and endTime cannot be longer than 3 months.\n- If startTime and endTime are both not sent, then the last 30 days' data will be returned.\n- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.\n- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.\n\nWeight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/eth-staking/eth/history/stakingHistory"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Eth Staking Eth History Redemption History",
					"value": "GET Sapi V 1 Eth Staking Eth History Redemption History",
					"action": "Get ETH redemption history (USER_DATA)",
					"description": "- The time between startTime and endTime cannot be longer than 3 months.\n- If startTime and endTime are both not sent, then the last 30 days' data will be returned.\n- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.\n- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.\n\nWeight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/eth-staking/eth/history/redemptionHistory"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Eth Staking Eth History Rewards History",
					"value": "GET Sapi V 1 Eth Staking Eth History Rewards History",
					"action": "Get BETH rewards distribution history(USER_DATA)",
					"description": "- The time between startTime and endTime cannot be longer than 3 months.\n- If startTime and endTime are both not sent, then the last 30 days' data will be returned.\n- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.\n- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.\n\nWeight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/eth-staking/eth/history/rewardsHistory"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Eth Staking Eth Quota",
					"value": "GET Sapi V 1 Eth Staking Eth Quota",
					"action": "Get current ETH staking quota (USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/eth-staking/eth/quota"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Eth Staking Eth History Rate History",
					"value": "GET Sapi V 1 Eth Staking Eth History Rate History",
					"action": "Get WBETH Rate History (USER_DATA)",
					"description": "- The time between startTime and endTime cannot be longer than 3 months.\n- If startTime and endTime are both not sent, then the last 30 days' data will be returned.\n- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.\n- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.\n\nWeight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/eth-staking/eth/history/rateHistory"
						}
					}
				},
				{
					"name": "GET Sapi V 2 Eth Staking Account",
					"value": "GET Sapi V 2 Eth Staking Account",
					"action": "ETH Staking account V2(USER_DATA)",
					"description": "Weight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v2/eth-staking/account"
						}
					}
				},
				{
					"name": "POST Sapi V 1 Eth Staking Wbeth Wrap",
					"value": "POST Sapi V 1 Eth Staking Wbeth Wrap",
					"action": "Wrap BETH(TRADE)",
					"description": "- You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.\n\nWeight(IP): 150",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/eth-staking/wbeth/wrap"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Eth Staking Wbeth History Wrap History",
					"value": "GET Sapi V 1 Eth Staking Wbeth History Wrap History",
					"action": "Get WBETH wrap history (USER_DATA)",
					"description": "- The time between startTime and endTime cannot be longer than 3 months.\n- If startTime and endTime are both not sent, then the last 30 days' data will be returned.\n- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.\n- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.\n\nWeight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/eth-staking/wbeth/history/wrapHistory"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Eth Staking Wbeth History Unwrap History",
					"value": "GET Sapi V 1 Eth Staking Wbeth History Unwrap History",
					"action": "Get WBETH unwrap history (USER_DATA)",
					"description": "- The time between startTime and endTime cannot be longer than 3 months.\n- If startTime and endTime are both not sent, then the last 30 days' data will be returned.\n- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.\n- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.\n\nWeight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/eth-staking/wbeth/history/unwrapHistory"
						}
					}
				},
				{
					"name": "GET Sapi V 1 Eth Staking Eth History Wbeth Rewards History",
					"value": "GET Sapi V 1 Eth Staking Eth History Wbeth Rewards History",
					"action": "Get WBETH rewards history(USER_DATA)",
					"description": "- The time between startTime and endTime cannot be longer than 3 months.\n- If startTime and endTime are both not sent, then the last 30 days' data will be returned.\n- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.\n- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.\n\nWeight(IP): 150",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/eth-staking/eth/history/wbethRewardsHistory"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /sapi/v2/eth-staking/eth/stake",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					],
					"operation": [
						"POST Sapi V 2 Eth Staking Eth Stake"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"description": "Amount in ETH, limit 4 decimals",
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
						"Staking"
					],
					"operation": [
						"POST Sapi V 2 Eth Staking Eth Stake"
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
						"Staking"
					],
					"operation": [
						"POST Sapi V 2 Eth Staking Eth Stake"
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
						"Staking"
					],
					"operation": [
						"POST Sapi V 2 Eth Staking Eth Stake"
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
						"Staking"
					],
					"operation": [
						"POST Sapi V 2 Eth Staking Eth Stake"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/eth-staking/eth/redeem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					],
					"operation": [
						"POST Sapi V 1 Eth Staking Eth Redeem"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"description": "WBETH or BETH, default to BETH",
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
						"Staking"
					],
					"operation": [
						"POST Sapi V 1 Eth Staking Eth Redeem"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"description": "Amount in BETH, limit 8 decimals",
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
						"Staking"
					],
					"operation": [
						"POST Sapi V 1 Eth Staking Eth Redeem"
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
						"Staking"
					],
					"operation": [
						"POST Sapi V 1 Eth Staking Eth Redeem"
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
						"Staking"
					],
					"operation": [
						"POST Sapi V 1 Eth Staking Eth Redeem"
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
						"Staking"
					],
					"operation": [
						"POST Sapi V 1 Eth Staking Eth Redeem"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/eth-staking/eth/history/stakingHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Staking History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Staking History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Staking History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Staking History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Staking History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Staking History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Staking History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Staking History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/eth-staking/eth/history/redemptionHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Redemption History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Redemption History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Redemption History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Redemption History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Redemption History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Redemption History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Redemption History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Redemption History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/eth-staking/eth/history/rewardsHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rewards History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/eth-staking/eth/quota",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth Quota"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth Quota"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth Quota"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth Quota"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/eth-staking/eth/history/rateHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rate History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rate History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rate History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rate History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rate History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rate History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rate History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Rate History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v2/eth-staking/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					],
					"operation": [
						"GET Sapi V 2 Eth Staking Account"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 2 Eth Staking Account"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 2 Eth Staking Account"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 2 Eth Staking Account"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/eth-staking/wbeth/wrap",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					],
					"operation": [
						"POST Sapi V 1 Eth Staking Wbeth Wrap"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"description": "Amount in BETH, limit 4 decimals",
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
						"Staking"
					],
					"operation": [
						"POST Sapi V 1 Eth Staking Wbeth Wrap"
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
						"Staking"
					],
					"operation": [
						"POST Sapi V 1 Eth Staking Wbeth Wrap"
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
						"Staking"
					],
					"operation": [
						"POST Sapi V 1 Eth Staking Wbeth Wrap"
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
						"Staking"
					],
					"operation": [
						"POST Sapi V 1 Eth Staking Wbeth Wrap"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/eth-staking/wbeth/history/wrapHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Wrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Wrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Wrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Wrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Wrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Wrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Wrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Wrap History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/eth-staking/wbeth/history/unwrapHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Unwrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Unwrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Unwrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Unwrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Unwrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Unwrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Unwrap History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Wbeth History Unwrap History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/eth-staking/eth/history/wbethRewardsHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Wbeth Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Wbeth Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Wbeth Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Wbeth Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Wbeth Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Wbeth Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Wbeth Rewards History"
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
						"Staking"
					],
					"operation": [
						"GET Sapi V 1 Eth Staking Eth History Wbeth Rewards History"
					]
				}
			}
		},
];
