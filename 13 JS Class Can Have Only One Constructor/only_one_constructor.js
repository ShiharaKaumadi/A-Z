//A class can have only one constructor
class BakeryProducts{
    constructor(name, price, weight, qty) {
        this._name = name;
        this._price = price;
        this._weight = weight;
        this._qty = qty;
    }

    //======cannot make more than one constructor===========
   /* constructor(name, price) {
        this._name = name;
        this._price = price;
    }*/

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }
}
//If we extend our class to parent class the constructor first call its parent’s constructor by using super().
class Bun extends BakeryProducts{
    constructor(name, price, weight, qty,availability, qtyOnHand) {
        super();
        this._name = name;
        this._price = price;
        this._weight = weight;
        this._availability = availability;
        this._qty = qty;
        this._qtyOnHand = qtyOnHand;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get availability() {
        return this._availability;
    }

    set availability(value) {
        this._availability = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get qtyOnHand() {
        return this._qtyOnHand;
    }

    set qtyOnHand(value) {
        this._qtyOnHand = value;
    }

    giveCustomerDiscounts(){
        if(this.qty>10){
            console.log(`Discount Amount : 10%`);
            console.log(this.qty);
        }else{
            console.log(`Try next Time`);
            console.log(this.qty);
        }
    }

    getBunDetails(){
        return `Name: ${this.name} , Price: ${this.price} , Weight : ${this.weight} , Qty : ${this.qty} , Availability : ${this.availability} , QtyOnHAnd : ${this.qtyOnHand}`
    }
}

let item = new BakeryProducts('Chocalate Cake',450,`1 kg`, 1);
let bun = new Bun('Chicken Bun',120,`200 g`,6, true,25);
console.log(item.name);
console.log(bun.availability);
console.log(bun.name);
console.log(bun.giveCustomerDiscounts());
console.log(bun.getBunDetails());
