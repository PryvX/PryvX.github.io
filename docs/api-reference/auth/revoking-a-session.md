# Revoking a session

Immediately invalidate an access token and its associated refresh token.

## Request

```http
POST /v1/auth/revoke
Authorization: Bearer eyJhbGciOi...
```

## Response

```json
{
  "revoked": true
}
```

## Notes

- Revocation is logged to the workspace [audit trail](/how-to-guide/exporting-insights/audit-trail-and-compliance-logs).
- Revoking a session does not cancel any [computation](/api-reference/computations/submitting-a-computation) already running under that session; use the computation cancel action separately if needed.
