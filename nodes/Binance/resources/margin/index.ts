import type { INodeProperties } from 'n8n-workflow';

export const marginDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					]
				}
			},
			"options": [
				{
					"name": "POST Sapi v1 Margin Borrow Repay",
					"value": "POST Sapi v1 Margin Borrow Repay",
					"action": "Margin account borrow/repay(MARGIN)",
					"description": "Margin account borrow/repay(MARGIN)\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/margin/borrow-repay"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Borrow Repay",
					"value": "GET Sapi v1 Margin Borrow Repay",
					"action": "Query borrow/repay records in Margin account(USER_DATA)",
					"description": "Query borrow/repay records in Margin account\n\n- txId or startTime must be sent. txId takes precedence. Response in descending order\n- If an asset is sent, data within 30 days before endTime; If an asset is not sent, data within 7 days before endTime\n- If neither startTime nor endTime is sent, the recent 7-day data will be returned.\n- startTime set as endTime - 7 days by default, endTime set as current time by default\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/borrow-repay"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Transfer",
					"value": "GET Sapi v1 Margin Transfer",
					"action": "Get Cross Margin Transfer History (USER_DATA)",
					"description": "- Response in descending order\n- Returns data for last 7 days by default\n- Set `archived` to `true` to query data from 6 months ago\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/transfer"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin All Assets",
					"value": "GET Sapi v1 Margin All Assets",
					"action": "Get All Margin Assets (MARKET_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/allAssets"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin All Pairs",
					"value": "GET Sapi v1 Margin All Pairs",
					"action": "Get All Cross Margin Pairs (MARKET_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/allPairs"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Price Index",
					"value": "GET Sapi v1 Margin Price Index",
					"action": "Query Margin PriceIndex (MARKET_DATA)",
					"description": "Weight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/priceIndex"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Order",
					"value": "GET Sapi v1 Margin Order",
					"action": "Query Margin Account's Order (USER_DATA)",
					"description": "- Either `orderId` or `origClientOrderId` must be sent.\n- For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/order"
						}
					}
				},
				{
					"name": "POST Sapi v1 Margin Order",
					"value": "POST Sapi v1 Margin Order",
					"action": "Margin Account New Order (TRADE)",
					"description": "Post a new order for margin account.\n\nWeight(UID): 6",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/margin/order"
						}
					}
				},
				{
					"name": "DELETE Sapi v1 Margin Order",
					"value": "DELETE Sapi v1 Margin Order",
					"action": "Margin Account Cancel Order (TRADE)",
					"description": "Cancel an active order for margin account.\n\nEither `orderId` or `origClientOrderId` must be sent.\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sapi/v1/margin/order"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Interest History",
					"value": "GET Sapi v1 Margin Interest History",
					"action": "Get Interest History (USER_DATA)",
					"description": "- Response in descending order\n- If `isolatedSymbol` is not sent, crossed margin data will be returned\n- Set `archived` to `true` to query data from 6 months ago\n- `type` in response has 4 enums:\n  - `PERIODIC` interest charged per hour\n  - `ON_BORROW` first interest charged on borrow\n  - `PERIODIC_CONVERTED` interest charged per hour converted into BNB\n  - `ON_BORROW_CONVERTED` first interest charged on borrow converted into BNB\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/interestHistory"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Force Liquidation Rec",
					"value": "GET Sapi v1 Margin Force Liquidation Rec",
					"action": "Get Force Liquidation Record (USER_DATA)",
					"description": "- Response in descending order\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/forceLiquidationRec"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Account",
					"value": "GET Sapi v1 Margin Account",
					"action": "Query Cross Margin Account Details (USER_DATA)",
					"description": "Weight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/account"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Open Orders",
					"value": "GET Sapi v1 Margin Open Orders",
					"action": "Query Margin Account's Open Orders (USER_DATA)",
					"description": "- If the `symbol` is not sent, orders for all symbols will be returned in an array.\n- When all symbols are returned, the number of requests counted against the rate limiter is equal to the number of symbols currently trading on the exchange\n- If isIsolated =\"TRUE\", symbol must be sent.\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/openOrders"
						}
					}
				},
				{
					"name": "DELETE Sapi v1 Margin Open Orders",
					"value": "DELETE Sapi v1 Margin Open Orders",
					"action": "Margin Account Cancel all Open Orders on a Symbol (TRADE)",
					"description": "- Cancels all active orders on a symbol for margin account.\n- This includes OCO orders.\n\nWeight(IP): 1\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sapi/v1/margin/openOrders"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin All Orders",
					"value": "GET Sapi v1 Margin All Orders",
					"action": "Query Margin Account's All Orders (USER_DATA)",
					"description": "- If `orderId` is set, it will get orders >= that orderId. Otherwise most recent orders are returned.\n- For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.\n\nWeight(IP): 200\n\nRequest Limit: 60 times/min per IP",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/allOrders"
						}
					}
				},
				{
					"name": "POST Sapi v1 Margin Order Oco",
					"value": "POST Sapi v1 Margin Order Oco",
					"action": "Margin Account New OCO (TRADE)",
					"description": "Send in a new OCO for a margin account\n\n- Price Restrictions:\n  - SELL: Limit Price > Last Price > Stop Price\n  - BUY: Limit Price < Last Price < Stop Price\n- Quantity Restrictions:\n  - Both legs must have the same quantity\n  - ICEBERG quantities however do not have to be the same.\n- Order Rate Limit\n  - OCO counts as 2 orders against the order rate limit.\n\nWeight(UID): 6",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/margin/order/oco"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Order List",
					"value": "GET Sapi v1 Margin Order List",
					"action": "Query Margin Account's OCO (USER_DATA)",
					"description": "Retrieves a specific OCO based on provided optional parameters\n\n- Either `orderListId` or `origClientOrderId` must be provided\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/orderList"
						}
					}
				},
				{
					"name": "DELETE Sapi v1 Margin Order List",
					"value": "DELETE Sapi v1 Margin Order List",
					"action": "Margin Account Cancel OCO (TRADE)",
					"description": "Cancel an entire Order List for a margin account\n\n- Canceling an individual leg will cancel the entire OCO\n- Either `orderListId` or `listClientOrderId` must be provided\n\nWeight(UID): 1",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sapi/v1/margin/orderList"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin All Order List",
					"value": "GET Sapi v1 Margin All Order List",
					"action": "Query Margin Account's all OCO (USER_DATA)",
					"description": "Retrieves all OCO for a specific margin account based on provided optional parameters\n\nWeight(IP): 200",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/allOrderList"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Open Order List",
					"value": "GET Sapi v1 Margin Open Order List",
					"action": "Query Margin Account's Open OCO (USER_DATA)",
					"description": "Weight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/openOrderList"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin My Trades",
					"value": "GET Sapi v1 Margin My Trades",
					"action": "Query Margin Account's Trade List (USER_DATA)",
					"description": "- If `fromId` is set, it will get orders >= that `fromId`. Otherwise most recent trades are returned.\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/myTrades"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Max Borrowable",
					"value": "GET Sapi v1 Margin Max Borrowable",
					"action": "Query Max Borrow (USER_DATA)",
					"description": "- If `isolatedSymbol` is not sent, crossed margin data will be sent.\n- `borrowLimit` is also available from https://www.binance.com/en/margin-fee\n\nWeight(IP): 50",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/maxBorrowable"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Max Transferable",
					"value": "GET Sapi v1 Margin Max Transferable",
					"action": "Query Max Transfer-Out Amount (USER_DATA)",
					"description": "- If `isolatedSymbol` is not sent, crossed margin data will be sent.\n\nWeight(IP): 50",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/maxTransferable"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Trade Coeff",
					"value": "GET Sapi v1 Margin Trade Coeff",
					"action": "Get Summary of Margin account (USER_DATA)",
					"description": "Get personal margin level information\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/tradeCoeff"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Isolated Account",
					"value": "GET Sapi v1 Margin Isolated Account",
					"action": "Query Isolated Margin Account Info (USER_DATA)",
					"description": "- If \"symbols\" is not sent, all isolated assets will be returned.\n- If \"symbols\" is sent, only the isolated assets of the sent symbols will be returned.\n\nWeight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/isolated/account"
						}
					}
				},
				{
					"name": "DELETE Sapi v1 Margin Isolated Account",
					"value": "DELETE Sapi v1 Margin Isolated Account",
					"action": "Disable Isolated Margin Account (TRADE)",
					"description": "Disable isolated margin account for a specific symbol. Each trading pair can only be deactivated once every 24 hours .\n\nWeight(UID): 300",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sapi/v1/margin/isolated/account"
						}
					}
				},
				{
					"name": "POST Sapi v1 Margin Isolated Account",
					"value": "POST Sapi v1 Margin Isolated Account",
					"action": "Enable Isolated Margin Account (TRADE)",
					"description": "Enable isolated margin account for a specific symbol.\n\nWeight(UID): 300",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/margin/isolated/account"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Isolated Account Limit",
					"value": "GET Sapi v1 Margin Isolated Account Limit",
					"action": "Query Enabled Isolated Margin Account Limit (USER_DATA)",
					"description": "Query enabled isolated margin account limit.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/isolated/accountLimit"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Isolated All Pairs",
					"value": "GET Sapi v1 Margin Isolated All Pairs",
					"action": "Get All Isolated Margin Symbol(USER_DATA)",
					"description": "Weight(IP): 10",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/isolated/allPairs"
						}
					}
				},
				{
					"name": "POST Sapi v1 Bnb Burn",
					"value": "POST Sapi v1 Bnb Burn",
					"action": "Toggle BNB Burn On Spot Trade And Margin Interest (USER_DATA)",
					"description": "- \"spotBNBBurn\" and \"interestBNBBurn\" should be sent at least one.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/bnbBurn"
						}
					}
				},
				{
					"name": "GET Sapi v1 Bnb Burn",
					"value": "GET Sapi v1 Bnb Burn",
					"action": "Get BNB Burn Status(USER_DATA)",
					"description": "Weight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/bnbBurn"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Interest Rate History",
					"value": "GET Sapi v1 Margin Interest Rate History",
					"action": "Margin Interest Rate History (USER_DATA)",
					"description": "The max interval between startTime and endTime is 30 days.\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/interestRateHistory"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Cross Margin Data",
					"value": "GET Sapi v1 Margin Cross Margin Data",
					"action": "Query Cross Margin Fee Data (USER_DATA)",
					"description": "Get cross margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee\n\nWeight(IP): 1 when coin is specified; 5 when the coin parameter is omitted",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/crossMarginData"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Isolated Margin Data",
					"value": "GET Sapi v1 Margin Isolated Margin Data",
					"action": "Query Isolated Margin Fee Data (USER_DATA)",
					"description": "Get isolated margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee\n\nWeight(IP): 1 when a single is specified; 10 when the symbol parameter is omitted",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/isolatedMarginData"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Isolated Margin Tier",
					"value": "GET Sapi v1 Margin Isolated Margin Tier",
					"action": "Query Isolated Margin Tier Data (USER_DATA)",
					"description": "Get isolated margin tier data collection with any tier as https://www.binance.com/en/margin-data\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/isolatedMarginTier"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Rate Limit Order",
					"value": "GET Sapi v1 Margin Rate Limit Order",
					"action": "Query Current Margin Order Count Usage (TRADE)",
					"description": "Displays the user's current margin order count usage for all intervals.\n\nWeight(IP): 20",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/rateLimit/order"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Cross Margin Collateral Ratio",
					"value": "GET Sapi v1 Margin Cross Margin Collateral Ratio",
					"action": "Cross margin collateral ratio (MARKET_DATA)",
					"description": "\nWeight(IP): 100",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/crossMarginCollateralRatio"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Exchange Small Liability",
					"value": "GET Sapi v1 Margin Exchange Small Liability",
					"action": "Get Small Liability Exchange Coin List (USER_DATA)",
					"description": "Query the coins which can be small liability exchange\n\nWeight(UID): 100",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/exchange-small-liability"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Exchange Small Liability History",
					"value": "GET Sapi v1 Margin Exchange Small Liability History",
					"action": "Get Small Liability Exchange History (USER_DATA)",
					"description": "Get Small liability Exchange History\n\nWeight(UID): 100",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/exchange-small-liability-history"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Next Hourly Interest Rate",
					"value": "GET Sapi v1 Margin Next Hourly Interest Rate",
					"action": "Get a future hourly interest rate (USER_DATA)",
					"description": "Get user the next hourly estimate interest\n\nWeight(UID): 100",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/next-hourly-interest-rate"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Capital Flow",
					"value": "GET Sapi v1 Margin Capital Flow",
					"action": "Get cross or isolated margin capital flow(USER_DATA)",
					"description": "Get cross or isolated margin capital flow\n\nWeight(IP): 100",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/capital-flow"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Delist Schedule",
					"value": "GET Sapi v1 Margin Delist Schedule",
					"action": "Get tokens or symbols delist schedule for cross margin and isolated margin (MARKET_DATA)",
					"description": "Get tokens or symbols delist schedule for cross margin and isolated margin\n\nWeight(IP): 100",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/delist-schedule"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Available Inventory",
					"value": "GET Sapi v1 Margin Available Inventory",
					"action": "Query Margin Available Inventory (USER_DATA)",
					"description": "Margin available Inventory query\n\nWeight(UID): 50",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/available-inventory"
						}
					}
				},
				{
					"name": "POST Sapi v1 Margin Manual Liquidation",
					"value": "POST Sapi v1 Margin Manual Liquidation",
					"action": "Margin manual liquidation(MARGIN)",
					"description": "Margin manual liquidation\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/margin/manual-liquidation"
						}
					}
				},
				{
					"name": "POST Sapi v1 Margin Order Oto",
					"value": "POST Sapi v1 Margin Order Oto",
					"action": "Margin Account New OTO (TRADE)",
					"description": "Post a new `OTO` order for margin account:\n- An `OTO` (One-Triggers-the-Other) is an order list comprised of 2 orders\n- The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book.\n- The second order is called the pending order. It can be any order type except for `MARKET` orders using parameter `quoteOrderQty`. The pending order is only placed on the order book when the working order gets fully filled.\n- If either the working order or the pending order is cancelled individually, the other order in the order list will also be canceled or expired.\n- When the order list is placed, if the working order gets immediately fully filled, the placement response will show the working order as `FILLED` but the pending order will still appear as `PENDING_NEW`. You need to query the status of the pending order again to see its updated status.\n- OTOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and `MAX_NUM_ORDERS` filter.\n\nWeight(UID): 6",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/margin/order/oto"
						}
					}
				},
				{
					"name": "POST Sapi v1 Margin Order Otoco",
					"value": "POST Sapi v1 Margin Order Otoco",
					"action": "Margin Account New OTOCO (TRADE)",
					"description": "Post a new `OTOCO` order for margin account:\n- An `OTOCO` (One-Triggers-the-Other-Cancel-the-Other) is an order list comprised of 3 orders\n- The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book.\n  - The behavior of the working order is the same as the `OTO`.\n- `OTOCO` has 2 pending orders (pending above and pending below), forming an `OCO` pair. The pending orders are only placed on the order book when the working order gets fully filled.\n  - The rules of the pending above and pending below follow the same rules as the Order List `OCO`.\n- OTOCOs add 3 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and `MAX_NUM_ORDERS` filter.\n\nWeight(UID): 6",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/margin/order/otoco"
						}
					}
				},
				{
					"name": "POST Sapi v1 Margin Max Leverage",
					"value": "POST Sapi v1 Margin Max Leverage",
					"action": "Adjust cross margin max leverage (USER_DATA)",
					"description": "Adjust cross margin max leverage\n\nWeight(UID): 3000",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/margin/max-leverage"
						}
					}
				},
				{
					"name": "GET Sapi v1 Margin Leverage Bracket",
					"value": "GET Sapi v1 Margin Leverage Bracket",
					"action": "Query Liability Coin Leverage Bracket in Cross Margin Pro Mode (MARKET_DATA)",
					"description": "Liability Coin Leverage Bracket in Cross Margin Pro Mode\n\nWeight(IP): 1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sapi/v1/margin/leverageBracket"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /sapi/v1/margin/borrow-repay",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Borrow Repay"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"required": true,
			"description": "TRUE for isolated margin, FALSE for crossed margin",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Borrow Repay"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Borrow Repay"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "BORROW or REPAY",
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Borrow Repay"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/borrow-repay",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Borrow Repay"
					]
				}
			}
		},
		{
			"displayName": "Isolated Symbol",
			"name": "isolatedSymbol",
			"description": "Isolated symbol",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "isolatedSymbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Borrow Repay"
					]
				}
			}
		},
		{
			"displayName": "Tx ID",
			"name": "txId",
			"description": "tranId in POST /sapi/v1/margin/loan",
			"default": 0,
			"type": "number",
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Borrow Repay"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "BORROW or REPAY",
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Borrow Repay"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Borrow Repay"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Transfer"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Transfer"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"default": "ROLL_IN",
			"type": "options",
			"options": [
				{
					"name": "ROLL IN",
					"value": "ROLL_IN"
				},
				{
					"name": "ROLL OUT",
					"value": "ROLL_OUT"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Transfer"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Transfer"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Transfer"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Transfer"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Transfer"
					]
				}
			}
		},
		{
			"displayName": "Isolated Symbol",
			"name": "isolatedSymbol",
			"description": "Isolated symbol",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "isolatedSymbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Transfer"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Transfer"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Transfer"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Transfer"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Transfer"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/allAssets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Assets"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Assets"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Assets"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/allPairs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Pairs"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Pairs"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Pairs"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/priceIndex",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Price Index"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Price Index"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Price Index"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Orig Client Order ID",
			"name": "origClientOrderId",
			"description": "Order id from client",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "origClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/margin/order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Side",
			"name": "side",
			"required": true,
			"default": "SELL",
			"type": "options",
			"options": [
				{
					"name": "SELL",
					"value": "SELL"
				},
				{
					"name": "BUY",
					"value": "BUY"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "side",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Order type",
			"default": "LIMIT",
			"type": "options",
			"options": [
				{
					"name": "LIMIT",
					"value": "LIMIT"
				},
				{
					"name": "MARKET",
					"value": "MARKET"
				},
				{
					"name": "STOP LOSS",
					"value": "STOP_LOSS"
				},
				{
					"name": "STOP LOSS LIMIT",
					"value": "STOP_LOSS_LIMIT"
				},
				{
					"name": "TAKE PROFIT",
					"value": "TAKE_PROFIT"
				},
				{
					"name": "TAKE PROFIT LIMIT",
					"value": "TAKE_PROFIT_LIMIT"
				},
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Quantity",
			"name": "quantity",
			"required": true,
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quantity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Quote Order Qty",
			"name": "quoteOrderQty",
			"description": "Quote quantity",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quoteOrderQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"description": "Order price",
			"default": 219,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "price",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Stop Price",
			"name": "stopPrice",
			"description": "Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.",
			"default": 221.01,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "stopPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "New Client Order ID",
			"name": "newClientOrderId",
			"description": "Used to uniquely identify this cancel. Automatically generated by default",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "newClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Iceberg Qty",
			"name": "icebergQty",
			"description": "Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "icebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "New Order Resp Type",
			"name": "newOrderRespType",
			"description": "Set the response JSON.",
			"default": "ACK",
			"type": "options",
			"options": [
				{
					"name": "ACK",
					"value": "ACK"
				},
				{
					"name": "RESULT",
					"value": "RESULT"
				},
				{
					"name": "FULL",
					"value": "FULL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "newOrderRespType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Side Effect Type",
			"name": "sideEffectType",
			"description": "Default `NO_SIDE_EFFECT`",
			"default": "NO_SIDE_EFFECT",
			"type": "options",
			"options": [
				{
					"name": "NO SIDE EFFECT",
					"value": "NO_SIDE_EFFECT"
				},
				{
					"name": "MARGIN BUY",
					"value": "MARGIN_BUY"
				},
				{
					"name": "AUTO REPAY",
					"value": "AUTO_REPAY"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sideEffectType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Time In Force",
			"name": "timeInForce",
			"description": "Order time in force",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "timeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Auto Repay At Cancel",
			"name": "autoRepayAtCancel",
			"required": true,
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "autoRepayAtCancel",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Self Trade Prevention Mode",
			"name": "selfTradePreventionMode",
			"description": "The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.",
			"default": "EXPIRE_TAKER",
			"type": "options",
			"options": [
				{
					"name": "EXPIRE TAKER",
					"value": "EXPIRE_TAKER"
				},
				{
					"name": "EXPIRE MAKER",
					"value": "EXPIRE_MAKER"
				},
				{
					"name": "EXPIRE BOTH",
					"value": "EXPIRE_BOTH"
				},
				{
					"name": "NONE",
					"value": "NONE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "selfTradePreventionMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sapi/v1/margin/order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "Orig Client Order ID",
			"name": "origClientOrderId",
			"description": "Order id from client",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "origClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "New Client Order ID",
			"name": "newClientOrderId",
			"description": "Used to uniquely identify this cancel. Automatically generated by default",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "newClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/interestHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest History"
					]
				}
			}
		},
		{
			"displayName": "Isolated Symbol",
			"name": "isolatedSymbol",
			"description": "Isolated symbol",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "isolatedSymbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest History"
					]
				}
			}
		},
		{
			"displayName": "Archived",
			"name": "archived",
			"description": "Default: false. Set to true for archived data from 6 months ago",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "archived",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/forceLiquidationRec",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Force Liquidation Rec"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Force Liquidation Rec"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Force Liquidation Rec"
					]
				}
			}
		},
		{
			"displayName": "Isolated Symbol",
			"name": "isolatedSymbol",
			"description": "Isolated symbol",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "isolatedSymbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Force Liquidation Rec"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Force Liquidation Rec"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Force Liquidation Rec"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Force Liquidation Rec"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Force Liquidation Rec"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Force Liquidation Rec"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Force Liquidation Rec"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Account"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Account"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Account"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Account"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Account"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/openOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Orders"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Orders"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Orders"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Orders"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Orders"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Orders"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Orders"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sapi/v1/margin/openOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Open Orders"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Open Orders"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Open Orders"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Open Orders"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Open Orders"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Open Orders"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Open Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/allOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Orders"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Orders"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Orders"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Orders"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Orders"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Orders"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Orders"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Orders"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Orders"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Orders"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Orders"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/margin/order/oco",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "List Client Order ID",
			"name": "listClientOrderId",
			"description": "A unique Id for the entire orderList",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Side",
			"name": "side",
			"required": true,
			"default": "SELL",
			"type": "options",
			"options": [
				{
					"name": "SELL",
					"value": "SELL"
				},
				{
					"name": "BUY",
					"value": "BUY"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "side",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Quantity",
			"name": "quantity",
			"required": true,
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quantity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Limit Client Order ID",
			"name": "limitClientOrderId",
			"description": "A unique Id for the limit order",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "limitClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"required": true,
			"description": "Order price",
			"default": 218,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "price",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Limit Iceberg Qty",
			"name": "limitIcebergQty",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limitIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Stop Client Order ID",
			"name": "stopClientOrderId",
			"description": "A unique Id for the stop loss/stop loss limit leg",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "stopClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Stop Price",
			"name": "stopPrice",
			"required": true,
			"default": 220,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "stopPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Stop Limit Price",
			"name": "stopLimitPrice",
			"description": "If provided, stopLimitTimeInForce is required.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "stopLimitPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Stop Iceberg Qty",
			"name": "stopIcebergQty",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "stopIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Stop Limit Time In Force",
			"name": "stopLimitTimeInForce",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				},
				{
					"name": "IOC",
					"value": "IOC"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "stopLimitTimeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "New Order Resp Type",
			"name": "newOrderRespType",
			"description": "Set the response JSON.",
			"default": "ACK",
			"type": "options",
			"options": [
				{
					"name": "ACK",
					"value": "ACK"
				},
				{
					"name": "RESULT",
					"value": "RESULT"
				},
				{
					"name": "FULL",
					"value": "FULL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "newOrderRespType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Side Effect Type",
			"name": "sideEffectType",
			"description": "Default `NO_SIDE_EFFECT`",
			"default": "NO_SIDE_EFFECT",
			"type": "options",
			"options": [
				{
					"name": "NO SIDE EFFECT",
					"value": "NO_SIDE_EFFECT"
				},
				{
					"name": "MARGIN BUY",
					"value": "MARGIN_BUY"
				},
				{
					"name": "AUTO REPAY",
					"value": "AUTO_REPAY"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sideEffectType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "Self Trade Prevention Mode",
			"name": "selfTradePreventionMode",
			"description": "The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.",
			"default": "EXPIRE_TAKER",
			"type": "options",
			"options": [
				{
					"name": "EXPIRE TAKER",
					"value": "EXPIRE_TAKER"
				},
				{
					"name": "EXPIRE MAKER",
					"value": "EXPIRE_MAKER"
				},
				{
					"name": "EXPIRE BOTH",
					"value": "EXPIRE_BOTH"
				},
				{
					"name": "NONE",
					"value": "NONE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "selfTradePreventionMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oco"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/orderList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order List"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order List"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"description": "Mandatory for isolated margin, not supported for cross margin",
			"default": "",
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order List"
					]
				}
			}
		},
		{
			"displayName": "Order List ID",
			"name": "orderListId",
			"description": "Order list id",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderListId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order List"
					]
				}
			}
		},
		{
			"displayName": "Orig Client Order ID",
			"name": "origClientOrderId",
			"description": "Order id from client",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "origClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Order List"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sapi/v1/margin/orderList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order List"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order List"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order List"
					]
				}
			}
		},
		{
			"displayName": "Order List ID",
			"name": "orderListId",
			"description": "Order list id",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderListId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order List"
					]
				}
			}
		},
		{
			"displayName": "List Client Order ID",
			"name": "listClientOrderId",
			"description": "A unique Id for the entire orderList",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order List"
					]
				}
			}
		},
		{
			"displayName": "New Client Order ID",
			"name": "newClientOrderId",
			"description": "Used to uniquely identify this cancel. Automatically generated by default",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "newClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order List"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order List"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order List"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order List"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Order List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/allOrderList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Order List"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Order List"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"description": "Mandatory for isolated margin, not supported for cross margin",
			"default": "",
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Order List"
					]
				}
			}
		},
		{
			"displayName": "From ID",
			"name": "fromId",
			"description": "If supplied, neither `startTime` or `endTime` can be provided",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Order List"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Default Value: 500; Max Value: 1000",
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin All Order List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/openOrderList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Order List"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Order List"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"description": "Mandatory for isolated margin, not supported for cross margin",
			"default": "",
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Order List"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Open Order List"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/myTrades",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin My Trades"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin My Trades"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin My Trades"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin My Trades"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin My Trades"
					]
				}
			}
		},
		{
			"displayName": "From ID",
			"name": "fromId",
			"description": "Trade id to fetch from. Default gets most recent trades.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin My Trades"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin My Trades"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin My Trades"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin My Trades"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin My Trades"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin My Trades"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/maxBorrowable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Borrowable"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Borrowable"
					]
				}
			}
		},
		{
			"displayName": "Isolated Symbol",
			"name": "isolatedSymbol",
			"description": "Isolated symbol",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "isolatedSymbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Borrowable"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Borrowable"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Borrowable"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Borrowable"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Borrowable"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/maxTransferable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Transferable"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Transferable"
					]
				}
			}
		},
		{
			"displayName": "Isolated Symbol",
			"name": "isolatedSymbol",
			"description": "Isolated symbol",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "isolatedSymbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Transferable"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Transferable"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Transferable"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Transferable"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Max Transferable"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/tradeCoeff",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Trade Coeff"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "Email Address",
			"default": "me@email.com",
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Trade Coeff"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Trade Coeff"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Trade Coeff"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Trade Coeff"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Trade Coeff"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/isolated/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Account"
					]
				}
			}
		},
		{
			"displayName": "Symbols",
			"name": "symbols",
			"description": "Max 5 symbols can be sent; separated by ','",
			"default": "BTCUSDT,BNBUSDT,ADAUSDT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Account"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Account"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Account"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Account"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Account"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sapi/v1/margin/isolated/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Isolated Account"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Isolated Account"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Isolated Account"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Isolated Account"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Isolated Account"
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
						"Margin"
					],
					"operation": [
						"DELETE Sapi v1 Margin Isolated Account"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/margin/isolated/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Isolated Account"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Isolated Account"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Isolated Account"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Isolated Account"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Isolated Account"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Isolated Account"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/isolated/accountLimit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Account Limit"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Account Limit"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Account Limit"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Account Limit"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Account Limit"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/isolated/allPairs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated All Pairs"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated All Pairs"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated All Pairs"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated All Pairs"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated All Pairs"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated All Pairs"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/bnbBurn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Bnb Burn"
					]
				}
			}
		},
		{
			"displayName": "Spot BNB Burn",
			"name": "spotBNBBurn",
			"description": "Determines whether to use BNB to pay for trading fees on SPOT",
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
					"property": "spotBNBBurn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Bnb Burn"
					]
				}
			}
		},
		{
			"displayName": "Interest BNB Burn",
			"name": "interestBNBBurn",
			"description": "Determines whether to use BNB to pay for margin loan's interest",
			"default": "false",
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
					"property": "interestBNBBurn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Bnb Burn"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Bnb Burn"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Bnb Burn"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Bnb Burn"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Bnb Burn"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/bnbBurn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Bnb Burn"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Bnb Burn"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Bnb Burn"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Bnb Burn"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Bnb Burn"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/interestRateHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest Rate History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest Rate History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest Rate History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest Rate History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest Rate History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest Rate History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest Rate History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest Rate History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Interest Rate History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/crossMarginData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Cross Margin Data"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Cross Margin Data"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Cross Margin Data"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Cross Margin Data"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Cross Margin Data"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Cross Margin Data"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Cross Margin Data"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/isolatedMarginData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Data"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Data"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Data"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Data"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Data"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Data"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Data"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/isolatedMarginTier",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Tier"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Tier"
					]
				}
			}
		},
		{
			"displayName": "Tier",
			"name": "tier",
			"description": "All margin tier data will be returned if tier is omitted",
			"default": 1,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tier",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Tier"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Tier"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Tier"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Tier"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Isolated Margin Tier"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/rateLimit/order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Rate Limit Order"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Rate Limit Order"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"description": "isolated symbol, mandatory for isolated margin",
			"default": "",
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Rate Limit Order"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Rate Limit Order"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Rate Limit Order"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Rate Limit Order"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Rate Limit Order"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/crossMarginCollateralRatio",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Cross Margin Collateral Ratio"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Cross Margin Collateral Ratio"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/exchange-small-liability",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/exchange-small-liability-history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability History"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Exchange Small Liability History"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/next-hourly-interest-rate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Next Hourly Interest Rate"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"description": "List of assets, separated by commas, up to 20",
			"default": "BTC,ETH",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "assets",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Next Hourly Interest Rate"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "for isolated margin or not, \"TRUE\", \"FALSE\"",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Next Hourly Interest Rate"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Next Hourly Interest Rate"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Next Hourly Interest Rate"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Next Hourly Interest Rate"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Next Hourly Interest Rate"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/capital-flow",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Capital Flow"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Capital Flow"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"description": "Required when querying isolated data",
			"default": "BTCUSDT",
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Capital Flow"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"default": "TRANSFER",
			"type": "options",
			"options": [
				{
					"name": "TRANSFER",
					"value": "TRANSFER"
				},
				{
					"name": "BORROW",
					"value": "BORROW"
				},
				{
					"name": "REPAY",
					"value": "REPAY"
				},
				{
					"name": "BUY INCOME",
					"value": "BUY_INCOME"
				},
				{
					"name": "BUY EXPENSE",
					"value": "BUY_EXPENSE"
				},
				{
					"name": "SELL INCOME",
					"value": "SELL_INCOME"
				},
				{
					"name": "SELL EXPENSE",
					"value": "SELL_EXPENSE"
				},
				{
					"name": "TRADING COMMISSION",
					"value": "TRADING_COMMISSION"
				},
				{
					"name": "BUY LIQUIDATION",
					"value": "BUY_LIQUIDATION"
				},
				{
					"name": "SELL LIQUIDATION",
					"value": "SELL_LIQUIDATION"
				},
				{
					"name": "REPAY LIQUIDATION",
					"value": "REPAY_LIQUIDATION"
				},
				{
					"name": "OTHER LIQUIDATION",
					"value": "OTHER_LIQUIDATION"
				},
				{
					"name": "LIQUIDATION FEE",
					"value": "LIQUIDATION_FEE"
				},
				{
					"name": "SMALL BALANCE CONVERT",
					"value": "SMALL_BALANCE_CONVERT"
				},
				{
					"name": "COMMISSION RETURN",
					"value": "COMMISSION_RETURN"
				},
				{
					"name": "SMALL CONVERT",
					"value": "SMALL_CONVERT"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Capital Flow"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "startTime",
			"description": "Only supports querying the data of the last 90 days",
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Capital Flow"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Capital Flow"
					]
				}
			}
		},
		{
			"displayName": "From ID",
			"name": "fromId",
			"description": "If fromId is set, the data with id > fromId will be returned. Otherwise the latest data will be returned",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Capital Flow"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The number of data items returned each time is limited. Default 500; Max 1000.",
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Capital Flow"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Capital Flow"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Capital Flow"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Capital Flow"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Capital Flow"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/delist-schedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Delist Schedule"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Delist Schedule"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Delist Schedule"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Delist Schedule"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Delist Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/available-inventory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Available Inventory"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"default": "MARGIN",
			"type": "options",
			"options": [
				{
					"name": "MARGIN",
					"value": "MARGIN"
				},
				{
					"name": "ISOLATED",
					"value": "ISOLATED"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Available Inventory"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Available Inventory"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Available Inventory"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Available Inventory"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/margin/manual-liquidation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Manual Liquidation"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"default": "MARGIN",
			"type": "options",
			"options": [
				{
					"name": "MARGIN",
					"value": "MARGIN"
				},
				{
					"name": "ISOLATED",
					"value": "ISOLATED"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Manual Liquidation"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"default": "BTCUSDT",
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Manual Liquidation"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Manual Liquidation"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Manual Liquidation"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Manual Liquidation"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/margin/order/oto",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "List Client Order ID",
			"name": "listClientOrderId",
			"description": "Arbitrary unique ID among open order lists. Automatically generated if not sent.\nA new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.\n`listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "New Order Resp Type",
			"name": "newOrderRespType",
			"description": "Set the response JSON.",
			"default": "ACK",
			"type": "options",
			"options": [
				{
					"name": "ACK",
					"value": "ACK"
				},
				{
					"name": "RESULT",
					"value": "RESULT"
				},
				{
					"name": "FULL",
					"value": "FULL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "newOrderRespType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Side Effect Type",
			"name": "sideEffectType",
			"description": "Default `NO_SIDE_EFFECT`",
			"default": "NO_SIDE_EFFECT",
			"type": "options",
			"options": [
				{
					"name": "NO SIDE EFFECT",
					"value": "NO_SIDE_EFFECT"
				},
				{
					"name": "MARGIN BUY",
					"value": "MARGIN_BUY"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sideEffectType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Self Trade Prevention Mode",
			"name": "selfTradePreventionMode",
			"description": "The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.",
			"default": "EXPIRE_TAKER",
			"type": "options",
			"options": [
				{
					"name": "EXPIRE TAKER",
					"value": "EXPIRE_TAKER"
				},
				{
					"name": "EXPIRE MAKER",
					"value": "EXPIRE_MAKER"
				},
				{
					"name": "EXPIRE BOTH",
					"value": "EXPIRE_BOTH"
				},
				{
					"name": "NONE",
					"value": "NONE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "selfTradePreventionMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Auto Repay At Cancel",
			"name": "autoRepayAtCancel",
			"description": "Only when MARGIN_BUY order takes effect, true means that the debt generated by the order needs to be repay after the order is cancelled. The default is true",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "autoRepayAtCancel",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Type",
			"name": "workingType",
			"required": true,
			"description": "Supported values: LIMIT,LIMIT_MAKER",
			"default": "LIMIT",
			"type": "options",
			"options": [
				{
					"name": "LIMIT",
					"value": "LIMIT"
				},
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "workingType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Side",
			"name": "workingSide",
			"required": true,
			"description": "BUY,SELL",
			"default": "BUY",
			"type": "options",
			"options": [
				{
					"name": "BUY",
					"value": "BUY"
				},
				{
					"name": "SELL",
					"value": "SELL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "workingSide",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Client Order ID",
			"name": "workingClientOrderId",
			"description": "Arbitrary unique ID among open orders for the working order. Automatically generated if not sent.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Price",
			"name": "workingPrice",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Quantity",
			"name": "workingQuantity",
			"required": true,
			"description": "Sets the quantity for the working order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingQuantity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Iceberg Qty",
			"name": "workingIcebergQty",
			"required": true,
			"description": "This can only be used if workingTimeInForce is GTC.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Working Time In Force",
			"name": "workingTimeInForce",
			"description": "GTC, IOC, FOK",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "workingTimeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Type",
			"name": "pendingType",
			"required": true,
			"description": "Supported values: Order Types Note that MARKET orders using quoteOrderQty are not supported.",
			"default": "LIMIT",
			"type": "options",
			"options": [
				{
					"name": "LIMIT",
					"value": "LIMIT"
				},
				{
					"name": "MARKET",
					"value": "MARKET"
				},
				{
					"name": "STOP LOSS",
					"value": "STOP_LOSS"
				},
				{
					"name": "STOP LOSS LIMIT",
					"value": "STOP_LOSS_LIMIT"
				},
				{
					"name": "TAKE PROFIT",
					"value": "TAKE_PROFIT"
				},
				{
					"name": "TAKE PROFIT LIMIT",
					"value": "TAKE_PROFIT_LIMIT"
				},
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Side",
			"name": "pendingSide",
			"required": true,
			"description": "BUY,SELL",
			"default": "BUY",
			"type": "options",
			"options": [
				{
					"name": "BUY",
					"value": "BUY"
				},
				{
					"name": "SELL",
					"value": "SELL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingSide",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Client Order ID",
			"name": "pendingClientOrderId",
			"description": "Arbitrary unique ID among open orders for the pending order. Automatically generated if not sent.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Price",
			"name": "pendingPrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Stop Price",
			"name": "pendingStopPrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingStopPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Trailing Delta",
			"name": "pendingTrailingDelta",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingTrailingDelta",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Quantity",
			"name": "pendingQuantity",
			"required": true,
			"description": "Sets the quantity for the pending order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingQuantity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Iceberg Qty",
			"name": "pendingIcebergQty",
			"description": "This can only be used if pendingTimeInForce is GTC.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "Pending Time In Force",
			"name": "pendingTimeInForce",
			"description": "GTC, IOC, FOK",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingTimeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Oto"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/margin/order/otoco",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Is Isolated",
			"name": "isIsolated",
			"description": "* `TRUE` - For isolated margin\n* `FALSE` - Default, not for isolated margin",
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
					"property": "isIsolated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Side Effect Type",
			"name": "sideEffectType",
			"description": "Default `NO_SIDE_EFFECT`",
			"default": "NO_SIDE_EFFECT",
			"type": "options",
			"options": [
				{
					"name": "NO SIDE EFFECT",
					"value": "NO_SIDE_EFFECT"
				},
				{
					"name": "MARGIN BUY",
					"value": "MARGIN_BUY"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sideEffectType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Auto Repay At Cancel",
			"name": "autoRepayAtCancel",
			"description": "Only when MARGIN_BUY order takes effect, true means that the debt generated by the order needs to be repay after the order is cancelled. The default is true",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "autoRepayAtCancel",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "List Client Order ID",
			"name": "listClientOrderId",
			"description": "Arbitrary unique ID among open order lists. Automatically generated if not sent.\nA new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.\n`listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "New Order Resp Type",
			"name": "newOrderRespType",
			"description": "Set the response JSON.",
			"default": "ACK",
			"type": "options",
			"options": [
				{
					"name": "ACK",
					"value": "ACK"
				},
				{
					"name": "RESULT",
					"value": "RESULT"
				},
				{
					"name": "FULL",
					"value": "FULL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "newOrderRespType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Self Trade Prevention Mode",
			"name": "selfTradePreventionMode",
			"description": "The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.",
			"default": "EXPIRE_TAKER",
			"type": "options",
			"options": [
				{
					"name": "EXPIRE TAKER",
					"value": "EXPIRE_TAKER"
				},
				{
					"name": "EXPIRE MAKER",
					"value": "EXPIRE_MAKER"
				},
				{
					"name": "EXPIRE BOTH",
					"value": "EXPIRE_BOTH"
				},
				{
					"name": "NONE",
					"value": "NONE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "selfTradePreventionMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Type",
			"name": "workingType",
			"required": true,
			"description": "Supported values: LIMIT,LIMIT_MAKER",
			"default": "LIMIT",
			"type": "options",
			"options": [
				{
					"name": "LIMIT",
					"value": "LIMIT"
				},
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "workingType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Side",
			"name": "workingSide",
			"required": true,
			"description": "BUY,SELL",
			"default": "BUY",
			"type": "options",
			"options": [
				{
					"name": "BUY",
					"value": "BUY"
				},
				{
					"name": "SELL",
					"value": "SELL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "workingSide",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Client Order ID",
			"name": "workingClientOrderId",
			"description": "Arbitrary unique ID among open orders for the working order. Automatically generated if not sent.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Price",
			"name": "workingPrice",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Quantity",
			"name": "workingQuantity",
			"required": true,
			"description": "Sets the quantity for the working order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingQuantity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Iceberg Qty",
			"name": "workingIcebergQty",
			"required": true,
			"description": "This can only be used if workingTimeInForce is GTC.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "workingIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Working Time In Force",
			"name": "workingTimeInForce",
			"description": "GTC, IOC, FOK",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "workingTimeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Side",
			"name": "pendingSide",
			"required": true,
			"description": "BUY,SELL",
			"default": "BUY",
			"type": "options",
			"options": [
				{
					"name": "BUY",
					"value": "BUY"
				},
				{
					"name": "SELL",
					"value": "SELL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingSide",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Quantity",
			"name": "pendingQuantity",
			"required": true,
			"description": "Sets the quantity for the pending order.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingQuantity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Type",
			"name": "pendingAboveType",
			"required": true,
			"description": "Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT",
			"default": "LIMIT_MAKER",
			"type": "options",
			"options": [
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
				},
				{
					"name": "STOP LOSS",
					"value": "STOP_LOSS"
				},
				{
					"name": "STOP LOSS LIMIT",
					"value": "STOP_LOSS_LIMIT"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Client Order ID",
			"name": "pendingAboveClientOrderId",
			"description": "Arbitrary unique ID among open orders for the pending above order. Automatically generated if not sent.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Price",
			"name": "pendingAbovePrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAbovePrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Stop Price",
			"name": "pendingAboveStopPrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveStopPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Trailing Delta",
			"name": "pendingAboveTrailingDelta",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveTrailingDelta",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Iceberg Qty",
			"name": "pendingAboveIcebergQty",
			"description": "This can only be used if pendingAboveTimeInForce is GTC.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Above Time In Force",
			"name": "pendingAboveTimeInForce",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingAboveTimeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Type",
			"name": "pendingBelowType",
			"description": "Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT",
			"default": "LIMIT_MAKER",
			"type": "options",
			"options": [
				{
					"name": "LIMIT MAKER",
					"value": "LIMIT_MAKER"
				},
				{
					"name": "STOP LOSS",
					"value": "STOP_LOSS"
				},
				{
					"name": "STOP LOSS LIMIT",
					"value": "STOP_LOSS_LIMIT"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Client Order ID",
			"name": "pendingBelowClientOrderId",
			"description": "Arbitrary unique ID among open orders for the pending below order. Automatically generated if not sent.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowClientOrderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Price",
			"name": "pendingBelowPrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Stop Price",
			"name": "pendingBelowStopPrice",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowStopPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Trailing Delta",
			"name": "pendingBelowTrailingDelta",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowTrailingDelta",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Iceberg Qty",
			"name": "pendingBelowIcebergQty",
			"description": "This can only be used if pendingBelowTimeInForce is GTC.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowIcebergQty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "Pending Below Time In Force",
			"name": "pendingBelowTimeInForce",
			"default": "GTC",
			"type": "options",
			"options": [
				{
					"name": "GTC",
					"value": "GTC"
				},
				{
					"name": "IOC",
					"value": "IOC"
				},
				{
					"name": "FOK",
					"value": "FOK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pendingBelowTimeInForce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Order Otoco"
					]
				}
			}
		},
		{
			"displayName": "POST /sapi/v1/margin/max-leverage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Max Leverage"
					]
				}
			}
		},
		{
			"displayName": "Max Leverage",
			"name": "maxLeverage",
			"required": true,
			"description": "Can only adjust 3 or 5",
			"default": 3,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxLeverage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Max Leverage"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Max Leverage"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Max Leverage"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Max Leverage"
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
						"Margin"
					],
					"operation": [
						"POST Sapi v1 Margin Max Leverage"
					]
				}
			}
		},
		{
			"displayName": "GET /sapi/v1/margin/leverageBracket",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Leverage Bracket"
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
						"Margin"
					],
					"operation": [
						"GET Sapi v1 Margin Leverage Bracket"
					]
				}
			}
		},
];
