# Audit Trail & Compliance Logs

Every workspace maintains an append-only audit trail covering every action that could affect data handling or computation outcomes.

## What is logged

- Workspace membership changes (invitations, acceptances, role changes).
- Data connection lifecycle events (connected, health-checked, disconnected).
- Contract creation, signature, and version history.
- Every computation run, its contract version, duration, and a link to its [attestation log](/how-to-guide/reviewing-results/verifying-computation-integrity).
- Every export of a result, and its destination.

## Accessing the audit trail

From the workspace, select **Compliance → Audit Trail**. Entries can be filtered by participant, date range, contract, or event type, and exported as a signed PDF or machine-readable JSON for submission to internal audit or an external regulator.

## Retention

Audit trail entries are retained according to the workspace's configured retention policy (commonly aligned to the strictest participant's regulatory requirement — for example, banking record-retention rules). Retention applies to the audit metadata itself; it does not extend the lifetime of any raw data, which is never retained by PryvX in the first place, per the guarantees in [Confidential Clean Rooms](/overview/confidential-clean-rooms).

## Who can access it

Audit trail access is available to workspace Owners by default and can be extended to a read-only Compliance role that can view and export the log but cannot create contracts, connect data, or run computations.
