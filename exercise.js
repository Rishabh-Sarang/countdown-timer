function creatProduct(itemName, price, dicount, itemcode){
    return {
        itemName: itemName,
        price: price,
        dicount: dicount,
        itemcode: itemcode,
        disValue(){
            console.log((this.price*this.dicount)/100);
        }
    }
}

function Product(name,price,code,dis){
    this.itemName=name;
    this.price=price;
    this.dicount=dis;
    this.itemcode=code;
    this.disValue = function(){
        return price*this.dicount/100;
    }
}

const product_1 = new Product('asdf',11200,35,123);
product_1.disValue(product_1.price,product_1.dicount);