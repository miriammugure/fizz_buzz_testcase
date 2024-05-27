//fizz buzz
module.exports = {numbers}
function numbers(n){
  if(n%3===0 && n%5===0)return "FizzBuzz";
  if (n%3===0)return "Fizz";
  if(n%5===0)return "Buzz";
  return n;
  }
console.log(numbers(1000))
  


