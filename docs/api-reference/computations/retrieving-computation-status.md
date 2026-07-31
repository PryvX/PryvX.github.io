# Retrieving computation status

Poll a submitted computation's progress through its lifecycle.

## Request

```http
GET /v1/workspaces/ws_2f8a1c/computations/comp_4e21b7
Authorization: Bearer eyJhbGciOi...
```

## Response

```json
{
  "computation_id": "comp_4e21b7",
  "status": "running",
  "stage_history": [
    { "stage": "queued", "at": "2026-07-30T09:00:00Z" },
    { "stage": "attesting", "at": "2026-07-30T09:00:04Z" },
    { "stage": "running", "at": "2026-07-30T09:00:11Z" }
  ]
}
```

## Notes

- `status` follows the stages described in [Running a Joint Analysis](/how-to-guide/running-a-joint-analysis): `queued`, `attesting`, `running`, `releasing`, `complete`, or `failed`.
- Prefer a webhook subscription over polling for latency-sensitive integrations.
