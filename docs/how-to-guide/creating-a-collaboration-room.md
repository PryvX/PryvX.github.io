# Creating a Collaboration Room

A Collaboration Room is the container for one collaboration: its participants, its datasets, and its tasks.

## Steps

1. From **Collaboration Room** in the sidebar, select **+ Create Collaboration Room**.
2. Enter a **name** for the room (required).
3. Enter an optional **description**.
4. Set a **Date Expired** — a required future date after which the room automatically becomes read-only, to protect its data's integrity and privacy once the collaboration is done.
5. Under **Invite collaborators**, add one or more collaborators by **company email**. Each is added with the ability to contribute data.
6. Select **Create Room**.

## What happens on creation

- The room is saved with you as its owner.
- PryvX generates a random secret key for the room and emails it, along with an invitation, to every invited collaborator and to you as the owner. This is the key used in [Hashing PII Before Upload](/how-to-guide/hashing-pii-before-upload).
- Invited collaborators show as `Pending` until they open the room and accept the invitation — they can't add data or create tasks until they do.

## Next steps

Before adding any data, make sure every party has [hashed or removed PII locally](/how-to-guide/hashing-pii-before-upload). Then continue to [Adding a Dataset](/how-to-guide/adding-a-dataset) and [Inviting Collaborators & Query Permissions](/how-to-guide/inviting-collaborators-and-query-permissions) (if you need to add permissions beyond the initial invite).
