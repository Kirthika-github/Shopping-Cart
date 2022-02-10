// creates cart Html
const createCartHtml = (id, name, price, quantity, itemTotal) => {
    const cartHtml =`<tr>
        <th scope="row">${name}</th>
        <td>${price}</td>
        <td>${quantity}</td>
        <td>$ ${itemTotal}</td>
        <td>
        <button class="deleteItem" type="submit" id="${id}">    
        Remove
        </button>
        </td>
      </tr>`

  return cartHtml;
}

//Finds the total cost of the item with quantity
const findItemTotal = (price, quantity) => {
    return price*quantity;
}

//Shopping cart class 
class ShoppingCart{
    constructor(itemId = 0){
        this.cart = [];
        this.itemId = itemId;
    }

    //adds a new item to the cart list array
    addToCart(name, price, quantity){
        this.itemId++;
        const newItem = {
            id: this.itemId,
            name: name,
            price: price,
            quantity: quantity
        };
        this.cart.push(newItem);
    }

    //calculates thge total quatity of an item purchased
    calculateQuantity(itemName){
      let count = 0;
      for (let i = 0; i < this.cart.length; i++) {
        if (String(this.cart[i].name) == String(itemName)) {
          count = count + Number(this.cart[i].quantity);
        }
      }
      return count;
    }

    //gets an item object with a given id
    getItemById(itemId){
        let foundItem;
        for(let i=0; i<this.cart.length; i++){
          const item = this.cart[i];
          if(item.id==itemId){
            foundItem = item;
          }
        }
        return foundItem;
      }
      

  //updates all the current item details in the cart
  render() {
    let cartHtmlList = [];
    //Form the cart table header
    const cartTitle = `<table class="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
        <tr>
               <th scope="row"></th>
               <td></td>
               <td></td>
               <td></td>
             </tr>`;

    cartHtmlList.push(cartTitle);
    //checks for number of items added and renders accordingly
    if (this.cart.length == 0) {
      const cartHtml = `<tr>
            <td>Your cart is empty</td>
          </tr>`
      cartHtmlList.push(cartHtml);
    } else {
      //calculates and renders the total amount purchased
      let total = 0;
      for (let i = 0; i < this.cart.length; i++) {
        const item = this.cart[i];
        const itemTotal = findItemTotal(Number(String(item.price).replace("$", "").trim()), Number(item.quantity))
        total = total + itemTotal;
        const cartHtml = createCartHtml(item.id, item.name, item.price, item.quantity, itemTotal);
        cartHtmlList.push(cartHtml);
      }
      const totalHtml = `<tr>
               <th scope="row"></th>
               <td></td>
               <td><b>Total</b></td>
               <td>$ ${total}</td>
             </tr>`;
      cartHtmlList.push(totalHtml);
    }
    //adds the final html tags to complete the table
    const cartFooter = ` </tbody>
         </table>`;
    cartHtmlList.push(cartFooter);


    //Keeps every html element in a new line
    const cartHtmlList_updated = cartHtmlList.join("\n");

    //updates the cart with item details
    const cartList = document.querySelector("#cart-list");
    cartList.innerHTML = cartHtmlList_updated;
  }



}

