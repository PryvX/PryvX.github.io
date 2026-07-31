# Reviewing Task Results

Opening a task after it has run shows three things: the query itself, an overlap analysis (when applicable), and the result table.

## SQL Query

The exact SQL that was run (or will run), with a **Run Query** button for the task's creator and an **Edit** button for manually built tasks (AI-generated tasks can't be edited).

## Overlap Analysis

If the task's shape supports it, an expandable panel shows chart-based analysis of the result — this is only visible to the task's creator, and only after the query has been run at least once.

## Task Result

An expandable panel showing the first rows of the result table and the total row count. From here you can download the full result — see [Exporting Results](/how-to-guide/exporting-insights).

## Task Detail

A card showing the task's creation date, the requester's email, its status, and total transaction/row count — see [Understanding Task Status & Credits](/how-to-guide/reviewing-results/understanding-task-status-and-credits) for what these mean.

## Re-running a task

Selecting **Run Query** again re-executes the same SQL and consumes another credit; there's currently no separate "re-run with new parameters" action — to change the query, edit a manual task (or create a new one for an AI-generated task) before running it again.
