//1. array initialization of 10 random integers between 1 and 100.

let array = [10,2,33,91,82,55,32,24,66,1];
console.log(array);

//2. array manipulation

//add new number to the end of the array usign push
array.push(99);
console.log(array);

//remove the last number from the array using pop
array.pop();
console.log(array);

//add a number to the beginning of the array using unshift
array.unshift(21);
console.log(array);

//remove the first number from the array using shift
array.shift();
console.log(array);

// 3. array sorting
//asc order

array.sort((a,b)=>a-b);
console.log(array);

//des order
array.reverse();
console.log(array);

//4. array iteration
array.forEach(item=>{
    console.log(item);
})

//5. array transformation
let square = array.map((item)=>{
    let sq = item * 2;
    console.log(`square of ${item} is : ${sq}`);
})
//console.log(square);

//6. array filtering for even nos
let even = array.filter((item)=>item%2===0)
console.log(`even numbers are ${even}`);

//7. array reduction display sum of all elements in array using reduce

let sum = array.reduce((previousValue,currentValue)=>
previousValue + currentValue,0)
console.log(`sum is: ${sum}`);