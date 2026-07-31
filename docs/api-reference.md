# API Reference

The PryvX API lets you drive the same flow as the [How-To Guide](/how-to-guide) programmatically. All endpoints are served under `https://api.pryvx.com/v1` and require an access token — see [Authenticating a client](/api-reference/auth/authenticating-a-client).

## Endpoint groups

- **auth** — [authenticate](/api-reference/auth/authenticating-a-client), [refresh](/api-reference/auth/refreshing-an-access-token), [revoke](/api-reference/auth/revoking-a-session)
- **workspaces** — [create](/api-reference/workspaces/creating-a-workspace), [list](/api-reference/workspaces/listing-workspaces)
- **data-connections** — [register](/api-reference/data-connections/registering-a-data-connection), [status](/api-reference/data-connections/retrieving-connection-status)
- **computations** — [submit](/api-reference/computations/submitting-a-computation), [status](/api-reference/computations/retrieving-computation-status), [results](/api-reference/computations/retrieving-computation-results)

## Conventions

- All request and response bodies are JSON.
- All requests must be made over TLS 1.3.
- Timestamps are ISO 8601 UTC.
- Every response includes a `request_id` for correlating with the workspace [audit trail](/how-to-guide/exporting-insights/audit-trail-and-compliance-logs).
