const Collection = require('./collection.js');

describe('Collection class', () => {
  it('can add', () => {
    const collection = new Collection();

    collection.addItem('spot');

    expect(collection.collection).toContainEqual('spot');
  });
});
