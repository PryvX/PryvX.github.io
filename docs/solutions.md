# Solutions

PryvX lets organizations collaborate on sensitive data through managed, permissioned Collaboration Rooms. This page summarizes every capability; each links through to the full documentation.

## Platform capabilities

| Capability | Summary |
| --- | --- |
| [Collaboration Rooms](/features/collaboration-rooms) | Expiring, permissioned rooms where an owner invites collaborators to jointly analyze connected datasets. |
| [Local PII Hashing Tool](/features/local-pii-hashing) | An open-source local tool that hashes or removes PII before any data reaches the platform. |
| [Multi-Cloud Dataset Connections](/features/multi-cloud-dataset-connections) | Upload a CSV directly, or connect a file already sitting in GCS, AWS S3, or Azure Blob Storage. |
| [No-Code AI Query Builder](/features/no-code-ai-analysis) | Build a join/aggregate/filter task visually, or describe the analysis in plain language and let PryvX suggest the SQL. |

## Use cases by industry

| Industry | Use case |
| --- | --- |
| Telecom + Banking | [Telecom-Bank Fraud Detection](/use-cases/telecom-banking-fraud-prevention) — joint fraud signals from Wangiri, SIM box, SMS, PBX hacking, CLI spoofing |
| Financial Services | [Private Credit Scoring](/use-cases/private-credit-scoring) — combine financial and alternative data sources |
| Government + Enterprise | [Threat Intelligence Sharing](/use-cases/threat-intelligence-sharing) — matching indicators across organizations |
| Marketing + Retail | [Customer Overlap & Marketing Analytics](/use-cases/customer-overlap-marketing-analytics) — measure shared audiences without pooling customer lists |

## How privacy is protected today

- **Local PII hashing** — HMAC-SHA256 keyed hashing of identifying columns, run on the data owner's own machine before upload, using a secret key PryvX generates per room.
- **Permissioned access** — every collaborator is granted one of three query permission tiers (Overlap Insight, Aggregate Insight, Individual Insights) when invited.
- **Room expiry** — every Collaboration Room has an expiry date, after which no new data, collaborators, or tasks can be added.
- **Credits & audit reporting** — every task run is metered and logged, and owners can generate a PDF audit & compliance report for any date range.

PryvX's stated roadmap also includes homomorphic encryption, secure multiparty computation, and federated learning as additional privacy-enhancing layers; these are not yet part of the shipped task-execution path described in this documentation.

## Get in touch

- Email: [hello@pryvx.com](mailto:hello@pryvx.com)
- Location: Östermalmsgatan 26A, Stockholm, Sweden
- Website: [pryvx.com](https://www.pryvx.com)
