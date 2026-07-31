# Telecom–Banking Fraud Prevention

Banks and telecom operators each hold half of the signal needed to catch some of the fastest-growing fraud typologies — but neither can legally or practically share raw customer data with the other.

## The problem

- **SIM swap fraud**: an attacker convinces a telecom to reassign a victim's phone number to a new SIM, then uses SMS-based authentication to take over the victim's bank account. The bank sees the account activity; only the telecom sees the SIM reassignment.
- **Mule accounts**: bank accounts opened to launder fraud proceeds are often linked by shared device identifiers or phone numbers across multiple banks and telecoms, but no single institution sees the full graph.
- **Identity theft**: synthetic or stolen identities are used to open accounts at both a telecom and a bank, and the inconsistency is only visible when the two records are compared.

## How PryvX solves it

A bank and a telecom (or a consortium of several of each) connect their relevant data — SIM reassignment events, device identifiers, account opening records — to a shared PryvX workspace. A collaboration contract defines a narrow, specific joint query, for example: *"flag any account where a SIM reassignment occurred within 24 hours of a large transaction on the linked account."* PryvX runs this as a secure multiparty computation inside a [confidential clean room](/overview/confidential-clean-rooms): neither party sees the other's underlying records, only the flag and the supporting evidence needed to act on it.

## Outcome

- Real-time or near-real-time fraud flags that neither party could produce alone.
- No bulk data export between competitor institutions or across the bank–telecom boundary.
- A defensible, attested audit trail for regulators showing exactly what data and computation produced each flag.

See [Running a Joint Analysis](/how-to-guide/running-a-joint-analysis) to set up a similar cross-party query.
