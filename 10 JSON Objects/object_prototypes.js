const node = document.createElement('div');
let node_styles = "width: 600px;height: 300px;font-size: 18px;background-color: crimson;color: white;padding: 12px 12px;margin: auto;display: flex;align-content: center;justify-items: center;text-align: center;"
node.style = node_styles;
document.body.append(node);
class Person {
    constructor(name) {
        this.name = name;
    }
    function greet(){
        console.log(`${name}`);
    }

}
const revon = new Person("Revon");

const personPrototype = {
    greet() {
       console.log(`hello, my name is ${this.name}!`);
    },

};



Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

