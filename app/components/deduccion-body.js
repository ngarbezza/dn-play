import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    agregarPaso() {
      this.get('deduccion').pasos.pushObject({
        formula: this.get('formula'),
        motivo: this.get('motivo')
      });
      this.set('formula', '');
      this.set('motivo', '');
    }
  }
});
