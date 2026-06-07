import type { INodeProperties } from 'n8n-workflow';

export const marginStreamDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Margin Stream"
					]
				}
			},
			"options": [
				{
					"name": "POST Sapi V 1 User Data Stream",
					"value": "POST Sapi V 1 User Data Stream",
					"action": "Create a ListenKey (USER_STREAM)",
					"description": "Start a new user data stream.\nThe stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.\n\nWeight: 1",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sapi/v1/userDataStream"
						}
					}
				},
				{
					"name": "PUT Sapi V 1 User Data Stream",
					"value": "PUT Sapi V 1 User Data Stream",
					"action": "Ping/Keep-alive a ListenKey (USER_STREAM)",
					"description": "Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.\n\nWeight: 1",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sapi/v1/userDataStream"
						}
					}
				},
				{
					"name": "DELETE Sapi V 1 User Data Stream",
					"value": "DELETE Sapi V 1 User Data Stream",
					"action": "Close a ListenKey (USER_STREAM)",
					"description": "Close out a user data stream.\n\nWeight: 1",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sapi/v1/userDataStream"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /sapi/v1/userDataStream",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin Stream"
					],
					"operation": [
						"POST Sapi V 1 User Data Stream"
					]
				}
			}
		},
		{
			"displayName": "PUT /sapi/v1/userDataStream",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin Stream"
					],
					"operation": [
						"PUT Sapi V 1 User Data Stream"
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
						"Margin Stream"
					],
					"operation": [
						"PUT Sapi V 1 User Data Stream"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sapi/v1/userDataStream",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Margin Stream"
					],
					"operation": [
						"DELETE Sapi V 1 User Data Stream"
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
						"Margin Stream"
					],
					"operation": [
						"DELETE Sapi V 1 User Data Stream"
					]
				}
			}
		},
];
