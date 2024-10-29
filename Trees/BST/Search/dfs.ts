/*
    DFS TRAVERSAL ON BSTs:
    - Key concept -> Left child values are less, and right child values are greater than the node itself. 
    - This ordering enables efficient searching, insertion, and deletion.
*/

import { TreeNode } from "../../utils/node";

function dfs(head: TreeNode | null, needle: number): boolean {
    if (!head) return false;

    if (head.value === needle) return true;

    return needle < head.value
        ? dfs(head.left, needle)
        : dfs(head.right, needle);
}
