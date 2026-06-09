import type { INodeProperties } from 'n8n-workflow';

export const subAccountDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					]
				}
			},
			"options": [
				{
					"name": "POST Sapi v1 Sub Account Virtual Sub Account",
					"value": "POST Sapi v1 Sub Account Virtual Sub Account",
					"action": "Create a Virtual Sub-account(For Master Account)",
					"description": "- This request will generate a virtual sub account under your master account.\n- You need to enable \"trade\" option for the api key which requests this endpoint.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/sub-account/virtualSubAccount"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account List",
					"value": "GET Sapi v1 Sub Account List",
					"action": "Query Sub-account List (For Master Account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/list"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account Sub Transfer History",
					"value": "GET Sapi v1 Sub Account Sub Transfer History",
					"action": "Sub-account Spot Asset Transfer History (For Master Account)",
					"description": "- fromEmail and toEmail cannot be sent at the same time.\n- Return fromEmail equal master account email by default.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/sub/transfer/history"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account Futures Internal Transfer",
					"value": "GET Sapi v1 Sub Account Futures Internal Transfer",
					"action": "Sub-account Futures Asset Transfer History (For Master Account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/futures/internalTransfer"
						}
					}
				},
				{
					"name": "POST Sapi v1 Sub Account Futures Internal Transfer",
					"value": "POST Sapi v1 Sub Account Futures Internal Transfer",
					"action": "Sub-account Futures Asset Transfer (For Master Account)",
					"description": "- Master account can transfer max 2000 times a minute\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/sub-account/futures/internalTransfer"
						}
					}
				},
				{
					"name": "GET Sapi v3 Sub Account Assets",
					"value": "GET Sapi v3 Sub Account Assets",
					"action": "Sub-account Assets (For Master Account)",
					"description": "Fetch sub-account assets\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v3/sub-account/assets"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account Spot Summary",
					"value": "GET Sapi v1 Sub Account Spot Summary",
					"action": "Sub-account Spot Assets Summary (For Master Account)",
					"description": "Get BTC valued asset summary of subaccounts.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/spotSummary"
						}
					}
				},
				{
					"name": "GET Sapi v1 Capital Deposit Sub Address",
					"value": "GET Sapi v1 Capital Deposit Sub Address",
					"action": "Sub-account Spot Assets Summary (For Master Account)",
					"description": "Fetch sub-account deposit address\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/capital/deposit/subAddress"
						}
					}
				},
				{
					"name": "GET Sapi v1 Capital Deposit Sub Hisrec",
					"value": "GET Sapi v1 Capital Deposit Sub Hisrec",
					"action": "Sub-account Deposit History (For Master Account)",
					"description": "Fetch sub-account deposit history\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/capital/deposit/subHisrec"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account Status",
					"value": "GET Sapi v1 Sub Account Status",
					"action": "Sub-account's Status on Margin/Futures (For Master Account)",
					"description": "- If no `email` sent, all sub-accounts' information will be returned.\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/status"
						}
					}
				},
				{
					"name": "POST Sapi v1 Sub Account Margin Enable",
					"value": "POST Sapi v1 Sub Account Margin Enable",
					"action": "Enable Margin for Sub-account (For Master Account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/sub-account/margin/enable"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account Margin Account",
					"value": "GET Sapi v1 Sub Account Margin Account",
					"action": "Detail on Sub-account's Margin Account (For Master Account)",
					"description": "Weight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/margin/account"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account Margin Account Summary",
					"value": "GET Sapi v1 Sub Account Margin Account Summary",
					"action": "Summary of Sub-account's Margin Account (For Master Account)",
					"description": "Weight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/margin/accountSummary"
						}
					}
				},
				{
					"name": "POST Sapi v1 Sub Account Futures Enable",
					"value": "POST Sapi v1 Sub Account Futures Enable",
					"action": "Enable Futures for Sub-account (For Master Account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/sub-account/futures/enable"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account Futures Account",
					"value": "GET Sapi v1 Sub Account Futures Account",
					"action": "Detail on Sub-account's Futures Account (For Master Account)",
					"description": "Weight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/futures/account"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account Futures Account Summary",
					"value": "GET Sapi v1 Sub Account Futures Account Summary",
					"action": "Summary of Sub-account's Futures Account (For Master Account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/futures/accountSummary"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account Futures Position Risk",
					"value": "GET Sapi v1 Sub Account Futures Position Risk",
					"action": "Futures Position-Risk of Sub-account (For Master Account)",
					"description": "Weight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/futures/positionRisk"
						}
					}
				},
				{
					"name": "POST Sapi v1 Sub Account Futures Transfer",
					"value": "POST Sapi v1 Sub Account Futures Transfer",
					"action": "Transfer for Sub-account (For Master Account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/sub-account/futures/transfer"
						}
					}
				},
				{
					"name": "POST Sapi v1 Sub Account Margin Transfer",
					"value": "POST Sapi v1 Sub Account Margin Transfer",
					"action": "Margin Transfer for Sub-account (For Master Account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/sub-account/margin/transfer"
						}
					}
				},
				{
					"name": "POST Sapi v1 Sub Account Transfer Sub To Sub",
					"value": "POST Sapi v1 Sub Account Transfer Sub To Sub",
					"action": "Transfer to Sub-account of Same Master (For Sub-account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/sub-account/transfer/subToSub"
						}
					}
				},
				{
					"name": "POST Sapi v1 Sub Account Transfer Sub To Master",
					"value": "POST Sapi v1 Sub Account Transfer Sub To Master",
					"action": "Transfer to Master (For Sub-account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/sub-account/transfer/subToMaster"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account Transfer Sub User History",
					"value": "GET Sapi v1 Sub Account Transfer Sub User History",
					"action": "Sub-account Transfer History (For Sub-account)",
					"description": "- If `type` is not sent, the records of type 2: transfer out will be returned by default.\n- If `startTime` and `endTime` are not sent, the recent 30-day data will be returned.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/transfer/subUserHistory"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account Universal Transfer",
					"value": "GET Sapi v1 Sub Account Universal Transfer",
					"action": "Universal Transfer History (For Master Account)",
					"description": "- `fromEmail` and `toEmail` cannot be sent at the same time.\n- Return `fromEmail` equal master account email by default.\n- The query time period must be less then 30 days.\n- If startTime and endTime not sent, return records of the last 30 days by default.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/universalTransfer"
						}
					}
				},
				{
					"name": "POST Sapi v1 Sub Account Universal Transfer",
					"value": "POST Sapi v1 Sub Account Universal Transfer",
					"action": "Universal Transfer (For Master Account)",
					"description": "- You need to enable \"internal transfer\" option for the api key which requests this endpoint.\n- Transfer from master account by default if fromEmail is not sent.\n- Transfer to master account by default if toEmail is not sent.\n- Supported transfer scenarios:\n  - Master account SPOT transfer to sub-account SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN\n  - Sub-account SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN transfer to master account SPOT\n  - Transfer between two sub-account SPOT accounts\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/sub-account/universalTransfer"
						}
					}
				},
				{
					"name": "GET Sapi v2 Sub Account Futures Account",
					"value": "GET Sapi v2 Sub Account Futures Account",
					"action": "Detail on Sub-account's Futures Account V2 (For Master Account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v2/sub-account/futures/account"
						}
					}
				},
				{
					"name": "GET Sapi v2 Sub Account Futures Account Summary",
					"value": "GET Sapi v2 Sub Account Futures Account Summary",
					"action": "Summary of Sub-account's Futures Account V2 (For Master Account)",
					"description": "Weight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v2/sub-account/futures/accountSummary"
						}
					}
				},
				{
					"name": "GET Sapi v2 Sub Account Futures Position Risk",
					"value": "GET Sapi v2 Sub Account Futures Position Risk",
					"action": "Futures Position-Risk of Sub-account V2 (For Master Account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v2/sub-account/futures/positionRisk"
						}
					}
				},
				{
					"name": "POST Sapi v1 Sub Account Blvt Enable",
					"value": "POST Sapi v1 Sub Account Blvt Enable",
					"action": "Enable Leverage Token for Sub-account (For Master Account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/sub-account/blvt/enable"
						}
					}
				},
				{
					"name": "POST Sapi v1 Managed Subaccount Deposit",
					"value": "POST Sapi v1 Managed Subaccount Deposit",
					"action": "Deposit assets into the managed sub-account(For Investor Master Account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/managed-subaccount/deposit"
						}
					}
				},
				{
					"name": "GET Sapi v1 Managed Subaccount Asset",
					"value": "GET Sapi v1 Managed Subaccount Asset",
					"action": "Managed sub-account asset details(For Investor Master Account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/managed-subaccount/asset"
						}
					}
				},
				{
					"name": "POST Sapi v1 Managed Subaccount Withdraw",
					"value": "POST Sapi v1 Managed Subaccount Withdraw",
					"action": "Withdrawl assets from the managed sub-account(For Investor Master Account)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/managed-subaccount/withdraw"
						}
					}
				},
				{
					"name": "GET Sapi v1 Managed Subaccount Account Snapshot",
					"value": "GET Sapi v1 Managed Subaccount Account Snapshot",
					"action": "Managed sub-account snapshot (For Investor Master Account)",
					"description": "- The query time period must be less then 30 days\n- Support query within the last one month only\n- If `startTime` and `endTime` not sent, return records of the last 7 days by default\n\nWeight(IP): 2400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/managed-subaccount/accountSnapshot"
						}
					}
				},
				{
					"name": "GET Sapi v1 Managed Subaccount Query Trans Log For Investor",
					"value": "GET Sapi v1 Managed Subaccount Query Trans Log For Investor",
					"action": "Query Managed Sub Account Transfer Log (For Investor Master Account)",
					"description": "Investor can use this api to query managed sub account transfer log. This endpoint is available for investor of Managed Sub-Account. A Managed Sub-Account is an account type for investors who value flexibility in asset allocation and account application, while delegating trades to a professional trading team.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/managed-subaccount/queryTransLogForInvestor"
						}
					}
				},
				{
					"name": "GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent",
					"value": "GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent",
					"action": "Query Managed Sub Account Transfer Log (For Trading Team Master Account)",
					"description": "Trading team can use this api to query managed sub account transfer log. This endpoint is available for trading team of Managed Sub-Account. A Managed Sub-Account is an account type for investors who value flexibility in asset allocation and account application, while delegating trades to a professional trading team\n\nWeight(IP): 60",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/managed-subaccount/queryTransLogForTradeParent"
						}
					}
				},
				{
					"name": "GET Sapi v1 Managed Subaccount Fetch Future Asset",
					"value": "GET Sapi v1 Managed Subaccount Fetch Future Asset",
					"action": "Query Managed Sub-account Futures Asset Details (For Investor Master Account)",
					"description": "Investor can use this api to query managed sub account futures asset details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/managed-subaccount/fetch-future-asset"
						}
					}
				},
				{
					"name": "GET Sapi v1 Managed Subaccount Margin Asset",
					"value": "GET Sapi v1 Managed Subaccount Margin Asset",
					"action": "Query Managed Sub-account Margin Asset Details (For Investor Master Account)",
					"description": "Investor can use this api to query managed sub account margin asset details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/managed-subaccount/marginAsset"
						}
					}
				},
				{
					"name": "GET Sapi v1 Managed Subaccount Info",
					"value": "GET Sapi v1 Managed Subaccount Info",
					"action": "Query Managed Sub-account List (For Investor)",
					"description": "Get investor's managed sub-account list.\n\nWeight(UID): 60",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/managed-subaccount/info"
						}
					}
				},
				{
					"name": "GET Sapi v1 Managed Subaccount Deposit Address",
					"value": "GET Sapi v1 Managed Subaccount Deposit Address",
					"action": "Get Managed Sub-account Deposit Address (For Investor Master Account)",
					"description": "Get investor's managed sub-account deposit address\n\nWeight(UID): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/managed-subaccount/deposit/address"
						}
					}
				},
				{
					"name": "GET Sapi v1 Managed Subaccount Query Trans Log",
					"value": "GET Sapi v1 Managed Subaccount Query Trans Log",
					"action": "Query Managed Sub Account Transfer Log (For Trading Team Sub Account)(USER_DATA)",
					"description": "Query Managed Sub Account Transfer Log (For Trading Team Sub Account)\n\nWeight(UID): 60",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/managed-subaccount/query-trans-log"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account Sub Account API Ip Restriction",
					"value": "GET Sapi v1 Sub Account Sub Account API Ip Restriction",
					"action": "Get IP Restriction for a Sub-account API Key (For Master Account)",
					"description": "Weight(UID): 3000",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/subAccountApi/ipRestriction"
						}
					}
				},
				{
					"name": "DELETE Sapi v1 Sub Account Sub Account API Ip Restriction Ip List",
					"value": "DELETE Sapi v1 Sub Account Sub Account API Ip Restriction Ip List",
					"action": "Delete IP List for a Sub-account API Key (For Master Account)",
					"description": "Weight(UID): 3000",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList"
						}
					}
				},
				{
					"name": "GET Sapi v1 Sub Account Transaction Statistics",
					"value": "GET Sapi v1 Sub Account Transaction Statistics",
					"action": "Query Sub-account Transaction Statistics (For Master Account)",
					"description": "Query Sub-account Transaction statistics (For Master Account).\n\nWeight(UID): 60",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/sub-account/transaction-statistics"
						}
					}
				},
				{
					"name": "POST Sapi v1 Sub Account Eoptions Enable",
					"value": "POST Sapi v1 Sub Account Eoptions Enable",
					"action": "Enable Options for Sub-account (For Master Account)(USER_DATA)",
					"description": "Enable Options for Sub-account (For Master Account).\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/sub-account/eoptions/enable"
						}
					}
				},
				{
					"name": "POST Sapi v2 Sub Account Sub Account API Ip Restriction",
					"value": "POST Sapi v2 Sub Account Sub Account API Ip Restriction",
					"action": "Update IP Restriction for Sub-Account API key (For Master Account)",
					"description": "Update IP Restriction for Sub-Account API key\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v2/sub-account/subAccountApi/ipRestriction"
						}
					}
				},
				{
					"name": "GET Sapi v4 Sub Account Assets",
					"value": "GET Sapi v4 Sub Account Assets",
					"action": "Query Sub-account Assets (For Master Account)",
					"description": "Fetch sub-account assets\n\nWeight(UID): 60",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v4/sub-account/assets"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /sapi/v1/sub-account/virtualSubAccount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Virtual Sub Account"
					]
				}
			}
		},
		{
			"displayName": "Sub Account String",
			"name": "subAccountString",
			"required": true,
			"description": "Please input a string. We will create a virtual email using that string for you to register",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "subAccountString",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Virtual Sub Account"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Virtual Sub Account"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Virtual Sub Account"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Virtual Sub Account"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Virtual Sub Account"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account List"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account List"
					]
				}
			}
		},
		{
			"displayName": "Is Freeze",
			"name": "isFreeze",
			"default": "true",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "isFreeze",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account List"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account List"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 1; max 200",
			"default": 1,
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account List"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account List"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account List"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account List"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/sub/transfer/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Transfer History"
					]
				}
			}
		},
		{
			"displayName": "From Email",
			"name": "fromEmail",
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Transfer History"
					]
				}
			}
		},
		{
			"displayName": "To Email",
			"name": "toEmail",
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Transfer History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Transfer History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Transfer History"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Transfer History"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 1",
			"default": 1,
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Transfer History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Transfer History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Transfer History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Transfer History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Transfer History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/futures/internalTransfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Internal Transfer"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Internal Transfer"
					]
				}
			}
		},
		{
			"displayName": "Futures Type",
			"name": "futuresType",
			"required": true,
			"description": "1:USDT-margined Futures, 2: Coin-margined Futures",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "futuresType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Internal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Internal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Internal Transfer"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Internal Transfer"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default value: 50, Max value: 500",
			"default": 0,
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Internal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Internal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Internal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Internal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Internal Transfer"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/sub-account/futures/internalTransfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Internal Transfer"
					]
				}
			}
		},
		{
			"displayName": "From Email",
			"name": "fromEmail",
			"required": true,
			"description": "Sender email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Internal Transfer"
					]
				}
			}
		},
		{
			"displayName": "To Email",
			"name": "toEmail",
			"required": true,
			"description": "Recipient email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Internal Transfer"
					]
				}
			}
		},
		{
			"displayName": "Futures Type",
			"name": "futuresType",
			"required": true,
			"description": "1:USDT-margined Futures,2: Coin-margined Futures",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "futuresType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Internal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Internal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Internal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Internal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Internal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Internal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Internal Transfer"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v3/sub-account/assets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v3 Sub Account Assets"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v3 Sub Account Assets"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v3 Sub Account Assets"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v3 Sub Account Assets"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v3 Sub Account Assets"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v3 Sub Account Assets"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/spotSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Spot Summary"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Spot Summary"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Spot Summary"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Default:10 Max:20",
			"default": 0,
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Spot Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Spot Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Spot Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Spot Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Spot Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/capital/deposit/subAddress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Address"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Address"
					]
				}
			}
		},
		{
			"displayName": "Coin",
			"name": "coin",
			"required": true,
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Address"
					]
				}
			}
		},
		{
			"displayName": "Network",
			"name": "network",
			"default": "BTC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "network",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Address"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Address"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Address"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Address"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Address"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/capital/deposit/subHisrec",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Hisrec"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Hisrec"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Hisrec"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "0(0:pending,6: credited but cannot withdraw, 1:success)",
			"default": 0,
			"type": "number",
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Hisrec"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Hisrec"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Hisrec"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 0,
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Hisrec"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Hisrec"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Hisrec"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Hisrec"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Hisrec"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Sub Hisrec"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Status"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Status"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Status"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Status"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Status"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Status"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/sub-account/margin/enable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Enable"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Enable"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/margin/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Margin Account"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Margin Account"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Margin Account"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Margin Account"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Margin Account"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Margin Account"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/margin/accountSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Margin Account Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Margin Account Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Margin Account Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Margin Account Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Margin Account Summary"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/sub-account/futures/enable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Enable"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Enable"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/futures/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Account"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"default": "alice@test.com",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Account"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Account"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Account"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Account"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Account"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/futures/accountSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Account Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Account Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Account Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Account Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Account Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/futures/positionRisk",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Position Risk"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Position Risk"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Position Risk"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Position Risk"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Position Risk"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Futures Position Risk"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/sub-account/futures/transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Transfer"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Transfer"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "* `1` - transfer from subaccount's spot account to its USDT-margined futures account\n* `2` - transfer from subaccount's USDT-margined futures account to its spot account\n* `3` - transfer from subaccount's spot account to its COIN-margined futures account\n* `4` - transfer from subaccount's COIN-margined futures account to its spot account",
			"default": 0,
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Futures Transfer"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/sub-account/margin/transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Transfer"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Transfer"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "* `1` - transfer from subaccount's spot account to margin account\n* `2` - transfer from subaccount's margin account to its spot account",
			"default": 0,
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Margin Transfer"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/sub-account/transfer/subToSub",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Sub"
					]
				}
			}
		},
		{
			"displayName": "To Email",
			"name": "toEmail",
			"required": true,
			"description": "Recipient email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Sub"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Sub"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Sub"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Sub"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Sub"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Sub"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Sub"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/sub-account/transfer/subToMaster",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Master"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Master"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Master"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Master"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Master"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Master"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Transfer Sub To Master"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/transfer/subUserHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transfer Sub User History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transfer Sub User History"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "* `1` - transfer in\n* `2` - transfer out",
			"default": 0,
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transfer Sub User History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transfer Sub User History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transfer Sub User History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transfer Sub User History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transfer Sub User History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transfer Sub User History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transfer Sub User History"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transfer Sub User History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/universalTransfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Universal Transfer"
					]
				}
			}
		},
		{
			"displayName": "From Email",
			"name": "fromEmail",
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Universal Transfer"
					]
				}
			}
		},
		{
			"displayName": "To Email",
			"name": "toEmail",
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Universal Transfer"
					]
				}
			}
		},
		{
			"displayName": "Client Tran ID",
			"name": "clientTranId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "clientTranId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Universal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Universal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Universal Transfer"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Universal Transfer"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 500, Max 500",
			"default": 0,
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Universal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Universal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Universal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Universal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Universal Transfer"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/sub-account/universalTransfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Universal Transfer"
					]
				}
			}
		},
		{
			"displayName": "From Email",
			"name": "fromEmail",
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Universal Transfer"
					]
				}
			}
		},
		{
			"displayName": "To Email",
			"name": "toEmail",
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Universal Transfer"
					]
				}
			}
		},
		{
			"displayName": "From Account Type",
			"name": "fromAccountType",
			"required": true,
			"default": "SPOT",
			"type": "options",
			"options": [
				{
					"name": "SPOT",
					"value": "SPOT"
				},
				{
					"name": "USDT FUTURE",
					"value": "USDT_FUTURE"
				},
				{
					"name": "COIN FUTURE",
					"value": "COIN_FUTURE"
				},
				{
					"name": "MARGIN",
					"value": "MARGIN"
				},
				{
					"name": "ISOLATED MARGIN",
					"value": "ISOLATED_MARGIN"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "fromAccountType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Universal Transfer"
					]
				}
			}
		},
		{
			"displayName": "To Account Type",
			"name": "toAccountType",
			"required": true,
			"default": "SPOT",
			"type": "options",
			"options": [
				{
					"name": "SPOT",
					"value": "SPOT"
				},
				{
					"name": "USDT FUTURE",
					"value": "USDT_FUTURE"
				},
				{
					"name": "COIN FUTURE",
					"value": "COIN_FUTURE"
				},
				{
					"name": "MARGIN",
					"value": "MARGIN"
				},
				{
					"name": "ISOLATED MARGIN",
					"value": "ISOLATED_MARGIN"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "toAccountType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Universal Transfer"
					]
				}
			}
		},
		{
			"displayName": "Client Tran ID",
			"name": "clientTranId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "clientTranId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Universal Transfer"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"description": "Only supported under ISOLATED_MARGIN type",
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Universal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Universal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Universal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Universal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Universal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Universal Transfer"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Universal Transfer"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v2/sub-account/futures/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account"
					]
				}
			}
		},
		{
			"displayName": "Futures Type",
			"name": "futuresType",
			"required": true,
			"description": "* `1` - USDT Margined Futures\n* `2` - COIN Margined Futures",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "futuresType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v2/sub-account/futures/accountSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account Summary"
					]
				}
			}
		},
		{
			"displayName": "Futures Type",
			"name": "futuresType",
			"required": true,
			"description": "* `1` - USDT Margined Futures\n* `2` - COIN Margined Futures",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "futuresType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account Summary"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account Summary"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default 10, Max 20",
			"default": 0,
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account Summary"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Account Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v2/sub-account/futures/positionRisk",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Position Risk"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Position Risk"
					]
				}
			}
		},
		{
			"displayName": "Futures Type",
			"name": "futuresType",
			"required": true,
			"description": "* `1` - USDT Margined Futures\n* `2` - COIN Margined Futures",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "futuresType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Position Risk"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Position Risk"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Position Risk"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Position Risk"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v2 Sub Account Futures Position Risk"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/sub-account/blvt/enable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Blvt Enable"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Blvt Enable"
					]
				}
			}
		},
		{
			"displayName": "Enable Blvt",
			"name": "enableBlvt",
			"required": true,
			"description": "Only true for now",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "enableBlvt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Blvt Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Blvt Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Blvt Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Blvt Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Blvt Enable"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/managed-subaccount/deposit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Deposit"
					]
				}
			}
		},
		{
			"displayName": "To Email",
			"name": "toEmail",
			"required": true,
			"description": "Recipient email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Deposit"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Deposit"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Deposit"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Deposit"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Deposit"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Deposit"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Deposit"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/managed-subaccount/asset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Asset"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Asset"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Asset"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Asset"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Asset"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Asset"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/managed-subaccount/withdraw",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Withdraw"
					]
				}
			}
		},
		{
			"displayName": "From Email",
			"name": "fromEmail",
			"required": true,
			"description": "Sender email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Withdraw"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Withdraw"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Withdraw"
					]
				}
			}
		},
		{
			"displayName": "Transfer Date",
			"name": "transferDate",
			"description": "Withdrawals is automatically occur on the transfer date(UTC0). If a date is not selected, the withdrawal occurs right now",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "transferDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Withdraw"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Withdraw"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Withdraw"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Withdraw"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Managed Subaccount Withdraw"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/managed-subaccount/accountSnapshot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Account Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Account Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "\"SPOT\", \"MARGIN\"(cross), \"FUTURES\"(UM)",
			"default": "SPOT",
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Account Snapshot"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Account Snapshot"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Account Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "min 7, max 30, default 7",
			"default": 0,
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Account Snapshot"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Account Snapshot"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Account Snapshot"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Account Snapshot"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/managed-subaccount/queryTransLogForInvestor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Investor"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Investor"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Investor"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Investor"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Investor"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Investor"
					]
				}
			}
		},
		{
			"displayName": "Transfers",
			"name": "transfers",
			"description": "Transfer Direction (FROM/TO)",
			"default": "FROM",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "transfers",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Investor"
					]
				}
			}
		},
		{
			"displayName": "Transfer Function Account Type",
			"name": "transferFunctionAccountType",
			"description": "Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)",
			"default": "SPOT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "transferFunctionAccountType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Investor"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Investor"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Investor"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Investor"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Investor"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/managed-subaccount/queryTransLogForTradeParent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent"
					]
				}
			}
		},
		{
			"displayName": "Transfers",
			"name": "transfers",
			"description": "Transfer Direction (FROM/TO)",
			"default": "FROM",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "transfers",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent"
					]
				}
			}
		},
		{
			"displayName": "Transfer Function Account Type",
			"name": "transferFunctionAccountType",
			"description": "Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)",
			"default": "SPOT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "transferFunctionAccountType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log For Trade Parent"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/managed-subaccount/fetch-future-asset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Fetch Future Asset"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Fetch Future Asset"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Fetch Future Asset"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Fetch Future Asset"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Fetch Future Asset"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Fetch Future Asset"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/managed-subaccount/marginAsset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Margin Asset"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Margin Asset"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Margin Asset"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Margin Asset"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Margin Asset"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Margin Asset"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/managed-subaccount/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Info"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Info"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Info"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Info"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Info"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Info"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Info"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Info"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/managed-subaccount/deposit/address",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Deposit Address"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Deposit Address"
					]
				}
			}
		},
		{
			"displayName": "Coin",
			"name": "coin",
			"required": true,
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Deposit Address"
					]
				}
			}
		},
		{
			"displayName": "Network",
			"name": "network",
			"default": "BTC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "network",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Deposit Address"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Deposit Address"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Deposit Address"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Deposit Address"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Deposit Address"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/managed-subaccount/query-trans-log",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Default 1",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log"
					]
				}
			}
		},
		{
			"displayName": "Transfers",
			"name": "transfers",
			"required": true,
			"description": "Transfer Direction",
			"default": "FROM",
			"type": "options",
			"options": [
				{
					"name": "FROM",
					"value": "FROM"
				},
				{
					"name": "TO",
					"value": "TO"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "transfers",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log"
					]
				}
			}
		},
		{
			"displayName": "Transfer Function Account Type",
			"name": "transferFunctionAccountType",
			"required": true,
			"description": "Transfer function account type",
			"default": "SPOT",
			"type": "options",
			"options": [
				{
					"name": "SPOT",
					"value": "SPOT"
				},
				{
					"name": "MARGIN",
					"value": "MARGIN"
				},
				{
					"name": "ISOLATED MARGIN",
					"value": "ISOLATED_MARGIN"
				},
				{
					"name": "USDT FUTURE",
					"value": "USDT_FUTURE"
				},
				{
					"name": "COIN FUTURE",
					"value": "COIN_FUTURE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "transferFunctionAccountType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Managed Subaccount Query Trans Log"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/subAccountApi/ipRestriction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Account API Ip Restriction"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Account API Ip Restriction"
					]
				}
			}
		},
		{
			"displayName": "Sub Account API Key",
			"name": "subAccountApiKey",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "subAccountApiKey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Account API Ip Restriction"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Account API Ip Restriction"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Account API Ip Restriction"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Account API Ip Restriction"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Sub Account API Ip Restriction"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sapi/v1/sub-account/subAccountApi/ipRestriction/ipList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"DELETE Sapi v1 Sub Account Sub Account API Ip Restriction Ip List"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"DELETE Sapi v1 Sub Account Sub Account API Ip Restriction Ip List"
					]
				}
			}
		},
		{
			"displayName": "Sub Account API Key",
			"name": "subAccountApiKey",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "subAccountApiKey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"DELETE Sapi v1 Sub Account Sub Account API Ip Restriction Ip List"
					]
				}
			}
		},
		{
			"displayName": "Ip Address",
			"name": "ipAddress",
			"description": "Can be added in batches, separated by commas",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ipAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"DELETE Sapi v1 Sub Account Sub Account API Ip Restriction Ip List"
					]
				}
			}
		},
		{
			"displayName": "Third Party Name",
			"name": "thirdPartyName",
			"description": "third party IP list name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "thirdPartyName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"DELETE Sapi v1 Sub Account Sub Account API Ip Restriction Ip List"
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
						"Sub Account"
					],
					"operation": [
						"DELETE Sapi v1 Sub Account Sub Account API Ip Restriction Ip List"
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
						"Sub Account"
					],
					"operation": [
						"DELETE Sapi v1 Sub Account Sub Account API Ip Restriction Ip List"
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
						"Sub Account"
					],
					"operation": [
						"DELETE Sapi v1 Sub Account Sub Account API Ip Restriction Ip List"
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
						"Sub Account"
					],
					"operation": [
						"DELETE Sapi v1 Sub Account Sub Account API Ip Restriction Ip List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/sub-account/transaction-statistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transaction Statistics"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transaction Statistics"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transaction Statistics"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transaction Statistics"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transaction Statistics"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v1 Sub Account Transaction Statistics"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/sub-account/eoptions/enable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Eoptions Enable"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Eoptions Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Eoptions Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Eoptions Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Eoptions Enable"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v1 Sub Account Eoptions Enable"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v2/sub-account/subAccountApi/ipRestriction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v2 Sub Account Sub Account API Ip Restriction"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Sub-account email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v2 Sub Account Sub Account API Ip Restriction"
					]
				}
			}
		},
		{
			"displayName": "Sub Account API Key",
			"name": "subAccountApiKey",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "subAccountApiKey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v2 Sub Account Sub Account API Ip Restriction"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"required": true,
			"description": "IP Restriction status. 1 = IP Unrestricted. 2 = Restrict access to trusted IPs only. 3 = Restrict access to users' trusted third party IPs only",
			"default": "1",
			"type": "string",
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v2 Sub Account Sub Account API Ip Restriction"
					]
				}
			}
		},
		{
			"displayName": "Third Party Name",
			"name": "thirdPartyName",
			"description": "third party IP list name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "thirdPartyName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"POST Sapi v2 Sub Account Sub Account API Ip Restriction"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v2 Sub Account Sub Account API Ip Restriction"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v2 Sub Account Sub Account API Ip Restriction"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v2 Sub Account Sub Account API Ip Restriction"
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
						"Sub Account"
					],
					"operation": [
						"POST Sapi v2 Sub Account Sub Account API Ip Restriction"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v4/sub-account/assets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v4 Sub Account Assets"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sub Account"
					],
					"operation": [
						"GET Sapi v4 Sub Account Assets"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v4 Sub Account Assets"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v4 Sub Account Assets"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v4 Sub Account Assets"
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
						"Sub Account"
					],
					"operation": [
						"GET Sapi v4 Sub Account Assets"
					]
				}
			}
		},
];
