var permute = function (nums) {
    let result = [];
    if (nums.length === 1) {
        result.push(nums);
        return result;
    }
    let previousNumbers = permute(nums.slice(0, nums.length - 1));
    let missingItem = nums[nums.length - 1];
    for (let i = 0; i < previousNumbers.length; i++) {
        for (let j = 0; j < previousNumbers[i].length; j++) {
            let copy = [...previousNumbers[i]];
            copy.splice(j, 0, missingItem)
            result.push(copy);
        }
        copy = [...previousNumbers[i]];
        copy.push(missingItem);
        result.push(copy);
    }
    return result;
};

console.log(permute([1, 2, 3]));