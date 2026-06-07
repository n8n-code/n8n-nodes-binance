# @n8n-dev/n8n-nodes-binance

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
| Market | GET Test Connectivity, GET Check Server Time, GET Exchange Information, GET Order Book, GET Recent Trades List, GET Old Trade Lookup, GET Compressed/Aggregate Trades List, GET Kline/Candlestick Data, GET UIKlines, GET Current Average Price, GET 24hr Ticker Price Change Statistics, GET Trading Day Ticker, GET Symbol Price Ticker, GET Symbol Order Book Ticker, GET Rolling window price change statistics |
| Trade | POST Test New Order (TRADE), GET Query Order (USER_DATA), POST New Order (TRADE), DELETE Cancel Order (TRADE), POST Cancel an Existing Order and Send a New Order (Trade), GET Current Open Orders (USER_DATA), DELETE Cancel all Open Orders on a Symbol (TRADE), GET All Orders (USER_DATA), POST New Order list - OCO (TRADE), POST New Order List - OTO (TRADE), POST New Order List - OTOCO (TRADE), GET Query OCO (USER_DATA), DELETE Cancel OCO (TRADE), GET Query all OCO (USER_DATA), GET Query Open OCO (USER_DATA), POST New order using SOR (TRADE), POST Test new order using SOR (TRADE), GET Account Information (USER_DATA), GET Account Trade List (USER_DATA), GET Query Current Order Count Usage (TRADE), GET Query Prevented Matches, GET Query Allocations (USER_DATA), GET Query Commission Rates (USER_DATA) |
| Margin | POST Margin account borrow/repay(MARGIN), GET Query borrow/repay records in Margin account(USER_DATA), GET Get Cross Margin Transfer History (USER_DATA), GET Get All Margin Assets (MARKET_DATA), GET Get All Cross Margin Pairs (MARKET_DATA), GET Query Margin PriceIndex (MARKET_DATA), GET Query Margin Account's Order (USER_DATA), POST Margin Account New Order (TRADE), DELETE Margin Account Cancel Order (TRADE), GET Get Interest History (USER_DATA), GET Get Force Liquidation Record (USER_DATA), GET Query Cross Margin Account Details (USER_DATA), GET Query Margin Account's Open Orders (USER_DATA), DELETE Margin Account Cancel all Open Orders on a Symbol (TRADE), GET Query Margin Account's All Orders (USER_DATA), POST Margin Account New OCO (TRADE), GET Query Margin Account's OCO (USER_DATA), DELETE Margin Account Cancel OCO (TRADE), GET Query Margin Account's all OCO (USER_DATA), GET Query Margin Account's Open OCO (USER_DATA), GET Query Margin Account's Trade List (USER_DATA), GET Query Max Borrow (USER_DATA), GET Query Max Transfer-Out Amount (USER_DATA), GET Get Summary of Margin account (USER_DATA), GET Query Isolated Margin Account Info (USER_DATA), DELETE Disable Isolated Margin Account (TRADE), POST Enable Isolated Margin Account (TRADE), GET Query Enabled Isolated Margin Account Limit (USER_DATA), GET Get All Isolated Margin Symbol(USER_DATA), POST Toggle BNB Burn On Spot Trade And Margin Interest (USER_DATA), GET Get BNB Burn Status(USER_DATA), GET Margin Interest Rate History (USER_DATA), GET Query Cross Margin Fee Data (USER_DATA), GET Query Isolated Margin Fee Data (USER_DATA), GET Query Isolated Margin Tier Data (USER_DATA), GET Query Current Margin Order Count Usage (TRADE), GET Cross margin collateral ratio (MARKET_DATA), GET Get Small Liability Exchange Coin List (USER_DATA), GET Get Small Liability Exchange History (USER_DATA), GET Get a future hourly interest rate (USER_DATA), GET Get cross or isolated margin capital flow(USER_DATA), GET Get tokens or symbols delist schedule for cross margin and isolated margin (MARKET_DATA), GET Query Margin Available Inventory (USER_DATA), POST Margin manual liquidation(MARGIN), POST Margin Account New OTO (TRADE), POST Margin Account New OTOCO (TRADE), POST Adjust cross margin max leverage (USER_DATA), GET Query Liability Coin Leverage Bracket in Cross Margin Pro Mode (MARKET_DATA) |
| Wallet | GET System Status (System), GET All Coins' Information (USER_DATA), GET Daily Account Snapshot (USER_DATA), POST Disable Fast Withdraw Switch (USER_DATA), POST Enable Fast Withdraw Switch (USER_DATA), POST Withdraw (USER_DATA), GET Deposit History(supporting network) (USER_DATA), GET Withdraw History (supporting network) (USER_DATA), GET Deposit Address (supporting network) (USER_DATA), GET Account Status (USER_DATA), GET Account API Trading Status (USER_DATA), GET DustLog(USER_DATA), POST Get Assets That Can Be Converted Into BNB (USER_DATA), POST Dust Transfer (USER_DATA), GET Asset Dividend Record (USER_DATA), GET Asset Detail (USER_DATA), GET Trade Fee (USER_DATA), GET Query User Universal Transfer History (USER_DATA), POST User Universal Transfer (USER_DATA), POST Funding Wallet (USER_DATA), POST User Asset (USER_DATA), POST Convert Transfer (USER_DATA), GET Query Convert Transfer (USER_DATA), GET Get Cloud-Mining payment and refund history (USER_DATA), GET Get API Key Permission (USER_DATA), GET Query auto-converting stable coins (USER_DATA), POST Switch on/off BUSD and stable coins conversion (USER_DATA) (USER_DATA), POST One click arrival deposit apply (USER_DATA), GET Query User Wallet Balance (USER_DATA), GET Query User Delegation History(For Master Account) (USER_DATA), GET Fetch deposit address list with network (USER_DATA), GET Get symbols delist schedule for spot (MARKET_DATA), GET Fetch withdraw address list (USER_DATA), GET Account info (USER_DATA) |
| Sub Account | POST Create a Virtual Sub-account(For Master Account), GET Query Sub-account List (For Master Account), GET Sub-account Spot Asset Transfer History (For Master Account), GET Sub-account Futures Asset Transfer History (For Master Account), POST Sub-account Futures Asset Transfer (For Master Account), GET Sub-account Assets (For Master Account), GET Sub-account Spot Assets Summary (For Master Account), GET Sub-account Spot Assets Summary (For Master Account), GET Sub-account Deposit History (For Master Account), GET Sub-account's Status on Margin/Futures (For Master Account), POST Enable Margin for Sub-account (For Master Account), GET Detail on Sub-account's Margin Account (For Master Account), GET Summary of Sub-account's Margin Account (For Master Account), POST Enable Futures for Sub-account (For Master Account), GET Detail on Sub-account's Futures Account (For Master Account), GET Summary of Sub-account's Futures Account (For Master Account), GET Futures Position-Risk of Sub-account (For Master Account), POST Transfer for Sub-account (For Master Account), POST Margin Transfer for Sub-account (For Master Account), POST Transfer to Sub-account of Same Master (For Sub-account), POST Transfer to Master (For Sub-account), GET Sub-account Transfer History (For Sub-account), GET Universal Transfer History (For Master Account), POST Universal Transfer (For Master Account), GET Detail on Sub-account's Futures Account V2 (For Master Account), GET Summary of Sub-account's Futures Account V2 (For Master Account), GET Futures Position-Risk of Sub-account V2 (For Master Account), POST Enable Leverage Token for Sub-account (For Master Account), POST Deposit assets into the managed sub-account(For Investor Master Account), GET Managed sub-account asset details(For Investor Master Account), POST Withdrawl assets from the managed sub-account(For Investor Master Account), GET Managed sub-account snapshot (For Investor Master Account), GET Query Managed Sub Account Transfer Log (For Investor Master Account), GET Query Managed Sub Account Transfer Log (For Trading Team Master Account), GET Query Managed Sub-account Futures Asset Details (For Investor Master Account), GET Query Managed Sub-account Margin Asset Details (For Investor Master Account), GET Query Managed Sub-account List (For Investor), GET Get Managed Sub-account Deposit Address (For Investor Master Account), GET Query Managed Sub Account Transfer Log (For Trading Team Sub Account)(USER_DATA), GET Get IP Restriction for a Sub-account API Key (For Master Account), DELETE Delete IP List for a Sub-account API Key (For Master Account), GET Query Sub-account Transaction Statistics (For Master Account), POST Enable Options for Sub-account (For Master Account)(USER_DATA), POST Update IP Restriction for Sub-Account API key (For Master Account), GET Query Sub-account Assets (For Master Account) |
| Stream | POST Create a ListenKey (USER_STREAM), PUT Ping/Keep-alive a ListenKey (USER_STREAM), DELETE Close a ListenKey (USER_STREAM) |
| Margin Stream | POST Create a ListenKey (USER_STREAM), PUT Ping/Keep-alive a ListenKey (USER_STREAM), DELETE Close a ListenKey (USER_STREAM) |
| Isolated Margin Stream | POST Generate a Listen Key (USER_STREAM), PUT Ping/Keep-alive a Listen Key (USER_STREAM), DELETE Close a ListenKey (USER_STREAM) |
| Savings | GET Get Fixed/Activity Project List(USER_DATA), POST Purchase Fixed/Activity Project (USER_DATA), GET Get Fixed/Activity Project Position (USER_DATA), POST Change Fixed/Activity Position to Daily Position (USER_DATA) |
| Mining | GET Acquiring Algorithm (MARKET_DATA), GET Acquiring CoinName (MARKET_DATA), GET Request for Detail Miner List (USER_DATA), GET Request for Miner List (USER_DATA), GET Earnings List (USER_DATA), GET Extra Bonus List (USER_DATA), GET Hashrate Resale List (USER_DATA), GET Hashrate Resale Details (USER_DATA), POST Hashrate Resale Request (USER_DATA), POST Cancel Hashrate Resale configuration (USER_DATA), GET Statistic List (USER_DATA), GET Account List (USER_DATA), GET Mining Account Earning (USER_DATA) |
| Futures | POST New Future Account Transfer (USER_DATA), GET Get Future Account Transaction History List (USER_DATA), GET Get Future TickLevel Orderbook Historical Data Download Link (USER_DATA) |
| Futures Algo | POST Volume Participation(VP) New Order (TRADE), POST Time-Weighted Average Price(Twap) New Order (TRADE), DELETE Cancel Algo Order(TRADE), GET Query Current Algo Open Orders (USER_DATA), GET Query Historical Algo Orders (USER_DATA), GET Query Sub Orders (USER_DATA) |
| Spot Algo | POST Time-Weighted Average Price (Twap) New Order, DELETE Cancel Algo Order, GET Query Current Algo Open Orders, GET Query Historical Algo Orders, GET Query Sub Orders |
| Portfolio Margin | GET Portfolio Margin Account (USER_DATA), GET Portfolio Margin Collateral Rate (MARKET_DATA), GET Portfolio Margin Pro Tiered Collateral Rate(USER_DATA), GET Portfolio Margin Bankruptcy Loan Amount (USER_DATA), POST Portfolio Margin Bankruptcy Loan Repay (USER_DATA), GET Query Classic Portfolio Margin Negative Balance Interest History (USER_DATA), GET Query Portfolio Margin Asset Index Price (MARKET_DATA), POST Fund Auto-collection (USER_DATA), POST BNB Transfer (USER_DATA), POST Change Auto-repay-futures Status (USER_DATA), GET Get Auto-repay-futures Status (USER_DATA), POST Repay futures Negative Balance (USER_DATA), GET Get Portfolio Margin Asset Leverage (USER_DATA), POST Fund Collection by Asset (USER_DATA) |
| BLVT | GET BLVT Info (MARKET_DATA), POST Subscribe BLVT (USER_DATA), GET Query Subscription Record (USER_DATA), POST Redeem BLVT (USER_DATA), GET Redemption Record (USER_DATA), GET BLVT User Limit Info (USER_DATA) |
| Fiat | GET Fiat Deposit/Withdraw History (USER_DATA), GET Fiat Payments History (USER_DATA) |
| C 2 C | GET Get C2C Trade History (USER_DATA) |
| VIP Loans | GET Get VIP Loan Ongoing Orders (USER_DATA), POST VIP Loan Repay (TRADE), GET Get VIP Loan Repayment History (USER_DATA), GET Check Locked Value of VIP Collateral Account (USER_DATA), POST VIP Loan Borrow, GET Get Loanable Assets Data, GET Get Collateral Asset Data (USER_DATA), GET Query Application Status (USER_DATA), GET Get Borrow Interest Rate (USER_DATA), POST VIP Loan Renew |
| Crypto Loans | GET Get Crypto Loans Income History (USER_DATA), POST Crypto Loan Borrow (TRADE), GET Get Crypto Loans Borrow History (USER_DATA), GET Get Loan Ongoing Orders (USER_DATA), POST Crypto Loan Repay (TRADE), GET Get Loan Repayment History (USER_DATA), POST Crypto Loan Adjust LTV (TRADE), GET Get Loan LTV Adjustment History (USER_DATA), GET Get Loanable Assets Data (USER_DATA), GET Get Collateral Assets Data (USER_DATA), GET Check Collateral Repay Rate (USER_DATA), POST Crypto Loan Customize Margin Call (TRADE), POST Borrow - Flexible Loan Borrow (TRADE), GET Borrow - Get Flexible Loan Ongoing Orders (USER_DATA), GET Borrow - Get Flexible Loan Borrow History (USER_DATA), POST Repay - Flexible Loan Repay (TRADE), GET Repay - Get Flexible Loan Repayment History (USER_DATA), POST Adjust LTV - Flexible Loan Adjust LTV (TRADE), GET Adjust LTV - Get Flexible Loan LTV Adjustment History (USER_DATA), GET Get Flexible Loan Assets Data (USER_DATA), GET Get Flexible Loan Collateral Assets Data (USER_DATA) |
| Pay | GET Get Pay Trade History (USER_DATA) |
| Convert | GET List All Convert Pairs, GET Query order quantity precision per asset (USER_DATA), POST Send quote request (USER_DATA), POST Accept Quote (TRADE), GET Order status (USER_DATA), POST Place limit order (USER_DATA), POST Cancel limit order (USER_DATA), GET Query limit open orders (USER_DATA), GET Get Convert Trade History (USER_DATA) |
| Rebate | GET Get Spot Rebate History Records (USER_DATA) |
| NFT | GET Get NFT Transaction History (USER_DATA), GET Get NFT Deposit History(USER_DATA), GET Get NFT Withdraw History (USER_DATA), GET Get NFT Asset (USER_DATA) |
| Gift Card | POST Create a Binance Code (USER_DATA), POST Redeem a Binance Code (USER_DATA), GET Verify a Binance Code (USER_DATA), GET Fetch RSA Public Key (USER_DATA), POST Buy a Binance Code (TRADE), GET Fetch Token Limit (USER_DATA) |
| Auto Invest | GET Get target asset list (USER_DATA), GET Get target asset ROI data (USER_DATA), GET Query all source asset and target asset (USER_DATA), GET Query source asset list (USER_DATA), POST Investment plan creation (USER_DATA), POST Investment plan adjustment, POST Change Plan Status, GET Get list of plans, GET Query holding details of the plan, GET Query subscription transaction history, GET Query Index Details(USER_DATA), GET Query Index Linked Plan Position Details(USER_DATA), POST One Time Transaction(TRADE), GET Query One-Time Transaction Status (USER_DATA), POST Index Linked Plan Redemption (TRADE), GET Index Linked Plan Redemption History (USER_DATA), GET Index Linked Plan Rebalance Details (USER_DATA) |
| Staking | POST Subscribe ETH Staking V2(TRADE), POST Redeem ETH (TRADE), GET Get ETH staking history (USER_DATA), GET Get ETH redemption history (USER_DATA), GET Get BETH rewards distribution history(USER_DATA), GET Get current ETH staking quota (USER_DATA), GET Get WBETH Rate History (USER_DATA), GET ETH Staking account V2(USER_DATA), POST Wrap BETH(TRADE), GET Get WBETH wrap history (USER_DATA), GET Get WBETH unwrap history (USER_DATA), GET Get WBETH rewards history(USER_DATA) |
| Copy Trading | GET Get Futures Lead Trader Status(TRADE), GET Get Futures Lead Trading Symbol Whitelist(USER_DATA) |
| Simple Earn | GET Get Simple Earn Flexible Product List (USER_DATA), GET Get Simple Earn Locked Product List (USER_DATA), POST Subscribe Flexible Product (TRADE), POST Subscribe Locked Product (TRADE), POST Redeem Flexible Product (TRADE), POST Redeem Locked Product (TRADE), GET Get Flexible Product Position (USER_DATA), GET Get Locked Product Position (USER_DATA), GET Simple Account (USER_DATA), GET Get Flexible Subscription Record (USER_DATA), GET Get Locked Subscription Record (USER_DATA), GET Get Flexible Redemption Record (USER_DATA), GET Get Locked Redemption Record (USER_DATA), GET Get Flexible Rewards History (USER_DATA), GET Get Locked Rewards History (USER_DATA), POST Set Flexible Auto Subscribe (USER_DATA), POST Set Locked Auto Subscribe (USER_DATA), GET Get Flexible Personal Left Quota (USER_DATA), GET Get Locked Personal Left Quota (USER_DATA), GET Get Flexible Subscription Preview (USER_DATA), GET Get Locked Subscription Preview (USER_DATA), GET Set Locked Product Redeem Option(USER_DATA), GET Get Rate History (USER_DATA), GET Get Collateral Record (USER_DATA) |
| Dual Investment | GET Get Dual Investment product list(USER_DATA), POST Subscribe Dual Investment products(USER_DATA), GET Get Dual Investment positions(USER_DATA), GET Check Dual Investment accounts(USER_DATA), POST Change Auto-Compound status(USER_DATA) |

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
