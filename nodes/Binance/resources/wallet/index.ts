import type { INodeProperties } from 'n8n-workflow';

export const walletDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					]
				}
			},
			"options": [
				{
					"name": "GET Sapi v1 System Status",
					"value": "GET Sapi v1 System Status",
					"action": "System Status (System)",
					"description": "Fetch system status.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/system/status"
						}
					}
				},
				{
					"name": "GET Sapi v1 Capital Config Getall",
					"value": "GET Sapi v1 Capital Config Getall",
					"action": "All Coins' Information (USER_DATA)",
					"description": "Get information of coins (available for deposit and withdraw) for user.\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/capital/config/getall"
						}
					}
				},
				{
					"name": "GET Sapi v1 Account Snapshot",
					"value": "GET Sapi v1 Account Snapshot",
					"action": "Daily Account Snapshot (USER_DATA)",
					"description": "- The query time period must be less than 30 days\n- Support query within the last one month only\n- If startTimeand endTime not sent, return records of the last 7 days by default\n\nWeight(IP): 2400",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/accountSnapshot"
						}
					}
				},
				{
					"name": "POST Sapi v1 Account Disable Fast Withdraw Switch",
					"value": "POST Sapi v1 Account Disable Fast Withdraw Switch",
					"action": "Disable Fast Withdraw Switch (USER_DATA)",
					"description": "- This request will disable fastwithdraw switch under your account.\n- You need to enable \"trade\" option for the api key which requests this endpoint.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/account/disableFastWithdrawSwitch"
						}
					}
				},
				{
					"name": "POST Sapi v1 Account Enable Fast Withdraw Switch",
					"value": "POST Sapi v1 Account Enable Fast Withdraw Switch",
					"action": "Enable Fast Withdraw Switch (USER_DATA)",
					"description": "- This request will enable fastwithdraw switch under your account. You need to enable \"trade\" option for the api key which requests this endpoint.\n- When Fast Withdraw Switch is on, transferring funds to a Binance account will be done instantly. There is no on-chain transaction, no transaction ID and no withdrawal fee.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/account/enableFastWithdrawSwitch"
						}
					}
				},
				{
					"name": "POST Sapi v1 Capital Withdraw Apply",
					"value": "POST Sapi v1 Capital Withdraw Apply",
					"action": "Withdraw (USER_DATA)",
					"description": "Submit a withdraw request.\n\n- If `network` not send, return with default network of the coin.\n- You can get `network` and `isDefault` in `networkList` of a coin in the response of `Get /sapi/v1/capital/config/getall (HMAC SHA256)`.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/capital/withdraw/apply"
						}
					}
				},
				{
					"name": "GET Sapi v1 Capital Deposit Hisrec",
					"value": "GET Sapi v1 Capital Deposit Hisrec",
					"action": "Deposit History(supporting network) (USER_DATA)",
					"description": "Fetch deposit history.\n\n- Please notice the default `startTime` and `endTime` to make sure that time interval is within 0-90 days.\n- If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be less than 90 days.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/capital/deposit/hisrec"
						}
					}
				},
				{
					"name": "GET Sapi v1 Capital Withdraw History",
					"value": "GET Sapi v1 Capital Withdraw History",
					"action": "Withdraw History (supporting network) (USER_DATA)",
					"description": "Fetch withdraw history.\n\nThis endpoint specifically uses per second UID rate limit, user's total second level IP rate limit is 180000/second. Response from the endpoint contains header key X-SAPI-USED-UID-WEIGHT-1S, which defines weight used by the current IP.\n\n- `network` may not be in the response for old withdraw.\n- Please notice the default `startTime` and `endTime` to make sure that time interval is within 0-90 days.\n- If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be less than 90 days\n- If withdrawOrderId is sent, time between startTime and endTime must be less than 7 days.\n- If withdrawOrderId is sent, startTime and endTime are not sent, will return last 7 days records by default.\n\nWeight(UID): 18000\nRequest Limit: 10 requests per second",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/capital/withdraw/history"
						}
					}
				},
				{
					"name": "GET Sapi v1 Capital Deposit Address",
					"value": "GET Sapi v1 Capital Deposit Address",
					"action": "Deposit Address (supporting network) (USER_DATA)",
					"description": "Fetch deposit address with network.\n\n- If network is not send, return with default network of the coin.\n- You can get network and isDefault in networkList in the response of Get /sapi/v1/capital/config/getall (HMAC SHA256).\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/capital/deposit/address"
						}
					}
				},
				{
					"name": "GET Sapi v1 Account Status",
					"value": "GET Sapi v1 Account Status",
					"action": "Account Status (USER_DATA)",
					"description": "Fetch account status detail.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/account/status"
						}
					}
				},
				{
					"name": "GET Sapi v1 Account API Trading Status",
					"value": "GET Sapi v1 Account API Trading Status",
					"action": "Account API Trading Status (USER_DATA)",
					"description": "Fetch account API trading status with details.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/account/apiTradingStatus"
						}
					}
				},
				{
					"name": "GET Sapi v1 Asset Dribblet",
					"value": "GET Sapi v1 Asset Dribblet",
					"action": "DustLog(USER_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/asset/dribblet"
						}
					}
				},
				{
					"name": "POST Sapi v1 Asset Dust Btc",
					"value": "POST Sapi v1 Asset Dust Btc",
					"action": "Get Assets That Can Be Converted Into BNB (USER_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/asset/dust-btc"
						}
					}
				},
				{
					"name": "POST Sapi v1 Asset Dust",
					"value": "POST Sapi v1 Asset Dust",
					"action": "Dust Transfer (USER_DATA)",
					"description": "Convert dust assets to BNB.\n\nWeight(UID): 10",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/asset/dust"
						}
					}
				},
				{
					"name": "GET Sapi v1 Asset Asset Dividend",
					"value": "GET Sapi v1 Asset Asset Dividend",
					"action": "Asset Dividend Record (USER_DATA)",
					"description": "Query asset Dividend Record\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/asset/assetDividend"
						}
					}
				},
				{
					"name": "GET Sapi v1 Asset Asset Detail",
					"value": "GET Sapi v1 Asset Asset Detail",
					"action": "Asset Detail (USER_DATA)",
					"description": "Fetch details of assets supported on Binance.\n\n- Please get network and other deposit or withdraw details from `GET /sapi/v1/capital/config/getall`.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/asset/assetDetail"
						}
					}
				},
				{
					"name": "GET Sapi v1 Asset Trade Fee",
					"value": "GET Sapi v1 Asset Trade Fee",
					"action": "Trade Fee (USER_DATA)",
					"description": "Fetch trade fee\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/asset/tradeFee"
						}
					}
				},
				{
					"name": "GET Sapi v1 Asset Transfer",
					"value": "GET Sapi v1 Asset Transfer",
					"action": "Query User Universal Transfer History (USER_DATA)",
					"description": "- `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN\n- `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN\n- Support query within the last 6 months only\n- If `startTime` and `endTime` not sent, return records of the last 7 days by default\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/asset/transfer"
						}
					}
				},
				{
					"name": "POST Sapi v1 Asset Transfer",
					"value": "POST Sapi v1 Asset Transfer",
					"action": "User Universal Transfer (USER_DATA)",
					"description": "You need to enable `Permits Universal Transfer` option for the api key which requests this endpoint.\n\n- `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN\n- `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN\n\nENUM of transfer types:\n  - MAIN_UMFUTURE Spot account transfer to USDⓈ-M Futures account\n  - MAIN_CMFUTURE Spot account transfer to COIN-M Futures account\n  - MAIN_MARGIN Spot account transfer to Margin(cross)account\n  - UMFUTURE_MAIN USDⓈ-M Futures account transfer to Spot account\n  - UMFUTURE_MARGIN USDⓈ-M Futures account transfer to Margin(cross)account\n  - CMFUTURE_MAIN COIN-M Futures account transfer to Spot account\n  - CMFUTURE_MARGIN COIN-M Futures account transfer to Margin(cross) account\n  - MARGIN_MAIN Margin(cross)account transfer to Spot account\n  - MARGIN_UMFUTURE Margin(cross)account transfer to USDⓈ-M Futures\n  - MARGIN_CMFUTURE Margin(cross)account transfer to COIN-M Futures\n  - ISOLATEDMARGIN_MARGIN Isolated margin account transfer to Margin(cross) account\n  - MARGIN_ISOLATEDMARGIN Margin(cross) account transfer to Isolated margin account\n  - ISOLATEDMARGIN_ISOLATEDMARGIN Isolated margin account transfer to Isolated margin account\n  - MAIN_FUNDING Spot account transfer to Funding account\n  - FUNDING_MAIN Funding account transfer to Spot account\n  - FUNDING_UMFUTURE Funding account transfer to UMFUTURE account\n  - UMFUTURE_FUNDING UMFUTURE account transfer to Funding account\n  - MARGIN_FUNDING MARGIN account transfer to Funding account\n  - FUNDING_MARGIN Funding account transfer to Margin account\n  - FUNDING_CMFUTURE Funding account transfer to CMFUTURE account\n  - CMFUTURE_FUNDING CMFUTURE account transfer to Funding account\n  - MAIN_OPTION Spot account transfer to Options account\n  - OPTION_MAIN Options account transfer to Spot account\n  - UMFUTURE_OPTION USDⓈ-M Futures account transfer to Options account\n  - OPTION_UMFUTURE Options account transfer to USDⓈ-M Futures account\n  - MARGIN_OPTION Margin(cross)account transfer to Options account\n  - OPTION_MARGIN Options account transfer to Margin(cross)account\n  - FUNDING_OPTION Funding account transfer to Options account\n  - OPTION_FUNDING Options account transfer to Funding account\n  - MAIN_PORTFOLIO_MARGIN Spot account transfer to Portfolio Margin account\n  - PORTFOLIO_MARGIN_MAIN Portfolio Margin account transfer to Spot account\n  - MAIN_ISOLATED_MARGIN Spot account transfer to Isolated margin account\n  - ISOLATED_MARGIN_MAIN Isolated margin account transfer to Spot account\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/asset/transfer"
						}
					}
				},
				{
					"name": "POST Sapi v1 Asset Get Funding Asset",
					"value": "POST Sapi v1 Asset Get Funding Asset",
					"action": "Funding Wallet (USER_DATA)",
					"description": "- Currently supports querying the following business assets：Binance Pay, Binance Card, Binance Gift Card, Stock Token\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/asset/get-funding-asset"
						}
					}
				},
				{
					"name": "POST Sapi v3 Asset Get User Asset",
					"value": "POST Sapi v3 Asset Get User Asset",
					"action": "User Asset (USER_DATA)",
					"description": "Get user assets, just for positive data.\n\nWeight(IP): 5",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v3/asset/getUserAsset"
						}
					}
				},
				{
					"name": "POST Sapi v1 Asset Convert Transfer",
					"value": "POST Sapi v1 Asset Convert Transfer",
					"action": "Convert Transfer (USER_DATA)",
					"description": "Convert transfer, convert between BUSD and stablecoins.\nIf the clientId has been used before, will not do the convert transfer, the original transfer will be returned.\n\nWeight(UID): 5",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/asset/convert-transfer"
						}
					}
				},
				{
					"name": "GET Sapi v1 Asset Convert Transfer Query By Page",
					"value": "GET Sapi v1 Asset Convert Transfer Query By Page",
					"action": "Query Convert Transfer (USER_DATA)",
					"description": "Weight(UID): 5",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/asset/convert-transfer/queryByPage"
						}
					}
				},
				{
					"name": "GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page",
					"value": "GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page",
					"action": "Get Cloud-Mining payment and refund history (USER_DATA)",
					"description": "The query of Cloud-Mining payment and refund history\n\nWeight(UID): 600",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage"
						}
					}
				},
				{
					"name": "GET Sapi v1 Account API Restrictions",
					"value": "GET Sapi v1 Account API Restrictions",
					"action": "Get API Key Permission (USER_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/account/apiRestrictions"
						}
					}
				},
				{
					"name": "GET Sapi v1 Capital Contract Convertible Coins",
					"value": "GET Sapi v1 Capital Contract Convertible Coins",
					"action": "Query auto-converting stable coins (USER_DATA)",
					"description": "Get a user's auto-conversion settings in deposit/withdrawal\n\nWeight(UID): 600'",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/capital/contract/convertible-coins"
						}
					}
				},
				{
					"name": "POST Sapi v1 Capital Contract Convertible Coins",
					"value": "POST Sapi v1 Capital Contract Convertible Coins",
					"action": "Switch on/off BUSD and stable coins conversion (USER_DATA) (USER_DATA)",
					"description": "User can use it to turn on or turn off the BUSD auto-conversion from/to a specific stable coin.\n\nWeight(UID): 600'",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/capital/contract/convertible-coins"
						}
					}
				},
				{
					"name": "POST Sapi v1 Capital Deposit Credit Apply",
					"value": "POST Sapi v1 Capital Deposit Credit Apply",
					"action": "One click arrival deposit apply (USER_DATA)",
					"description": "Apply deposit credit for expired address (One click arrival)\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/capital/deposit/credit-apply"
						}
					}
				},
				{
					"name": "GET Sapi v1 Asset Wallet Balance",
					"value": "GET Sapi v1 Asset Wallet Balance",
					"action": "Query User Wallet Balance (USER_DATA)",
					"description": "Query User Wallet Balance\n\nWeight(IP): 60",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/asset/wallet/balance"
						}
					}
				},
				{
					"name": "GET Sapi v1 Asset Custody Transfer History",
					"value": "GET Sapi v1 Asset Custody Transfer History",
					"action": "Query User Delegation History(For Master Account) (USER_DATA)",
					"description": "Query User Delegation History\n\nWeight(IP): 60",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/asset/custody/transfer-history"
						}
					}
				},
				{
					"name": "GET Sapi v1 Capital Deposit Address List",
					"value": "GET Sapi v1 Capital Deposit Address List",
					"action": "Fetch deposit address list with network (USER_DATA)",
					"description": "Fetch deposit address list with network.\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/capital/deposit/address/list"
						}
					}
				},
				{
					"name": "GET Sapi v1 Spot Delist Schedule",
					"value": "GET Sapi v1 Spot Delist Schedule",
					"action": "Get symbols delist schedule for spot (MARKET_DATA)",
					"description": "Get symbols delist schedule for spot\n\nWeight(IP): 100",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/spot/delist-schedule"
						}
					}
				},
				{
					"name": "GET Sapi v1 Capital Withdraw Address List",
					"value": "GET Sapi v1 Capital Withdraw Address List",
					"action": "Fetch withdraw address list (USER_DATA)",
					"description": "Fetch withdraw address list\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/capital/withdraw/address/list"
						}
					}
				},
				{
					"name": "GET Sapi v1 Account Info",
					"value": "GET Sapi v1 Account Info",
					"action": "Account info (USER_DATA)",
					"description": "Fetch account info detail.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/account/info"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sapi/v1/system/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 System Status"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/capital/config/getall",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Config Getall"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Config Getall"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Config Getall"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Config Getall"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Config Getall"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/accountSnapshot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
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
					"name": "FUTURES",
					"value": "FUTURES"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Snapshot"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Snapshot"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 7,
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Snapshot"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Snapshot"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Snapshot"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Snapshot"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Snapshot"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/account/disableFastWithdrawSwitch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Account Disable Fast Withdraw Switch"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Account Disable Fast Withdraw Switch"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Account Disable Fast Withdraw Switch"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Account Disable Fast Withdraw Switch"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Account Disable Fast Withdraw Switch"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/account/enableFastWithdrawSwitch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Account Enable Fast Withdraw Switch"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Account Enable Fast Withdraw Switch"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Account Enable Fast Withdraw Switch"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Account Enable Fast Withdraw Switch"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Account Enable Fast Withdraw Switch"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/capital/withdraw/apply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
					]
				}
			}
		},
		{
			"displayName": "Withdraw Order ID",
			"name": "withdrawOrderId",
			"description": "Client id for withdraw",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "withdrawOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
					]
				}
			}
		},
		{
			"displayName": "Address Tag",
			"name": "addressTag",
			"description": "Secondary address identifier for coins like XRP,XMR etc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "addressTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
					]
				}
			}
		},
		{
			"displayName": "Transaction Fee Flag",
			"name": "transactionFeeFlag",
			"description": "When making internal transfer\n- `true` ->  returning the fee to the destination account;\n- `false` -> returning the fee back to the departure account.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "transactionFeeFlag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
					]
				}
			}
		},
		{
			"displayName": "Wallet Type",
			"name": "walletType",
			"description": "The wallet type for withdraw，0-Spot wallet, 1- Funding wallet. Default is Spot wallet",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "walletType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Withdraw Apply"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/capital/deposit/hisrec",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Hisrec"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Hisrec"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "* `0` - pending\n* `6` - credited but cannot withdraw\n* `1` - success",
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Hisrec"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Hisrec"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Hisrec"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Hisrec"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Hisrec"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Hisrec"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Hisrec"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Hisrec"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Hisrec"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/capital/withdraw/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw History"
					]
				}
			}
		},
		{
			"displayName": "Withdraw Order ID",
			"name": "withdrawOrderId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "withdrawOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw History"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "* `0` - Email Sent\n* `1` - Cancelled\n* `2` - Awaiting Approval\n* `3` - Rejected\n* `4` - Processing\n* `5` - Failure\n* `6` - Completed",
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/capital/deposit/address",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/account/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Status"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Status"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Status"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Status"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Status"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/account/apiTradingStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account API Trading Status"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account API Trading Status"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account API Trading Status"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account API Trading Status"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account API Trading Status"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/asset/dribblet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Dribblet"
					]
				}
			}
		},
		{
			"displayName": "Account Type",
			"name": "accountType",
			"description": "SPOT or MARGIN, default SPOT",
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
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "accountType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Dribblet"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Dribblet"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Dribblet"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Dribblet"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Dribblet"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Dribblet"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Dribblet"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/asset/dust-btc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Dust Btc"
					]
				}
			}
		},
		{
			"displayName": "Account Type",
			"name": "accountType",
			"description": "SPOT or MARGIN, default SPOT",
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
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "accountType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Dust Btc"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Dust Btc"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Dust Btc"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Dust Btc"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Dust Btc"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/asset/dust",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Dust"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"required": true,
			"description": "The asset being converted. For example, asset=BTC&asset=USDT",
			"default": "[\n  null\n]",
			"type": "json",
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Dust"
					]
				}
			}
		},
		{
			"displayName": "Account Type",
			"name": "accountType",
			"description": "SPOT or MARGIN, default SPOT",
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
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "accountType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Dust"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Dust"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Dust"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Dust"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Dust"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/asset/assetDividend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Dividend"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Dividend"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Dividend"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Dividend"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Dividend"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Dividend"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Dividend"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Dividend"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Dividend"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/asset/assetDetail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Detail"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Detail"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Detail"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Detail"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Detail"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Asset Detail"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/asset/tradeFee",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Trade Fee"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Trade Fee"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Trade Fee"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Trade Fee"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Trade Fee"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Trade Fee"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/asset/transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Transfer"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Universal transfer type",
			"default": "MAIN_C2C",
			"type": "options",
			"options": [
				{
					"name": "MAIN C 2 C",
					"value": "MAIN_C2C"
				},
				{
					"name": "MAIN UMFUTURE",
					"value": "MAIN_UMFUTURE"
				},
				{
					"name": "MAIN CMFUTURE",
					"value": "MAIN_CMFUTURE"
				},
				{
					"name": "MAIN MARGIN",
					"value": "MAIN_MARGIN"
				},
				{
					"name": "MAIN MINING",
					"value": "MAIN_MINING"
				},
				{
					"name": "C 2 C MAIN",
					"value": "C2C_MAIN"
				},
				{
					"name": "C 2 C UMFUTURE",
					"value": "C2C_UMFUTURE"
				},
				{
					"name": "C 2 C MINING",
					"value": "C2C_MINING"
				},
				{
					"name": "C 2 C MARGIN",
					"value": "C2C_MARGIN"
				},
				{
					"name": "UMFUTURE MAIN",
					"value": "UMFUTURE_MAIN"
				},
				{
					"name": "UMFUTURE C 2 C",
					"value": "UMFUTURE_C2C"
				},
				{
					"name": "UMFUTURE MARGIN",
					"value": "UMFUTURE_MARGIN"
				},
				{
					"name": "CMFUTURE MAIN",
					"value": "CMFUTURE_MAIN"
				},
				{
					"name": "CMFUTURE MARGIN",
					"value": "CMFUTURE_MARGIN"
				},
				{
					"name": "MARGIN MAIN",
					"value": "MARGIN_MAIN"
				},
				{
					"name": "MARGIN UMFUTURE",
					"value": "MARGIN_UMFUTURE"
				},
				{
					"name": "MARGIN CMFUTURE",
					"value": "MARGIN_CMFUTURE"
				},
				{
					"name": "MARGIN MINING",
					"value": "MARGIN_MINING"
				},
				{
					"name": "MARGIN C 2 C",
					"value": "MARGIN_C2C"
				},
				{
					"name": "MINING MAIN",
					"value": "MINING_MAIN"
				},
				{
					"name": "MINING UMFUTURE",
					"value": "MINING_UMFUTURE"
				},
				{
					"name": "MINING C 2 C",
					"value": "MINING_C2C"
				},
				{
					"name": "MINING MARGIN",
					"value": "MINING_MARGIN"
				},
				{
					"name": "MAIN PAY",
					"value": "MAIN_PAY"
				},
				{
					"name": "PAY MAIN",
					"value": "PAY_MAIN"
				},
				{
					"name": "ISOLATEDMARGIN MARGIN",
					"value": "ISOLATEDMARGIN_MARGIN"
				},
				{
					"name": "MARGIN ISOLATEDMARGIN",
					"value": "MARGIN_ISOLATEDMARGIN"
				},
				{
					"name": "ISOLATEDMARGIN ISOLATEDMARGIN",
					"value": "ISOLATEDMARGIN_ISOLATEDMARGIN"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Transfer"
					]
				}
			}
		},
		{
			"displayName": "From Symbol",
			"name": "fromSymbol",
			"description": "Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN",
			"default": "BNBUSDT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromSymbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Transfer"
					]
				}
			}
		},
		{
			"displayName": "To Symbol",
			"name": "toSymbol",
			"description": "Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN",
			"default": "BNBUSDT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toSymbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Transfer"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/asset/transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Transfer"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Universal transfer type",
			"default": "MAIN_C2C",
			"type": "options",
			"options": [
				{
					"name": "MAIN C 2 C",
					"value": "MAIN_C2C"
				},
				{
					"name": "MAIN UMFUTURE",
					"value": "MAIN_UMFUTURE"
				},
				{
					"name": "MAIN CMFUTURE",
					"value": "MAIN_CMFUTURE"
				},
				{
					"name": "MAIN MARGIN",
					"value": "MAIN_MARGIN"
				},
				{
					"name": "MAIN MINING",
					"value": "MAIN_MINING"
				},
				{
					"name": "C 2 C MAIN",
					"value": "C2C_MAIN"
				},
				{
					"name": "C 2 C UMFUTURE",
					"value": "C2C_UMFUTURE"
				},
				{
					"name": "C 2 C MINING",
					"value": "C2C_MINING"
				},
				{
					"name": "C 2 C MARGIN",
					"value": "C2C_MARGIN"
				},
				{
					"name": "UMFUTURE MAIN",
					"value": "UMFUTURE_MAIN"
				},
				{
					"name": "UMFUTURE C 2 C",
					"value": "UMFUTURE_C2C"
				},
				{
					"name": "UMFUTURE MARGIN",
					"value": "UMFUTURE_MARGIN"
				},
				{
					"name": "CMFUTURE MAIN",
					"value": "CMFUTURE_MAIN"
				},
				{
					"name": "CMFUTURE MARGIN",
					"value": "CMFUTURE_MARGIN"
				},
				{
					"name": "MARGIN MAIN",
					"value": "MARGIN_MAIN"
				},
				{
					"name": "MARGIN UMFUTURE",
					"value": "MARGIN_UMFUTURE"
				},
				{
					"name": "MARGIN CMFUTURE",
					"value": "MARGIN_CMFUTURE"
				},
				{
					"name": "MARGIN MINING",
					"value": "MARGIN_MINING"
				},
				{
					"name": "MARGIN C 2 C",
					"value": "MARGIN_C2C"
				},
				{
					"name": "MINING MAIN",
					"value": "MINING_MAIN"
				},
				{
					"name": "MINING UMFUTURE",
					"value": "MINING_UMFUTURE"
				},
				{
					"name": "MINING C 2 C",
					"value": "MINING_C2C"
				},
				{
					"name": "MINING MARGIN",
					"value": "MINING_MARGIN"
				},
				{
					"name": "MAIN PAY",
					"value": "MAIN_PAY"
				},
				{
					"name": "PAY MAIN",
					"value": "PAY_MAIN"
				},
				{
					"name": "ISOLATEDMARGIN MARGIN",
					"value": "ISOLATEDMARGIN_MARGIN"
				},
				{
					"name": "MARGIN ISOLATEDMARGIN",
					"value": "MARGIN_ISOLATEDMARGIN"
				},
				{
					"name": "ISOLATEDMARGIN ISOLATEDMARGIN",
					"value": "ISOLATEDMARGIN_ISOLATEDMARGIN"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Transfer"
					]
				}
			}
		},
		{
			"displayName": "From Symbol",
			"name": "fromSymbol",
			"description": "Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN",
			"default": "BNBUSDT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromSymbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Transfer"
					]
				}
			}
		},
		{
			"displayName": "To Symbol",
			"name": "toSymbol",
			"description": "Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN",
			"default": "BNBUSDT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toSymbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Transfer"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Transfer"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/asset/get-funding-asset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Get Funding Asset"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Get Funding Asset"
					]
				}
			}
		},
		{
			"displayName": "Need Btc Valuation",
			"name": "needBtcValuation",
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
					"property": "needBtcValuation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Get Funding Asset"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Get Funding Asset"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Get Funding Asset"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Get Funding Asset"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Get Funding Asset"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v3/asset/getUserAsset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v3 Asset Get User Asset"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v3 Asset Get User Asset"
					]
				}
			}
		},
		{
			"displayName": "Need Btc Valuation",
			"name": "needBtcValuation",
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
					"property": "needBtcValuation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v3 Asset Get User Asset"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v3 Asset Get User Asset"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v3 Asset Get User Asset"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v3 Asset Get User Asset"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v3 Asset Get User Asset"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/asset/convert-transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Convert Transfer"
					]
				}
			}
		},
		{
			"displayName": "Client Tran ID",
			"name": "clientTranId",
			"required": true,
			"description": "The unique flag, the min length is 20",
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Convert Transfer"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Convert Transfer"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Convert Transfer"
					]
				}
			}
		},
		{
			"displayName": "Target Asset",
			"name": "targetAsset",
			"required": true,
			"description": "Target asset you want to convert",
			"default": "BNB",
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Convert Transfer"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Convert Transfer"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Convert Transfer"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Convert Transfer"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Asset Convert Transfer"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/asset/convert-transfer/queryByPage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Convert Transfer Query By Page"
					]
				}
			}
		},
		{
			"displayName": "Tran ID",
			"name": "tranId",
			"description": "The transaction id",
			"default": 118263615991,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "tranId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Convert Transfer Query By Page"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"description": "If it is blank, we will match deducted asset and target asset.",
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Convert Transfer Query By Page"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "startTime",
			"required": true,
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Convert Transfer Query By Page"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "endTime",
			"required": true,
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Convert Transfer Query By Page"
					]
				}
			}
		},
		{
			"displayName": "Account Type",
			"name": "accountType",
			"description": "MAIN: main account. CARD: funding account. If it is blank, we will query spot and card wallet, otherwise, we just query the corresponding wallet",
			"default": "MAIN",
			"type": "options",
			"options": [
				{
					"name": "MAIN",
					"value": "MAIN"
				},
				{
					"name": "CARD",
					"value": "CARD"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "accountType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Convert Transfer Query By Page"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Convert Transfer Query By Page"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Convert Transfer Query By Page"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Convert Transfer Query By Page"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Convert Transfer Query By Page"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Convert Transfer Query By Page"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Convert Transfer Query By Page"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page"
					]
				}
			}
		},
		{
			"displayName": "Tran ID",
			"name": "tranId",
			"description": "The transaction id",
			"default": 118263615991,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "tranId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page"
					]
				}
			}
		},
		{
			"displayName": "Client Tran ID",
			"name": "clientTranId",
			"description": "The unique flag",
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"description": "If it is blank, we will query all assets",
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "startTime",
			"required": true,
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "endTime",
			"required": true,
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Ledger Transfer Cloud Mining Query By Page"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/account/apiRestrictions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account API Restrictions"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account API Restrictions"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account API Restrictions"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account API Restrictions"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account API Restrictions"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/capital/contract/convertible-coins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Contract Convertible Coins"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Contract Convertible Coins"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/capital/contract/convertible-coins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Contract Convertible Coins"
					]
				}
			}
		},
		{
			"displayName": "Coin",
			"name": "coin",
			"required": true,
			"description": "Must be USDC, USDP or TUSD",
			"default": "",
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Contract Convertible Coins"
					]
				}
			}
		},
		{
			"displayName": "Enable",
			"name": "enable",
			"required": true,
			"description": "true: turn on the auto-conversion. false: turn off the auto-conversion",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "enable",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Contract Convertible Coins"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Contract Convertible Coins"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/capital/deposit/credit-apply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Deposit Credit Apply"
					]
				}
			}
		},
		{
			"displayName": "Deposit ID",
			"name": "depositId",
			"description": "Deposit record Id, priority use",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "depositId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Deposit Credit Apply"
					]
				}
			}
		},
		{
			"displayName": "Tx ID",
			"name": "txId",
			"description": "Deposit txId, used when depositId is not specified",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "txId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Deposit Credit Apply"
					]
				}
			}
		},
		{
			"displayName": "Sub Account ID",
			"name": "subAccountId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "subAccountId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Deposit Credit Apply"
					]
				}
			}
		},
		{
			"displayName": "Sub User ID",
			"name": "subUserId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "subUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Deposit Credit Apply"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Deposit Credit Apply"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Deposit Credit Apply"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Deposit Credit Apply"
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
						"Wallet"
					],
					"operation": [
						"POST Sapi v1 Capital Deposit Credit Apply"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/asset/wallet/balance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Wallet Balance"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Wallet Balance"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Wallet Balance"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Wallet Balance"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Wallet Balance"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/asset/custody/transfer-history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Custody Transfer History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Custody Transfer History"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "startTime",
			"required": true,
			"default": 1695205406000,
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Custody Transfer History"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "endTime",
			"required": true,
			"default": 1695205396000,
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Custody Transfer History"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"default": "Delegate",
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Custody Transfer History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Custody Transfer History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Custody Transfer History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Custody Transfer History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Custody Transfer History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Custody Transfer History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Custody Transfer History"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Asset Custody Transfer History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/capital/deposit/address/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address List"
					]
				}
			}
		},
		{
			"displayName": "Coin",
			"name": "coin",
			"required": true,
			"default": "BTC",
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address List"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address List"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address List"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address List"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address List"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Deposit Address List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/spot/delist-schedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Spot Delist Schedule"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Spot Delist Schedule"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Spot Delist Schedule"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Spot Delist Schedule"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Spot Delist Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/capital/withdraw/address/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw Address List"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Capital Withdraw Address List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/account/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Info"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Info"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Info"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Info"
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
						"Wallet"
					],
					"operation": [
						"GET Sapi v1 Account Info"
					]
				}
			}
		},
];
