/*
    QUICKSORT:
    - Choose a pivot (number at the end of the array), compare it to the array's items one by one by
        while putting all items smaller than the pivot to the left, and all larger ones to the right, 
        and when this is done, pin down that pivot to that position.
    - since the array is now halved, repeat the above process on each half of the initial array.
*/

// IMPLEMENTATION USING ARRAYS AND RECURSION:

const quickSort = (arr: number[]): number[] => {
    const arrayLength = arr.length;

    if (arrayLength <= 1) {
        return arr;
    }

    const pivot = arr.pop()!;
    const smallerNums: number[] = [];
    const largerNums: number[] = [];

    for (let i = 0; i < arrayLength - 1; ++i) {
        if (arr[i] < pivot!) {
            smallerNums.push(arr[i]);
        } else {
            largerNums.push(arr[i]);
        }
    }

    return [...quickSort(smallerNums), pivot, ...quickSort(largerNums)];
};

// Test case:
const vals = [4, 0, 100, 3, 2, 34];
console.log(quickSort(vals)); // Output: [0, 2, 3, 4, 34, 100]

/*
    COMPLEXITY ANALYSIS:
    - Quicksort’s average time complexity is O(N log N), but in the worst case (poor pivot choices), it can degrade to O(N²). 
    - Space complexity would vary between O(logN) for inplace sorting cases, and O(N) for non in-place sorting 
*/
