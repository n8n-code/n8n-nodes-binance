import type { INodeProperties } from 'n8n-workflow';

export const isolatedMarginStreamDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Isolated Margin Stream"
					]
				}
			},
			"options": [
				{
					"name": "POST Sapi V 1 User Data Stream Isolated",
					"value": "POST Sapi V 1 User Data Stream Isolated",
					"action": "Generate a Listen Key (USER_STREAM)",
					"description": "Start a new user data stream.\nThe stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.\n\nWeight: 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/userDataStream/isolated"
						}
					}
				},
				{
					"name": "PUT Sapi V 1 User Data Stream Isolated",
					"value": "PUT Sapi V 1 User Data Stream Isolated",
					"action": "Ping/Keep-alive a Listen Key (USER_STREAM)",
					"description": "Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.\n\nWeight: 1",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sapi/v1/userDataStream/isolated"
						}
					}
				},
				{
					"name": "DELETE Sapi V 1 User Data Stream Isolated",
					"value": "DELETE Sapi V 1 User Data Stream Isolated",
					"action": "Close a ListenKey (USER_STREAM)",
					"description": "Close out a user data stream.\n\nWeight: 1",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sapi/v1/userDataStream/isolated"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /sapi/v1/userDataStream/isolated",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Isolated Margin Stream"
					],
					"operation": [
						"POST Sapi V 1 User Data Stream Isolated"
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
						"Isolated Margin Stream"
					],
					"operation": [
						"POST Sapi V 1 User Data Stream Isolated"
					]
				}
			}
		},
		{
			"displayName": "PUT /sapi/v1/userDataStream/isolated",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Isolated Margin Stream"
					],
					"operation": [
						"PUT Sapi V 1 User Data Stream Isolated"
					]
				}
			}
		},
		{
			"displayName": "Listen Key",
			"name": "listenKey",
			"description": "User websocket listen key",
			"default": "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listenKey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Isolated Margin Stream"
					],
					"operation": [
						"PUT Sapi V 1 User Data Stream Isolated"
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
						"Isolated Margin Stream"
					],
					"operation": [
						"PUT Sapi V 1 User Data Stream Isolated"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sapi/v1/userDataStream/isolated",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Isolated Margin Stream"
					],
					"operation": [
						"DELETE Sapi V 1 User Data Stream Isolated"
					]
				}
			}
		},
		{
			"displayName": "Listen Key",
			"name": "listenKey",
			"description": "User websocket listen key",
			"default": "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listenKey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Isolated Margin Stream"
					],
					"operation": [
						"DELETE Sapi V 1 User Data Stream Isolated"
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
						"Isolated Margin Stream"
					],
					"operation": [
						"DELETE Sapi V 1 User Data Stream Isolated"
					]
				}
			}
		},
];
