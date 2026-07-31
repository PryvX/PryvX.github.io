# No-Code AI & Analysis

PryvX lets analysts leverage LLMs to run joint analyses and generate insights — without writing SQL or complex queries against the underlying encrypted data.

## How it works

Instead of writing a query against a schema you cannot see the contents of, you describe the analysis you want ("flag customers appearing in both datasets with a combined risk score above 0.8") in the workspace's query builder. PryvX's LLM-assisted layer translates that request into the appropriate privacy-preserving computation — an MPC join, an FHE-based score, or a federated model inference — and validates it against the active collaboration contract before it is allowed to run.

## Why no-code matters here

Traditional data collaboration tooling requires analysts to understand both SQL and the cryptographic primitives underneath, which puts joint analysis out of reach for most business and compliance teams. By moving that translation into the platform, PryvX lets subject-matter experts — fraud analysts, credit risk officers, threat-intel researchers — design and run analyses directly, while the underlying [Privacy-Enhancing Technologies](/overview/privacy-enhancing-technologies) and contract enforcement stay exactly as strict as if an engineer had hand-written the computation.

## Try it yourself

Walk through the full flow, from describing an analysis to reviewing its attested result, in [Running a Joint Analysis](/how-to-guide/running-a-joint-analysis).
