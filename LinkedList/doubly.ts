/*
    DOUBLY LINKED LIST:
    - A doubly linked list is a data structure consisting of nodes where each node contains three components: 
        data, a reference to the next node, and a reference to the previous node. This allows traversal in both forward and 
        backward directions, unlike a singly linked list, which only supports forward traversal.

    - Doubly linked lists are useful in scenarios where efficient two-way traversal is needed, such as in browsers' forward/backward navigation, 
        undo/redo operations in applications, or in implementing LRU (Least Recently Used) caches. They allow for efficient insertions and 
        deletions at both ends or in the middle with O(1) reference updates.
*/

type DoublyLinkedListNode<T> = {
    value: T;
    next: DoublyLinkedListNode<T>;
    prev: DoublyLinkedListNode<T>;
};

class DoublyLinkedList<T> {
    public length: number;
    private head?: DoublyLinkedListNode<T>;
    private tail?: DoublyLinkedListNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;

        const node = { value: item } as DoublyLinkedListNode<T>;

        if (!this.head) {
            this.head = this.tail = node;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index is out of range.");
        } else if (idx === this.length) {
            this.append(item);
        } else if (idx === 0) {
            this.prepend(item);
        }

        this.length++;
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        curr = curr as DoublyLinkedListNode<T>;
        const node = { value: item } as DoublyLinkedListNode<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev.next = node;
        curr.prev = node;
    }

    append(item: T): void {
        this.length++;

        const node = { value: item } as DoublyLinkedListNode<T>;

        if (!this.tail) {
            this.head = this.tail = node;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        // This will find curr as the node that needs to be removed, and return it's value.
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }

        if (!curr) return;

        this.length--;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;
        }
        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        if (curr === this.head) {
            this.head = curr.next;
        }

        if (curr === this.tail) {
            this.tail = curr.prev;
        }

        return curr.value;
    }

    get(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        return curr?.value;
    }

    removeAt(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        if (!curr) return undefined;

        this.remove(curr.value);
    }
}

// TESTING THE DOUBLY LINKEDLIST IMPLEMENTATION:

const dll = new DoublyLinkedList<number>();

// Append values
dll.append(10);
dll.append(20);
dll.append(30);
console.log("After appending 10, 20, 30:", dll.get(0), dll.get(1), dll.get(2));
// Output: 10, 20, 30

// Prepend a value
dll.prepend(5);
console.log(
    "After prepending 5:",
    dll.get(0),
    dll.get(1),
    dll.get(2),
    dll.get(3)
);
// Output: 5, 10, 20, 30

// Insert a value at a specific position
dll.insertAt(15, 2);
console.log(
    "After inserting 15 at index 2:",
    dll.get(0),
    dll.get(1),
    dll.get(2),
    dll.get(3),
    dll.get(4)
);
// Output: 5, 10, 15, 20, 30

// Remove a value
dll.remove(15);
console.log(
    "After removing 15:",
    dll.get(0),
    dll.get(1),
    dll.get(2),
    dll.get(3)
);
// Output: 5, 10, 20, 30

// Get a value at a specific index
console.log("Value at index 2:", dll.get(2));
// Output: 20

// Remove value at a specific index
dll.removeAt(0);
console.log(
    "After removing value at index 0:",
    dll.get(0),
    dll.get(1),
    dll.get(2)
);
// Output: 10, 20, 30

// Final state of the list
console.log("Final list state:", dll.get(0), dll.get(1), dll.get(2));
// Output: 10, 20, 30
