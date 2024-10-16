/*
    QUEUE:
    - A queue is a linear data structure that follows the First In, First Out (FIFO) principle,
    meaning the first element added is the first one removed. Think of it like a line of people
    waiting for service: the person at the front gets served first. Operations include enqueue 
    (adding elements to the rear) and dequeue (removing elements from the front). 
    - Queues are used in scheduling tasks, breadth-first search algorithms, and buffering data. 
    - They can be implemented using arrays or linked lists, with common variations like circular queues 
    and priority queues that add specialized functionality.
*/

// IMPLEMENTATION USING LINKED LIST:
type QNode<T> = {
    value: T;
    next?: QNode<T>;
};

class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as QNode<T>;

        this.length++;

        if (!this.tail) {
            // means the queue is empty
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head.next;

        // Clean-up
        this.head = undefined;
        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
