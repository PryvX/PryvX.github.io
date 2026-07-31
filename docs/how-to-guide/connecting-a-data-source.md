# Connecting a Data Source

Once a workspace exists, each participant connects its own data in place — nothing is uploaded or copied to PryvX or to any other participant.

## Steps

1. From the workspace, select **Data Connections → New Connection**.
2. Choose a connector type: warehouse (Snowflake, BigQuery, Redshift), database (Postgres, MySQL), object storage (S3, GCS, Azure Blob), or streaming (Kafka).
3. Provide read-only, scoped credentials. PryvX never requests write access, and credentials are stored encrypted, accessible only inside an attested clean room at computation time — not by PryvX operators.
4. PryvX reads the schema (column names and types only) to make the data connection available for contract definition. **Row-level data is never sampled, previewed, or stored by the platform outside of an active, attested computation.**
5. Confirm the connection. Its status moves from `pending` to `active`, and it becomes selectable when defining a collaboration contract.

## Verifying a connection

A newly connected source shows a health check result covering reachability, credential validity, and schema readability. Re-run this check any time from **Data Connections → [source] → Test Connection**.

## Multiple data sources per participant

A single participant can connect more than one data source to the same workspace (for example, a transactions database and a device-telemetry stream). Each is scoped independently in the collaboration contract, so a contract can reference exactly the fields it needs from each source.

Next: [Defining a Collaboration Contract](/how-to-guide/defining-a-collaboration-contract). API equivalent: [Registering a data connection](/api-reference/data-connections/registering-a-data-connection).
