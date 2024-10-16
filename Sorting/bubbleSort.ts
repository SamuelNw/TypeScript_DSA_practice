/*
    BUBBLE SORT:
    - An algorithm that repeatedly steps through an array, and compares adjancent values
    and if v0 is larger than v1, it swaps them.
    - For the first iteration, the largest value ends up at the end (v[array.length - 1]) of the array.
    - The next iteration, the second largest value ends up at the second last position (v[array.length - 2]).
    - The algorithm stops when there is only one value to compare against itself. 
*/

const bubbleSort = (arr: number[]): number[] => {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

    return arr;
};

// Test Cases:
const numbers = [4, 0, 100, 3, 2, 34];
console.log(bubbleSort(numbers));

/*
    Complexity:
    - Time -> O(N^2)
    - Space -> O(1)
*/
