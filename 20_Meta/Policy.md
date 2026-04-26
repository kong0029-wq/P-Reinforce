# 🧠 P-Reinforce RL Policy

## Current Rewards Weights
- **w1 (Categorization Accuracy):** 0.4
- **w2 (Graph Connectivity):** 0.3
- **w3 (User Satisfaction):** 0.3

## Core Operational Logic
1. **State Analysis**: Scan `00_Raw/` and `10_Wiki/`. Check `20_Meta/Graph.json`.
2. **Action - Classification**:
   - High similarity (>= 85%): Map to existing folder.
   - Low similarity (< 85%): Propose/Create new category.
3. **Action - Linking**: Ensure every new document has at least 2 [[Links]].
4. **Action - Git**: Auto-commit with prefix `reinforce:`.

## Feedback History
*(Empty - Awaiting User interaction)*
