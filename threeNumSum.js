/* 
PROMPT:

Write a function that takes in a non-empty array of distinct 
integers and an integer representing a target sum. The function should find all 
triplets in the array that sum up to the target sum and return a two-dimensional array of
all those triplets. The numbers in each triplet should be ordered in ascending order, and the triplets
themselves hsould be ordered in ascending order with respect to the numbers they hold. 

If no 3 numbers sum up the target sum, the function should return an empty array.

*/

function threeNumberSum(array, targetSum){
    array.sort((a,b) => a-b);
    const triplets = [];
}
