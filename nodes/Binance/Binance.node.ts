import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { marketDescription } from './resources/market';
import { tradeDescription } from './resources/trade';
import { marginDescription } from './resources/margin';
import { walletDescription } from './resources/wallet';
import { subAccountDescription } from './resources/sub-account';
import { streamDescription } from './resources/stream';
import { marginStreamDescription } from './resources/margin-stream';
import { isolatedMarginStreamDescription } from './resources/isolated-margin-stream';
import { savingsDescription } from './resources/savings';
import { miningDescription } from './resources/mining';
import { futuresDescription } from './resources/futures';
import { futuresAlgoDescription } from './resources/futures-algo';
import { spotAlgoDescription } from './resources/spot-algo';
import { portfolioMarginDescription } from './resources/portfolio-margin';
import { blvtDescription } from './resources/blvt';
import { fiatDescription } from './resources/fiat';
import { c2CDescription } from './resources/c-2-c';
import { vipLoansDescription } from './resources/vip-loans';
import { cryptoLoansDescription } from './resources/crypto-loans';
import { payDescription } from './resources/pay';
import { convertDescription } from './resources/convert';
import { rebateDescription } from './resources/rebate';
import { nftDescription } from './resources/nft';
import { giftCardDescription } from './resources/gift-card';
import { autoInvestDescription } from './resources/auto-invest';
import { stakingDescription } from './resources/staking';
import { copyTradingDescription } from './resources/copy-trading';
import { simpleEarnDescription } from './resources/simple-earn';
import { dualInvestmentDescription } from './resources/dual-investment';

export class Binance implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Binance',
                name: 'N8nDevBinance',
                icon: { light: 'file:./binance.svg', dark: 'file:./binance.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Binance global exchange: spot, futures, margin trading; deep liquidity, advanced orders.',
                defaults: { name: 'Binance' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevBinanceApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Market",
					"value": "Market",
					"description": "Market Data"
				},
				{
					"name": "Trade",
					"value": "Trade",
					"description": "Account/Trade"
				},
				{
					"name": "Margin",
					"value": "Margin",
					"description": "Margin Account/Trade"
				},
				{
					"name": "Wallet",
					"value": "Wallet",
					"description": "Wallet Endpoints"
				},
				{
					"name": "Sub Account",
					"value": "Sub Account",
					"description": "Sub-account Endpoints"
				},
				{
					"name": "Stream",
					"value": "Stream",
					"description": "User Data Stream"
				},
				{
					"name": "Margin Stream",
					"value": "Margin Stream",
					"description": "Margin User Data Stream"
				},
				{
					"name": "Isolated Margin Stream",
					"value": "Isolated Margin Stream",
					"description": "Isolated User Data Stream"
				},
				{
					"name": "Savings",
					"value": "Savings",
					"description": "Savings Endpoints"
				},
				{
					"name": "Mining",
					"value": "Mining",
					"description": "Mining Endpoints"
				},
				{
					"name": "Futures",
					"value": "Futures",
					"description": "Futures Endpoints"
				},
				{
					"name": "Futures Algo",
					"value": "Futures Algo",
					"description": "Futures Algo Endpoints"
				},
				{
					"name": "Spot Algo",
					"value": "Spot Algo",
					"description": "Spot Algo Endpoints"
				},
				{
					"name": "Portfolio Margin",
					"value": "Portfolio Margin",
					"description": "Portfolio Margin Endpoints"
				},
				{
					"name": "BLVT",
					"value": "BLVT",
					"description": "Binance Leveraged Tokens Endpoints"
				},
				{
					"name": "Fiat",
					"value": "Fiat",
					"description": "Fiat Endpoints"
				},
				{
					"name": "C 2 C",
					"value": "C 2 C",
					"description": "Consumer-To-Consumer Endpoints"
				},
				{
					"name": "VIP Loans",
					"value": "VIP Loans",
					"description": "VIP Loans Endpoints"
				},
				{
					"name": "Crypto Loans",
					"value": "Crypto Loans",
					"description": "Crypto Loans Endpoints"
				},
				{
					"name": "Pay",
					"value": "Pay",
					"description": "Pay Endpoints"
				},
				{
					"name": "Convert",
					"value": "Convert",
					"description": "Convert Endpoints"
				},
				{
					"name": "Rebate",
					"value": "Rebate",
					"description": "Rebate Endpoints"
				},
				{
					"name": "NFT",
					"value": "NFT",
					"description": "NFT Endpoints"
				},
				{
					"name": "Gift Card",
					"value": "Gift Card",
					"description": "Gift Card Endpoints"
				},
				{
					"name": "Auto Invest",
					"value": "Auto Invest",
					"description": "Auto-Invest Endpoints"
				},
				{
					"name": "Staking",
					"value": "Staking",
					"description": ""
				},
				{
					"name": "Copy Trading",
					"value": "Copy Trading",
					"description": "Copy Trading Endpoints"
				},
				{
					"name": "Simple Earn",
					"value": "Simple Earn",
					"description": "Simple Earn Endpoints"
				},
				{
					"name": "Dual Investment",
					"value": "Dual Investment",
					"description": ""
				}
			],
			"default": ""
		},
		...marketDescription,
		...tradeDescription,
		...marginDescription,
		...walletDescription,
		...subAccountDescription,
		...streamDescription,
		...marginStreamDescription,
		...isolatedMarginStreamDescription,
		...savingsDescription,
		...miningDescription,
		...futuresDescription,
		...futuresAlgoDescription,
		...spotAlgoDescription,
		...portfolioMarginDescription,
		...blvtDescription,
		...fiatDescription,
		...c2CDescription,
		...vipLoansDescription,
		...cryptoLoansDescription,
		...payDescription,
		...convertDescription,
		...rebateDescription,
		...nftDescription,
		...giftCardDescription,
		...autoInvestDescription,
		...stakingDescription,
		...copyTradingDescription,
		...simpleEarnDescription,
		...dualInvestmentDescription
                ],
        };
}
