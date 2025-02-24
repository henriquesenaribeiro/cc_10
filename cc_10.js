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
