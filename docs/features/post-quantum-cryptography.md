# Post-Quantum Cryptography

PryvX builds its encrypted computation layer on advanced cryptographic schemes — including **Fully Homomorphic Encryption** and **additive secret sharing** — chosen for resistance to future quantum-capable adversaries, not just current classical ones.

## Why this matters

Data collaborations often need to remain confidential for years after the computation runs — a credit decision, a fraud flag, or a threat-intelligence match may be referenced in disputes or audits long after the fact. "Harvest now, decrypt later" attacks, where encrypted traffic is captured today in anticipation of future quantum decryption, make the cryptographic lifetime of a scheme as important as its current strength. PryvX selects schemes designed to remain secure under that threat model.

## How it fits together

- **Fully Homomorphic Encryption (FHE)** allows computation directly on ciphertext, so a value can remain encrypted through an entire computation pipeline, not just at rest and in transit.
- **Additive secret sharing** splits a value across multiple non-colluding parties, so no single party — including PryvX — ever holds a value that can be reconstructed alone.

Both schemes are combined with the hardware isolation described in [Confidential Clean Rooms](/overview/confidential-clean-rooms), and with the broader technique set in [Privacy-Enhancing Technologies](/overview/privacy-enhancing-technologies).
