// Implementation of the LRU Cache using Hashmap and doubly linkedlist
type LRUNode<T> = {
    value: T;
    prev?: LRUNode<T>;
    next?: LRUNode<T>;
};

function createNode<V>(value: V): LRUNode<V> {
    return { value };
}

class LRUCache<K, V> {
    private length: number;
    private head?: LRUNode<V>;
    private tail?: LRUNode<V>;

    private lookup: Map<K, LRUNode<V>>;
    private reverseLookup: Map<LRUNode<V>, K>;

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.tail = this.head = undefined;
        this.lookup = new Map<K, LRUNode<V>>();
        this.reverseLookup = new Map<LRUNode<V>, K>();
    }

    update(key: K, value: V): void {
        /*
            - Check for the existence of the node.
            - If it exists:
                - update it's position on the cache and its value.
            - If it doesnt:
                - Create the node.
                - Prepend it to the cache.
                - Increase the cache length.
                - Trim the cache if the capacity has exceeded.
                - Update both the lookup and reverselookup maps
        */

        let node = this.lookup.get(key);
        if (!node) {
            node = createNode(value);
            this.prepend(node);
            this.length++;
            this.trimCache();

            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
        } else {
            this.detach(node);
            this.prepend(node);
            node.value = value;
        }
    }

    get(key: K): V | undefined {
        /*
            - Check for the existence of the node.
            - Update and move it the front of the cache (Detach it from its position then prepend it).
            - return the node value if node was found otherwise undefined.
        */
        const node = this.lookup.get(key);
        if (!node) {
            return;
        }

        this.detach(node);
        this.prepend(node);

        return node.value;
    }

    private detach(node: LRUNode<V>): void {
        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (this.head === node) {
            this.head = this.head.next;
        }

        if (this.tail === node) {
            this.tail = this.tail.prev;
        }

        node.prev = node.next = undefined;
    }

    private prepend(node: LRUNode<V>): void {
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        node.prev = undefined;
    }

    private trimCache(): void {
        if (this.length <= this.capacity) return;

        const tail = this.tail as any as LRUNode<V>;
        this.detach(this.tail as LRUNode<V>);

        const key = this.reverseLookup.get(tail) as K;
        this.lookup.delete(key);
        this.reverseLookup.delete(tail);
        this.length--;
    }
}

/*
    COMPLEXITY ANALYSIS:
    - Time: Both get and update methods have a complexity of O(1)
    - Space: O(n) where n is the size of the cache
*/
