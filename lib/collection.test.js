const Collection = require('./collection.js');

describe('Collection class', () => {
  it('can add', () => {
    const names = new Collection();

    names.addItem('spot');

    expect(names.items).toContainEqual('spot');
  });
});
