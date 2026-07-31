# Authenticating a client

Exchange a client ID and secret for a short-lived access token.

## Request

```http
POST /v1/auth/token
Content-Type: application/json

{
  "client_id": "your-client-id",
  "client_secret": "your-client-secret",
  "grant_type": "client_credentials"
}
```

## Response

```json
{
  "access_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

## Notes

- Access tokens expire after 1 hour. Use [Refreshing an access token](/api-reference/auth/refreshing-an-access-token) rather than re-authenticating with the client secret on every request.
- Client credentials are scoped to a single workspace's Owner or Data Steward role — see the permission table in [Creating a Workspace](/how-to-guide/creating-a-workspace).
