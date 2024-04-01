const outer_container = document.querySelector('#party');
const innerPara = document.querySelector('#tag-line');
let output = document.querySelector('#output');
let header = document.querySelector('#party-header');
let friendsInvitedForParty = 0;
function getFriendsInvitedForParty(){
    while(friendsInvitedForParty<15){
        friendsInvitedForParty = friendsInvitedForParty +1
    }
}

document.addEventListener("DOMContentLoaded", getFriendsInvitedForParty());
innerPara.textContent = "Friends Invited For Party ";
output.textContent = friendsInvitedForParty;






