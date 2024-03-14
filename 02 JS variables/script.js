let name = "John";
console.log(name);

let isCalculated = false;
console.log(isCalculated);

let number = 300;
console.log(number);

let jsonObject = {name: "Karthic", country: "India", job: "Musician"};
console.log(jsonObject);

let array = [5, 7, 8.20, "String Value", true, [8, 3, 2], {name: "Alex", grade: 12, mathsMarks: 89}];
console.log(array);

let text1 = document.querySelector("#main-header").innerHTML;
console.log(text1);

let text2 = document.querySelector("#main-header");
console.log(text2);

let randomNumber1 = Math.random();
console.log("Random Number : " + randomNumber1);

let randomNumber2 = Math.random() + 1;
console.log("Random Number : " + randomNumber2);

let randomNumber3 = Math.floor(Math.random()) + 1;
console.log("Random Number : " + randomNumber3);

let randomNumber4 = Math.floor(Math.random() * 10) + 1;
console.log("Random Number : " + randomNumber4);

let randomNumber5 = Math.floor(Math.random() * 100) + 1;
console.log("Random Number : " + randomNumber5);

let randomNumber6 = Math.floor(Math.random() + 1);
console.log("Random Number : " + randomNumber6);

const gravityForce = 9.888
console.log(gravityForce);

const varUsage = document.querySelector(".var-usage");
console.log(varUsage);
console.log("===============================================================")
const element = document.getElementById("main-header");
console.log(element);

let text = document.getElementById("main-header").innerText;
console.log(text);
console.log("===============================================================");

let clickButton = document.querySelector("button");
let launchHeader = document.querySelector("h2");
let clickLink = document.querySelector("a");

clickButton.onclick = () =>{
    const m_name = prompt("What is your name?");
    alert(`Nice to See You ${m_name}`);
    launchHeader.textContent = `Hi  ${m_name} `
}

clickLink.onclick = () => {
    let firstName = prompt("What is your name?");
    alert(`Hello ${firstName}, nice to see you!`);
    launchHeader.textContent = `Welcome ${firstName}`;
};

let number4 = 520;
console.log(typeof number4);
number4 = "523";
console.log(typeof number4)

/*
const number6 = 520;
console.log(typeof number6);
number6 = "523";
console.log(typeof number6)
*/

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;

console.log(goodQuotes1)
console.log(goodQuotes2)

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);// number

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);// string
