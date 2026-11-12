# Secure Multiparty Computation (SMPC)

::: info At a glance
- **What it does:** lets several parties jointly compute a result from their combined private inputs, while each party learns **only the result** and nothing about the others' inputs.
- **Trust model:** no single trusted party. Security holds as long as not too many participants collude, with the exact threshold depending on the protocol.
- **Trade-off:** parties must exchange a lot of messages, so the network is usually the bottleneck.
:::

## What is it?

Imagine you could hand everyone's data to a perfectly honest, incorruptible referee who computes the answer, announces it, and then forgets everything. **SMPC is a cryptographic protocol that gives you the same outcome without needing the referee.**

<figure class="pet-fig">
<svg viewBox="0 0 760 280" role="img" aria-label="Left: in the ideal world, a trusted third party sees every input. Right: with MPC, parties exchange random-looking shares and get the same answer with no one in the middle.">
  <defs><marker id="ah-mpc1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="ah"/></marker></defs>
  <rect x="10" y="10" width="360" height="260" rx="12" class="box"/>
  <text x="190" y="40" text-anchor="middle" class="t-b">Without MPC: a trusted middleman</text>
  <rect x="115" y="70" width="150" height="48" rx="8" class="box-warn"/>
  <text x="190" y="99" text-anchor="middle">Trusted party</text>
  <text x="190" y="140" text-anchor="middle" class="t-bad">sees every input</text>
  <line x1="80" y1="196" x2="150" y2="122" class="arrow" marker-end="url(#ah-mpc1)"/>
  <line x1="190" y1="196" x2="190" y2="122" class="arrow" marker-end="url(#ah-mpc1)"/>
  <line x1="300" y1="196" x2="230" y2="122" class="arrow" marker-end="url(#ah-mpc1)"/>
  <rect x="30" y="200" width="100" height="36" rx="8" class="box"/>
  <text x="80" y="223" text-anchor="middle">Alice</text>
  <rect x="140" y="200" width="100" height="36" rx="8" class="box"/>
  <text x="190" y="223" text-anchor="middle">Bob</text>
  <rect x="250" y="200" width="100" height="36" rx="8" class="box"/>
  <text x="300" y="223" text-anchor="middle">Carol</text>
  <text x="190" y="258" text-anchor="middle" class="t2">only safe if the middleman is trustworthy</text>
  <rect x="390" y="10" width="360" height="260" rx="12" class="box-brand"/>
  <text x="570" y="40" text-anchor="middle" class="t-b">With MPC: no one in the middle</text>
  <rect x="420" y="80" width="100" height="36" rx="8" class="box"/>
  <text x="470" y="103" text-anchor="middle">Alice</text>
  <rect x="620" y="80" width="100" height="36" rx="8" class="box"/>
  <text x="670" y="103" text-anchor="middle">Bob</text>
  <rect x="520" y="190" width="100" height="36" rx="8" class="box"/>
  <text x="570" y="213" text-anchor="middle">Carol</text>
  <line x1="524" y1="98" x2="616" y2="98" class="arrow" marker-start="url(#ah-mpc1)" marker-end="url(#ah-mpc1)"/>
  <line x1="490" y1="120" x2="548" y2="186" class="arrow" marker-start="url(#ah-mpc1)" marker-end="url(#ah-mpc1)"/>
  <line x1="650" y1="120" x2="592" y2="186" class="arrow" marker-start="url(#ah-mpc1)" marker-end="url(#ah-mpc1)"/>
  <text x="570" y="88" text-anchor="middle" class="t2">shares</text>
  <text x="570" y="150" text-anchor="middle" class="t2">random-looking</text>
  <text x="570" y="165" text-anchor="middle" class="t2">messages</text>
  <text x="570" y="258" text-anchor="middle" class="t-brand">same answer, no input revealed</text>
</svg>
<figcaption>MPC replaces a trusted third party with a protocol. The result is the same, but nobody gets to see everyone's data.</figcaption>
</figure>

The field began with **Andrew Yao's "Millionaires' Problem" (1982)**: two millionaires want to know who is richer without revealing how much either of them has.

## A worked example: the average salary

Alice, Bob and Carol want to know their **average salary** without anyone revealing their own. They use **additive secret sharing**.

**Step 1: split.** Each person splits their salary into three random-looking numbers, called *shares*, that add up to the real value:

| | Share for Alice | Share for Bob | Share for Carol | Real value |
|---|---|---|---|---|
| Alice's salary | 12 | 25 | 13 | 50 |
| Bob's salary | −8 | 41 | 37 | 70 |
| Carol's salary | 30 | −15 | 75 | 90 |

**Step 2: distribute.** Each person keeps one share and sends one to each of the others. Any single share, such as Bob's "41", reveals nothing about the salary it came from.

**Step 3: add up locally.** Each person adds the shares they received, one column of the table:

| | Alice | Bob | Carol |
|---|---|---|---|
| Sum of shares held | 12 − 8 + 30 = **34** | 25 + 41 − 15 = **51** | 13 + 37 + 75 = **125** |

**Step 4: combine.** They publish only these sums: 34 + 51 + 125 = **210**, so the average is **70**. ✓

Nobody ever saw anyone else's salary, only meaningless fragments. In real protocols, shares are random numbers *modulo* a large prime, so a share truly looks like random noise.

## Core techniques

| Technique | How it works | Good for |
|---|---|---|
| **Secret sharing** | Split each value into shares held by different parties, as in the example above. **Shamir's scheme** (1979) lets any *t* of *n* shares rebuild the secret, while fewer than *t* reveal nothing. | Many parties, arithmetic (sums, averages, ML) |
| **Garbled circuits** (Yao) | One party turns the function into an "encrypted" Boolean circuit; the other evaluates it without learning intermediate values. Only a constant number of communication rounds is needed. | Two parties, comparisons and logic |
| **Oblivious transfer (OT)** | A building block: a receiver gets one of several messages from a sender, the sender doesn't learn which one, and the receiver learns nothing about the others. | Used inside garbled circuits and many other protocols |
| **HE-based MPC** | Parties use homomorphic encryption to do part of the joint computation on encrypted values. | Reducing communication |
| **Private Set Intersection (PSI)** | A specialized protocol that finds the items two parties have in common, without revealing anything else. | Matching customers, fraud lists, contacts |

### Private Set Intersection: the most common business use

<figure class="pet-fig">
<svg viewBox="0 0 760 230" role="img" aria-label="Two overlapping sets: the bank's customers and the telco's customers. Only the overlap, or just its size, is revealed.">
  <circle cx="320" cy="115" r="100" class="set-a"/>
  <circle cx="440" cy="115" r="100" class="set-b"/>
  <text x="255" y="110" text-anchor="middle" class="t-b">Bank's</text>
  <text x="255" y="130" text-anchor="middle" class="t-b">customers</text>
  <text x="255" y="155" text-anchor="middle" class="t2">stay hidden</text>
  <text x="505" y="110" text-anchor="middle" class="t-b">Telco's</text>
  <text x="505" y="130" text-anchor="middle" class="t-b">customers</text>
  <text x="505" y="155" text-anchor="middle" class="t2">stay hidden</text>
  <text x="380" y="108" text-anchor="middle" class="t-brand">In both</text>
  <text x="380" y="128" text-anchor="middle" class="t2">revealed</text>
</svg>
<figcaption>PSI reveals only the overlap, or variants can reveal just its size or a statistic over it, such as the total fraud losses among shared customers.</figcaption>
</figure>

## Security models, in plain terms

Every MPC protocol states what kind of misbehaviour it can withstand:

- **Semi-honest (honest-but-curious):** parties follow the protocol but try to learn extra information from what they see. Faster.
- **Malicious:** parties may lie, send bad messages, or deviate in any way. Stronger, but slower.
- **Honest majority vs. dishonest majority:** some protocols are secure only if most parties are honest. Others stay secure even if all but one party collude.

## Applications

| Area | Example |
|---|---|
| **Auctions** | The 2008 **Danish sugar beet auction** was the first large-scale commercial MPC deployment, setting market prices without revealing farmers' individual bids. |
| **Pay-equity studies** | The **Boston Women's Workforce Council** used MPC so employers could contribute salary data to a city-wide gender pay gap study without revealing their own payroll. |
| **Crypto custody** | "MPC wallets" split a private key across several devices or companies, so no single place ever holds the whole key. |
| **Fraud & financial crime** | Banks and telecoms check whether a phone number, account, or device appears on each other's risk lists using PSI. |
| **Advertising measurement** | Advertisers and platforms measure how many ad viewers later bought something, without swapping customer lists. |
| **Privacy-preserving ML** | Training or running models over data split across organizations, for example with Meta's CrypTen. |

**Common frameworks:** MP-SPDZ, EMP-toolkit, MOTION, Sharemind, CrypTen.

## Limitations to know

- **Communication-heavy:** parties exchange many messages, so latency and bandwidth matter more than CPU.
- **Everyone must take part:** typically all parties need to be online while the computation runs.
- **Collusion assumptions:** if enough parties collude, beyond the protocol's threshold, privacy can break.
- **The output itself can leak:** if the result is "the average of two salaries" and you know your own, you can work out the other. Function design and output controls still matter.
