# Private Credit Scoring

Traditional credit scoring relies on data the applicant's primary bank already has. Better decisions — particularly for thin-file or underbanked applicants — require alternative data held by other institutions: telecom payment history, utility payments, e-commerce transaction patterns, or a secondary bank relationship. Sharing that data in raw form raises consent, competitive, and regulatory concerns for every party involved.

## The problem

- Alternative data sources hold predictive signal but are reluctant to share raw records with a lender they may consider a competitor or counterparty risk.
- Applicants may not want every data holder to know they are being scored elsewhere.
- Regulators expect a clear, auditable basis for every credit decision, including when external data contributed to it.

## How PryvX solves it

The lender and one or more alternative data holders connect their relevant fields to a PryvX workspace. Using [Fully Homomorphic Encryption and secure multiparty computation](/overview/privacy-enhancing-technologies), PryvX computes a joint risk score from the combined signal without any party seeing another's raw records. The collaboration contract can restrict the output to a single score and confidence band, with no ability to reverse-engineer the contributing data.

## Outcome

- Better-informed credit decisions for thin-file and underbanked applicants, using data no single institution held alone.
- Alternative data holders can monetize their data's predictive value without ever exposing individual records.
- A fully attested computation trail supporting fair-lending and model-risk audits.

Related: [No-Code AI & Analysis](/features/no-code-ai-analysis) for how the joint scoring model is defined without writing cryptography or SQL code.
