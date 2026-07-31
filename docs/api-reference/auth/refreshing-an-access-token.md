# Refreshing an access token

Obtain a new access token before the current one expires, without resending the client secret.

## Request

```http
POST /v1/auth/refresh
Content-Type: application/json

{
  "refresh_token": "eyJhbGciOi..."
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

- Refresh tokens are valid for 30 days from issuance, or until [revoked](/api-reference/auth/revoking-a-session).
- Refreshing rotates the refresh token; store the newly returned value and discard the old one.
