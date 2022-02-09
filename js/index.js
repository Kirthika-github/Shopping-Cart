const shoppingCart = new ShoppingCart(0);
shoppingCart.render();

const addItem = document.querySelector("#addHeadphoneItem1");

const itemName = document.querySelector("#headphoneItem1Name");
const itemPrice = document.querySelector("#headphoneItem1Price");
const itemQuantity = document.querySelector("#headphoneItem1Quantity");

addItem.addEventListener("click", (event) => {
    
shoppingCart.addToCart(itemName.innerHTML, itemPrice.innerHTML, itemQuantity.value);


})


const viewCart = document.querySelector("#viewCartButton");

viewCart.addEventListener("click", (event) => {

    shoppingCart.render();
    
    
    })

    const deleteItem = document.querySelector("#cart-list");
    deleteItem.addEventListener("click",(event) => {
        const itemToDelete=shoppingCart.getItemById(event.target.id);
        shoppingCart.cart.splice(shoppingCart.cart.indexOf(itemToDelete))
        shoppingCart.render();
     
    })


