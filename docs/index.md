# Welcome

Welcome to the PryvX documentation. PryvX is a PET (Privacy-Enhancing Technology) data collaboration platform: it lets two or more organizations run a shared SQL analysis over their combined data inside a managed **Collaboration Room**, without any party ever handing its raw data to the other, or to PryvX.

This documentation covers what PryvX is, how privacy is protected in practice, the features of the platform, real-world use cases, and a step-by-step how-to guide for setting up and running your first collaboration end to end.

Each Collaboration Room has an owner and invited collaborators, an expiry date, and a set of datasets connected to it — either uploaded directly or connected from Google Cloud Storage, AWS S3, or Azure Blob Storage. Before any data is added, PryvX asks each party to locally hash or remove personally identifiable fields (email, phone, name) using a shared per-room key, so join keys can still be matched across parties without either party seeing the other's raw identifiers. Once datasets are connected, any collaborator with the right query permission can build a no-code SQL task — manually, or by describing the analysis in plain language — and run it against the room's data.

## Where to start?

- New to PryvX? Start with [How PryvX Works](/overview/how-pryvx-works) for a high-level walkthrough of a Collaboration Room from creation to result.
- Want to know how privacy is protected? Read [Privacy & PII Handling](/overview/privacy-and-pii-handling).
- Evaluating PryvX for your organization? Jump to [Features](/features) for platform capabilities, or [Use Cases](/use-cases) to see how it's applied.
- Ready to build? Follow the [How-To Guide](/how-to-guide/creating-a-collaboration-room) to create a room, hash and add your data, invite collaborators, and run your first task.

## What is a PET data collaboration platform?

A **Privacy-Enhancing Technology (PET) data collaboration platform** lets two or more parties analyze their combined data — matching records, scoring risk, measuring overlap — without exchanging raw datasets. PryvX's current approach centers on two mechanisms working together:

1. **Local pre-processing**: each party hashes or strips personally identifiable columns on their own machine, using PryvX's open-source PII-sanitizer tool, before any data reaches the platform.
2. **A permissioned, expiring Collaboration Room**: datasets are connected (not copied out to other parties), collaborators are granted one of three query permission tiers, and every task run is scoped, credited, and tied to an audit-ready report.

PryvX's broader roadmap includes additional PETs — homomorphic encryption, secure multiparty computation, and federated learning — which are referenced in the platform's positioning and are under active development; this documentation describes what is available in the product today, and calls out roadmap items explicitly where relevant.

## Getting help

- **Email**: [hello@pryvx.com](mailto:hello@pryvx.com)
- **Solutions overview**: see the [Solutions](/solutions) page for a summary of every PryvX capability
- **Office**: Östermalmsgatan 26A, Stockholm, Sweden
