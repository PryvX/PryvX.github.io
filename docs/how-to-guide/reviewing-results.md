# Reviewing Results

When a computation completes, its result appears in the workspace's **Analyses** view alongside the attestation evidence that proves how it was produced.

## What you'll see

- The released output, in the form defined by the collaboration contract (a flag, score, aggregate statistic, or trained model).
- The contract version the run was executed under.
- A timestamp and duration for each stage of the run: queued, attesting, running, releasing.
- A link to the full attestation log — see [Verifying Computation Integrity](/how-to-guide/reviewing-results/verifying-computation-integrity).

## Interpreting scores and flags

Outputs are intentionally minimal by contract design — typically a score, a confidence band, or a boolean flag, not the joined records that produced them. If your team needs more context to act on a result (for example, which specific fields contributed most to a credit score), that must be defined as part of the contract's output type up front, in [Defining a Collaboration Contract](/how-to-guide/defining-a-collaboration-contract), rather than requested after the fact.

## Re-running with different parameters

If a result needs adjustment — a different risk threshold, a different time window — you do not need a new contract if the parameter is within the contract's declared bounds. Select **Re-run with new parameters** from the analysis view; this launches a fresh, independently attested computation rather than modifying the completed one.

Next: [Verifying Computation Integrity](/how-to-guide/reviewing-results/verifying-computation-integrity) or, once satisfied, [Exporting Insights](/how-to-guide/exporting-insights).
