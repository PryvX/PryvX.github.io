# Understanding Task Status & Credits

Each task's detail card and the platform's credit system together tell you whether a result is current and whether you can run more tasks.

## Task detail fields

- **Created** — when the task was defined.
- **Requester** — the email of whoever created the task.
- **Status** — whether the task's last run succeeded.
- **Total Transactions** — the row count returned by the task's last successful run.

A task with no run yet shows an empty result and a prompt to select **Run Query**.

## Credits

Running a task (manual or AI-generated) consumes one credit from your account, whether or not you've run that exact task before. If your balance reaches zero:

- A red banner appears across every page of the platform.
- Attempting to run a task shows *"You don't have enough credits to run this query"* and the run is blocked.
- The only current path to more credits is emailing `hello@pryvx.com` — there is no self-serve purchase flow yet.

## Verifying a result is current

Because tasks don't auto-refresh, a task's **Task Result** table reflects whatever the *last* **Run Query** click returned — if the room's underlying datasets have changed since then (for example, a collaborator added a new dataset version), re-run the task to get an up-to-date result. Each re-run consumes another credit.
