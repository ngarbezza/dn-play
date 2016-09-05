import Ember from 'ember';

export function range(params) {
  var result = [];
  for(var i=params[0]; i <= params[1]; ++i){
    result.push(i);
  }
  return result;
}

export default Ember.Helper.helper(range);
