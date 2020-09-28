//let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
 
function largestSubarraySum(array){
  let curr_max = 0, max_so_far = 0
  
// Math.max returns the largest of the zero or more numbers given as input parameters
// Math.max([value1[, value2[, ...]]])
// parameter: value1, value2, ... ((((Numbers)))
// return value: The largest of the given numbers. If at least one of the arguments cannot be converted to a number, NaN is returned.
  for(let i = 0; i < array.length; i++){
      curr_max = Math.max(0, curr_max + array[i]);
      max_so_far = Math.max(curr_max, max_so_far)
  }
  return max_so_far
}