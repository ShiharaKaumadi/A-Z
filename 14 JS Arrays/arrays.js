//Arrays are zero index based
//case 1 : Empty Array
const myList = [];
console.log(myList); //returns [] == array length is zero
console.log(myList.length); //0

// case 2: You can put strings, numbers, arrays, Objects, JSON Objects, decimal numbers, booleans ... in JS array
const array = ["one","two",["three","four","five"],2,true,12.05,{"name":"William","age":12,"gender":"male"},true,{"friendList":["James","Mandela","Philips","Revon"]},{name : "Timmy",age : 1}];
console.log(array.length);//10
console.log(array[2][1]); // four
console.log(array[8]);//{ friendList: [ 'James', 'Mandela', 'Philips', 'Revon' ] }

//case 3 : array methods
const fruits = ["mango","banana","apple","grapes","orange","pine apple","strawberry","blue berry","water melon"];
console.log(fruits.length);//9

// a) push() method - add a new element to array in last index
fruits.push("Kiwi");
console.log(fruits);//👇 output
//[
//   'mango',       'banana',
//   'apple',       'grapes',
//   'orange',      'pine apple',
//   'strawberry',  'blue berry',
//   'water melon', 'Kiwi'
// ]
console.log(array.length);//10

//b) pop() method - remove the last element in array
fruits.pop();
console.log(fruits);//👇 output
/*[
  'mango',
  'banana',
  'apple',
  'grapes',
  'orange',
  'pine apple',
  'strawberry',
  'blue berry',
  'water melon'
]  */
console.log(fruits.length); //9

//c) shift() method - removes the first element in the array
fruits.shift();
console.log(fruits.length); //8
console.log(fruits.length); //8
console.log(fruits);//👇 output
/*[
  'banana',
  'apple',
  'grapes',
  'orange',
  'pine apple',
  'strawberry',
  'blue berry',
  'water melon'
]
*/
console.log(fruits.length); //8

//d) unshift() method - the element added as the beginning of the of array and if it already remains in array it will also displayed in the same position
fruits.unshift("water melon");
console.log(fruits);//👇 output
/*[
  'water melon',
  'banana',
  'apple',
  'grapes',
  'orange',
  'pine apple',
  'strawberry',
  'blue berry',
  'water melon'
]
*/
fruits.unshift("avacado");
console.log(fruits);//👇 output
/*[
  'avacado',    'water melon',
  'banana',     'apple',
  'grapes',     'orange',
  'pine apple', 'strawberry',
  'blue berry', 'water melon'
]
*/

//e)concat() - join two or more arrays and assign the new array to a js variable
const array1 = ["James","Harry","Severus","Ronald"];
const array2= ["John","Robin",{name : "Robin", dramaTitle: "Robin Hood"},["Mandela","Elizabeth","Ann"]];
const array3 = [{"name":"Sithum","gender":"Male"}];
const array4 =[{}];

const newArray = array3.concat(array2);
console.log(newArray);//👇 output
/*[
  { name: 'Sithum', gender: 'Male' },
  'John',
  'Robin',
  { name: 'Robin', dramaTitle: 'Robin Hood' },
  [ 'Mandela', 'Elizabeth', 'Ann' ]
]
*/
console.log(newArray.length); //5

//see if we concat array with another array previous array, array length does not change
array3.concat(array2);
console.log(array3);//[ { name: 'Sithum', gender: 'Male' } ]

//f)includes() - returns true or false by checking the array that content in includes() method is available in array or not
const languageArray =["korean","english","tamil","chineese","japaneese","british english","malayalam","teligu"];
const availability =languageArray.includes("Kannada");
console.log(availability); //false
const movieLanguage = languageArray.includes("chineese");
console.log(movieLanguage); //true

//g) join() method - Join the content inside join() method between array elements exept the last one
const movie = ["Goblin","Abyss","Nam Soon","Bad and Crazy"];
const starmovie = movie.join( " | " );//👇 output
console.log(starmovie); //Goblin | Abyss | Nam Soon | Bad and Crazy
console.log(movie); // doesn't change content in original array

//h) reverse() method - Make the array from last element to first element (reverse the array)
const weekdaysArray = ["Sunday","Monday","Tuesday","Thursday","Friday", "Saturday"];
console.log(weekdaysArray); //["Sunday","Monday","Tuesday","Thursday","Friday", "Saturday"];
console.log(weekdaysArray.length); //6

weekdaysArray.reverse();//👇 output

console.log(weekdaysArray); //[ 'Saturday', 'Friday', 'Thursday', 'Tuesday', 'Monday', 'Sunday' ]
console.log(weekdaysArray.length);//6

//i) slice() method based on string (this is not a array method)

// slice() method has two arguments startIndex and endIndex
//slice() method returns substring array
const months = ['January','February','March',"April",'May','June','July','August','September',"October",'November','December'];
console.log(months);
console.log(months.length);

const substring = months.slice(2,7);//👇 output
console.log(substring); //[ 'March', 'April', 'May', 'June', 'July' ]
console.log(substring.length);//5

//j)sort() method (string based)
const sortMonths = months.sort();
console.log(sortMonths);//👇 output
/*[
  'April',    'August',
  'December', 'February',
  'January',  'July',
  'June',     'March',
  'May',      'November',
  'October',  'September'
]
*/
console.log(sortMonths.length);//12

