# Welcome

Welcome to the PryvX documentation. PryvX is a Privacy-Enhancing Technology (PET) data collaboration platform that lets organizations run joint computations and analyses on sensitive data **without ever sharing or exposing the underlying raw data**. Banks, telecoms, healthcare providers, and government agencies use PryvX to collaborate on fraud detection, credit risk, threat intelligence, and more, while keeping every dataset under its owner's control at all times.

This documentation covers what PryvX is, the privacy-enhancing technologies it is built on, the features of the platform, real-world use cases across regulated industries, and a step-by-step how-to guide for setting up and running your first cross-party collaboration.

Under the hood, PryvX combines confidential computing (hardware-backed Trusted Execution Environments with remote attestation), Fully Homomorphic Encryption, Secure Multiparty Computation, Federated Learning, Differential Privacy, and Zero-Knowledge Proofs into a single, cloud-agnostic clean room. Data providers encrypt data at the source; it is only ever decrypted inside an attested, isolated environment that even the platform operator cannot inspect, and the environment is scrubbed the moment the job completes.

## Where to start?

- New to PryvX? Start with [How PryvX Works](/overview/how-pryvx-works) for a high-level introduction to the platform and the problem it solves.
- Want to know what's under the hood? Read [Privacy-Enhancing Technologies](/overview/privacy-enhancing-technologies) and [Confidential Clean Rooms](/overview/confidential-clean-rooms).
- Evaluating PryvX for your organization? Jump to [Features](/features) for platform capabilities, or [Use Cases](/use-cases) to see how banks, telecoms, and regulators are already using it.
- Ready to build? Follow the [How-To Guide](/how-to-guide/creating-a-workspace) to create a workspace, connect a data source, and run your first joint analysis end to end.
- Integrating programmatically? See the [API Reference](/api-reference) for authentication, workspaces, data connections, and computations.

## What is a PET data collaboration platform?

A **Privacy-Enhancing Technology (PET) data collaboration platform** allows two or more parties to compute jointly over their combined data — training a model, scoring a transaction, matching a threat indicator — while each party's raw data never leaves its own environment in usable form. Instead of exchanging datasets, parties exchange encrypted values, model updates, or attested computations, and only the final, agreed-upon result is revealed. This lets organizations collaborate across company and jurisdictional boundaries without breaching banking secrecy, data protection law (GDPR, PDPA, and similar regimes), or competitive confidentiality.

PryvX packages these techniques — confidential clean rooms, homomorphic encryption, MPC, federated learning, differential privacy, and zero-knowledge proofs — behind a no-code interface, so analysts can request a joint analysis in plain language without writing SQL, cryptography code, or infrastructure configuration.

## Getting help

- **Email**: [hello@pryvx.com](mailto:hello@pryvx.com)
- **Solutions overview**: see the [Solutions](/solutions) page for a summary of every PryvX capability and where to learn more
- **Office**: Östermalmsgatan 26A, Stockholm, Sweden
