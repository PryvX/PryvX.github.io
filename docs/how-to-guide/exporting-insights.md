# Exporting Insights

Once a result has been reviewed, it can be exported to downstream systems or retained as a governed record within PryvX.

## Export options

- **Direct download** — CSV or JSON export of the released output, available to any workspace member with access to the analysis.
- **Webhook delivery** — push the result automatically to an internal system (a case-management tool, a scoring engine, a SIEM) as soon as a run completes.
- **Scheduled sync** — for recurring analyses (for example, a nightly fraud-flag run), configure the output to sync automatically to a connected downstream data store.

## What is exported — and what isn't

Only the output defined by the collaboration contract is ever exportable — a score, a flag, an aggregate statistic, or a trained model artifact. Raw inputs, intermediate joined records, and any other clean-room state are never available for export, by the same technical enforcement described in [Confidential Clean Rooms](/overview/confidential-clean-rooms); this is not a UI-level restriction that could be bypassed.

## Keeping an audit-ready record

Every export is itself logged — who exported it, to where, and a reference back to the originating computation and its attestation record. See [Audit Trail & Compliance Logs](/how-to-guide/exporting-insights/audit-trail-and-compliance-logs) for how to review or export that log for a compliance function.

API equivalent: [Retrieving computation results](/api-reference/computations/retrieving-computation-results).
