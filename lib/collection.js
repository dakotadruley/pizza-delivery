class Collection {
    #items = []; 

    addItem(item) {
      this.#items.push(item);
    }

    hasItem(item) {
      return this.#items.some(ele => item === ele);
    }
    
    removeItem(item) {
      const index = this.#items.indexOf(item);
      this.#items.splice(index, 1);
    }
}

module.exports = Collection;
// addItem and hasItem methonds on this Class
// add a # to make this items array hidden. A private property to this class
