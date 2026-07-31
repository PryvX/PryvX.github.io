# Creating a workspace

Programmatic equivalent of [Creating a Workspace](/how-to-guide/creating-a-workspace) in the web app.

## Request

```http
POST /v1/workspaces
Authorization: Bearer eyJhbGciOi...
Content-Type: application/json

{
  "name": "telecom-bank-fraud-consortium",
  "deployment_model": "federated",
  "region": "eu-north-1",
  "invited_participants": ["partner-bank.example.com", "partner-telecom.example.com"]
}
```

## Response

```json
{
  "workspace_id": "ws_2f8a1c",
  "status": "pending_participants",
  "created_at": "2026-07-30T09:12:00Z"
}
```

## Notes

- `deployment_model` accepts `centralized`, `federated`, or `hybrid` — see [Deployment Models](/overview/deployment-models).
- Invited participants must accept before the workspace transitions to `active`.
