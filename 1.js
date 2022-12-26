// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].



var arr1 = [4, 2, 3]
console.log(arr1, "arr1")
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
        var n = 1
    for (var j = 0; j < arr1.length; j++) {
        console.log(i, "vlaue", j)
        if (i != j) {
            n = n*arr1[j]
        }
        
    }
    arr2.push(n)
}
console.log(arr2)


