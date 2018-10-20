const merge = require('../index');
const sequelize = require('sequelize');

test('merges the order property', () => {
  const target = {
    order: [['id', 'asc']],
    target: 'target'
  }
  const source1 = {
    order: [['name', 'desc'], ['id', 'desc']],
    source: 'source1'
  }  
  const source2 = {
    order: [['name', 'desc'], ['type', 'desc']],
    source: 'source2'
  }
  const expected = {
    source: 'source2',
    target: 'target',
    order: [['id', 'desc'], ['name', 'desc'], ['type', 'desc']]
  }
  const merged = merge(target, source1, source2)
  expect(merged).toEqual(expected)
})