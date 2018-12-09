const nums = [2, 7, 11, 15]
const target = 18

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++ ){
        for (let b = 0; b < nums.length; b++){
            if (nums[i] + nums[b] == target && i != b){
                return [i, b]
            }
        }
    }
};

console.log(twoSum(nums, target))
