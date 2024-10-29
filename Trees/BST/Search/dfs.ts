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

/*
    COMPLEXITY ANALYSIS:
    - Time: Runs in the range of O(logN) and O(N)
    - Space: Runs in the range of O(h) where h is the height of the tree thus O(logN) for balanced trees or O(N) for unbalanced trees.
*/
