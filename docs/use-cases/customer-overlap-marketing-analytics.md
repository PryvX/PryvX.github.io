# Customer Overlap & Marketing Analytics

Two brands running a co-marketing campaign, or a retailer and a payments provider evaluating a partnership, often want to know how much their customer bases overlap — without handing each other their full customer list.

## The problem

- Neither party wants to share its raw customer list with a potential competitor or partner just to answer "how much overlap is there?"
- Marketing and partnerships teams typically don't have engineering support to build a custom data-sharing pipeline for a single campaign analysis.

## How PryvX addresses it

Both parties hash their customer identifiers (email or phone) locally with the room's shared key, then connect their customer list to a shared Collaboration Room. This use case maps directly onto PryvX's **Overlap Insight** permission tier: a collaborator granted only that tier can run a task that joins the two lists on the hashed identifier and returns a match count — how many customers appear in both lists — without ever seeing the counterpart's records, or even the matched values themselves.

## Outcome

- A fast, no-engineering-required answer to "how big is our overlap," ahead of a bigger partnership or campaign decision.
- Neither party's customer list is exposed to the other, or to PryvX.
- The same room can be extended later to **Aggregate Insight** (for example, average order value among overlapping customers) if both parties agree to a deeper analysis.
