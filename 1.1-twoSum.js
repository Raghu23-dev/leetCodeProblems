//Usual Approach
/**
 * Space : O(1)
 * Time : O(n^2)
 */
var twoSum = (nums, target) => {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
        return []
    }
};

//Actually there is a approach that is lesser than O(n^2)