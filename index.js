// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
 
function largestSubarraySum(array){
    let curr_max = 0, max_so_far = 0

    for(let i = 0; i < array.length; i++){
        curr_max = Math.max(0, curr_max + array[i]);
        max_so_far = Math.max(curr_max, max_so_far)
    }
    return max_so_far
}
 
// largestSubarraySum(array)