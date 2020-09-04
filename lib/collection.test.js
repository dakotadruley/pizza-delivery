const Collection = require('./collection.js');

describe('Collection class', () => {
  it('can add', () => {
    const names = new Collection();

    names.addItem('spot');

    expect(names.hasItem('spot')).toBeTruthy();
  });

  it('has an item', () => {
    const fruit = new Collection();

    fruit.addItem('apple');
      
    expect(fruit.hasItem('apple')).toBeTruthy();
    expect(fruit.hasItem('orange')).toEqual(false);
  });
});

// toBeTruthy or toEqual(true)
