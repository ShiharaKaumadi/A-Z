const person = {
name : {
    firstName : "Lily",
    middleName : "Jeogiana",
    secondName : "Holt"
},
    location : {
    state: "Homer Street Marylebone",
    city : "London",
    country: "United Kindom"
    }
}

console.log(person.name.middleName);
//console.log(person.["name"].["middleName"]);//not working
console.log(person.location.state);
//console.log(person.["location"].["state"]);//not working
console.log(person.location);
//console.log(person.["location"]);//not working
console.log(person.name);
console.log(person);

//output
/*Jeogiana
Homer Street Marylebone
{
    state: 'Homer Street Marylebone',
        city: 'London',
    country: 'United Kindom'
}
{ firstName: 'Lily', middleName: 'Jeogiana', secondName: 'Holt' }
{
    name: { firstName: 'Lily', middleName: 'Jeogiana', secondName: 'Holt' },
    location: {
        state: 'Homer Street Marylebone',
            city: 'London',
            country: 'United Kindom'
    }
}*/