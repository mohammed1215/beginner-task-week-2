class Item {
  constructor(parameters) {}

  createItem(name, category, price, stock) {
    return {
      name,
      category,
      price,
      stock,
      updateStock: function (newStock) {
        this.stock = newStock
      },
      applyDiscount: function (discount) {
        this.price = this.price - (discount / 100) * this.price
      },
    }
  }
}

class Inventory {
  constructor() {
    this.array = []
  }

  addItem(item) {
    this.array.push(item)
  }

  removeItem(itemName) {
    this.array = this.array.filter((item) => item.name !== itemName)
  }

  getItem(itemName) {
    return this.array.find((item) => item === itemName)
  }

  filterItems(predicate) {
    let found = this.array.filter(predicate)
    return found
  }
}

let item1 = new Item().createItem("carrot", "vegetables", 10)
let item2 = new Item().createItem("apple", "fruits", 5, 30)
let item3 = new Item().createItem("banana", "fruits", 2, 15)

let inventory = new Inventory()

console.log("inventory items before adding", inventory.array)

inventory.addItem(item1)
inventory.addItem(item2)
inventory.addItem(item3)

console.log("inventory items after adding", inventory.array)

console.log(item1)
item1.updateStock(10)
item1.applyDiscount(50)

console.log("item 1 after updating applying discount", item1)

let foundItems = inventory.filterItems(
  (item) =>
    item.stock !== undefined ||
    item.stock < 20 ||
    item.category === "vegetables"
)

console.log("found items", foundItems)

inventory.removeItem("carrot")

console.log("inventory after removing item", inventory.array)
