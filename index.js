function hasTargetSum(array, target) {
  // Write your algorithm here
  for(const num of array){
    const difference = target - num
    if(array.includes(difference)){
      if(num + difference === target){
        if (num === difference){
          if (isThereMoreThenOne(array,num)> 1){
            return true
          }else{
            return false
          }
        }else{
          return true
        }
      }
    }
  }
  return false
}
 
function isThereMoreThenOne(array,num){
  let count = 0
  array.forEach(arrayNum => arrayNum === num? count++: count);
  return count
}

/* 
  Write the Big O time complexity of your function here
    for(const num of array){
      // Has to loop through array wrost case it would have to do it n times

    const difference = target - num // subtraction would be constanttime 

    // if statments would be constant time
    // array.includes is O(n) becasue it has to loop through to an array
    if(array.includes(difference)){
      if(num + difference === target && num != difference){
        return true
      }
    }
  }
  return false
}
  This would be O(n) or linear time becasue the algorithum would be looping through an array 3n time to find the number
    1) first for loop to subtract from target and check difference
    2) second if difference is included in array... another loop through
    3) third loop through array to see if number occurs more then once
      a) this does not happen all the time only if the number from the array equal the difference when subtracted from target worst cast though this would run.
  
  The space complexity would be O(n) because we would allicate memory for an array and target value x2 (if the more then 1 check runs) or onece if not. As well as the difference varibale
*/

/* 
  Add your pseudocode here
  Create function hasTargetSum that takes in an array of numbers and a target number.
  return: 
    true ---> two numbers added together === target
    false ---> if no two numbers summ to target

    example:
    ([1,2,3],4) = true (1 + 3 = 4)
    
    ideas:
      1) do a double loop adding each number to all the other numbers and check to see if it equals target (seems to be O(n^2))
      2) Take target ands subtract each number from the array then see if those number are in the arry (seems to be O(n))
      
      hasTargetSum(arr,tar)
        forEach() tar - arrnum
        check to see if result is in arr
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1,2,3], 4))
}

module.exports = hasTargetSum;
