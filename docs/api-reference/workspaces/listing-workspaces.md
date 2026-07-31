# Listing workspaces

Retrieve every workspace the authenticated client belongs to.

## Request

```http
GET /v1/workspaces
Authorization: Bearer eyJhbGciOi...
```

## Response

```json
{
  "workspaces": [
    {
      "workspace_id": "ws_2f8a1c",
      "name": "telecom-bank-fraud-consortium",
      "status": "active",
      "deployment_model": "federated",
      "participants": 3
    }
  ]
}
```

## Notes

- Results are scoped to the authenticated client's own membership — a client can never enumerate workspaces it has not been invited to.
- Use the `status` field to filter for `pending_participants`, `active`, or `archived` workspaces client-side.
