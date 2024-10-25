/*
    IN-ORDER TRAVERSAL:
    - Inorder traversal of a tree is a depth-first traversal method where the nodes are visited in the following order:
         left subtree, root, and then right subtree. Starting from the root, you recursively visit the entire left subtree, 
         process the root node, and finally traverse the right subtree. This traversal is widely used with binary search trees 
         because it visits nodes in ascending order (for a BST). 
    - Inorder traversal ensures that nodes are processed in a sorted sequence, making it useful for operations 
    like printing sorted data. The time complexity is O(n), where n is the number of nodes in the tree.
*/

import { TreeNode } from "../utils/node";

// IMPLEMENTATION:

function traverse(node: TreeNode | null, path: number[]): number[] {
    if (!node) return path;

    traverse(node.left, path);
    path.push(node.value);
    traverse(node.right, path);

    return path;
}

function inOrderTraversal(root: TreeNode): number[] {
    return traverse(root, []);
}
