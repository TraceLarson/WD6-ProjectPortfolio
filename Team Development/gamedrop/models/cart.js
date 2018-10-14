module.exports = function Cart(oldCart) {
    // Object containing the items in the cart
    this.items = oldCart.items;

    // Total num items in cart
    this.totalQty = oldCart.totalQty;

    // Total price of cart
    this.totalPrice = oldCart.totalPrice; 

    // Adds an item to the cart
    this.add = function(item, id) {
        // Store reference to item if it already exists in the cart
        let storedItem = this.items[id];

        // If the item doesn't already exist in the cart
        if (!storedItem) {
            // Create a new one
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        }

        // Increment qty of item
        storedItem.qty++;

        // Update item's price in cart based on passed item's price and qty in cart
        storedItem.price = storedItem.item.price * storedItem.qty;

        // Increment cart qty
        this.totalQty++;

        // Update cart price total
        this.totalPrice += storedItem.price;

    };

    // Outputs cart's item information as an array
    this.generateArray = function() {
        let arr = [];

        for (let id in this.items) {
            arr.push(this.items[id]);
        }

        return arr;
    };
};