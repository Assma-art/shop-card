class Product {
  constructor(id, Name, Price) {
    this.id = id;
    this.Name = Name;
    this.Price = Price;
  }
}

class ShoppingCartItem {
  constructor(product, qte) {
    this.product = product;
    this.qte = qte;
  }
  totalPriceItem() {
    return this.product.price * this.qte;
  }
}

class ShoppingCart {
  constructor() {
    this.cart = [];
  }

  addItem(item) {
    this.cart = [...item];
    console.log(this.cart);
  }
  total() {
   let total = cart.reduce((acc, curr) => acc + curr.calculateTotal(), 0);
  }
  
  removedItem(item) {
    const index = this.cart.findIndex((elt) => elt.product.id.toLowerCase() === id.toLowerCase())
    if (index !== -1) {
      const removedItem = this.cart.splice(index, 1)
    
      console.log(`removed:${removedItem[0].product.Name}`);
    }
    else {
      console.log("Item was not found");
      
    }
  }
  DisplayCartItems(item) {
    this.cart.forEach((elt,i)=>console.log((`${i+1}/${elt.product.name} | ${elt.product.proce} - ${elt.qte}`)));
    
  }
}
