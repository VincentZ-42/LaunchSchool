class Item {
  constructor(name, category, quantity) {
    this.name = name;
    this.category = category;
    this.quantity = quantity;
  }
}

let ItemCreator = {
  validateInfo(item) {
    // Destructures object into variables
    let {name, category, quantity} = item;

    // gets rid of all spaces and checks length of name
    name = name.replace(/\s/g, '');
    if (name.length < 5) return { notValid: true };

    // checks if category meets requirements
    if (category.length < 5 || category.includes(" ")) return { notValid: true };

    // checks if quantity meets requirements
    if (quantity < 0 || typeof(quantity) !== 'number') return { notValid: true };

    this.generateSKU(item);

    return { notValid: false };
  },

  generateSKU(item) {
    let sku = '';
    let { name, category, quantity } = item;
    for (let i = 0; sku.length < 3; i++) {
      let char = name[i].toUpperCase();
      if (char >= 'A' & char <= 'Z') {
        sku += char;
      }
    }
    for (let i = 0; sku.length < 5; i++) {
      let char = category[i].toUpperCase();
      if (char >= 'A' & char <= 'Z') {
        sku += char;
      }
    }
    item.sku = sku;
  }  
}

let ItemManager = {
  items: [],

  create(name, category, quantity) {
    let item = new Item(name, category, quantity);
    let check = ItemCreator.validateInfo(item);
    if (check.notValid === true) return false;
    this.items.push(item);
  },

  update(sku, obj) {
    let itemIndex = this.findItemIndex(sku);
    let item = this.items[itemIndex];
    for (const key in obj) {
      item[key] = obj[key];
    }
  },

  delete(sku) {
    const itemIndex = this.findItemIndex(sku);
    this.items.splice(itemIndex, 1);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0).map(item => item.name).join(',');
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },

  findItemIndex(sku) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].sku === sku) {
        return i;
      }
    }
  }
}

let ReportManager = {
  init(ItemManager) {
    this.items = ItemManager;
  },

  createReporter(sku) {
    let index = this.items.findItemIndex(sku);
    let item = this.items.items[index];
    return {
      itemInfo() {
        for (const key in item) {
          console.log(`${key}: ${item[key]}`);
        }
      }
    };
  },
  
  reportInStock() {
    console.log(this.items.inStock());
  }
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10