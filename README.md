# @n8n-dev/n8n-nodes-binance

![binance Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-binance.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-binance)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing binance API integrations by hand.**

Every time you connect n8n to binance, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to binance took 5 minutes, not half a day?**

This node gives you **29+ resources** out of the box: **Market**, **Trade**, **Margin**, **Wallet**, **Sub Account**, and 24 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-binance
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-binance`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **binance API** → paste your API key
3. Drag the **binance** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Market | GET Test Connectivity, GET Check Server Time, GET Exchange Information, GET Order Book, GET Recent Trades List, GET Old Trade Lookup, GET CompressedAggregate Trades List, GET KlineCandlestick Data, GET UIKlines, GET Current Average Price, GET 24hr Ticker Price Change Statistics, GET Trading Day Ticker, GET Symbol Price Ticker, GET Symbol Order Book Ticker, GET Rolling window price change statistics |\n| Trade | POST Test New Order TRADE, GET Query Order USERDATA, POST New Order TRADE, DELETE Cancel Order TRADE, POST Cancel an Existing Order and Send a New Order Trade, GET Current Open Orders USERDATA, DELETE Cancel all Open Orders on a Symbol TRADE, GET All Orders USERDATA, POST New Order list  OCO TRADE, POST New Order List  OTO TRADE, POST New Order List  OTOCO TRADE, GET Query OCO USERDATA, DELETE Cancel OCO TRADE, GET Query all OCO USERDATA, GET Query Open OCO USERDATA, POST New order using SOR TRADE, POST Test new order using SOR TRADE, GET Account Information USERDATA, GET Account Trade List USERDATA, GET Query Current Order Count Usage TRADE, GET Query Prevented Matches, GET Query Allocations USERDATA, GET Query Commission Rates USERDATA |\n| Margin | POST Margin account borrowrepayMARGIN, GET Query borrowrepay records in Margin accountUSERDATA, Get Cross Margin Transfer History USERDATA, Get All Margin Assets MARKETDATA, Get All Cross Margin Pairs MARKETDATA, GET Query Margin PriceIndex MARKETDATA, GET Query Margin Accounts Order USERDATA, POST Margin Account New Order TRADE, DELETE Margin Account Cancel Order TRADE, Get Interest History USERDATA, Get Force Liquidation Record USERDATA, GET Query Cross Margin Account Details USERDATA, GET Query Margin Accounts Open Orders USERDATA, DELETE Margin Account Cancel all Open Orders on a Symbol TRADE, GET Query Margin Accounts All Orders USERDATA, POST Margin Account New OCO TRADE, GET Query Margin Accounts OCO USERDATA, DELETE Margin Account Cancel OCO TRADE, GET Query Margin Accounts all OCO USERDATA, GET Query Margin Accounts Open OCO USERDATA, GET Query Margin Accounts Trade List USERDATA, GET Query Max Borrow USERDATA, GET Query Max TransferOut Amount USERDATA, Get Summary of Margin account USERDATA, GET Query Isolated Margin Account Info USERDATA, DELETE Disable Isolated Margin Account TRADE, POST Enable Isolated Margin Account TRADE, GET Query Enabled Isolated Margin Account Limit USERDATA, Get All Isolated Margin SymbolUSERDATA, POST Toggle BNB Burn On Spot Trade And Margin Interest USERDATA, Get BNB Burn StatusUSERDATA, GET Margin Interest Rate History USERDATA, GET Query Cross Margin Fee Data USERDATA, GET Query Isolated Margin Fee Data USERDATA, GET Query Isolated Margin Tier Data USERDATA, GET Query Current Margin Order Count Usage TRADE, GET Cross margin collateral ratio MARKETDATA, Get Small Liability Exchange Coin List USERDATA, Get Small Liability Exchange History USERDATA, Get a future hourly interest rate USERDATA, Get cross or isolated margin capital flowUSERDATA, Get tokens or symbols delist schedule for cross margin and isolated margin MARKETDATA, GET Query Margin Available Inventory USERDATA, POST Margin manual liquidationMARGIN, POST Margin Account New OTO TRADE, POST Margin Account New OTOCO TRADE, POST Adjust cross margin max leverage USERDATA, GET Query Liability Coin Leverage Bracket in Cross Margin Pro Mode MARKETDATA |\n| Wallet | GET System Status System, GET All Coins Information USERDATA, GET Daily Account Snapshot USERDATA, POST Disable Fast Withdraw Switch USERDATA, POST Enable Fast Withdraw Switch USERDATA, POST Withdraw USERDATA, GET Deposit Historysupporting network USERDATA, GET Withdraw History supporting network USERDATA, GET Deposit Address supporting network USERDATA, GET Account Status USERDATA, GET Account API Trading Status USERDATA, GET DustLogUSERDATA, POST Get Assets That Can Be Converted Into BNB USERDATA, POST Dust Transfer USERDATA, GET Asset Dividend Record USERDATA, GET Asset Detail USERDATA, GET Trade Fee USERDATA, GET Query User Universal Transfer History USERDATA, POST User Universal Transfer USERDATA, POST Funding Wallet USERDATA, POST User Asset USERDATA, POST Convert Transfer USERDATA, GET Query Convert Transfer USERDATA, Get CloudMining payment and refund history USERDATA, Get API Key Permission USERDATA, GET Query autoconverting stable coins USERDATA, POST Switch onoff BUSD and stable coins conversion USERDATA USERDATA, POST One click arrival deposit apply USERDATA, GET Query User Wallet Balance USERDATA, GET Query User Delegation HistoryFor Master Account USERDATA, GET Fetch deposit address list with network USERDATA, Get symbols delist schedule for spot MARKETDATA, GET Fetch withdraw address list USERDATA, GET Account info USERDATA |\n| Sub Account | POST Create a Virtual SubaccountFor Master Account, GET Query Subaccount List For Master Account, GET Subaccount Spot Asset Transfer History For Master Account, GET Subaccount Futures Asset Transfer History For Master Account, POST Subaccount Futures Asset Transfer For Master Account, GET Subaccount Assets For Master Account, GET Subaccount Spot Assets Summary For Master Account, GET Subaccount Spot Assets Summary For Master Account, GET Subaccount Deposit History For Master Account, GET Subaccounts Status on MarginFutures For Master Account, POST Enable Margin for Subaccount For Master Account, GET Detail on Subaccounts Margin Account For Master Account, GET Summary of Subaccounts Margin Account For Master Account, POST Enable Futures for Subaccount For Master Account, GET Detail on Subaccounts Futures Account For Master Account, GET Summary of Subaccounts Futures Account For Master Account, GET Futures PositionRisk of Subaccount For Master Account, POST Transfer for Subaccount For Master Account, POST Margin Transfer for Subaccount For Master Account, POST Transfer to Subaccount of Same Master For Subaccount, POST Transfer to Master For Subaccount, GET Subaccount Transfer History For Subaccount, GET Universal Transfer History For Master Account, POST Universal Transfer For Master Account, GET Detail on Subaccounts Futures Account V2 For Master Account, GET Summary of Subaccounts Futures Account V2 For Master Account, GET Futures PositionRisk of Subaccount V2 For Master Account, POST Enable Leverage Token for Subaccount For Master Account, POST Deposit assets into the managed subaccountFor Investor Master Account, GET Managed subaccount asset detailsFor Investor Master Account, POST Withdrawl assets from the managed subaccountFor Investor Master Account, GET Managed subaccount snapshot For Investor Master Account, GET Query Managed Sub Account Transfer Log For Investor Master Account, GET Query Managed Sub Account Transfer Log For Trading Team Master Account, GET Query Managed Subaccount Futures Asset Details For Investor Master Account, GET Query Managed Subaccount Margin Asset Details For Investor Master Account, GET Query Managed Subaccount List For Investor, Get Managed Subaccount Deposit Address For Investor Master Account, GET Query Managed Sub Account Transfer Log For Trading Team Sub AccountUSERDATA, Get IP Restriction for a Subaccount API Key For Master Account, Delete IP List for a Subaccount API Key For Master Account, GET Query Subaccount Transaction Statistics For Master Account, POST Enable Options for Subaccount For Master AccountUSERDATA, POST Update IP Restriction for SubAccount API key For Master Account, GET Query Subaccount Assets For Master Account |\n| Stream | POST Create a ListenKey USERSTREAM, PUT PingKeepalive a ListenKey USERSTREAM, DELETE Close a ListenKey USERSTREAM |\n| Margin Stream | POST Create a ListenKey USERSTREAM, PUT PingKeepalive a ListenKey USERSTREAM, DELETE Close a ListenKey USERSTREAM |\n| Isolated Margin Stream | POST Generate a Listen Key USERSTREAM, PUT PingKeepalive a Listen Key USERSTREAM, DELETE Close a ListenKey USERSTREAM |\n| Savings | Get FixedActivity Project ListUSERDATA, POST Purchase FixedActivity Project USERDATA, Get FixedActivity Project Position USERDATA, POST Change FixedActivity Position to Daily Position USERDATA |\n| Mining | GET Acquiring Algorithm MARKETDATA, GET Acquiring CoinName MARKETDATA, GET Request for Detail Miner List USERDATA, GET Request for Miner List USERDATA, GET Earnings List USERDATA, GET Extra Bonus List USERDATA, GET Hashrate Resale List USERDATA, GET Hashrate Resale Details USERDATA, POST Hashrate Resale Request USERDATA, POST Cancel Hashrate Resale configuration USERDATA, GET Statistic List USERDATA, GET Account List USERDATA, GET Mining Account Earning USERDATA |\n| Futures | POST New Future Account Transfer USERDATA, Get Future Account Transaction History List USERDATA, Get Future TickLevel Orderbook Historical Data Download Link USERDATA |\n| Futures Algo | POST Volume ParticipationVP New Order TRADE, POST TimeWeighted Average PriceTwap New Order TRADE, DELETE Cancel Algo OrderTRADE, GET Query Current Algo Open Orders USERDATA, GET Query Historical Algo Orders USERDATA, GET Query Sub Orders USERDATA |\n| Spot Algo | POST TimeWeighted Average Price Twap New Order, DELETE Cancel Algo Order, GET Query Current Algo Open Orders, GET Query Historical Algo Orders, GET Query Sub Orders |\n| Portfolio Margin | GET Portfolio Margin Account USERDATA, GET Portfolio Margin Collateral Rate MARKETDATA, GET Portfolio Margin Pro Tiered Collateral RateUSERDATA, GET Portfolio Margin Bankruptcy Loan Amount USERDATA, POST Portfolio Margin Bankruptcy Loan Repay USERDATA, GET Query Classic Portfolio Margin Negative Balance Interest History USERDATA, GET Query Portfolio Margin Asset Index Price MARKETDATA, POST Fund Autocollection USERDATA, POST BNB Transfer USERDATA, POST Change Autorepayfutures Status USERDATA, Get Autorepayfutures Status USERDATA, POST Repay futures Negative Balance USERDATA, Get Portfolio Margin Asset Leverage USERDATA, POST Fund Collection by Asset USERDATA |\n| BLVT | GET BLVT Info MARKETDATA, POST Subscribe BLVT USERDATA, GET Query Subscription Record USERDATA, POST Redeem BLVT USERDATA, GET Redemption Record USERDATA, GET BLVT User Limit Info USERDATA |\n| Fiat | GET Fiat DepositWithdraw History USERDATA, GET Fiat Payments History USERDATA |\n| C 2 C | Get C2C Trade History USERDATA |\n| VIP Loans | Get VIP Loan Ongoing Orders USERDATA, POST VIP Loan Repay TRADE, Get VIP Loan Repayment History USERDATA, GET Check Locked Value of VIP Collateral Account USERDATA, POST VIP Loan Borrow, Get Loanable Assets Data, Get Collateral Asset Data USERDATA, GET Query Application Status USERDATA, Get Borrow Interest Rate USERDATA, POST VIP Loan Renew |\n| Crypto Loans | Get Crypto Loans Income History USERDATA, POST Crypto Loan Borrow TRADE, Get Crypto Loans Borrow History USERDATA, Get Loan Ongoing Orders USERDATA, POST Crypto Loan Repay TRADE, Get Loan Repayment History USERDATA, POST Crypto Loan Adjust LTV TRADE, Get Loan LTV Adjustment History USERDATA, Get Loanable Assets Data USERDATA, Get Collateral Assets Data USERDATA, GET Check Collateral Repay Rate USERDATA, POST Crypto Loan Customize Margin Call TRADE, POST Borrow  Flexible Loan Borrow TRADE, GET Borrow  Get Flexible Loan Ongoing Orders USERDATA, GET Borrow  Get Flexible Loan Borrow History USERDATA, POST Repay  Flexible Loan Repay TRADE, GET Repay  Get Flexible Loan Repayment History USERDATA, POST Adjust LTV  Flexible Loan Adjust LTV TRADE, GET Adjust LTV  Get Flexible Loan LTV Adjustment History USERDATA, Get Flexible Loan Assets Data USERDATA, Get Flexible Loan Collateral Assets Data USERDATA |\n| Pay | Get Pay Trade History USERDATA |\n| Convert | GET List All Convert Pairs, GET Query order quantity precision per asset USERDATA, POST Send quote request USERDATA, POST Accept Quote TRADE, GET Order status USERDATA, POST Place limit order USERDATA, POST Cancel limit order USERDATA, GET Query limit open orders USERDATA, Get Convert Trade History USERDATA |\n| Rebate | Get Spot Rebate History Records USERDATA |\n| NFT | Get NFT Transaction History USERDATA, Get NFT Deposit HistoryUSERDATA, Get NFT Withdraw History USERDATA, Get NFT Asset USERDATA |\n| Gift Card | POST Create a Binance Code USERDATA, POST Redeem a Binance Code USERDATA, GET Verify a Binance Code USERDATA, GET Fetch RSA Public Key USERDATA, POST Buy a Binance Code TRADE, GET Fetch Token Limit USERDATA |\n| Auto Invest | Get target asset list USERDATA, Get target asset ROI data USERDATA, GET Query all source asset and target asset USERDATA, GET Query source asset list USERDATA, POST Investment plan creation USERDATA, POST Investment plan adjustment, POST Change Plan Status, Get list of plans, GET Query holding details of the plan, GET Query subscription transaction history, GET Query Index DetailsUSERDATA, GET Query Index Linked Plan Position DetailsUSERDATA, POST One Time TransactionTRADE, GET Query OneTime Transaction Status USERDATA, POST Index Linked Plan Redemption TRADE, GET Index Linked Plan Redemption History USERDATA, GET Index Linked Plan Rebalance Details USERDATA |\n| Staking | POST Subscribe ETH Staking V2TRADE, POST Redeem ETH TRADE, Get ETH staking history USERDATA, Get ETH redemption history USERDATA, Get BETH rewards distribution historyUSERDATA, Get current ETH staking quota USERDATA, Get WBETH Rate History USERDATA, GET ETH Staking account V2USERDATA, POST Wrap BETHTRADE, Get WBETH wrap history USERDATA, Get WBETH unwrap history USERDATA, Get WBETH rewards historyUSERDATA |\n| Copy Trading | Get Futures Lead Trader StatusTRADE, Get Futures Lead Trading Symbol WhitelistUSERDATA |\n| Simple Earn | Get Simple Earn Flexible Product List USERDATA, Get Simple Earn Locked Product List USERDATA, POST Subscribe Flexible Product TRADE, POST Subscribe Locked Product TRADE, POST Redeem Flexible Product TRADE, POST Redeem Locked Product TRADE, Get Flexible Product Position USERDATA, Get Locked Product Position USERDATA, GET Simple Account USERDATA, Get Flexible Subscription Record USERDATA, Get Locked Subscription Record USERDATA, Get Flexible Redemption Record USERDATA, Get Locked Redemption Record USERDATA, Get Flexible Rewards History USERDATA, Get Locked Rewards History USERDATA, POST Set Flexible Auto Subscribe USERDATA, POST Set Locked Auto Subscribe USERDATA, Get Flexible Personal Left Quota USERDATA, Get Locked Personal Left Quota USERDATA, Get Flexible Subscription Preview USERDATA, Get Locked Subscription Preview USERDATA, GET Set Locked Product Redeem OptionUSERDATA, Get Rate History USERDATA, Get Collateral Record USERDATA |\n| Dual Investment | Get Dual Investment product listUSERDATA, POST Subscribe Dual Investment productsUSERDATA, Get Dual Investment positionsUSERDATA, GET Check Dual Investment accountsUSERDATA, POST Change AutoCompound statusUSERDATA |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from binance docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official binance OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **binance** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the binance API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
