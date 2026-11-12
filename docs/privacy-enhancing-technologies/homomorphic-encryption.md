# Homomorphic Encryption (HE)

::: info At a glance
- **What it does:** lets someone run calculations on encrypted data *without decrypting it*. Only the key holder can read the result.
- **Trust model:** pure mathematics. The party doing the computing never sees the data or the answer.
- **Trade-off:** much slower and more memory-hungry than normal computing.
:::

## What is it?

Normally, encryption locks data away: to do anything useful with it, you have to unlock (decrypt) it first. **Homomorphic encryption** is a special kind of encryption where certain operations on the *encrypted* data produce the *encrypted version of the correct answer*.

> **Analogy: the jeweller's glovebox.** A jeweller puts gold into a locked glass box with gloves built into the side. Workers can reach in and shape the gold into a ring, but they can't take the gold out. Only the jeweller, who has the key, can open the box and take out the finished ring.

The word *homomorphic* comes from Greek and means "same shape": the structure of the calculation is preserved through encryption.

### How it works in practice

<figure class="pet-fig">
<svg viewBox="0 0 760 220" role="img" aria-label="Homomorphic encryption flow: the data owner encrypts x equals 42, the cloud computes on the ciphertext without seeing 42, and the owner decrypts the result 84.">
  <defs><marker id="ah-he1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="ah"/></marker></defs>
  <rect x="10" y="20" width="210" height="180" rx="10" class="box"/>
  <text x="115" y="48" text-anchor="middle" class="t-b">① Data owner</text>
  <text x="115" y="72" text-anchor="middle" class="t2">encrypts their data</text>
  <text x="115" y="108" text-anchor="middle" class="mono">x = 42</text>
  <text x="115" y="132" text-anchor="middle" class="t2">↓ encrypt</text>
  <text x="115" y="156" text-anchor="middle" class="mono">Enc(x) = 9f3a…c71</text>
  <text x="115" y="186" text-anchor="middle" class="t2">secret key stays here</text>
  <line x1="222" y1="110" x2="270" y2="110" class="arrow" marker-end="url(#ah-he1)"/>
  <rect x="275" y="20" width="210" height="180" rx="10" class="box-brand"/>
  <text x="380" y="48" text-anchor="middle" class="t-b">② Cloud / partner</text>
  <text x="380" y="72" text-anchor="middle" class="t2">computes f(x) = 2·x</text>
  <text x="380" y="112" text-anchor="middle" class="mono">f( Enc(x) ) → Enc(84)</text>
  <text x="380" y="150" text-anchor="middle" class="t-brand">never sees 42</text>
  <text x="380" y="172" text-anchor="middle" class="t-brand">never sees 84</text>
  <line x1="487" y1="110" x2="535" y2="110" class="arrow" marker-end="url(#ah-he1)"/>
  <rect x="540" y="20" width="210" height="180" rx="10" class="box"/>
  <text x="645" y="48" text-anchor="middle" class="t-b">③ Data owner</text>
  <text x="645" y="72" text-anchor="middle" class="t2">decrypts the result</text>
  <text x="645" y="108" text-anchor="middle" class="mono">Dec( Enc(84) )</text>
  <text x="645" y="132" text-anchor="middle" class="t2">↓</text>
  <text x="645" y="160" text-anchor="middle" class="mono t-ok">f(x) = 84 ✓</text>
</svg>
<figcaption>The server does real work on data it cannot read. Only the holder of the secret key can see the answer.</figcaption>
</figure>

### A tiny worked example

Textbook RSA happens to be homomorphic for **multiplication**. With toy numbers (public key `n = 33, e = 3`, private key `d = 7`), encryption is `Enc(m) = m³ mod 33`:

| Step | Calculation | Result |
|---|---|---|
| Encrypt 2 | 2³ mod 33 | **8** |
| Encrypt 3 | 3³ mod 33 | **27** |
| Multiply the *ciphertexts* | 8 × 27 mod 33 | **18** |
| Decrypt 18 | 18⁷ mod 33 | **6** ✓ (= 2 × 3) |

The party multiplying `8 × 27` never learned that the inputs were 2 and 3, yet the decrypted answer is correct.

::: warning
This is for illustration only. Textbook RSA with small numbers is not secure, and real HE schemes use very different mathematics, typically based on *lattice* problems.
:::

## Types of homomorphic encryption

HE schemes are grouped by **which operations** they support and **how many** of them you can chain together. Any computation can be built from additions and multiplications, so supporting both without limit means supporting any computation.

| Type | Supports | Limit | Example schemes |
|---|---|---|---|
| **Partially HE (PHE)** | *One* operation: add **or** multiply | Unlimited uses of that one operation | RSA (×), ElGamal (×), Paillier (+), Goldwasser–Micali (XOR) |
| **Somewhat HE (SHE)** | Add **and** multiply | Only a small number of operations | Early lattice schemes |
| **Leveled HE** | Add **and** multiply | Any computation up to a depth chosen in advance | BGV, BFV, CKKS without bootstrapping |
| **Fully HE (FHE)** | Add **and** multiply | Unlimited, via *bootstrapping* | BGV, BFV, CKKS, TFHE with bootstrapping |

The first fully homomorphic scheme was published by **Craig Gentry in 2009**. Before that, unlimited computation on encrypted data was an open problem for about 30 years.

### Why there are limits: noise

Modern HE schemes hide data by adding a small amount of random **noise** to every ciphertext. Each operation makes the noise grow: a little for additions, a lot for multiplications. If the noise grows past a threshold, decryption gives the wrong answer.

<figure class="pet-fig">
<svg viewBox="0 0 760 260" role="img" aria-label="Noise budget: noise grows slowly with additions and quickly with multiplications until it crosses the decryption limit; bootstrapping resets it.">
  <line x1="560" y1="12" x2="560" y2="240" class="limit"/>
  <text x="560" y="8" text-anchor="middle" class="t-bad" style="font-size:12px">decryption limit</text>
  <text x="10" y="44">Fresh ciphertext</text>
  <rect x="230" y="28" width="390" height="24" rx="5" class="box"/>
  <rect x="230" y="28" width="25" height="24" rx="5" class="noise"/>
  <text x="635" y="45" class="t-ok">✓</text>
  <text x="10" y="88">After 10 additions</text>
  <rect x="230" y="72" width="390" height="24" rx="5" class="box"/>
  <rect x="230" y="72" width="60" height="24" rx="5" class="noise"/>
  <text x="635" y="89" class="t-ok">✓</text>
  <text x="10" y="132">After 1 multiplication</text>
  <rect x="230" y="116" width="390" height="24" rx="5" class="box"/>
  <rect x="230" y="116" width="170" height="24" rx="5" class="noise"/>
  <text x="635" y="133" class="t-ok">✓</text>
  <text x="10" y="176">After 3 multiplications</text>
  <rect x="230" y="160" width="390" height="24" rx="5" class="box"/>
  <rect x="230" y="160" width="370" height="24" rx="5" class="noise-bad"/>
  <text x="635" y="177" class="t-bad">✗ wrong result</text>
  <text x="10" y="220">After bootstrapping</text>
  <rect x="230" y="204" width="390" height="24" rx="5" class="box"/>
  <rect x="230" y="204" width="35" height="24" rx="5" class="noise-ok"/>
  <text x="635" y="221" class="t-ok">✓ noise reset</text>
</svg>
<figcaption>Every ciphertext has a "noise budget". Bootstrapping refreshes the budget so computation can continue, but it is the most expensive step in FHE.</figcaption>
</figure>

**Bootstrapping** is the clever trick that makes HE *fully* homomorphic: the scheme evaluates its own decryption procedure homomorphically, which produces a fresh, low-noise ciphertext of the same value without ever revealing it.

## The main modern schemes

| Scheme | Works on | Best for | Notes |
|---|---|---|---|
| **BFV** | Exact integers | Counting, matching, exact statistics | Packs thousands of values into one ciphertext and processes them in parallel (SIMD "batching") |
| **BGV** | Exact integers | Similar to BFV | Different noise management; efficient for deep circuits |
| **CKKS** | Approximate real numbers | Machine learning, statistics, analytics | Results carry tiny rounding errors, like floating-point arithmetic, which is fine for ML |
| **TFHE / FHEW** | Bits and small integers | Comparisons, `if/else` logic, lookup tables | Very fast bootstrapping (milliseconds); "programmable bootstrapping" evaluates a function while refreshing noise |

**Common open-source libraries:** Microsoft SEAL, OpenFHE, TFHE-rs and Concrete (Zama), Lattigo, HElib, and Apple's swift-homomorphic-encryption.

## Applications

| Area | How HE is used |
|---|---|
| **Cross-organization analytics** | One party encrypts its records; the other computes matches or aggregates over them without seeing them. Useful for fraud detection, credit risk, and customer-overlap analysis. |
| **Private machine-learning inference** | A user sends an encrypted input (for example a medical image) to a model hosted in the cloud and gets back an encrypted prediction. The model owner never sees the input. |
| **Password breach checks** | Microsoft Edge's *Password Monitor* uses HE to check your passwords against a breach database without revealing them to Microsoft. |
| **Private lookups** | Apple uses HE (BFV) for *Live Caller ID Lookup*, so a phone can query a spam-number database without revealing which number is calling. |
| **Private set intersection & ad measurement** | Google's *Private Join and Compute* combines Paillier HE with other cryptography to compute sums over the overlap of two datasets. |
| **Healthcare & genomics** | Researchers run statistics over encrypted patient or genetic data held by hospitals. |
| **Secure outsourcing** | Companies use cloud compute without trusting the cloud provider with the plaintext data. |

## Limitations to know

- **Performance:** HE computations are typically thousands to millions of times slower than plaintext, depending on the scheme and task. Hardware accelerators and better algorithms are closing the gap quickly.
- **Size:** ciphertexts can be hundreds to thousands of times larger than the original data.
- **Some operations are hard:** comparisons (`>`), sorting, and branching (`if`) are expensive in arithmetic schemes like BFV and CKKS.
- **The key holder sees the result:** HE protects the data *during* computation. Whoever decrypts the output can read it, so outputs still need governance.
- **Expertise needed:** choosing parameters, managing noise, and laying out data efficiently all require specialist knowledge.

## Key terms

| Term | Meaning |
|---|---|
| **Plaintext / ciphertext** | Readable data / its encrypted form |
| **Noise** | Randomness inside a ciphertext that hides the value; it grows with each operation |
| **Multiplicative depth** | The longest chain of multiplications in a computation; it determines how much noise budget you need |
| **Bootstrapping** | Homomorphically "re-encrypting" a ciphertext to reset its noise |
| **Batching (SIMD)** | Packing many values into one ciphertext so one operation processes them all |
