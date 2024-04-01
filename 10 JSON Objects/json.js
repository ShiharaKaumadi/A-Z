let node = document.createElement('div');
let div_title = document.createElement('h1')
let name = document.createElement('p');
let age = document.createElement('p');
let color = document.createElement('p');
let friend = document.createElement('p');
node.append(div_title,name,age,color,friend);

let pet = {
    pet_name: 'Timmy',
    age: 5,
    color: 'brown',
    always_sleepy : true,
    friend : ['Tommy', 'Brown', 'Tinky'],
    displayDetails() {
        let style = "width:550px;height:300px;padding:15px 15px 15px 15px;margin:auto;display:block;background-color:orange;color:white;border:3px solid ivory; border-radius:12px;justify-items:center;align-content:center;text-align:justify;";
        let p_style = "font-size: 20px;font-weight:bold;padding:8px 8px 8px 8px;margin:0px 45px;display:flex;color:white;justify-items:center;align-content:space-around;text-align:justify;";
        let h1_style = "font-size: 30px;font-weight:bold;color:red;text-align:center;"
        div_title.style = h1_style;
        node.style = style;
        name.style =p_style;
        age.style = p_style;
        color.style = p_style;
        friend.style =p_style;

        let pet_friend = this.friend.map(friend=>{return ` ` +friend });
        div_title.textContent = `My Pet`;
        div_title = h1_style;
        name.textContent = `My pet's name is ${this.pet_name}.`
        age.textContent  =  `${this.pet_name} is ${this.age} years old.`
        color.textContent = `He is ${this.color} in color.`
        friend.textContent = `My pet has ${this.friend.length} friends named: ${pet_friend}.`;
        console.log(node.textContent);
        document.body.append(node);
    }
}

pet.displayDetails();