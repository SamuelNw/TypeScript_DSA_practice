/* 
    BREADTH FIRST SEARCH:
    Breadth-first search (BFS) is an algorithm for traversing or searching graph or tree data structures. 
    Starting from a root node, BFS explores all neighbor nodes at the present depth level before moving to nodes at the next depth level. 
    It uses a queue data structure to keep track of nodes to visit, adding each node’s unvisited neighbors in the order they’re encountered. 
    This approach ensures the shortest path is found in unweighted graphs, making BFS useful for finding shortest paths, 
    solving puzzles, and network analysis. It’s also helpful for level-order traversal in trees, exploring each level before moving deeper.
*/

import { TreeNode } from "../utils/node";

// Implementation using ArrayList:

function bfs(head: TreeNode | null, needle: number): boolean {
    if (!head) return false;

    const q: TreeNode[] = [head];

    while (q.length) {
        const curr = q.shift() as TreeNode;

        if (curr.value === needle) {
            return true;
        }

        if (curr.left) q.push(curr.left);
        if (curr.right) q.push(curr.right);
    }

    return false;
}
