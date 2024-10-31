import MinHeap from "./minHeap";

function testMinHeap() {
    const heap = new MinHeap();
    const results = [];

    // Test case 1: Insert elements and verify the root is the minimum
    heap.insert(10);
    heap.insert(5);
    heap.insert(20);
    heap.insert(3);

    results.push({
        test: "Insert elements and get min",
        expected: 3,
        result: heap.delete(),
    });

    // Test case 2: Insert more elements and verify the min
    heap.insert(2);
    heap.insert(15);
    results.push({
        test: "Insert additional elements and get min",
        expected: 2,
        result: heap.delete(),
    });

    // Test case 3: Continue deleting to check heap structure
    results.push({
        test: "Next min element",
        expected: 5,
        result: heap.delete(),
    });

    results.push({
        test: "Next min element after another delete",
        expected: 10,
        result: heap.delete(),
    });

    // Test case 4: Empty heap deletion should return -1
    heap.delete(); // deletes 15
    heap.delete(); // deletes 20
    results.push({
        test: "Deleting from empty heap",
        expected: -1,
        result: heap.delete(),
    });

    // Output all results
    results.forEach((testCase) => {
        console.log(
            `${testCase.test} -> Expected: ${testCase.expected}, Got: ${testCase.result}`
        );
    });
}

testMinHeap();
