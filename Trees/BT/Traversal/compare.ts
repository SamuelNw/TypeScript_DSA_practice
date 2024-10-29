/*
    COMPARE:
    - Compares two trees to check if they are similar in both structure and values:
*/

import { TreeNode } from "../utils/node";

// IMPLEMENTATION USING DFS (Because DFS maintains structure)

function compare(a: TreeNode | null, b: TreeNode | null): boolean {
    if (a === null && b === null) return true;

    if (a === null || b === null) return false;

    if (a.value !== b.value) return false;

    return compare(a.left, b.left) && compare(a.right, b.right);
}
