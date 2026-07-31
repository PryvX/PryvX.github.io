# Confidential Clean Rooms

A **confidential clean room** is the secure environment inside which PryvX runs every joint computation. Datasets from multiple trusted data providers (TDPs) are processed together for the benefit of a trusted data consumer (TDC), while technical controls — not just contracts — prevent any party, including the clean room operator, from accessing data outside the terms agreed for that job.

## Hardware foundation: Trusted Execution Environments

PryvX's clean rooms run inside Trusted Execution Environments (TEEs) — secure regions of modern processors that use hardware-based memory encryption to isolate code and data from everything else on the machine, including the host operating system, hypervisor, and cloud administrators. PryvX supports the major TEE families:

- Intel SGX and TDX
- AMD SEV-SNP
- Arm CCA
- NVIDIA Confidential GPUs (for confidential model training and inference)

## Remote attestation

Before any encrypted dataset is released into a clean room, the TEE must produce **attestation evidence** — a cryptographic proof of exactly which code is running and that it is executing on genuine, unmodified hardware. PryvX's key-release protocol only hands over decryption keys once this attestation has been independently verified, ensuring a compromised or substituted clean room can never obtain the keys needed to decrypt participant data.

## Confidential containers

Rather than requiring participants to write low-level enclave code, PryvX packages computations as **confidential containers** — standard container images that run inside a TEE-backed runtime. This is supported across major cloud providers, including AWS Nitro Enclaves, Google Confidential Space, and Azure Confidential Container Instances, and on-premise via the same primitives — see [Deployment Models](/overview/deployment-models).

## What the clean room guarantees

1. Raw datasets are decrypted **only** inside the isolated environment, immediately before use.
2. Raw data and all intermediate state generated during the job remain protected from every external party — including the data consumer, PryvX as the clean room provider, and the underlying cloud environment.
3. The contract governing the job (which datasets, which computation, which outputs) is enforced automatically during execution, not just on paper.
4. The entire pipeline is attestable end to end — any participant can independently verify what ran.
5. All sensitive state is automatically scrubbed the moment the job completes.

## Typical job lifecycle

1. The data consumer submits a computation request with a signed contract describing the datasets, the computation, and the permitted outputs.
2. PryvX caches the relevant encrypted datasets — without ever being able to decrypt them.
3. A confidential clean room is launched from certified, versioned code.
4. The contract's authenticity and terms are verified against the request.
5. The key-release protocol exchanges decryption keys for valid attestation evidence.
6. Datasets are decrypted and the computation runs entirely inside the isolated environment.
7. The result — and only the result — is released to the data consumer, together with validation metrics and an attestation log.

This same lifecycle is what you will walk through hands-on in the [How-To Guide](/how-to-guide/creating-a-workspace), starting from creating a workspace through to exporting the final, attested result.
