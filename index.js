function largestSubarraySum(array){
    let max = 0, currentMax = 0
    for(let i = 0; i < array.length; i++){
        currentMax = Math.max(0, currentMax + array[i]);
        max = Math.max(currentMax, max)
    }
    return max
}