# Privacy & PII Handling

PryvX's primary privacy control today is simple and verifiable: **personally identifiable fields never reach the platform in plaintext**, because they're hashed on the data owner's own machine before anything is uploaded or connected.

## The local hashing tool

PryvX publishes an open-source PII-sanitizer — a small local Streamlit app (`github.com/PryvX/pryvx`, `tools/pii-sanitizer`) that runs entirely on the data owner's own laptop or server. For each CSV:

1. You choose which columns to **hash** (typically email, phone number — anything used as a join key).
2. You choose which columns to **remove entirely** (typically name, address — anything with no analytical value).
3. You enter a **shared secret key**, emailed to you when the Collaboration Room was created.
4. The tool applies **HMAC-SHA256** keyed hashing to the selected columns and produces a sanitized CSV.

Because every collaborator in the same room receives the same secret key, the same raw value hashes to the same output on both sides — so datasets can still be joined on, say, a hashed email column, without either party ever seeing the other's actual email addresses. All of this happens locally; no data is sent to PryvX during sanitization.

## The per-room secret key

When a Collaboration Room is created, PryvX generates a random key and emails it — along with the room invitation — to the owner and every invited collaborator. This is the key each party enters into the local hashing tool, which is what makes hashed values comparable across organizations without any party choosing (or leaking) the secret themselves.

## What this does and doesn't protect against

- It protects against **PryvX, or any other room participant, ever seeing a raw identifying value** for a hashed column, since sanitization happens before the file leaves the data owner's machine.
- It does **not** encrypt the non-identifying columns in a dataset (transaction amounts, timestamps, categorical fields) — those are used directly by SQL tasks inside the room, subject to the [query permission](/overview/query-permissions-and-credits) granted to whoever runs the task.
- It relies on each party actually running the sanitizer correctly before uploading — PryvX does not currently re-verify that a connected or uploaded file has been hashed.

## Roadmap

PryvX's broader positioning references additional privacy-enhancing technologies — homomorphic encryption, secure multiparty computation, and federated learning — as part of its longer-term roadmap. These are not yet part of the shipped task-execution path described in this documentation; today's privacy guarantees come from local PII hashing plus the room's permission and expiry model described in [Collaboration Rooms](/overview/collaboration-rooms).
