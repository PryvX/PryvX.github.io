# Building and Running a Task

A task is a SQL query defined against two of the room's datasets. You can build one manually or ask PryvX to suggest one.

## Configuration

1. From the room's **Task** tab, select **Add Task**.
2. Give the task a **name**.
3. Under **Configuration**, choose **Table 1** and **Table 2** from the room's connected datasets.

## Option A: Manual builder

With the **Manual** tab active:

1. **Join** — choose the matching column from Table 1 and Table 2 to join the datasets on (typically a hashed identifier both parties sanitized with the same key).
2. **Column Selection** — choose which columns the task should return.
3. **Aggregate** *(optional)* — add one or more aggregate functions (`MIN`, `MAX`, `COUNT`, `SUM`, `AVG`) over a chosen column.
4. **Conditions** *(optional)* — add WHERE-style filters (`=`, `<`, `>`) against a column and a value; for low-cardinality columns, PryvX offers a dropdown of sample values instead of free text.
5. Select **Create Task**. PryvX assembles the SQL from your choices.

## Option B: AI Suggested Analysis

With the **AI Suggested Analysis** tab active:

1. Type a plain-language description of the analysis you want, for example *"count matching accounts between these two tables with a transaction over 1000."*
2. PryvX returns one or more suggestions, each with a title, the generated SQL, and a description.
3. Select **Execute Task** on the suggestion you want. Note that AI-generated tasks can't be edited afterward the way manual tasks can.

## Running the task

Open the saved task and select **Run Query**. This:

- Consumes **one credit** from your account (you'll be blocked if your balance is zero — see [Query Permissions & Credits](/overview/query-permissions-and-credits)).
- Executes the SQL against the room's connected datasets.
- Populates the **Overlap Analysis** chart panel (when the query shape supports it) and the **Task Result** table.

Continue to [Reviewing Task Results](/how-to-guide/reviewing-results).
