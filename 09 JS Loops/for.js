let friendsInvitedForParty = 0;
function getFriendsInvitedForParty(){
    for(let i = 1; i <= 25 ; i++){
        friendsInvitedForParty += 1;
    }
}
console.log(friendsInvitedForParty);

const outer_container = document.querySelector('#party-for');
const innerPara = document.querySelector('#tag-line-for');
let output = document.querySelector('#output-for');
let header = document.querySelector('#party-header-for');

document.addEventListener("DOMContentLoaded", getFriendsInvitedForParty());
innerPara.textContent = "Friends Invited For Party ";
output.textContent = friendsInvitedForParty;