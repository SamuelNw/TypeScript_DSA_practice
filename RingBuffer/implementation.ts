/*
    RING BUFFER:
    - A ring buffer, or circular buffer, is a fixed-size data structure that wraps around when the end is reached,
     forming a circular queue. It has two pointers: head (for reading) and tail (for writing). When the tail reaches
    the buffer's end, it wraps back to the start, reusing space that’s been read. This structure is efficient for 
    scenarios like data streaming, where continuous data overwriting is required. 
    - It prevents overflow by ensuring new data overwrites old, read data. Ring buffers are commonly used in embedded systems, 
    real-time applications, and networking for buffering data with constant time complexity.
*/

// IMPLEMENTATION USING ARRAYS
class RingBuffer<T> {
    private buffer: (T | null)[];
    private readonly size: number;
    private head: number = 0;
    private tail: number = 0;
    private isFull: boolean = false;

    constructor(size: number) {
        this.size = size;
        this.buffer = new Array(size).fill(null);
    }

    enqueue(item: T): void {
        this.buffer[this.tail] = item;
        if (this.isFull) {
            // Move head forward if buffer is full (overwriting oldest data)
            this.head = (this.head + 1) % this.size;
        }
        this.tail = (this.tail + 1) % this.size;
        this.isFull = this.tail === this.head;
    }

    dequeue(): T | null {
        if (!this.isFull && this.head === this.tail) {
            throw new Error("Buffer is empty!");
        }
        const item = this.buffer[this.head];
        this.buffer[this.head] = null; // Clear the dequeued item
        this.head = (this.head + 1) % this.size;
        this.isFull = false;
        return item;
    }

    peek(): T | null {
        return this.buffer[this.head];
    }

    isEmpty(): boolean {
        return !this.isFull && this.tail === this.head;
    }

    isFullBuffer(): boolean {
        return this.isFull;
    }
}

// Example usage:
const ringBuffer = new RingBuffer<number>(3);

ringBuffer.enqueue(1);
ringBuffer.enqueue(2);
ringBuffer.enqueue(3);

console.log(ringBuffer.dequeue()); // 1
ringBuffer.enqueue(4);
console.log(ringBuffer.dequeue()); // 2
console.log(ringBuffer.dequeue()); // 3
console.log(ringBuffer.dequeue()); // 4
console.log(ringBuffer.dequeue()); // error

/*
    COMPLEXITY ANALYSIS:
    - Time Complexity for all operations: O(1)
    - Space Complexity: O(N) - for the buffer itself where N is the size of the buffer
*/
