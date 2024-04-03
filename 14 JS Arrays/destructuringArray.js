//Destructuring Array
/*
To illustrate De structuring, imagine that an object or an array
is like a project folder that you have on your computer with several
files in it.
De structuring something out of an object or array, in this case
your project folder is like copying that item from your folder on to
another location.
The original item still exists in your project folder.
I just made a copy of the original item but this copy is completely
independent of the original item.*/

const friendDetailArray = [
    {name:"John",age:25,job:"Executive Officer"},
    {name:"Ferdinan",age:29,job:"Trainee Clerk"},
    {name:"Rose",age:23,job:"Software Engineer"},
    {name:"Xio Me",age:26,job:"Architect"},
    {name:"Cha Joon Tak",age:24,job:"Fashion Designer"}
];
console.log(friendDetailArray);
console.log(friendDetailArray.length);

const third = friendDetailArray[3];

console.log(third);//{ name: 'Xio Me', age: 26, job: 'Architect' }

//Destructure Array Element in 3rd index
const destructureArrayElement ={
    name:"Elizabeth",
    age:26,
    job: "Teacher"
}
console.log(destructureArrayElement);//👇 output changed
//{ name: 'Elizabeth', age: 26, job: 'Teacher' }

console.log(friendDetailArray);//👇 But original array does not changed
/*[
  { name: 'John', age: 25, job: 'Executive Officer' },
  { name: 'Ferdinan', age: 29, job: 'Trainee Clerk' },
  { name: 'Rose', age: 23, job: 'Software Engineer' },
  { name: 'Xio Me', age: 26, job: 'Architect' },
  { name: 'Cha Joon Tak', age: 24, job: 'Fashion Designer' }
]   */