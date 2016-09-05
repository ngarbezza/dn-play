import { range } from 'dn-play/helpers/range';
import { module, test } from 'qunit';

module('Unit | Helper | range');

test('returns a list of numbers including start and end', function(assert) {
  assert.deepEqual(range([1, 5]), [1, 2, 3, 4, 5]);
});

test('is empty when start is greater than end', function(assert) {
  assert.deepEqual(range([1, 0]), []);
});
