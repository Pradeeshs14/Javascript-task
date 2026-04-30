//Task 1: Array Basics

let arr = [10, 20, 30, 40, 50];

console.log("First:", arr[0]);
console.log("Last:", arr[arr.length - 1]);
console.log("Length:", arr.length);

//output:
// First: 10
// Last: 50
// Length: 5

//Task 2: Push & Pop

let arr1 = [1,2,3];

arr.push(4,5);   // add
arr.pop();       // remove last

console.log(arr1);

//output:
// [1,2,3,4]

//Task 3: Includes Check

let arr2 = ["html","css","javascript","react"];

console.log(arr2.includes("javascript"));

// output: 
// true

//Task 4: Filter Salaries

let employ = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];

let result1 = employ.filter(e => e.salary > 20000);
console.log(result1);

//output:
//[{name:"B", salary:50000},
//{name:"C", salary:30000}]


//Task 5: Map Names

let names = employ.map(e => e.name);
console.log(names);

// output :
// ["A","B","C"]

//Task 6: Reduce Sum

let total = employ.reduce((sum, e) => sum + e.salary, 0);
console.log(total);

// output:
//90000

// Task 7: Remove Duplicates

let arr4 = [1,2,2,3,4,4,5];

let unique = [...new Set(arr4)];
console.log(unique);

//output:
//[1,2,3,4,5]

//Task 8: Find Largest Number

let arr5 = [10, 200, 5, 90];

let max = Math.max(...arr5);
console.log(max);

//output:
//200

// Task 9: Reverse String (Without reverse)

let str = "hello";
let reversed = "";

for(let i = str.length - 1; i >= 0; i--){
  reversed += str[i];
}

console.log(reversed);

//output:
// olleh

//Task 10: Group by Salary

let employ2 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
];

let grouped = employ2.reduce((acc, e) => {
  if(!acc[e.salary]){
    acc[e.salary] = [];
  }
  acc[e.salary].push(e.name);
  return acc;
}, {});

console.log(grouped);

//output:
// {
//   10000: ["A","C"],
//   50000: ["B"]
// }

// Task 11: Flatten Array (Without flat)

let arr6 = [1,[2,[3,[4]]]];

function flatten(arr6){
  let result = [];
  
  for(let i of arr6){
    if(Array.isArray(i)){
      result = result.concat(flatten(i));
    } else {
      result.push(i);
    }
  }
  
  return result;
}

console.log(flatten(arr6));

//output:
// [1,2,3,4]

// Task 12: Custom Sort (Descending)

let arr7 = [5,2,9,1];

arr.sort((a,b) => b - a);
console.log(arr7);

//output:
// [9,5,2,1]

//Task 13: Second Largest

let arr8 = [10, 50, 20, 40];

let second = [...new Set(arr8)].sort((a,b)=>b-a)[1];
console.log(second);

//output:
//40

//Task 14: Count Characters

let str1 = "aabbccdde";

let count = {};

for(let ch of str1){
  count[ch] = (count[ch] || 0) + 1;
}

console.log(count);

//output:
// {a:2, b:2, c:2, d:2, e:1}


