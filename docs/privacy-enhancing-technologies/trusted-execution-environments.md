# Trusted Execution Environments (TEE)

::: info At a glance
- **What it does:** runs code and data inside a hardware-isolated "vault" in the processor that even the operating system, the hypervisor, and the cloud provider cannot look into.
- **Trust model:** you trust the **chip manufacturer** and its hardware design, not the machine's owner or administrators.
- **Trade-off:** near-normal speed and supports any program, but security depends on the hardware having no exploitable flaws.
:::

## What is it?

On an ordinary computer, the operating system and anyone with admin rights can read the memory of every program. A **Trusted Execution Environment**, also called a *secure enclave* or *confidential computing*, is a protected area created by the CPU itself:

- **Isolation:** code outside the TEE cannot read or change what is inside, even with full admin or root access.
- **Memory encryption:** data inside the TEE is encrypted whenever it leaves the CPU for main memory, so physically probing the RAM chips reveals nothing.
- **Attestation:** the TEE can *prove* to a remote party exactly which code it is running (see below).

> **Analogy: a bank vault inside the building.** The building owner (the cloud provider) controls the doors, lights and cleaners, but the vault has its own lock built by the vault manufacturer. Only what you put inside, and the procedure you approved, can operate in there.

<figure class="pet-fig">
<svg viewBox="0 0 760 300" role="img" aria-label="Software stack: apps, operating system, hypervisor and firmware are untrusted; the enclave sits directly on the CPU, isolated from all of them.">
  <rect x="20" y="20" width="510" height="44" rx="8" class="box-bad"/>
  <text x="275" y="47" text-anchor="middle">Other apps &amp; malware</text>
  <rect x="20" y="72" width="510" height="44" rx="8" class="box-bad"/>
  <text x="275" y="99" text-anchor="middle">Operating system (kernel, admins)</text>
  <rect x="20" y="124" width="510" height="44" rx="8" class="box-bad"/>
  <text x="275" y="151" text-anchor="middle">Hypervisor / cloud provider</text>
  <rect x="20" y="176" width="510" height="44" rx="8" class="box-bad"/>
  <text x="275" y="203" text-anchor="middle">Firmware &amp; BIOS</text>
  <text x="275" y="14" text-anchor="middle" class="t-bad" style="font-size:12px">untrusted: cannot see inside the enclave</text>
  <rect x="560" y="20" width="180" height="200" rx="10" class="box-ok"/>
  <text x="650" y="56" text-anchor="middle" class="t-b">Enclave (TEE)</text>
  <text x="650" y="92" text-anchor="middle">your code</text>
  <text x="650" y="114" text-anchor="middle">+ your data</text>
  <text x="650" y="152" text-anchor="middle" class="t2">memory encrypted</text>
  <text x="650" y="172" text-anchor="middle" class="t2">isolated by the CPU</text>
  <text x="650" y="200" text-anchor="middle" class="t-ok">✓ protected</text>
  <line x1="545" y1="20" x2="545" y2="220" class="dash"/>
  <rect x="20" y="236" width="720" height="50" rx="8" class="box-brand"/>
  <text x="380" y="259" text-anchor="middle" class="t-b">CPU hardware: the root of trust</text>
  <text x="380" y="277" text-anchor="middle" class="t2">enforces isolation and holds keys burned in at the factory</text>
</svg>
<figcaption>In a normal system, every layer can see the layer above it. A TEE removes everything above the CPU from what you need to trust.</figcaption>
</figure>

## Remote attestation: "prove what you're running"

Isolation alone isn't enough. Before sending sensitive data to a TEE in someone else's data centre, you need proof that it is a *real* TEE running the *exact code you approved*. That is **remote attestation**:

<figure class="pet-fig">
<svg viewBox="0 0 760 250" role="img" aria-label="Attestation sequence: the enclave sends a signed report of its code hash to the data owner, who verifies the signature with the chip vendor, then sends encrypted data or keys to the enclave.">
  <defs><marker id="ah-tee" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="ah"/></marker></defs>
  <rect x="40" y="10" width="180" height="44" rx="8" class="box-ok"/>
  <text x="130" y="37" text-anchor="middle" class="t-b">Enclave</text>
  <rect x="290" y="10" width="180" height="44" rx="8" class="box"/>
  <text x="380" y="37" text-anchor="middle" class="t-b">Data owner</text>
  <rect x="540" y="10" width="180" height="44" rx="8" class="box-brand"/>
  <text x="630" y="37" text-anchor="middle" class="t-b">Chip vendor</text>
  <line x1="130" y1="54" x2="130" y2="240" class="dash"/>
  <line x1="380" y1="54" x2="380" y2="240" class="dash"/>
  <line x1="630" y1="54" x2="630" y2="240" class="dash"/>
  <line x1="130" y1="100" x2="374" y2="100" class="arrow" marker-end="url(#ah-tee)"/>
  <text x="255" y="90" text-anchor="middle" style="font-size:13px">① signed report: hash of code</text>
  <line x1="380" y1="140" x2="624" y2="140" class="arrow" marker-end="url(#ah-tee)"/>
  <text x="505" y="130" text-anchor="middle" style="font-size:13px">② is this signature genuine?</text>
  <line x1="630" y1="180" x2="386" y2="180" class="arrow" marker-end="url(#ah-tee)"/>
  <text x="505" y="170" text-anchor="middle" style="font-size:13px">③ yes, real chip ✓</text>
  <line x1="380" y1="220" x2="136" y2="220" class="arrow" marker-end="url(#ah-tee)"/>
  <text x="255" y="210" text-anchor="middle" style="font-size:13px">④ send data / keys (encrypted)</text>
</svg>
<figcaption>Data is released only after the owner has checked that the enclave is genuine hardware running the expected code. Any change to the code changes its hash.</figcaption>
</figure>

1. The enclave asks the CPU to produce a **report** containing a cryptographic hash (a *measurement*) of the code loaded into it, signed with a key that only genuine chips possess.
2. The data owner checks that signature against the **chip vendor's** certificate chain.
3. If the signature is valid *and* the hash matches the code they reviewed, they know exactly what will process their data.
4. They then open an encrypted channel straight into the enclave and send data or decryption keys.

A related feature, **sealing**, lets an enclave encrypt data so that only the same code on the same chip can decrypt it later.

## Types of TEE

| Technology | Vendor | What is protected | Typical use |
|---|---|---|---|
| **Intel SGX** | Intel | A single process's *enclave* (part of an app) | Fine-grained secrets, key management |
| **Intel TDX** | Intel | An entire virtual machine | Lift-and-shift confidential cloud VMs |
| **AMD SEV-SNP** | AMD | An entire virtual machine | Confidential VMs on major clouds |
| **ARM TrustZone** | ARM | A separate "secure world" on the chip | Phones: payments, fingerprint/face data, DRM |
| **ARM CCA** | ARM | Isolated "realms" (VMs) | Next-generation ARM servers & devices |
| **NVIDIA Confidential Computing** | NVIDIA | GPU memory and workloads (H100 and later) | Confidential AI training and inference |
| **AWS Nitro Enclaves** | AWS | Isolated VM partitions on the Nitro system | Processing secrets on AWS |

**Process-level** TEEs (like SGX) give a very small trusted code base but require apps to be split or adapted. **VM-level** TEEs (TDX, SEV-SNP) run unmodified software, but you trust the whole guest operating system inside the VM.

## Applications

| Area | How TEEs are used |
|---|---|
| **Confidential cloud computing** | Run sensitive workloads on public cloud without the cloud provider being able to read them. Offered as "confidential VMs" by Azure, Google Cloud and AWS. |
| **Data clean rooms** | Several organizations send encrypted data into an attested enclave that runs only an agreed analysis and releases only agreed outputs. |
| **Confidential AI** | Protect both the model's weights and users' prompts or data while a model runs on someone else's GPUs. |
| **Mobile security** | Phones store fingerprints, face data and payment keys in a TEE (TrustZone or Apple's Secure Enclave). |
| **Private contact discovery** | Signal uses SGX enclaves so it can match your contacts against its users without learning your address book. |
| **Key management** | Protecting cryptographic keys and signing operations, similar to a hardware security module. |

## Limitations to know

- **You must trust the vendor.** The security rests on Intel, AMD, ARM, or NVIDIA having designed and manufactured the chip correctly and keeping their signing keys safe.
- **Side-channel attacks:** researchers have repeatedly extracted secrets from TEEs by measuring timing, power use, or cache behaviour (for example *Foreshadow*, *Plundervolt*, *SGAxe*). Vendors patch these, but the risk is real.
- **Attestation is easy to get wrong:** if the data owner doesn't actually verify the report and the code hash, the protection is much weaker.
- **Bugs inside the enclave still matter:** a TEE protects code from the outside world, not from its own vulnerabilities.
- **Resource limits:** some TEEs (notably older SGX) had small protected-memory sizes, which made large workloads slow.

::: tip TEE vs. cryptographic PETs
TEEs are fast and flexible but rely on **trusting hardware**. HE, SMPC and ZKP are slower but rely only on **mathematics**. Many systems combine them, for example using a TEE for speed and cryptography to limit the damage if the hardware is ever broken.
:::
