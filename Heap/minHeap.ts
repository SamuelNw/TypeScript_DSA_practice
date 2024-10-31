/*
    MINHEAPS:
    - MinHeaps are specialized binary trees that prioritize the smallest element at the root. Each parent node is always less 
        than or equal to its children, making minHeaps efficient for operations that involve repeatedly accessing or removing the minimum value. 
    - Insertion and removal in minHeaps are O(log n) operations due to the need to maintain the heap property through “bubbling” values up or down. 
    - MinHeaps are commonly used in priority queues, Dijkstra’s shortest path algorithm, and scheduling tasks in event-driven programs, 
        where the most critical or smallest element must be accessed quickly.
*/

// IMPLEMENTATION USING JAVASCRIPT ARRAYS:

export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    delete(): number {
        if (this.length === 0) return -1;

        const res = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return res;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return res;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    private heapifyDown(idx: number): void {
        const leftChildIdx = this.leftChild(idx);
        const rightChildIdx = this.rightChild(idx);

        if (idx >= this.length || leftChildIdx >= this.length) return;

        const leftChildValue = this.data[leftChildIdx];
        const rightChildValue = this.data[rightChildIdx];
        const currValue = this.data[idx];

        if (leftChildValue > rightChildValue && currValue > rightChildValue) {
            this.data[idx] = rightChildValue;
            this.data[rightChildIdx] = currValue;
            this.heapifyDown(rightChildIdx);
        } else if (
            rightChildValue > leftChildValue &&
            currValue > leftChildValue
        ) {
            this.data[idx] = leftChildValue;
            this.data[leftChildIdx] = currValue;
            this.heapifyDown(leftChildValue);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) return;

        const parentIdx = this.parent(idx);
        const parentValue = this.data[parentIdx];
        const currValue = this.data[idx];

        if (parentValue > currValue) {
            this.data[parentIdx] = currValue;
            this.data[idx] = parentValue;
            this.heapifyUp(parentIdx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}

/*
    COMPLEXITY ANALYSIS:
    - Time:
        - Worstacase (eg. Inserting a value that will be the smallest in the heap) -> O(log N)
    - Space: O(N) where N is the number of values in the Heap
*/
