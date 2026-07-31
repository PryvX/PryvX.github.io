# Retrieving connection status

Check the health of a registered data connection.

## Request

```http
GET /v1/workspaces/ws_2f8a1c/data-connections/conn_9b31de
Authorization: Bearer eyJhbGciOi...
```

## Response

```json
{
  "connection_id": "conn_9b31de",
  "status": "active",
  "last_health_check": "2026-07-30T08:55:00Z",
  "reachable": true,
  "credentials_valid": true
}
```

## Notes

- `status` transitions from `pending` to `active` once the first health check succeeds, matching the flow in [Connecting a Data Source](/how-to-guide/connecting-a-data-source).
- Poll this endpoint, or configure a webhook, to detect a connection dropping to `unhealthy` before it affects a scheduled computation.
