import type { INodeProperties } from 'n8n-workflow';

export const streamDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stream"
					]
				}
			},
			"options": [
				{
					"name": "POST Api V 3 User Data Stream",
					"value": "POST Api V 3 User Data Stream",
					"action": "Create a ListenKey (USER_STREAM)",
					"description": "Start a new user data stream.\nThe stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.\n\nWeight: 2",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v3/userDataStream"
						}
					}
				},
				{
					"name": "PUT Api V 3 User Data Stream",
					"value": "PUT Api V 3 User Data Stream",
					"action": "Ping/Keep-alive a ListenKey (USER_STREAM)",
					"description": "Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.\n\nWeight: 2",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v3/userDataStream"
						}
					}
				},
				{
					"name": "DELETE Api V 3 User Data Stream",
					"value": "DELETE Api V 3 User Data Stream",
					"action": "Close a ListenKey (USER_STREAM)",
					"description": "Close out a user data stream.\n\nWeight: 2",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v3/userDataStream"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v3/userDataStream",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stream"
					],
					"operation": [
						"POST Api V 3 User Data Stream"
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
						"Stream"
					],
					"operation": [
						"POST Api V 3 User Data Stream"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v3/userDataStream",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stream"
					],
					"operation": [
						"PUT Api V 3 User Data Stream"
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
						"Stream"
					],
					"operation": [
						"PUT Api V 3 User Data Stream"
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
						"Stream"
					],
					"operation": [
						"PUT Api V 3 User Data Stream"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v3/userDataStream",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stream"
					],
					"operation": [
						"DELETE Api V 3 User Data Stream"
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
						"Stream"
					],
					"operation": [
						"DELETE Api V 3 User Data Stream"
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
						"Stream"
					],
					"operation": [
						"DELETE Api V 3 User Data Stream"
					]
				}
			}
		},
];
