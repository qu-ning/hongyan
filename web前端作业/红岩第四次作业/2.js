/*let arr = [1,5,6,7,8,10]

let sum = 0;
    for (let i=0; i<= arr.length ; i++) {
        sum += arr[i];
    }
    
  return sum;

console.log(sum)*/

[1,5,6,7,8,10].reduce(function(prevV, v){
  return prevV + v;
})