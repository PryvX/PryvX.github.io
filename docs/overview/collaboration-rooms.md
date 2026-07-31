# Collaboration Rooms

A **Collaboration Room** is the container for everything in a PryvX collaboration: who's involved, what data is connected, and what analyses have been run.

## Structure

Every room has:

- **A name and optional description**, set at creation.
- **An owner** — the creator, who can invite collaborators, add or connect datasets, and delete the room.
- **Collaborators** — invited by company email, each with a status (`Pending` until they accept the invitation, then `Approved`) and a set of [query permissions](/overview/query-permissions-and-credits).
- **An expiry date**, set at creation and shown as the room's status: `Active` until that date, `Ended` after it. Once ended, no new collaborators, datasets, or tasks can be added — the room becomes read-only for whatever was already in it.

## The three tabs

Opening a room shows three tabs:

- **Collaborator** — the owner plus every invited collaborator, their approval status, and permissions.
- **Data** — every dataset connected to the room, whether uploaded directly or connected from cloud storage. See [Adding a Dataset](/how-to-guide/adding-a-dataset).
- **Task** — every SQL task defined against the room's datasets, and its results. See [Building and Running a Task](/how-to-guide/building-and-running-a-task).

## Invitations

Creating a room or adding a collaborator sends two emails to each invited party: a room invitation, and the room's shared secret key used for [local PII hashing](/overview/privacy-and-pii-handling). A collaborator must accept the invitation before they can add data or create tasks in the room — until then, the room shows as a pending invitation for them.

## Deleting a room

The owner can delete a room at any time from the room list. Deletion is permanent and removes the room's collaborator list, datasets, and tasks.
