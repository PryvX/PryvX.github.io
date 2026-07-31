# Threat Intelligence Sharing

Cybersecurity and fraud teams at different organizations — even direct competitors — often see fragments of the same attack: the same IP range, the same malware hash, the same fraudulent beneficiary account. Sharing threat intelligence in raw form is valuable but frequently blocked by confidentiality obligations, competitive concerns, or the risk of exposing internal detection methods.

## The problem

- No single organization sees enough of a distributed attack to act on it with confidence.
- Sharing raw indicators can leak information about which of an organization's own systems were targeted, or how it detects threats.
- Cross-border and cross-sector information-sharing agreements are slow to negotiate for every new pair of participants.

## How PryvX solves it

Participants connect their threat indicator feeds to a shared PryvX workspace. Using [secure multiparty computation](/overview/privacy-enhancing-technologies), PryvX computes set intersections and pattern matches across all participants' indicators — for example, "which IP addresses appear in at least three participants' block lists in the last 24 hours" — without any participant seeing another's full feed. Only matching indicators (and the count of corroborating sources) are released.

## Outcome

- Faster identification of coordinated or distributed attacks across organizational boundaries.
- Participants keep full control over their own indicator feeds and detection methodology.
- A neutral, attested computation removes the need for bilateral trust agreements between every pair of participants — the [confidential clean room](/overview/confidential-clean-rooms) enforces the terms instead.
