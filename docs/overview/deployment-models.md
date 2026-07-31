# Deployment Models

PryvX is cloud-agnostic by design. The confidential-computing primitives it depends on (TEEs and remote attestation) are available across every major public cloud and in modern on-premise hardware, so the same clean room definition can run in any of the following deployment models without modification.

## Centralized (PryvX-hosted)

PryvX operates the clean room infrastructure on your behalf, in a shared or dedicated tenancy. Participants connect their data sources over encrypted channels; PryvX orchestrates job scheduling, attestation verification, and key release. This is the fastest way to get started and is well suited to multi-party consortia where no single participant wants to operate shared infrastructure.

## Federated (participant-hosted)

Each participant runs its own PryvX node inside its own infrastructure — on-premise or in its own cloud account — and only orchestration metadata (never raw data) crosses organizational boundaries. This model is common in banking and government deployments where data residency rules or internal policy prohibit data-adjacent infrastructure from being operated by a third party.

## Hybrid

A mix of the two: some participants connect through participant-hosted nodes, others through the PryvX-hosted service, within the same workspace and the same collaboration contract. This is common when a large regulated institution federates its own node while smaller partners use the hosted option.

## Choosing a model

| Consideration | Centralized | Federated | Hybrid |
| --- | --- | --- | --- |
| Time to first collaboration | Fastest | Slower (infra setup required) | Moderate |
| Data residency control | Managed by PryvX | Fully owned by participant | Mixed |
| Operational overhead | Lowest | Highest | Moderate |
| Typical adopters | Pilots, smaller institutions | Regulated banks, government | Multi-party consortia |

All three models use the same [confidential clean room](/overview/confidential-clean-rooms) guarantees — the choice is purely about who operates the infrastructure, not what security properties you get.
