console.log("Hello JS");
console.error("Something Went Wrong");
console.log(this);
function assert(bool, yes) {
    console.log(bool);
    console.log(yes);
}
assert(56 < 500, "Yes");
/*  assert(assertion, obj1)
  assert(assertion, obj1, obj2)
  assert(assertion, obj1, obj2, /!* …, *!/ objN)
  assert(assertion, msg)
  assert(assertion, msg, subst1)
  assert(assertion, msg, subst1, /!* …, *!/ substN)*/
console.assert(2 > 1, [2, 5, 7, 8, 9, "String", true, 32.45], {name: "John", gender: "Male", country: "USA"});
console.warn("Oh Oh Warning ");
console.dir();
console.timeEnd();
console.timeLog();
const car = "Dodge Charger";
const someObject = {str: "Some text", id: 5};
console.info("My first car was a", car, ". The object is:", someObject);
console.count();
console.assert();
console.count();
console.count();
console.count();
console.count();
console.countReset();
/*console.clear();*/
console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color:blue;padding: 2px",);
console.log("Multiple styles: %cred %corange", "color: red", "color: orange", "Additional unformatted message",);
console.count();
console.group();
console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.count();
console.debug("Back to the outer level");
console.time("answer time");
console.timeLog("answer time");
console.timeEnd("answer time");
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
    console.log(`the # is ${number}`);
    console.assert(number % 2 === 0, "%o", { number, errorMsg });
}
function foo() {
    function bar() {
        console.trace();
    }
    bar();
}

foo();
console.trace();
alert("I wish I could be Merlin");