let btnPressed = document.querySelector('button');
let figCaption = document.querySelector('figcaption');
let description = document.querySelector('#description');
let dramaName = document.querySelector('#fig-cap');

function setDramaDescription() {
    switch (figCaption){
        case "Lovers of the Red Sky": {
            let innerText = figCaption.innerText;
            let textContent = dramaName.textContent;
            textContent = innerText;
            console.log(textContent);
            break;
        }
        case "Wedding Impossible":{
            let innerText = figCaption.innerText;
            let textContent = dramaName.textContent;
            textContent = innerText;
            console.log(textContent);
            break;
        }

        default:
            description = "Not Found";





    }
}

btnPressed.addEventListener("click",setDramaDescription())




