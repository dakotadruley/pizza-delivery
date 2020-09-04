class Collection {
    items = [];

    addItem(item) {
      this.items.push(item);
    }

    hasItem(item) {
      return this.items.some(ele => item === ele);
    }

}

module.exports = Collection;
// addItem and hasItem methonds on this Class
