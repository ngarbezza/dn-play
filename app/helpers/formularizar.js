import Ember from 'ember';

export function formularizar(texto) {
  return texto
    .replace(/not/g, '¬')
    .replace(/or/g, '⋁')
    .replace(/then/g, '→')
    .replace(/and/g, '⋀');
}

export default Ember.Helper.helper(formularizar);
