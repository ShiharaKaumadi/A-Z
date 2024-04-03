const bio_data = document.querySelector('#bio-data');
const person = {
    name : "Derick",
    age: 25,
    stillAlive: true,
    mostfavfood : "Pasta Salad",
    getBioData(){
        return `${this.name} is ${this.age} and he is the only one in his family`
    }
}
//context : we use "this" to identify the context now where you are
/*person.getBioData();*/
const node = document.createElement('div');
let style= "width:300px;height:140px;font-size:25px;display:flex;margin:auto;justify-items:center;align-content:center;padding:25px 25px; letter-spacing:2px; text-align:center;background-color:gold;color:white;border:1px solid red;border-radius:12px;";
node.style = style;
document.body.append(node);
node.textContent = person.getBioData();


console.log(this === window);
console.log(window.location);
console.log(window.alert("This is Derick's story"));
console.log(window.outerHeight);
console.log(window.length);
console.log(window.scrollX);
console.log(window.scrolly);
console.log(window.close);
console.log(window.isSecureContext);

//============inspector output======================
//console.log(this === window);//true
//console.log(window.location);
/*
Location
ancestorOrigins
    :
    DOMStringList
length
    :
    0
        [[Prototype]]
:
DOMStringList
contains
    :
    ƒ contains()
item
    :
    ƒ item()
length
    :
    (...)
constructor
    :
    ƒ DOMStringList()
Symbol(Symbol.iterator)
:
ƒ values()
Symbol(Symbol.toStringTag)
:
"DOMStringList"
get length
    :
    ƒ length()
    [[Prototype]]
:
Object
assign
    :
    ƒ assign()
length
    :
    1
name
    :
    "assign"
arguments
    :
    (...)
caller
    :
    (...)
[[Prototype]]
:
ƒ ()
apply
    :
    ƒ apply()
arguments
    :
    (...)
bind
    :
    ƒ bind()
call
    :
    ƒ call()
caller
    :
    (...)
constructor
    :
    ƒ Function()
length
    :
    0
name
    :
    ""
toString
    :
    ƒ toString()
Symbol(Symbol.hasInstance)
:
ƒ [Symbol.hasInstance]()
get arguments
    :
    ƒ ()
set arguments
    :
    ƒ ()
get caller
    :
    ƒ ()
set caller
    :
    ƒ ()
        [[FunctionLocation]]
:
[[Prototype]]
:
Object
    [[Scopes]]
:
Scopes[0]
    [[Scopes]]
:
Scopes[0]*/
//console.log(window.alert("This is Derick's story"));//undefined
//console.log(window.outerHeight);//824
//console.log(window.length);//0
//console.log(window.scrollX);//0
//console.log(window.scrolly);//undefined
//console.log(window.close);//ƒ close() { [native code] }
//console.log(window.isSecureContext);//true


