# Defining a Collaboration Contract

A **collaboration contract** is the machine-enforced agreement that governs exactly what a computation is allowed to read and release. It is the mechanism that turns "we trust each other" into "the platform enforces this, regardless of trust."

## Steps

1. From the workspace, select **Contracts → New Contract**.
2. Choose the participating data connections and the specific fields each one contributes — never a whole schema by default.
3. Choose the computation type: MPC join/match, FHE-based scoring, or federated model training. PryvX suggests a type based on the fields and the goal you describe; see [No-Code AI & Analysis](/features/no-code-ai-analysis).
4. Define the permitted output: a flag, a score and confidence band, an aggregate statistic, or a trained model — never raw joined records.
5. Set the contract's validity window and, optionally, a maximum number of computation runs.
6. Every named participant with Owner or Data Steward permissions must digitally sign the contract before it becomes active.

## What the platform enforces

Once active, the contract is attached to the confidential clean room at launch time. The clean room's certified code will refuse to read fields outside the contract's scope, and will refuse to release any output not matching the contract's declared output type — this is enforced by the isolated execution environment itself, described in [Confidential Clean Rooms](/overview/confidential-clean-rooms), not by application-level checks alone.

## Amending a contract

Contracts are immutable once signed. To change scope, create a new contract version; prior computations remain tied to the contract version that was active when they ran, which keeps the audit trail (see [Audit Trail & Compliance Logs](/how-to-guide/exporting-insights/audit-trail-and-compliance-logs)) consistent over time.

Next: [Running a Joint Analysis](/how-to-guide/running-a-joint-analysis).
