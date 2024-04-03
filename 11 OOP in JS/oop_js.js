let laptop ={
    brand: {
        name: ['asus','acer','dell','Lenovo'],
    },
    price:{
        asusPrice: 325000,
        acerPrice: 259000,
        dellPrice: 160000,
        lenovoPrice: 360000,
    },
    soldCount: {
        asus:150,
        acer:30,
        dell: 10,
        lenovo: 15,
    },
    income(){
        let asusIncome = laptop.soldCount.asus* laptop.price.asusPrice;
        let acerIncome = this.soldCount.acer * this.price.acerPrice;
        let dellIncome = this.soldCount.dell * this.price.dellPrice;
        let lenovoIncome = this.soldCount.lenovo * this.price.lenovoPrice;
        let total = acerIncome + asusIncome + dellIncome + lenovoIncome;
        console.log("Total Income: "+total);
    }
}
laptop.income();