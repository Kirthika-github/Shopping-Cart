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

const findItemTotal = (price, quantity) => {
    return price*quantity;
}


class ShoppingCart{
    constructor(itemId = 0){
        this.cart = [];
        this.itemId = itemId;
    }

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
      


    render(){
        
        let cartHtmlList = [];

        const cartTitle = `<table class="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>`;

        cartHtmlList.push(cartTitle);
        
        if(this.cart.length==0){
            const cartHtml =`<tr>
            <td>Your cart is empty</td>
          </tr>`
          cartHtmlList.push(cartHtml);
        }else{
            let total = 0;
            for(let i=0;i<this.cart.length;i++){
                const item = this.cart[i];
              
                const itemTotal = findItemTotal(Number(String(item.price).replace("$","").trim()),Number(item.quantity))
                total=total+itemTotal;
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


         const cartFooter =` </tbody>
         </table>`;
         cartHtmlList.push(cartFooter);


        const cartHtmlList_updated = cartHtmlList.join("\n");
       
           const cartList = document.querySelector("#cart-list");
           cartList.innerHTML = cartHtmlList_updated;
         }



}

