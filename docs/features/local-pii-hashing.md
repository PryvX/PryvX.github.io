# Local PII Hashing Tool

Before any data is uploaded or connected to a Collaboration Room, PryvX asks each party to run a local, open-source tool that hashes or removes personally identifiable columns.

## Why this matters

Two parties need to be able to match records — the same customer, the same phone number — without either one ever seeing the other's raw identifiers. Keyed hashing solves this: both parties hash the same raw value with the same shared key and get the same output, so datasets can be joined on the hashed column while the original value never leaves either party's own machine.

## How it works

- The tool is a small local Streamlit app (`github.com/PryvX/pryvx`, `tools/pii-sanitizer`) — nothing is sent to PryvX while it runs.
- You choose which columns to hash (email, phone) and which to remove outright (name, address).
- You enter the shared secret key PryvX emailed you when the Collaboration Room was created.
- The tool applies HMAC-SHA256 keyed hashing and produces a sanitized CSV, which is what you then upload or connect to the room.

Full walkthrough: [Hashing PII Before Upload](/how-to-guide/hashing-pii-before-upload). Background on the key and its guarantees: [Privacy & PII Handling](/overview/privacy-and-pii-handling).
