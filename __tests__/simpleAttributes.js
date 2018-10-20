const merge = require('../index');

test('merges simple attributes', () => {
  const target = {
    target: 'target'
  }
  const source1 = {
    source1: 'source1'
  }
  const source2 = {
    source2: 'source2',
    source1: 'source2'
  }
  const expected = {
    source1: 'source2',
    source2: 'source2',
    target: 'target',
  }
  const merged = merge(target, source1, source2)
  expect(merged).toEqual(expected)
})