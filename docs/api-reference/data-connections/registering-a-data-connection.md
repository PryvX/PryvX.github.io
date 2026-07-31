# Registering a data connection

Programmatic equivalent of [Connecting a Data Source](/how-to-guide/connecting-a-data-source).

## Request

```http
POST /v1/workspaces/ws_2f8a1c/data-connections
Authorization: Bearer eyJhbGciOi...
Content-Type: application/json

{
  "connector_type": "warehouse",
  "provider": "snowflake",
  "credentials_ref": "vault://prod/pryvx-readonly",
  "schema_hint": "fraud_signals.transactions"
}
```

## Response

```json
{
  "connection_id": "conn_9b31de",
  "status": "pending",
  "schema": {
    "columns": [
      { "name": "account_id", "type": "string" },
      { "name": "transaction_amount", "type": "decimal" },
      { "name": "transaction_ts", "type": "timestamp" }
    ]
  }
}
```

## Notes

- `credentials_ref` must point to a read-only, pre-scoped secret; PryvX never accepts raw credentials in the request body.
- Only column names and types are returned — no row-level data is ever included in this or any other API response.
