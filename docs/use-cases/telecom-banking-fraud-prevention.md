# Telecom Fraud Detection

Telecoms and banks each see half the picture of some of the fastest-growing fraud typologies — including several specific patterns PryvX ships pre-built models for: **Wangiri** (one-ring call-back scams), **SIM box** fraud, **SMS** fraud, **PBX hacking**, and **CLI spoofing**.

## The problem

- A telecom sees the call/SMS/SIM-level signal (a suspicious reassignment, a spoofed caller ID, abnormal PBX traffic); a bank sees the account-level signal (a large transaction, a new payee). Neither institution alone sees both halves of the pattern.
- Sharing raw call detail records (CDRs) or transaction logs between a telecom and a bank is usually blocked by both competitive concerns and telecom/banking secrecy rules.

## How PryvX addresses it

A telecom and a bank (or a consortium of several of each) each hash their identifying fields locally — phone numbers, subscriber IDs — with the room's shared key, then connect their data to a shared Collaboration Room (see [Privacy & PII Handling](/overview/privacy-and-pii-handling)). A task is built to join the two datasets on the hashed identifier and surface matches or aggregates — for example, counting transactions linked to a phone number flagged for SIM box activity in the same time window. Depending on the query permission granted, the result is an overlap count, an aggregate, or row-level detail — never the counterpart's full dataset.

For accounts with Model Hub enabled, PryvX also provides pre-built detection models for each of the five fraud typologies above, which can be applied directly to a connected dataset rather than building a task from scratch.

## Outcome

- Fraud signals that neither institution could produce from its own data alone.
- No bulk CDR or transaction-log export between institutions.
- A dated, permissioned record of exactly what was run, for compliance review via the [audit & compliance report](/how-to-guide/exporting-insights/generating-an-audit-compliance-report).

See [Building and Running a Task](/how-to-guide/building-and-running-a-task) to set up a similar cross-party query.
