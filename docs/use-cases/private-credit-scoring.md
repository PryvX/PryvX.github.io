# Private Credit Scoring

Better credit decisions — particularly for thin-file or underbanked applicants — often depend on alternative data held by a different institution: a telecom payment history, a secondary bank relationship, an e-commerce transaction pattern. Sharing that data in raw form raises consent, competitive, and regulatory concerns for every party involved.

## The problem

- Alternative data holders are reluctant to hand over raw records to a lender they may see as a competitor or counterparty risk.
- Regulators expect a clear, auditable basis for every credit decision, including any external data that contributed to it.

## How PryvX addresses it

The lender and one or more alternative data holders each hash their customer-matching fields locally, then connect their relevant datasets to a shared Collaboration Room. A task is built — manually or via the AI query builder — to join the datasets on the hashed identifier and return an aggregate risk signal (for example, an average payment-delinquency rate for matched customers) rather than individual records, by granting the lender **Aggregate Insight** rather than **Individual Insights** permission. See [Query Permissions & Credits](/overview/query-permissions-and-credits).

## Outcome

- Better-informed decisions for applicants whose full risk profile isn't visible to a single lender.
- Alternative data holders can contribute predictive signal without exposing individual customer records.
- A logged, exportable record of every task run, supporting fair-lending and model-risk review.

Related: [No-Code AI Query Builder](/features/no-code-ai-analysis) for defining the joint scoring query without writing SQL.
