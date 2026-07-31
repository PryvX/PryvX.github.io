# Platform UI

The PryvX web application is where analysts create workspaces, connect data sources, define collaboration contracts, and review the results of joint analyses without writing code.

## Workspace dashboard

The landing view after sign-in lists every workspace you belong to, its participants, and the status of any computations currently running or scheduled. Workspaces are the top-level container for a collaboration — see [Creating a Workspace](/how-to-guide/creating-a-workspace).

## Data connections panel

Shows every data source connected to the current workspace, its connection health, schema summary (column names and types only — never sample data), and which collaboration contracts it is eligible to participate in.

## No-code query builder

Lets analysts describe the joint analysis they want in plain language or a guided form ("flag accounts shared between these two datasets with a risk score above 0.8"), which PryvX compiles into the appropriate PET (MPC, FHE, or federated job) automatically. See [No-Code AI & Analysis](/features/no-code-ai-analysis).

## Contract & consent view

Displays the collaboration contract in plain language alongside its machine-enforced terms, and tracks which participants have signed off before a computation is allowed to run.

## Results & attestation viewer

Once a computation completes, this view shows the released output together with the attestation log proving which certified code ran and confirming that no intermediate state was retained. Results can be exported or pushed to downstream systems — see [Exporting Insights](/how-to-guide/exporting-insights).

## Audit trail

A searchable, append-only log of every job run in the workspace: who requested it, which datasets and contract were used, and a link to its attestation record, supporting internal compliance and regulator review.
