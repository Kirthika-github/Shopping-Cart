//creates an instance of the ShoppingCart class
const shoppingCart = new ShoppingCart(0);
//makes sure the cart is displayed with correct details
//shoppingCart.render();

//NOTE: handles just first item from shopping webpage for now. 
//will be implementing this functionality to all the other items using class list 
const addItem = document.querySelector("#addHeadphoneItem1");
const itemName = document.querySelector("#headphoneItem1Name");
const itemPrice = document.querySelector("#headphoneItem1Price");
const itemQuantity = document.querySelector("#headphoneItem1Quantity");

//Listens for a button click event ADD TO CART
addItem.addEventListener("click", (event) => {
    //adds a new item to the cart
    shoppingCart.addToCart(itemName.innerHTML, itemPrice.innerHTML, itemQuantity.value);
    //updates the quantity selected for each item based on their unique name
    const quantity = document.querySelector("#quantityAdded");
    let count = shoppingCart.calculateQuantity(itemName.innerHTML)
    quantity.innerHTML = "Quantity in cart: " + String(count);
    //renders the updated cart
    shoppingCart.render();

})

//renders the updated cart
const viewCart = document.querySelector("#viewCartButton");
viewCart.addEventListener("click", (event) => {
    shoppingCart.render();
})

const deleteItem = document.querySelector("#cart-list");
//listens for click event from the cart list
deleteItem.addEventListener("click", (event) => {
    //deletes the selected item and updates the quantity added displayed on each item
    const itemToDelete = shoppingCart.getItemById(event.target.id);
    shoppingCart.cart.splice(shoppingCart.cart.indexOf(itemToDelete), 1)
    shoppingCart.render();
    const quantity = document.querySelector("#quantityAdded");
    let count = shoppingCart.calculateQuantity(itemName.innerHTML)
    quantity.innerHTML = "Quantity in cart: " + String(count);

})


