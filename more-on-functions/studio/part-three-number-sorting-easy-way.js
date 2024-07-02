//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

let findMinValue = function(numsArray){
    let minimumValue = numsArray[0];
    for (i = 1; i < numsArray.length; i++){
        if (numsArray[i] < minimumValue){
            minimumValue = numsArray[i];
        }
    }
    return minimumValue;
}

//Sort each array in ascending order.

function numberIncreaseArray(nums) {
    nums.sort(function(a,b) {
        return a - b;
    });
    console.log(nums);
}
console.log(numberIncreaseArray(nums1));
console.log(numberIncreaseArray(nums2));
console.log(numberIncreaseArray(nums3));

//Sort each array in decending order.

function numberDecreaseArray(nums) {
    nums.sort(function(b,a) {
        return a - b;
    });
    console.log(nums);
}
console.log(numberDecreaseArray(nums1));
console.log(numberDecreaseArray(nums2));
console.log(numberDecreaseArray(nums3));