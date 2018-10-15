module.exports = function Cart(oldCart) {
    // Object containing the items in the cart
    this.items = oldCart.items || {};

    // Total num items in cart
    this.totalQty = oldCart.totalQty || 0;

    // Total price of cart
    this.totalPrice = oldCart.totalPrice || 0; 

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

        // Increase cart's price by total aggregate price of item
        this.totalPrice += storedItem.item.price;

    };

    // Reduces the qty of an item in the cart by one
    this.reduceByOne = function(id) {
        // Decrement item qty
        this.items[id].qty--;

        // Also update the price of item group in cart
        this.items[id].price -= this.items[id].item.price;

        // Update cart qty and price
        this.totalQty--;
        this.totalPrice -= this.items[id].item.price;

        // Check if item qty is zero (or less)
        if (this.items[id].qty <= 0) {
            // Remove it since it's not being purchased
            delete this.items[id];
        }
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