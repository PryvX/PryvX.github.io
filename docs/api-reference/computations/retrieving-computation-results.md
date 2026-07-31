# Retrieving computation results

Fetch the released output and attestation reference for a completed computation.

## Request

```http
GET /v1/workspaces/ws_2f8a1c/computations/comp_4e21b7/result
Authorization: Bearer eyJhbGciOi...
```

## Response

```json
{
  "computation_id": "comp_4e21b7",
  "status": "complete",
  "output": {
    "flagged_accounts": 12,
    "risk_threshold": 0.8
  },
  "attestation_log_url": "https://api.pryvx.com/v1/workspaces/ws_2f8a1c/computations/comp_4e21b7/attestation"
}
```

## Notes

- `output` shape matches exactly what the computation's contract declared — see [Reviewing Results](/how-to-guide/reviewing-results).
- Fetch `attestation_log_url` separately to independently verify the run — see [Verifying Computation Integrity](/how-to-guide/reviewing-results/verifying-computation-integrity).
- This endpoint returns `409 not_ready` if `status` is not yet `complete`.
