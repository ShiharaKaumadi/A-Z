class Tree{
    constructor(water, soil, sunlight) {
        this.water = water;
        this.soil = soil;
        this.sunlight = sunlight;
    }
    plant(){
    }
    giveO2(){
    }
    blossom(){
    }
    getProtypeOf(){
        let prototypeOf = Object.getPrototypeOf(this);
        console.log(prototypeOf);
    }
}
class Plant extends Tree{
    constructor(space) {
        super();
        this.space = space;
    }
    goRound(){
    }
    keepGrowing(){
    }
    blossom() {
        super.blossom();
    }
}
let tree = new Tree(true,'soil',true);
let plant = new Plant('yard');
let prototypeOf1 = Object.getPrototypeOf(tree);
let prototypeOf1_blossom = Object.getPrototypeOf(tree).blossom();
let prototypeOf2 = Object.getPrototypeOf(plant);
let prototypeOf2_keepGrowing = Object.getPrototypeOf(plant).keepGrowing();
console.log(prototypeOf1);
console.log(prototypeOf2);
console.log(prototypeOf1_blossom);
console.log(prototypeOf2_keepGrowing);


//==============================output=====================================
/*
Object
blossom
    :
    ƒ blossom()
constructor
    :
    class Tree
getProtypeOf
    :
    ƒ getProtypeOf()
giveO2
    :
    ƒ giveO2()
plant
    :
    ƒ plant()
    [[Prototype]]
:
Object
*/

/*Tree
blossom
:
ƒ blossom()
constructor
:
class Plant
goRound
:
ƒ goRound()
keepGrowing
:
ƒ keepGrowing()
[[Prototype]]
:
Object*/

//undefined
//undefined