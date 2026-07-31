# Platform UI

The PryvX web application is a single dashboard, organized around Collaboration Rooms.

## Sidebar navigation

- **Dashboard** — the landing page after sign-in.
- **Collaboration Room** — the list of every room you own or collaborate on, and the entry point to create a new one. See [Collaboration Rooms](/overview/collaboration-rooms).
- **Model Hub** *(optional, enabled per account)* — a catalog of pre-built fraud-detection models, organized by fraud typology (Wangiri, SMS, PBX hacking, CLI spoofing, SIM box), for accounts that have it enabled.
- **Report** — the Audit & Compliance Report generator. See [Generating an Audit & Compliance Report](/how-to-guide/exporting-insights/generating-an-audit-compliance-report).
- **Profile** — account details.
- **Docs** — in-app documentation; currently the [PII hashing guide](/how-to-guide/hashing-pii-before-upload).

## Inside a Collaboration Room

A room's page shows its name, owner, creation and expiry dates, and status (`Active`/`Ended`), followed by three tabs — **Collaborator**, **Data**, **Task** — described in [Collaboration Rooms](/overview/collaboration-rooms).

## Inside a task

A task page shows the SQL query it will run (or did run), a **Run Query** button for the task's creator, an **Overlap Analysis** panel with charts (when applicable to the query), a **Task Result** table with the first rows previewed and the full row count, and a task detail card with the creation date, requester, status, and row count. See [Reviewing Task Results](/how-to-guide/reviewing-results).

## Credit warning banner

If your account's credit balance reaches zero, a banner appears across every page pointing to `hello@pryvx.com`. See [Query Permissions & Credits](/overview/query-permissions-and-credits).
