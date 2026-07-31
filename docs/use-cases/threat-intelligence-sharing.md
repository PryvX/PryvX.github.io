# Threat Intelligence Sharing

Security and fraud teams at different organizations — even direct competitors — often see fragments of the same attack: the same device ID, the same flagged account, the same indicator. Sharing raw indicator feeds is valuable but frequently blocked by confidentiality obligations or the risk of revealing internal detection methods.

## The problem

- No single organization sees enough of a distributed pattern to act on it with confidence.
- Sharing raw indicator lists can leak information about which of an organization's own systems were targeted, or how it detects threats.

## How PryvX addresses it

Participants each hash their indicators locally with the room's shared key, then connect their indicator lists to a shared Collaboration Room. A task joins the lists on the hashed indicator and, depending on the permission granted, returns either an overlap count (**Overlap Insight** — "this indicator appears in 3 of 5 participants' lists") or the matching indicators themselves (**Individual Insights**), without any participant browsing another's full feed.

## Outcome

- Faster identification of indicators seen across multiple organizations.
- Participants keep full control over their own feed and detection methodology — only the join result is shared.
- A room-scoped, expiring workspace removes the need for a standing bilateral data-sharing agreement between every pair of participants.
