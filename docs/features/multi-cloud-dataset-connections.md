# Multi-Cloud Dataset Connections

Datasets can be added to a Collaboration Room either by uploading a file directly, or by connecting a file that already lives in your own cloud storage.

## Upload

Upload a CSV through the browser in a three-step flow: select the file, preview its contents, then name the dataset and add a description. Column names and types are detected automatically. See [Adding a Dataset](/how-to-guide/adding-a-dataset).

## Connect

Instead of uploading a copy, point PryvX at a file already sitting in your own cloud storage:

- **Google Cloud Storage** — bucket name, file path and type, region, and a service account (client email, private key ID, private key).
- **AWS S3** — bucket name, file path and type, region, and an access key ID / secret access key.
- **Azure Blob Storage** — container name, account name and key, file path and type.

In every case, PryvX reads the file's schema and column types but does not copy the underlying data out of your storage account into a location any other party can browse.

## Why this matters

Regulated organizations frequently can't move data outside infrastructure they control. Connecting a dataset in place — rather than requiring an upload — lets a data owner keep their file exactly where it already is while still making it queryable inside the room.
