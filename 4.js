let arr = [5 ,1,1, 5];
let n = arr.length;
// calculate the maximum stolen value
function findMaxSum(arr ,n) {
    console.log(arr,"arr",n)
    if (n == 0)
        return 0;
    let value1 = arr[0];
    // console.log(value1,"value1")
    if (n == 1)
        return value1;
    let value2 = 0;
    let max_val1, max_val2;
    max_val1 = value1;
    // console.log(max_val1,"max_val1",value1)
 
    for (let i = 1; i < n; i++) {
        let first = value1;
        let second = arr[i];
        if (i > 1) {
        second += value2;
        }
        let curr = Math.max(first, second);
        value2 = value1;
        value1 = curr;
    }
    max_val2 = value1;
    return Math.max(max_val1, max_val2);
}
console.log(findMaxSum(arr ,n));