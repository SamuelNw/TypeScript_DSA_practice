/*
    PRE-ORDER TRAVERSAL:
    - Preorder traversal of a tree is a depth-first traversal method where the nodes are visited in the following order:
         root, left subtree, and then right subtree. Starting from the root, you first process the current node’s value, 
         then recursively traverse the left subtree, followed by the right subtree. This traversal method ensures that the 
         root node is visited before its child nodes. 
    - Preorder is useful in scenarios like copying a tree or evaluating prefix expressions, where knowing the structure 
    from the top-down is essential. The time complexity is O(n), where n is the number of nodes in the tree.
*/

import { TreeNode } from "../utils/node";

// IMPLEMENTATION:

function traverse(node: TreeNode | null, path: number[]): number[] {
    if (!node) return path;

    path.push(node.value);
    traverse(node.left, path);
    traverse(node.right, path);

    return path;
}

function preOrderTraversal(root: TreeNode): number[] {
    return traverse(root, []);
}
