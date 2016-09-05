import { formularizar } from 'dn-play/helpers/formularizar';
import { module, test } from 'qunit';

module('Unit | Helper | formularizar');

test('reemplaza los not', function(assert) {
  let result = formularizar("not q");
  assert.strictEqual(result, "¬ q");
});

test('reemplaza los and', function(assert) {
  let result = formularizar("p and q");
  assert.strictEqual(result, "p ⋀ q");
});

test('reemplaza los or', function(assert) {
  let result = formularizar("p or q");
  assert.strictEqual(result, "p ⋁ q");
});

test('reemplaza los then', function(assert) {
  let result = formularizar("p then q");
  assert.strictEqual(result, "p → q");
});

test('reemplaza todas las ocurrencias de los operadores', function(assert) {
  let result = formularizar("not q and (p or (q then not r))");
  assert.strictEqual(result, "¬ q ⋀ (p ⋁ (q → ¬ r))");
});
