let iceCreamRate = document.querySelector('.ice-cream-rate');
let rateText = iceCreamRate.innerText;
console.log("Ice cream: " + rateText);
let iceText = rateText.length;
console.log(iceText);

let iceAttr = document.querySelector('#ice');
let iceContent = iceAttr.querySelector('#choice1');
iceContent.textContent = `${iceText} ratings 😍`;

let chocoRate = document.querySelector('.chocolate-rate');
let chocoRateText = chocoRate.innerText;
console.log("Chocolate: " + chocoRateText);
let chocoText = chocoRateText.length;
console.log(chocoText);

let answer = document.querySelector('#answer');
let result = document.querySelector('#result');

if (iceText > chocoText) {
    console.log(`Ice cream has ${iceText} rate`);
    result.textContent = `Ice cream has ${iceText} rate`;
} else {
    console.log(`Chocolate has ${chocoText} rate`);
    result.textContent = `Chocolate has ${iceText} rate`;
}

let chocoAttr = document.querySelector('#choco');
let chocoContent = chocoAttr.querySelector('#choice2');
chocoContent.textContent = `${chocoText} ratings 😍`;


let rs = document.getElementById('rs');

function printResult() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let status = document.getElementById('status').value;
    let ageText = document.getElementById('age').value;
    document.getElementById('rs').innerHTML = ageText;
    if (ageText > 30) {
        rs.textContent = `Age: ${ageText}  ${firstName}  Welcome 😍`;
    } else {
        rs.textContent = `Age:${ageText} ${firstName} 😐 No Way`;
    }
}






