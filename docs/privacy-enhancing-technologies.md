# Privacy-Enhancing Technologies

**Privacy-Enhancing Technologies (PETs)** let organizations use data, by computing on it, matching it, or proving facts about it, without exposing the raw data itself.

This section explains the four main PET families in plain terms. It is meant for readers who are new to the topic but want a technically accurate picture.

## The problem PETs solve

Data can be in one of three states. Two of them have been well protected for decades. The third has not.

<figure class="pet-fig">
<svg viewBox="0 0 760 190" role="img" aria-label="Three states of data: at rest and in transit are protected by standard encryption; data in use is the gap that PETs close.">
  <defs><marker id="ah-idx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="ah"/></marker></defs>
  <rect x="10" y="20" width="220" height="140" rx="10" class="box-ok"/>
  <text x="120" y="52" text-anchor="middle" class="t-b">Data at rest</text>
  <text x="120" y="76" text-anchor="middle" class="t2">stored on disk or in a database</text>
  <text x="120" y="108" text-anchor="middle">Disk / database encryption</text>
  <text x="120" y="140" text-anchor="middle" class="t-ok">✓ Solved</text>
  <line x1="232" y1="90" x2="266" y2="90" class="arrow" marker-end="url(#ah-idx)"/>
  <rect x="270" y="20" width="220" height="140" rx="10" class="box-ok"/>
  <text x="380" y="52" text-anchor="middle" class="t-b">Data in transit</text>
  <text x="380" y="76" text-anchor="middle" class="t2">moving across a network</text>
  <text x="380" y="108" text-anchor="middle">TLS / HTTPS</text>
  <text x="380" y="140" text-anchor="middle" class="t-ok">✓ Solved</text>
  <line x1="492" y1="90" x2="526" y2="90" class="arrow" marker-end="url(#ah-idx)"/>
  <rect x="530" y="20" width="220" height="140" rx="10" class="box-brand"/>
  <text x="640" y="52" text-anchor="middle" class="t-b">Data in use</text>
  <text x="640" y="76" text-anchor="middle" class="t2">being analysed or computed on</text>
  <text x="640" y="108" text-anchor="middle">Normally decrypted first</text>
  <text x="640" y="140" text-anchor="middle" class="t-brand">← PETs close this gap</text>
</svg>
<figcaption>Ordinary encryption has to be removed before data can be used. PETs keep data protected while it is being used.</figcaption>
</figure>

To analyse data, you normally have to decrypt it, and whoever runs the analysis can then see everything. That makes it hard to share data across organizations, outsource computation, or prove something about yourself without revealing too much. PETs remove that requirement.

## The four families at a glance

| | Core idea | Everyday analogy | You trust… |
|---|---|---|---|
| [**Homomorphic Encryption (HE)**](/privacy-enhancing-technologies/homomorphic-encryption) | Compute directly on encrypted data | A locked glovebox: you can work on what's inside without opening it | Mathematics only |
| [**Secure Multiparty Computation (SMPC)**](/privacy-enhancing-technologies/secure-multiparty-computation) | Several parties compute a joint result. Nobody sees anyone else's input | Colleagues working out their average salary without anyone saying their own | That not too many parties collude |
| [**Trusted Execution Environments (TEE)**](/privacy-enhancing-technologies/trusted-execution-environments) | Run code inside a sealed, hardware-protected area of the CPU | A bank vault inside the computer. Even the building owner can't get in | The chip manufacturer |
| [**Zero-Knowledge Proofs (ZKP)**](/privacy-enhancing-technologies/zero-knowledge-proofs) | Prove a statement is true without revealing why | Proving you're over 18 without showing your birth date | Mathematics only |

## How they compare

| | HE | SMPC | TEE | ZKP |
|---|---|---|---|---|
| **What it protects** | Data during computation | Each party's inputs | Code + data during computation | The secret behind a claim |
| **Speed vs. normal computing** | Much slower (often 1,000×+) | Slower; limited by network traffic | Near-normal speed | Proving is slow; checking is fast |
| **Parties involved** | Usually 1 data owner + 1 compute server | 2 or more data owners | Any number | 1 prover + any number of verifiers |
| **Main weakness** | Performance, limited operations | Network cost, all parties must stay online | Hardware bugs & side-channel attacks | Hard to build, proving is expensive |
| **Maturity** | Production use for specific tasks | Production use (auctions, wallets, analytics) | Widely available in major clouds | Production use (identity, blockchain) |

## Which one fits?

Ask these questions in order:

1. **Do you need to prove something, not compute something?** → **ZKP**. *Example: "This account has enough funds" or "this person is an adult".*
2. **Is one party sending its data to someone else to process?** → **HE** if the computation is simple enough. Otherwise **TEE**.
3. **Do several organizations each hold part of the data?** → **SMPC**, or a **TEE** that all parties trust as a neutral meeting point.
4. **Do you need speed on large or complex workloads, such as AI models?** → **TEE**, possibly combined with one of the others.

::: tip PETs are often combined
Real systems frequently mix techniques. For example, SMPC protocols often use homomorphic encryption internally, TEEs can produce zero-knowledge-style proofs of what they ran, and ZKPs can show that an encrypted computation was done honestly.
:::

## Related: other privacy techniques

These are not covered in detail here, but you will often see them alongside the four above:

- **Differential privacy** adds carefully calibrated statistical noise to *results*, so no single individual can be singled out from them.
- **Federated learning** trains a machine-learning model across many sites by sharing model updates instead of raw data.
- **Keyed hashing / pseudonymisation** replaces identifiers with irreversible tokens. This is what PryvX uses today; see [Privacy & PII Handling](/overview/privacy-and-pii-handling).

## How this relates to PryvX

PryvX puts Privacy-Enhancing Technologies (PETs) into practice to enable secure, privacy-preserving data collaboration. Our platform combines techniques such as PII hashing and tokenisation, permission-controlled collaboration rooms, and cryptographic privacy mechanisms, including [Homomorphic Encryption](/privacy-enhancing-technologies/homomorphic-encryption) and [Secure Multi-Party Computation (SMPC)](/privacy-enhancing-technologies/secure-multiparty-computation), to support data matching, analysis, and collaboration without requiring organisations to expose their underlying sensitive data.

These technologies work alongside our room-level access controls, data governance policies, and expiry mechanisms, allowing organisations to collaborate on sensitive datasets while maintaining control over how their data is accessed and used.

Explore our approach in [Privacy & PII Handling](/overview/privacy-and-pii-handling) and [Collaboration Rooms](/overview/collaboration-rooms).
