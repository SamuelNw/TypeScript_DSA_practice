/*
    STACK:
    - A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, where the most 
    recently added element is the first to be removed. It’s like a stack of plates: the top plate is taken first. 
    - Key operations are push (adding an element to the top) and pop (removing the top element). 
    - Stacks are useful in scenarios like reversing strings, evaluating expressions, and managing function calls in recursion. 
    They can be implemented using arrays or linked lists. A stack's simplicity and LIFO nature make it essential in algorithms and problem-solving.
*/

// IMPLEMENTATION USING LINKEDLISTS:

type SNode<T> = {
    value: T;
    prev?: SNode<T>;
};

class Stack<T> {
    public length: number;
    private head?: SNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as SNode<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        const head = this.head;
        node.prev = head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (!this.head) {
            return undefined;
        }

        const head = this.head;
        this.head = head.prev;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
