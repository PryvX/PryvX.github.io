# Privacy-Enhancing Technologies

PryvX composes several complementary Privacy-Enhancing Technologies (PETs). Each workload is routed to the technique best suited to its data shape, latency, and trust requirements.

## Fully Homomorphic Encryption (FHE)

Allows computation directly on encrypted values — the result, once decrypted, matches what the computation would have produced on the plaintext. PryvX uses FHE (and additive secret-sharing schemes) for computations such as private set intersection and encrypted scoring, where a single party's data must remain encrypted even from the compute infrastructure itself. These schemes are selected with post-quantum resistance in mind.

## Secure Multiparty Computation (MPC)

Splits a computation across two or more parties such that no single party ever reconstructs another party's input. PryvX uses MPC for joint analyses like threat-intelligence matching, where several independent organizations each contribute an input to a shared function (e.g. "does this indicator appear in more than one party's list?") without revealing their own list to anyone else.

## Federated Learning

Trains a shared model without centralizing training data. Each participant trains locally on its own data and shares only model updates (gradients or weights), which are aggregated centrally or via secure aggregation. PryvX uses this for use cases like IoT and device security, where thousands of endpoints improve a shared detection model without ever exporting raw telemetry.

## Differential Privacy

Adds calibrated statistical noise to query results or model outputs so that no individual record can be re-identified from the output, even by an adversary with auxiliary information. PryvX applies differential privacy to aggregate statistics and model outputs where the risk is not the joint computation itself but what an adversary could infer from repeated queries against it.

## Zero-Knowledge Proofs (ZKPs)

Let one party prove a statement about its data ("this transaction pattern matches known fraud typologies", "this dataset was processed by certified code") without revealing the underlying data. PryvX uses ZKPs and attestation evidence to let participants verify that a joint computation ran correctly, without needing to see each other's inputs or the clean room's internal state.

## Confidential Computing

The hardware foundation underneath all of the above — see [Confidential Clean Rooms](/overview/confidential-clean-rooms) for how Trusted Execution Environments and remote attestation are combined with these cryptographic techniques.
