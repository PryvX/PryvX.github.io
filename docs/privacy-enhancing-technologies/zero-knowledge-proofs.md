# Zero-Knowledge Proofs (ZKP)

::: info At a glance
- **What it does:** lets a *prover* convince a *verifier* that a statement is true **without revealing anything beyond the fact that it's true**.
- **Trust model:** pure mathematics. Some systems also require a one-time "trusted setup".
- **Trade-off:** creating a proof can be computationally heavy; checking one is usually fast.
:::

## What is it?

A zero-knowledge proof answers the question: *"How can I prove I know something, or that something is true, without showing you the thing itself?"*

Everyday examples of what a ZKP can prove:

- "I am over 18", **without** revealing your date of birth.
- "My account balance is above €10,000", **without** revealing the balance.
- "I know the password for this account", **without** sending the password.
- "This result was computed correctly from the agreed data", **without** revealing the data.

Zero-knowledge proofs were introduced by **Goldwasser, Micali and Rackoff in 1985**.

### The three properties every ZKP must have

| Property | Meaning in plain words |
|---|---|
| **Completeness** | If the statement is true, an honest prover can always convince the verifier. |
| **Soundness** | If the statement is false, a cheating prover can't convince the verifier, except with negligible probability. |
| **Zero-knowledge** | The verifier learns nothing except that the statement is true. |

## The classic analogy: the magic cave

<figure class="pet-fig narrow">
<svg viewBox="0 0 380 300" role="img" aria-label="A ring-shaped cave with two paths, A and B, joined at the far end by a magic door that opens only with a secret word.">
  <circle cx="190" cy="140" r="90" class="cave"/>
  <rect x="177" y="226" width="26" height="54" class="cave-fill"/>
  <rect x="180" y="36" width="20" height="28" rx="3" class="door"/>
  <text x="190" y="22" text-anchor="middle" class="t-brand">Magic door (needs secret word)</text>
  <text x="78" y="146" text-anchor="middle" class="t-b">A</text>
  <text x="302" y="146" text-anchor="middle" class="t-b">B</text>
  <text x="190" y="296" text-anchor="middle" class="t2">Entrance</text>
  <text x="190" y="146" text-anchor="middle" class="t2">fork where</text>
  <text x="190" y="164" text-anchor="middle" class="t2">Victor waits</text>
</svg>
<figcaption>Based on Quisquater et al., "How to Explain Zero-Knowledge Protocols to Your Children" (1989).</figcaption>
</figure>

A ring-shaped cave has two paths, **A** and **B**, joined at the back by a door that only opens with a secret word. **Peggy** (the prover) wants to prove to **Victor** (the verifier) that she knows the word, without telling him what it is.

1. Victor waits outside. Peggy walks in and secretly takes path A or B.
2. Victor walks to the fork and shouts which path he wants her to come out of: "A!" or "B!".
3. If Peggy knows the word, she can always come out of the requested path, going through the door if needed.
4. If she *doesn't* know it, she only succeeds if she happened to pick the right path, a **50% chance**.

Repeating the game makes cheating very unlikely:

| Rounds | Chance a cheater gets lucky every time |
|---|---|
| 1 | 1 in 2 |
| 10 | about 1 in 1,000 |
| 20 | about 1 in 1,000,000 |
| 40 | about 1 in 1,000,000,000,000 |

Victor becomes convinced, yet he learns **nothing about the secret word**. He couldn't even convince someone else, since he could have staged the recording himself. That is the "zero-knowledge" part.

## How ZKPs work in real systems

<figure class="pet-fig">
<svg viewBox="0 0 760 200" role="img" aria-label="The prover, who knows a secret birth date, creates a small proof that reveals nothing else; the verifier checks it and accepts the statement that age is at least 18.">
  <defs><marker id="ah-zk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="ah"/></marker></defs>
  <rect x="10" y="20" width="210" height="160" rx="10" class="box"/>
  <text x="115" y="50" text-anchor="middle" class="t-b">Prover</text>
  <text x="115" y="76" text-anchor="middle" class="t2">holds a secret ("witness")</text>
  <text x="115" y="112" text-anchor="middle" class="mono">born 1994-03-02</text>
  <text x="115" y="150" text-anchor="middle" class="t2">runs the proving algorithm</text>
  <line x1="222" y1="100" x2="270" y2="100" class="arrow" marker-end="url(#ah-zk)"/>
  <rect x="275" y="45" width="210" height="110" rx="10" class="box-brand"/>
  <text x="380" y="78" text-anchor="middle" class="t-b">Proof π</text>
  <text x="380" y="104" text-anchor="middle" class="mono">a few hundred bytes</text>
  <text x="380" y="132" text-anchor="middle" class="t-brand">reveals nothing else</text>
  <line x1="487" y1="100" x2="535" y2="100" class="arrow" marker-end="url(#ah-zk)"/>
  <rect x="540" y="20" width="210" height="160" rx="10" class="box"/>
  <text x="645" y="50" text-anchor="middle" class="t-b">Verifier</text>
  <text x="645" y="76" text-anchor="middle" class="t2">checks a public statement</text>
  <text x="645" y="112" text-anchor="middle" class="mono">"age ≥ 18"</text>
  <text x="645" y="150" text-anchor="middle" class="t-ok">✓ true, in milliseconds</text>
</svg>
<figcaption>The verifier is convinced the statement is true but never sees the birth date.</figcaption>
</figure>

1. **Define the statement** as a set of mathematical constraints, often called a *circuit*. For example: "the hidden date, plus 18 years, is earlier than today, and the date was signed by a government issuer."
2. **The prover** feeds in the secret (the *witness*) and generates a proof.
3. **The verifier** checks the proof against the public statement and accepts or rejects it.

**Interactive vs. non-interactive:** the cave game is *interactive*, with back-and-forth questions. Most modern systems are **non-interactive**: a single proof that anyone can verify later. The *Fiat–Shamir* technique achieves this by replacing the verifier's random challenges with the output of a hash function.

## Main types of ZKP

| Type | Proof size | Verification | Trusted setup? | Notes |
|---|---|---|---|---|
| **zk-SNARKs** (e.g. Groth16, PLONK) | Tiny: ~200 bytes to a few KB | Very fast (milliseconds) | Usually yes; Groth16 per circuit, PLONK one universal setup | Most widely deployed; not post-quantum secure |
| **zk-STARKs** | Larger: tens to hundreds of KB | Fast | **No**, uses public randomness | Hash-based, so considered quantum-resistant; scales well to huge computations |
| **Bulletproofs** | Small (~1 KB for range proofs) | Slower; grows with statement size | **No** | Popular for "value is in range" proofs, such as confidential transactions |
| **Sigma protocols** (e.g. Schnorr) | Very small | Very fast | **No** | Simple, specific proofs such as "I know this private key"; the basis of many signature schemes |

::: details What is a "trusted setup"?
Some SNARKs need public parameters generated once, from secret random values that must then be destroyed (sometimes called "toxic waste"). If anyone kept those values, they could forge proofs, although they still couldn't learn anyone's secrets. To reduce this risk, setups are run as multi-party "ceremonies" where only **one** honest participant needs to destroy their share.
:::

## Applications

| Area | How ZKPs are used |
|---|---|
| **Digital identity & age verification** | Digital ID wallets let users prove attributes ("over 18", "EU resident") without revealing their full ID document. |
| **Blockchain privacy** | **Zcash** (2016) uses zk-SNARKs to hide the sender, receiver and amount of transactions while still proving they are valid. |
| **Blockchain scaling** | **zk-rollups** bundle thousands of transactions off-chain and post one small proof that all of them were executed correctly. |
| **Proof of reserves / solvency** | Exchanges and custodians prove that they hold enough assets to cover customer balances without publishing every account. |
| **Compliance & auditing** | Prove that a computation over private data followed the rules, such as "no customer in this report is on a sanctions list", without exposing the data. |
| **Authentication** | Prove you know a password or private key without sending it, so there is nothing to steal in transit. |
| **Verifiable AI** | Prove that a specific model produced a given output, or that a model was trained on approved data. |

## Limitations to know

- **Proving is expensive:** generating a proof can take seconds to minutes and lots of memory for large statements.
- **Hard to build correctly:** turning real logic into circuits is specialist work, and a bug in the circuit can let false statements through.
- **It proves only what you encode:** a ZKP guarantees the maths, not that the inputs were truthful. That usually comes from a trusted issuer's signature.
- **Trusted-setup risk:** for SNARKs that need one, a compromised setup undermines soundness.
