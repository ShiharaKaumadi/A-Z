const select = document.querySelector('select');
const para = document.querySelector('p');
para.textContent = "Guess My Feelings!!"
select.addEventListener("change", guessMyFeeling);
function guessMyFeeling() {
    const choice = select.value;
    if (choice==="happy"){
      para.textContent = " I feel like my heart could burst with joy!";
    }else if(choice === "sad"){
       para.textContent = "I'm just not in the mood.";
    }else if(choice === "angry"){
       para.textContent = "I'm sick and tired of hiding my anger, and I'm not going to tolerate it anymore.";
    }else if(choice === "thinking"){
       para.textContent = "What the hell is going on man!!";
    }else if(choice === "partying"){
       para.textContent = "Woo-hoo! It's party time! Let's get this celebration started!!";
    }else{
       para.textContent = "Guess My Feelings!!";
    }
}