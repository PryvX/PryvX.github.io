# Submitting a computation

Programmatic equivalent of [Running a Joint Analysis](/how-to-guide/running-a-joint-analysis).

## Request

```http
POST /v1/workspaces/ws_2f8a1c/computations
Authorization: Bearer eyJhbGciOi...
Content-Type: application/json

{
  "contract_id": "ctr_7710aa",
  "computation_type": "mpc_match",
  "parameters": {
    "risk_threshold": 0.8
  }
}
```

## Response

```json
{
  "computation_id": "comp_4e21b7",
  "status": "queued",
  "contract_id": "ctr_7710aa"
}
```

## Notes

- The request is validated against `contract_id` before anything is queued; requests outside the contract's declared scope are rejected with `422 contract_scope_violation`.
- `computation_type` must be a type the referenced contract permits — see [Defining a Collaboration Contract](/how-to-guide/defining-a-collaboration-contract).
