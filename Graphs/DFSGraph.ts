// Does a DFS search on an adjacency list.
declare type WeightedGraphEdge = { to: number; weight: number };
declare type WeightedGraphAdjacencyList = WeightedGraphEdge[][];

const walk = (
    graph: WeightedGraphAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[]
): boolean => {
    if (seen[curr]) {
        return false;
    }

    seen[curr] = true;

    path.push(curr);
    if (curr === needle) {
        return true;
    }

    const list = graph[curr];

    for (let i = 0; i < list.length; i++) {
        const edge = list[i];

        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }

    path.pop();

    return false;
};

const DFSGraph = (
    graph: WeightedGraphAdjacencyList,
    source: number,
    needle: number
): number[] | null => {
    const path: number[] = [];
    const seen: boolean[] = new Array(graph.length).fill(false);

    walk(graph, source, needle, seen, path);

    return path.length ? path : null;
};

/*
    COMPLEXITY ANALYSIS:
    - Time: O(V + E), where v is the number of vertices, and E is the edges
    - space O(V)
*/
