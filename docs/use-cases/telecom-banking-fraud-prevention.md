# Telecom-Bank Fraud Detection

Banks and telecoms each see only half of some of the fastest-growing fraud patterns — a bank sees the money movement, a telecom sees the phone number and device signal behind it. PryvX's Model Hub ships pre-built detection models for several telecom-side typologies that feed directly into this joint picture.

## The problem

- A telecom sees the call/SMS/SIM-level signal — a suspicious SIM reassignment, a spoofed caller ID, abnormal PBX traffic, a SIM box signature. A bank sees the account-level signal — a large transaction, a new payee, a login from a new device. Neither institution alone sees both halves of the same fraud event.
- A telecom can flag that a number was just reassigned via SIM swap; only the bank knows that number is tied to a customer's SMS-based authentication and a transaction that followed minutes later.
- Sharing raw call detail records (CDRs) or transaction logs directly between a bank and a telecom is usually blocked by both competitive concerns and telecom/banking secrecy rules — so today these signals mostly stay siloed on each side.

## How PryvX addresses it

A bank and a telecom (or a consortium of several of each) each hash their identifying fields locally — phone numbers, subscriber IDs, account identifiers — with the room's shared key, then connect their data to a shared Collaboration Room (see [Privacy & PII Handling](/overview/privacy-and-pii-handling)). A task is built to join the two datasets on the hashed identifier and surface matches or aggregates — for example, counting transactions on an account within 24 hours of a SIM reassignment flagged for that same (hashed) phone number. Depending on the query permission granted, the result is an overlap count, an aggregate, or row-level detail — never the counterpart's full dataset.

For accounts with Model Hub enabled, PryvX also provides pre-built detection models for telecom-side fraud typologies, which the telecom can apply directly to its own connected dataset before the joint task ever runs — so the bank sees a pre-scored risk signal rather than raw CDRs.

## Outcome

- A joint fraud signal — SIM-swap-linked account takeover, mule accounts flagged on both a telecom's SIM box detection and a bank's transaction pattern — that neither the bank nor the telecom could produce from its own data alone.
- No bulk CDR or transaction-log export between the bank and the telecom.
- A dated, permissioned record of exactly what was run, for compliance review via the [audit & compliance report](/how-to-guide/exporting-insights/generating-an-audit-compliance-report).

See [Building and Running a Task](/how-to-guide/building-and-running-a-task) to set up a similar bank–telecom cross-party query.
