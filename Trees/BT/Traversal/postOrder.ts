/*
    POST-ORDER TRAVERSAL:
    - Postorder traversal of a tree is a depth-first traversal method where the nodes are visited in the following order:
         left subtree, right subtree, and finally the root. Starting from the root, you recursively traverse the entire 
         left subtree, then the right subtree, and only then process the root node. 
    - This traversal method is useful for operations like deleting a tree or evaluating postfix expressions because it ensures 
    that all child nodes are visited before their parent. Postorder traversal is also O(n) in time complexity, where n is the number of nodes in the tree.
*/

import { TreeNode } from "../utils/node";

// IMPLEMENTATION:

function traverse(node: TreeNode | null, path: number[]): number[] {
    if (!node) return path;

    traverse(node.left, path);
    traverse(node.right, path);

    path.push(node.value);
    return path;
}

function postOrderTraversal(root: TreeNode): number[] {
    return traverse(root, []);
}
