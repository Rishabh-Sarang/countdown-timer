class Product{
    constructor(name,price,dis,id){
        this.itemName=name;
        this.price=price;
        this.dicount=dis;
        this.itemcode=id;
    }
}

class Furniture extends Product{
    constructor(name,price,dis,id){
        super(name,price,dis,id)
    }

    getname(){
        return this.name;
    }
}

let pencil = new Product('asdf',23,3,'sdaf');

const Product1 = class Product{
    constructor(name,price,dis,id){
        this.itemName=name;
        this.price=price;
        this.dicount=dis;
        this.itemcode=id;
    }
    get disvalue(){
        return this.dicount;
    }
    set disvalue(n){
        this.dicount=n;
    }
}
