# Running a Joint Analysis

With a workspace, connected data sources, and a signed contract in place, you can now run the computation itself.

## Steps

1. From the workspace, select **Analyses → New Analysis** and choose an active contract to run it under.
2. Describe the analysis in the no-code query builder — either in plain language or using the guided form — for example: *"flag accounts shared between these two datasets with a combined risk score above 0.8."* See [No-Code AI & Analysis](/features/no-code-ai-analysis).
3. PryvX validates the request against the chosen contract. If the request asks for anything outside the contract's declared scope or output type, it is rejected before any clean room is launched.
4. On confirmation, PryvX launches a confidential clean room from certified code, verifies attestation, releases decryption keys, and runs the computation — see the full lifecycle in [Confidential Clean Rooms](/overview/confidential-clean-rooms).
5. Track progress from the **Analyses** view: `queued → attesting → running → releasing → complete`.

## Typical run times

| Computation type | Typical duration |
| --- | --- |
| MPC join/match | Seconds to a few minutes |
| FHE-based scoring | Minutes, depending on batch size |
| Federated model training round | Minutes to hours, depending on participant count and model size |

## If a run fails

Failures are most commonly caused by a data connection going unhealthy mid-run, or an attestation check failing (for example, if underlying clean room infrastructure was patched and re-attested since the contract was signed). Failed runs release no output and no partial state — see the guarantees in [Confidential Clean Rooms](/overview/confidential-clean-rooms).

Next: [Reviewing Results](/how-to-guide/reviewing-results). API equivalent: [Submitting a computation](/api-reference/computations/submitting-a-computation).
