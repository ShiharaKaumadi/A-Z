//1)
// filter() method -
// It filters your arrays based on a specific test. Those array items
// that pass the test are returned.

const numList = [10,20,0,82,63,7,56,88,23,12,0,45,12,88,1000,600];
numList.filter(value =>{
    if (value > 25) {
        console.log(value);
    }
});
/*12
82
63
56
88
45
88
1000
600
*/

//2) forEach()
//The forEach() method accepts a function that will work on each array item.
// That function's first parameter is the current array item itself,
// and the second (optional) parameter is the index. To increase
// readability, sometimes arrow functions are used.

const friendDetailArray = [
    {name:"John",age:25,job:"Executive Officer"},
    {name:"Ferdinan",age:29,job:"Trainee Clerk"},
    {name:"Rose",age:23,job:"Software Engineer"},
    {name:"Xio Me",age:26,job:"Architect"},
    {name:"Cha Joon Tak",age:24,job:"Fashion Designer"}
];

friendDetailArray.forEach((friend)=>{console.log(friend)});//👇 output
/*
{ name: 'John', age: 25, job: 'Executive Officer' }
{ name: 'Ferdinan', age: 29, job: 'Trainee Clerk' }
{ name: 'Rose', age: 23, job: 'Software Engineer' }
{ name: 'Xio Me', age: 26, job: 'Architect' }
{ name: 'Cha Joon Tak', age: 24, job: 'Fashion Designer' }
*/

const vegetables = ['tomato','cabbage','brinjol','pumpkin','Beans'];
function iteration (value, index){
    console.log(index , value);
}
vegetables.forEach(iteration); //👇 output
/*
0 tomato
1 cabbage
2 brinjol
3 pumpkin
4 Beans
*/

//3) map()
//This method is used to map each array item over to another array's
// item, based on whatever work is performed inside the function that
// is passed-in to the map as a parameter.

const numbers = [50,60,70,80,90,85];
numbers.map(value => {
    let half = value/2;
    console.log(half); //👇 output
});
/*25
30
35
40
45
42.5  */

//Identifying unique values in array

//using set
//A set is a collection of unique values.
// To build a new set, you can use the Set constructor:
// Const newSet = new Set();
// The Set constructor can, for example, accept an array.
// This means that we can use it to quickly filter an array for unique
// members
const values = [10,20,60,43,89,36,3,25,6,63,78,6,23,12,45,21,63,43,12,52,52,41]
let uniqueValues = new Set(values);
console.log(uniqueValues);

/*Set(17)
{10,20,60,43,89,36,3,25,6,63,78,23,12,45,21,52,41}
*/