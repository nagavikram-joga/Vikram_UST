// Define the Product object structure
class Product {
  constructor(name, price, quantity, category) {
    if (typeof name !== "string") throw new Error("Name must be a string");
    if (typeof category !== "string")
      throw new Error("Category must be a string");
    if (typeof price !== "number" || price < 0)
      throw new Error("Price must be a non-negative number");
    if (typeof quantity !== "number" || quantity < 0)
      throw new Error("Quantity must be a non-negative number");

    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
  }

  // Check product availability
  isAvailable() {
    return this.quantity > 0;
  }
}

// Inventory Management Class
class Inventory {
  constructor() {
    this.products = [];
  }

  // Add a new product to the inventory
  addProduct(product) {
    if (!(product instanceof Product))
      throw new Error("Invalid product format");
    this.products.push(product);
    console.log(`${product.name} has been added to the inventory.`);
  }

  // Find and display specific product(s) based on keyword
  findProduct(keyword) {
    const result = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.category.toLowerCase().includes(keyword.toLowerCase())
    );

    if (result.length === 0) {
      console.log("No products found.");
    } else {
      console.log("Search Results:");
      result.forEach((product) =>
        console.log(this.displayProductDetails(product))
      );
    }
  }

  // Display a product's details
  displayProductDetails(product) {
    return `Name: ${product.name}, Price: $${product.price.toFixed(
      2
    )}, Quantity: ${product.quantity}, Category: ${
      product.category
    }, Available: ${product.isAvailable()}`;
  }

  // Compare two products by price and quantity
  compareProducts(product1, product2) {
    const priceComparison =
      product1.price > product2.price
        ? `${product1.name} is more expensive.`
        : `${product2.name} is more expensive.`;
    const quantityComparison =
      product1.quantity > product2.quantity
        ? `${product1.name} has more quantity.`
        : `${product2.name} has more quantity.`;
    return `${priceComparison}\n${quantityComparison}`;
  }

  // Calculate the total value of inventory for a specific category
  calculateCategoryValue(category) {
    const totalValue = this.products
      .filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
      .reduce((acc, product) => acc + product.price * product.quantity, 0);
    return `Total value of ${category} category: $${totalValue.toFixed(2)}`;
  }

  // Display all products
  displayAllProducts() {
    if (this.products.length === 0) {
      console.log("No products in the inventory.");
    } else {
      console.log("Inventory List:");
      this.products.forEach((product) =>
        console.log(this.displayProductDetails(product))
      );
    }
  }
}

// Example Usage

// Initialize inventory
const inventory = new Inventory();

// Adding products to inventory
try {
  inventory.addProduct(new Product("Laptop", 1000, 10, "Electronics"));
  inventory.addProduct(new Product("Smartphone", 700, 25, "Electronics"));
  inventory.addProduct(new Product("Coffee Maker", 150, 15, "Home Appliances"));
} catch (error) {
  console.log(error.message);
}

// Display all products
inventory.displayAllProducts();

// Search for products by keyword
inventory.findProduct("Smartphone");

// Compare two products
console.log(
  inventory.compareProducts(inventory.products[0], inventory.products[1])
);

// Calculate the total value of the Electronics category
console.log(inventory.calculateCategoryValue("Electronics"));
