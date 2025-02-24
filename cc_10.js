// Task 1 - Created Product Class
// This class represents a product with properties: name, id, price, and stock.
// It includes methods to retrieve product details and update stock when an order is placed.
class Product {
    constructor(name, id, price, stock) {
        if (price < 0 || stock < 0) {
            throw new Error("Price and stock must be non-negative values.");
        }
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) {
        if (quantity > this.stock) {
            console.log("Not enough stock available.");
            return;
        }
        this.stock -= quantity;
    }
}

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());
prod1.updateStock(3);
console.log(prod1.getDetails());

// Task 2 - Created Order Class
// This class represents an order with properties: orderId, product, quantity, and total price.
// It ensures stock availability before creating an order and updates stock accordingly.
class Order {
    constructor(orderId, product, quantity) {
        if (quantity < 0) {
            throw new Error("Quantity must be a non-negative value.");
        }
        if (product.stock < quantity) {
            console.log("Order cannot be placed due to insufficient stock.");
            return;
        }
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = product.price * quantity;
        product.updateStock(quantity);
    }

    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
}

const order1 = new Order(501, prod1, 2);
if (order1.orderId) console.log(order1.getOrderDetails());
console.log(prod1.getDetails());

// Task 3 - Created Inventory Class
// This class manages a collection of products and allows adding new products to inventory.
// It also provides a method to list all products in inventory.
class Inventory {
    constructor() {
        this.products = [];
        this.orders = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    }
}

const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();

// Task 4 - Implemented Order Management
// Added methods to place an order if stock is available and list all orders.
// Ensures stock validation before processing an order.
Inventory.prototype.placeOrder = function(orderId, product, quantity) {
    if (quantity < 0) {
        console.log("Quantity must be a non-negative value.");
        return;
    }
    if (product.stock >= quantity) {
        const order = new Order(orderId, product, quantity);
        if (order.orderId) this.orders.push(order);
    } else {
        console.log("Insufficient stock to place order.");
    }
};

Inventory.prototype.listOrders = function() {
    this.orders.forEach(order => console.log(order.getOrderDetails()));
};

inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails());

// Task 5 - Implemented Product Restocking
// Added a method to restock a product by increasing its stock level.
// Ensures the product exists before updating stock.
Inventory.prototype.restockProduct = function(productId, quantity) {
    if (quantity < 0) {
        console.log("Restock quantity must be a non-negative value.");
        return;
    }
    const product = this.products.find(p => p.id === productId);
    if (product) {
        product.stock += quantity;
        console.log(`Restocked Product ID: ${productId} with ${quantity} units.`);
    } else {
        console.log("Product not found in inventory.");
    }
};

inventory.restockProduct(101, 5);
console.log(prod1.getDetails());
