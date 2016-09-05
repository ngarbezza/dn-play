import Ember from 'ember';

export default Ember.Component.extend({
  cantidadDePasos: Ember.computed.alias('deduccion.pasos.length'),
  formula: '',
  motivo: 'premisa',
  actions: {
    agregarPaso() {
      var motivo = this.get('motivo');
      if (motivo === "regla") {
        motivo = `${this.get('nombreRegla')} ${this.get('parametro1')}, ${this.get('parametro2')}, ${this.get('parametro3')}`;
      }
      this.get('deduccion').pasos.pushObject({
        formula: this.get('formula'),
        motivo: motivo
      });
      this.set('formula', '');
    }
  }
});
