# No-Code AI Query Builder

Tasks inside a Collaboration Room are SQL queries, but you don't have to write SQL to create one.

## Manual builder

Pick two of the room's datasets as Table 1 and Table 2, choose the matching column to join them on, choose which columns to return, optionally add aggregate functions (MIN, MAX, COUNT, SUM, AVG) over a chosen column, and optionally add WHERE-style filter conditions (`=`, `<`, `>`). PryvX assembles the SQL from these choices — you never type it directly, though you can review it before running.

## AI Suggested Analysis

Instead of building a query field-by-field, switch to the **AI Suggested Analysis** tab, pick the two datasets involved, and describe what you want in plain language — for example, *"show me the total transaction amount per month for accounts that appear in both tables."* PryvX returns one or more suggested queries, each with a title, the generated SQL, and a plain-language description. Selecting **Execute Task** saves that suggestion as the task's query.

## Why no-code matters here

This puts task creation in reach of fraud analysts, credit risk officers, and compliance teams — not just engineers who can write SQL against a schema they may not fully understand. The underlying [query permission](/overview/query-permissions-and-credits) granted to the task's creator still governs what the task is allowed to return, regardless of which builder was used.

Try it yourself: [Building and Running a Task](/how-to-guide/building-and-running-a-task).
