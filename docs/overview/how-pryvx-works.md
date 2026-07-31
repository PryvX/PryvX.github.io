# How PryvX Works

Organizations routinely need to answer questions that span more than one company's data: *is this SIM card linked to a mule bank account? does this applicant's alternative data support a better credit decision? has this threat indicator been seen by another bank?* Answering these questions has traditionally required sharing raw data — customer records, transaction logs, device identifiers — between organizations, which is slow, legally fraught, and a competitive and security risk.

PryvX removes the need to share raw data at all. Each participant keeps its data exactly where it is today — on-premise, in a private cloud, in any public cloud — and connects it to PryvX through an encrypted data connection. When a joint analysis is requested, PryvX:

1. **Encrypts** each party's inputs at the source, using keys that PryvX itself does not hold.
2. **Launches** a confidential clean room — an attested, hardware-isolated environment — for the specific computation requested.
3. **Computes** the joint result inside that environment using homomorphic encryption, secure multiparty computation, or federated learning, depending on the workload.
4. **Releases** only the agreed-upon output (a score, a match, a trained model, an aggregate statistic) to the requesting parties.
5. **Scrubs** all intermediate state the moment the job finishes, and produces an attestation log that proves the computation ran the certified code, unmodified.

At no point does any participant — including PryvX as the platform operator — see another party's raw data. This is what allows PryvX to be deployed across regulatory and competitive boundaries: banks collaborating with telecoms, competitors pooling threat intelligence, or public agencies working with private enterprises.

## Why this matters

- **Compliance by construction**: because raw data never leaves its owner's control, PryvX collaborations sidestep most cross-border transfer and data-sharing restrictions under GDPR, PDPA, and sector-specific banking secrecy rules.
- **No new trust relationship required**: participants do not need to trust each other, or fully trust PryvX — they trust the attestation, which is independently verifiable.
- **Speed**: what used to require months of legal data-sharing agreements can be set up as a PryvX workspace in days.

Continue to [Privacy-Enhancing Technologies](/overview/privacy-enhancing-technologies) to see the specific techniques used, or to [Confidential Clean Rooms](/overview/confidential-clean-rooms) for the isolation layer that makes this possible.
