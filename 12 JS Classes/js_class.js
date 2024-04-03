class OOPRealWorldExamples{
    constructor(encapsulation, inheritance, abstraction, polymorphism) {
        this._encapsulation = encapsulation;
        this._inheritance = inheritance;
        this._abstraction = abstraction;
        this._polymorphism = polymorphism;
    }
    expressRealWordExamples(){
        console.log(`Encapsulation : Capsule`)
        console.log(`Inheritance : Genes from Parents `)
        console.log(`Abstraction : implementation of Car Engine`)
        console.log(`Polimorphism : You can be boy, son of your parents, passenger in train, employee at company`)
    }

    get encapsulation() {
        return this._encapsulation;
    }

    set encapsulation(value) {
        this._encapsulation = value;
    }

    get inheritance() {
        return this._inheritance;
    }

    set inheritance(value) {
        this._inheritance = value;
    }

    get abstraction() {
        return this._abstraction;
    }

    set abstraction(value) {
        this._abstraction = value;
    }

    get polymorphism() {
        return this._polymorphism;
    }

    set polymorphism(value) {
        this._polymorphism = value;
    }

    get polimorphism() {
        return this._polimorphism;
    }

    set polimorphism(value) {
        this._polimorphism = value;
    }

}

let example = new OOPRealWorldExamples();
example.encapsulation = `Encapsulation is about wrap data into single bundle and give validation level protection to data`;
example.inheritance = 'Inherit properties and behaviours from parent component to child component';
example.abstraction = 'Abstraction is about hiding the implementation of functionality';
example.polymorphism = `Polimorphism is single unit but many forms`;


console.log(example); //Answer 👇
/*
OOPRealWorldExamples {
    _encapsulation:'Encapsulation is about wrap data into single bundle and give validation level protection to data',
        _inheritance: 'Inherit properties and behaviours from parent component to child component',
        _abstraction: 'Abstraction is about hiding the implementation of functionality',
        _polymorphism: 'Polimorphism is single unit but many forms'
}
*/
example.expressRealWordExamples();
/*
Encapsulation : Capsule
Inheritance : Genes from Parents
Abstraction : implementation of Car Engine
Polimorphism : You can be boy, son of your parents, passenger in train, employee at company
*/



