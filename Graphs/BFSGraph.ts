// Does a BFS search on an adjacency matrix.

const BfsGraph = (
    graph: number[][],
    source: number,
    needle: number
): number[] | null => {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    do {
        const curr = q.shift() as number;
        if (curr === needle) break;

        const adjs = graph[curr];

        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0) {
                continue;
            }

            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }
    } while (q.length);

    // build the path backwards
    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    if (out.length) {
        return [source].concat(out.reverse());
    }

    return null;
};

/*
    COMPLEXITY ANALYSIS:
    - time: O(N2) where N is the number of nodes;
    - space O(N) where N is the number of nodes
*/
