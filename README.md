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

<details>
<summary><b>Market</b> (15 operations)</summary>

- Get Test Connectivity
- Get Check Server Time
- Get Exchange Information
- Get Order Book
- Get Recent Trades List
- Get Old Trade Lookup
- Get Compressed Aggregate Trades List
- Get Kline Candlestick Data
- Get UIKlines
- Get Current Average Price
- Get 24hr Ticker Price Change Statistics
- Get Trading Day Ticker
- Get Symbol Price Ticker
- Get Symbol Order Book Ticker
- Get Rolling window price change statistics

</details>

<details>
<summary><b>Trade</b> (23 operations)</summary>

- Post Test New Order TRADE
- Get Query Order USER DATA
- Post New Order TRADE
- Delete Cancel Order TRADE
- Post Cancel an Existing Order and Send a New Order Trade
- Get Current Open Orders USER DATA
- Delete Cancel all Open Orders on a Symbol TRADE
- Get All Orders USER DATA
- Post New Order list OCO TRADE
- Post New Order List OTO TRADE
- Post New Order List OTOCO TRADE
- Get Query OCO USER DATA
- Delete Cancel OCO TRADE
- Get Query all OCO USER DATA
- Get Query Open OCO USER DATA
- Post New order using SOR TRADE
- Post Test new order using SOR TRADE
- Get Account Information USER DATA
- Get Account Trade List USER DATA
- Get Query Current Order Count Usage TRADE
- Get Query Prevented Matches
- Get Query Allocations USER DATA
- Get Query Commission Rates USER DATA

</details>

<details>
<summary><b>Margin</b> (48 operations)</summary>

- Post Margin account borrow repay MARGIN
- Get Query borrow repay records in Margin account USER DATA
- Get Cross Margin Transfer History USER DATA
- Get All Margin Assets MARKET DATA
- Get All Cross Margin Pairs MARKET DATA
- Get Query Margin PriceIndex MARKET DATA
- Get Query Margin Account s Order USER DATA
- Post Margin Account New Order TRADE
- Delete Margin Account Cancel Order TRADE
- Get Interest History USER DATA
- Get Force Liquidation Record USER DATA
- Get Query Cross Margin Account Details USER DATA
- Get Query Margin Account s Open Orders USER DATA
- Delete Margin Account Cancel all Open Orders on a Symbol TRADE
- Get Query Margin Account s All Orders USER DATA
- Post Margin Account New OCO TRADE
- Get Query Margin Account s OCO USER DATA
- Delete Margin Account Cancel OCO TRADE
- Get Query Margin Account s all OCO USER DATA
- Get Query Margin Account s Open OCO USER DATA
- Get Query Margin Account s Trade List USER DATA
- Get Query Max Borrow USER DATA
- Get Query Max Transfer Out Amount USER DATA
- Get Summary of Margin account USER DATA
- Get Query Isolated Margin Account Info USER DATA
- Delete Disable Isolated Margin Account TRADE
- Post Enable Isolated Margin Account TRADE
- Get Query Enabled Isolated Margin Account Limit USER DATA
- Get All Isolated Margin Symbol USER DATA
- Post Toggle BNB Burn On Spot Trade And Margin Interest USER DATA
- Get BNB Burn Status USER DATA
- Get Margin Interest Rate History USER DATA
- Get Query Cross Margin Fee Data USER DATA
- Get Query Isolated Margin Fee Data USER DATA
- Get Query Isolated Margin Tier Data USER DATA
- Get Query Current Margin Order Count Usage TRADE
- Get Cross margin collateral ratio MARKET DATA
- Get Small Liability Exchange Coin List USER DATA
- Get Small Liability Exchange History USER DATA
- Get a future hourly interest rate USER DATA
- Get cross or isolated margin capital flow USER DATA
- Get tokens or symbols delist schedule for cross margin and isolated margin MARKET DATA
- Get Query Margin Available Inventory USER DATA
- Post Margin manual liquidation MARGIN
- Post Margin Account New OTO TRADE
- Post Margin Account New OTOCO TRADE
- Post Adjust cross margin max leverage USER DATA
- Get Query Liability Coin Leverage Bracket in Cross Margin Pro Mode MARKET DATA

</details>

<details>
<summary><b>Wallet</b> (34 operations)</summary>

- Get System Status System
- Get All Coins Information USER DATA
- Get Daily Account Snapshot USER DATA
- Post Disable Fast Withdraw Switch USER DATA
- Post Enable Fast Withdraw Switch USER DATA
- Post Withdraw USER DATA
- Get Deposit History supporting network USER DATA
- Get Withdraw History supporting network USER DATA
- Get Deposit Address supporting network USER DATA
- Get Account Status USER DATA
- Get Account API Trading Status USER DATA
- Get DustLog USER DATA
- Post Get Assets That Can Be Converted Into BNB USER DATA
- Post Dust Transfer USER DATA
- Get Asset Dividend Record USER DATA
- Get Asset Detail USER DATA
- Get Trade Fee USER DATA
- Get Query User Universal Transfer History USER DATA
- Post User Universal Transfer USER DATA
- Post Funding Wallet USER DATA
- Post User Asset USER DATA
- Post Convert Transfer USER DATA
- Get Query Convert Transfer USER DATA
- Get Cloud Mining payment and refund history USER DATA
- Get API Key Permission USER DATA
- Get Query auto converting stable coins USER DATA
- Post Switch on off BUSD and stable coins conversion USER DATA USER DATA
- Post One click arrival deposit apply USER DATA
- Get Query User Wallet Balance USER DATA
- Get Query User Delegation History For Master Account USER DATA
- Get Fetch deposit address list with network USER DATA
- Get symbols delist schedule for spot MARKET DATA
- Get Fetch withdraw address list USER DATA
- Get Account info USER DATA

</details>

<details>
<summary><b>Sub Account</b> (45 operations)</summary>

- Post Create a Virtual Sub account For Master Account
- Get Query Sub account List For Master Account
- Get Sub account Spot Asset Transfer History For Master Account
- Get Sub account Futures Asset Transfer History For Master Account
- Post Sub account Futures Asset Transfer For Master Account
- Get Sub account Assets For Master Account
- Get Sub account Spot Assets Summary For Master Account
- Get Sub account Spot Assets Summary For Master Account
- Get Sub account Deposit History For Master Account
- Get Sub account s Status on Margin Futures For Master Account
- Post Enable Margin for Sub account For Master Account
- Get Detail on Sub account s Margin Account For Master Account
- Get Summary of Sub account s Margin Account For Master Account
- Post Enable Futures for Sub account For Master Account
- Get Detail on Sub account s Futures Account For Master Account
- Get Summary of Sub account s Futures Account For Master Account
- Get Futures Position Risk of Sub account For Master Account
- Post Transfer for Sub account For Master Account
- Post Margin Transfer for Sub account For Master Account
- Post Transfer to Sub account of Same Master For Sub account
- Post Transfer to Master For Sub account
- Get Sub account Transfer History For Sub account
- Get Universal Transfer History For Master Account
- Post Universal Transfer For Master Account
- Get Detail on Sub account s Futures Account V2 For Master Account
- Get Summary of Sub account s Futures Account V2 For Master Account
- Get Futures Position Risk of Sub account V2 For Master Account
- Post Enable Leverage Token for Sub account For Master Account
- Post Deposit assets into the managed sub account For Investor Master Account
- Get Managed sub account asset details For Investor Master Account
- Post Withdrawl assets from the managed sub account For Investor Master Account
- Get Managed sub account snapshot For Investor Master Account
- Get Query Managed Sub Account Transfer Log For Investor Master Account
- Get Query Managed Sub Account Transfer Log For Trading Team Master Account
- Get Query Managed Sub account Futures Asset Details For Investor Master Account
- Get Query Managed Sub account Margin Asset Details For Investor Master Account
- Get Query Managed Sub account List For Investor
- Get Managed Sub account Deposit Address For Investor Master Account
- Get Query Managed Sub Account Transfer Log For Trading Team Sub Account USER DATA
- Get IP Restriction for a Sub account API Key For Master Account
- Delete IP List for a Sub account API Key For Master Account
- Get Query Sub account Transaction Statistics For Master Account
- Post Enable Options for Sub account For Master Account USER DATA
- Post Update IP Restriction for Sub Account API key For Master Account
- Get Query Sub account Assets For Master Account

</details>

<details>
<summary><b>Stream</b> (3 operations)</summary>

- Post Create a ListenKey USER STREAM
- Put Ping Keep alive a ListenKey USER STREAM
- Delete Close a ListenKey USER STREAM

</details>

<details>
<summary><b>Margin Stream</b> (3 operations)</summary>

- Post Create a ListenKey USER STREAM
- Put Ping Keep alive a ListenKey USER STREAM
- Delete Close a ListenKey USER STREAM

</details>

<details>
<summary><b>Isolated Margin Stream</b> (3 operations)</summary>

- Post Generate a Listen Key USER STREAM
- Put Ping Keep alive a Listen Key USER STREAM
- Delete Close a ListenKey USER STREAM

</details>

<details>
<summary><b>Savings</b> (4 operations)</summary>

- Get Fixed Activity Project List USER DATA
- Post Purchase Fixed Activity Project USER DATA
- Get Fixed Activity Project Position USER DATA
- Post Change Fixed Activity Position to Daily Position USER DATA

</details>

<details>
<summary><b>Mining</b> (13 operations)</summary>

- Get Acquiring Algorithm MARKET DATA
- Get Acquiring CoinName MARKET DATA
- Get Request for Detail Miner List USER DATA
- Get Request for Miner List USER DATA
- Get Earnings List USER DATA
- Get Extra Bonus List USER DATA
- Get Hashrate Resale List USER DATA
- Get Hashrate Resale Details USER DATA
- Post Hashrate Resale Request USER DATA
- Post Cancel Hashrate Resale configuration USER DATA
- Get Statistic List USER DATA
- Get Account List USER DATA
- Get Mining Account Earning USER DATA

</details>

<details>
<summary><b>Futures</b> (3 operations)</summary>

- Post New Future Account Transfer USER DATA
- Get Future Account Transaction History List USER DATA
- Get Future TickLevel Orderbook Historical Data Download Link USER DATA

</details>

<details>
<summary><b>Futures Algo</b> (6 operations)</summary>

- Post Volume Participation VP New Order TRADE
- Post Time Weighted Average Price Twap New Order TRADE
- Delete Cancel Algo Order TRADE
- Get Query Current Algo Open Orders USER DATA
- Get Query Historical Algo Orders USER DATA
- Get Query Sub Orders USER DATA

</details>

<details>
<summary><b>Spot Algo</b> (5 operations)</summary>

- Post Time Weighted Average Price Twap New Order
- Delete Cancel Algo Order
- Get Query Current Algo Open Orders
- Get Query Historical Algo Orders
- Get Query Sub Orders

</details>

<details>
<summary><b>Portfolio Margin</b> (14 operations)</summary>

- Get Portfolio Margin Account USER DATA
- Get Portfolio Margin Collateral Rate MARKET DATA
- Get Portfolio Margin Pro Tiered Collateral Rate USER DATA
- Get Portfolio Margin Bankruptcy Loan Amount USER DATA
- Post Portfolio Margin Bankruptcy Loan Repay USER DATA
- Get Query Classic Portfolio Margin Negative Balance Interest History USER DATA
- Get Query Portfolio Margin Asset Index Price MARKET DATA
- Post Fund Auto collection USER DATA
- Post BNB Transfer USER DATA
- Post Change Auto repay futures Status USER DATA
- Get Auto repay futures Status USER DATA
- Post Repay futures Negative Balance USER DATA
- Get Portfolio Margin Asset Leverage USER DATA
- Post Fund Collection by Asset USER DATA

</details>

<details>
<summary><b>BLVT</b> (6 operations)</summary>

- Get BLVT Info MARKET DATA
- Post Subscribe BLVT USER DATA
- Get Query Subscription Record USER DATA
- Post Redeem BLVT USER DATA
- Get Redemption Record USER DATA
- Get BLVT User Limit Info USER DATA

</details>

<details>
<summary><b>Fiat</b> (2 operations)</summary>

- Get Fiat Deposit Withdraw History USER DATA
- Get Fiat Payments History USER DATA

</details>

<details>
<summary><b>C 2 C</b> (1 operations)</summary>

- Get C2C Trade History USER DATA

</details>

<details>
<summary><b>VIP Loans</b> (10 operations)</summary>

- Get VIP Loan Ongoing Orders USER DATA
- Post VIP Loan Repay TRADE
- Get VIP Loan Repayment History USER DATA
- Get Check Locked Value of VIP Collateral Account USER DATA
- Post VIP Loan Borrow
- Get Loanable Assets Data
- Get Collateral Asset Data USER DATA
- Get Query Application Status USER DATA
- Get Borrow Interest Rate USER DATA
- Post VIP Loan Renew

</details>

<details>
<summary><b>Crypto Loans</b> (21 operations)</summary>

- Get Crypto Loans Income History USER DATA
- Post Crypto Loan Borrow TRADE
- Get Crypto Loans Borrow History USER DATA
- Get Loan Ongoing Orders USER DATA
- Post Crypto Loan Repay TRADE
- Get Loan Repayment History USER DATA
- Post Crypto Loan Adjust LTV TRADE
- Get Loan LTV Adjustment History USER DATA
- Get Loanable Assets Data USER DATA
- Get Collateral Assets Data USER DATA
- Get Check Collateral Repay Rate USER DATA
- Post Crypto Loan Customize Margin Call TRADE
- Post Borrow Flexible Loan Borrow TRADE
- Get Borrow Get Flexible Loan Ongoing Orders USER DATA
- Get Borrow Get Flexible Loan Borrow History USER DATA
- Post Repay Flexible Loan Repay TRADE
- Get Repay Get Flexible Loan Repayment History USER DATA
- Post Adjust LTV Flexible Loan Adjust LTV TRADE
- Get Adjust LTV Get Flexible Loan LTV Adjustment History USER DATA
- Get Flexible Loan Assets Data USER DATA
- Get Flexible Loan Collateral Assets Data USER DATA

</details>

<details>
<summary><b>Pay</b> (1 operations)</summary>

- Get Pay Trade History USER DATA

</details>

<details>
<summary><b>Convert</b> (9 operations)</summary>

- Get List All Convert Pairs
- Get Query order quantity precision per asset USER DATA
- Post Send quote request USER DATA
- Post Accept Quote TRADE
- Get Order status USER DATA
- Post Place limit order USER DATA
- Post Cancel limit order USER DATA
- Get Query limit open orders USER DATA
- Get Convert Trade History USER DATA

</details>

<details>
<summary><b>Rebate</b> (1 operations)</summary>

- Get Spot Rebate History Records USER DATA

</details>

<details>
<summary><b>NFT</b> (4 operations)</summary>

- Get NFT Transaction History USER DATA
- Get NFT Deposit History USER DATA
- Get NFT Withdraw History USER DATA
- Get NFT Asset USER DATA

</details>

<details>
<summary><b>Gift Card</b> (6 operations)</summary>

- Post Create a Binance Code USER DATA
- Post Redeem a Binance Code USER DATA
- Get Verify a Binance Code USER DATA
- Get Fetch RSA Public Key USER DATA
- Post Buy a Binance Code TRADE
- Get Fetch Token Limit USER DATA

</details>

<details>
<summary><b>Auto Invest</b> (17 operations)</summary>

- Get target asset list USER DATA
- Get target asset ROI data USER DATA
- Get Query all source asset and target asset USER DATA
- Get Query source asset list USER DATA
- Post Investment plan creation USER DATA
- Post Investment plan adjustment
- Post Change Plan Status
- Get list of plans
- Get Query holding details of the plan
- Get Query subscription transaction history
- Get Query Index Details USER DATA
- Get Query Index Linked Plan Position Details USER DATA
- Post One Time Transaction TRADE
- Get Query One Time Transaction Status USER DATA
- Post Index Linked Plan Redemption TRADE
- Get Index Linked Plan Redemption History USER DATA
- Get Index Linked Plan Rebalance Details USER DATA

</details>

<details>
<summary><b>Staking</b> (12 operations)</summary>

- Post Subscribe ETH Staking V2 TRADE
- Post Redeem ETH TRADE
- Get ETH staking history USER DATA
- Get ETH redemption history USER DATA
- Get BETH rewards distribution history USER DATA
- Get current ETH staking quota USER DATA
- Get WBETH Rate History USER DATA
- Get ETH Staking account V2 USER DATA
- Post Wrap BETH TRADE
- Get WBETH wrap history USER DATA
- Get WBETH unwrap history USER DATA
- Get WBETH rewards history USER DATA

</details>

<details>
<summary><b>Copy Trading</b> (2 operations)</summary>

- Get Futures Lead Trader Status TRADE
- Get Futures Lead Trading Symbol Whitelist USER DATA

</details>

<details>
<summary><b>Simple Earn</b> (24 operations)</summary>

- Get Simple Earn Flexible Product List USER DATA
- Get Simple Earn Locked Product List USER DATA
- Post Subscribe Flexible Product TRADE
- Post Subscribe Locked Product TRADE
- Post Redeem Flexible Product TRADE
- Post Redeem Locked Product TRADE
- Get Flexible Product Position USER DATA
- Get Locked Product Position USER DATA
- Get Simple Account USER DATA
- Get Flexible Subscription Record USER DATA
- Get Locked Subscription Record USER DATA
- Get Flexible Redemption Record USER DATA
- Get Locked Redemption Record USER DATA
- Get Flexible Rewards History USER DATA
- Get Locked Rewards History USER DATA
- Post Set Flexible Auto Subscribe USER DATA
- Post Set Locked Auto Subscribe USER DATA
- Get Flexible Personal Left Quota USER DATA
- Get Locked Personal Left Quota USER DATA
- Get Flexible Subscription Preview USER DATA
- Get Locked Subscription Preview USER DATA
- Get Set Locked Product Redeem Option USER DATA
- Get Rate History USER DATA
- Get Collateral Record USER DATA

</details>

<details>
<summary><b>Dual Investment</b> (5 operations)</summary>

- Get Dual Investment product list USER DATA
- Post Subscribe Dual Investment products USER DATA
- Get Dual Investment positions USER DATA
- Get Check Dual Investment accounts USER DATA
- Post Change Auto Compound status USER DATA

</details>

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
