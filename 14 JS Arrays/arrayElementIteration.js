//for  loop
const fruits = ["mango","banana","apple","grapes","orange","pine apple","strawberry","blue berry","water melon"];

for (let i = 0; i < fruits.length; i++) {
    console.log(i + " " + fruits[i]);
}
/*
0 mango
1 banana
2 apple
3 grapes
4 orange
5 pine apple
6 strawberry
7 blue berry
8 water melon
*/

//for each loop

/*
That function's first parameter is the current array item itself,
and the second (optional) parameter is the index. To increase
readability, sometimes arrow functions are used.*/

const array = ["one","two",["three","four","five"],2,true,12.05,{"name":"William","age":12,"gender":"male"},true,{"friendList":["James","Mandela","Philips","Revon"]},{name : "Timmy",age : 1}];
array.forEach((element)=> console.log(element));
/*one
two
[ 'three', 'four', 'five' ]
2
true
12.05
{ name: 'William', age: 12, gender: 'male' }
true
{ friendList: [ 'James', 'Mandela', 'Philips', 'Revon' ] }
{ name: 'Timmy', age: 1 }   */
array.forEach(function indexBased(i){
    console.log(i )
});
/*one
two
[ 'three', 'four', 'five' ]
2
true
12.05
{ name: 'William', age: 12, gender: 'male' }
true
{ friendList: [ 'James', 'Mandela', 'Philips', 'Revon' ] }
{ name: 'Timmy', age: 1 }
one
two
[ 'three', 'four', 'five' ]
2
true
12.05
{ name: 'William', age: 12, gender: 'male' }
true
{ friendList: [ 'James', 'Mandela', 'Philips', 'Revon' ] }
{ name: 'Timmy', age: 1 }

*/

//foreach loop with array with objects
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
