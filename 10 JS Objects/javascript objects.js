const person = {
    name : "Derick",
    age: 100,
    stillAlive: false,
    mostfavsong(){
        console.log("La la la bla bla bla")
    }
}
console.log(person.name);
console.log(person["name"]);
//console.log(person["mostfavsong"]);
console.log(person.mostfavsong());
console.log(person["age"])

//output
/*
console.log(person.name); //Sumana
console.log(person["name"]); //Sumana
//console.log(person["mostfavsong"]);// [Function : mostfavsong]
console.log(person.mostfavsong());//la la la bla bla bla
                                    //undefined
console.log(person["age"])//100
*/
