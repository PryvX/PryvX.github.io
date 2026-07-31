# Creating a Workspace

A **workspace** is the container for a collaboration between two or more parties — it holds the participant list, the connected data sources, the collaboration contracts, and the history of computations run.

## Steps

1. From the PryvX dashboard, select **New Workspace**.
2. Give the workspace a name and choose a [deployment model](/overview/deployment-models): centralized, federated, or hybrid.
3. Invite participants by organization email domain. Each invited organization must accept before it can connect data or see any workspace activity.
4. Choose a workspace region. This determines where the confidential clean room infrastructure for this workspace's jobs is provisioned, which matters for data residency requirements.
5. Select **Create**. The workspace starts empty — no data source, contract, or computation exists yet.

## What happens next

Once participants have accepted, each one connects their own data — see [Connecting a Data Source](/how-to-guide/connecting-a-data-source) — and together you define what computation is allowed to run over it in [Defining a Collaboration Contract](/how-to-guide/defining-a-collaboration-contract).

## Permissions

Workspace membership has three roles:

| Role | Can invite participants | Can connect data | Can define contracts | Can run computations |
| --- | --- | --- | --- | --- |
| Owner | Yes | Yes | Yes | Yes |
| Data Steward | No | Yes | Yes (own data only) | No |
| Analyst | No | No | No | Yes (within existing contracts) |

See the API equivalent in [Creating a workspace](/api-reference/workspaces/creating-a-workspace).
