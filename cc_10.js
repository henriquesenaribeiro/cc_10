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

