import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class BinanceApi implements ICredentialType {
        name = 'N8nDevBinanceApi';

        displayName = 'Binance API';

        icon: Icon = { light: 'file:../nodes/Binance/binance.svg', dark: 'file:../nodes/Binance/binance.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.binance.com',
                        required: true,
                        placeholder: 'https://api.binance.com',
                        description: 'The base URL of your Binance API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-MBX-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
