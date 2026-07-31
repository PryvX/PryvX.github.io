# How PryvX Works

Two organizations often need to answer a question that spans both of their data — *does this phone number appear in both our fraud lists? how much does our customer base overlap with theirs? does this applicant's data at another lender change their risk score?* — without handing each other raw customer records.

PryvX addresses this with a **Collaboration Room**: a shared workspace, scoped to one collaboration, where each party connects its own data and only pre-agreed query outputs are ever visible to the other side.

## The lifecycle of a room

1. **Create a room.** An owner names the room, gives it a description, and sets an expiry date. See [Creating a Collaboration Room](/how-to-guide/creating-a-collaboration-room).
2. **Invite collaborators.** The owner invites one or more collaborators by company email, and grants each one a query permission tier. PryvX emails every participant (including the owner) an invitation and a per-room secret key.
3. **Hash PII locally, then add data.** Before uploading or connecting anything, each party runs PryvX's local PII-sanitizer tool over their file, hashing identifying columns with the room's secret key. Data is then either uploaded as a CSV or connected directly from cloud storage. See [Privacy & PII Handling](/overview/privacy-and-pii-handling) and [Adding a Dataset](/how-to-guide/adding-a-dataset).
4. **Build a task.** Any collaborator with permission defines a SQL task against two of the room's datasets — either with the no-code join/filter/aggregate builder, or by describing the analysis in plain language and accepting an AI-suggested query.
5. **Run the task.** Running a task consumes one credit and executes the query against the connected datasets. The result — a data table and, where applicable, an overlap chart — is shown only to the task's creator inside the room.
6. **Export or report.** Results can be downloaded as CSV, and the room owner can generate a PDF audit & compliance report covering any date range for compliance review.

## Why this matters

- **No bulk data export** — a party's dataset is connected to the room, not copied out to the other side; only query results leave the room.
- **PII never reaches PryvX in the clear** — identifying columns are hashed on the data owner's own machine before anything is uploaded or connected.
- **Every action is scoped and expiring** — rooms, permissions, and credits all bound what can happen and for how long.

Continue to [Collaboration Rooms](/overview/collaboration-rooms) for the room's structure, or [Privacy & PII Handling](/overview/privacy-and-pii-handling) for how the hashing step works.
